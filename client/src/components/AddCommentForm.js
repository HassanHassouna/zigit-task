import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import TextField from "@mui/material/TextField"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import addCommentAction from "../app/actions/addCommentAction"
import { useDispatch } from "react-redux"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

function AddCommentForm({ project_id }) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [text, setText] = React.useState("")
  const [photoUrl, setPhotoUrl] = React.useState("")
  const [creationDate, setCreationDate] = React.useState(new Date())

  const handleSubmitComment = () => {
    dispatch(
      addCommentAction({
        text,
        photoUrl,
        creationDate,
        project_id,
      })
    )
    handleClose()
  }

  console.log("project_id:", project_id)

  return (
    <>
      <Button onClick={handleOpen}>Add New Comment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid className="w-1/2" container spacing={3}>
            <Grid xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Creation Date"
                  value={creationDate}
                  onChange={(newValue) => {
                    setCreationDate(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={6}>
              <TextField
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                fullWidth
                id="outlined-required"
                label="Photo URL"
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Please enter your comment"
                fullWidth
                multiline
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>
            <Grid xs={12}>
              <Button
                onClick={handleSubmitComment}
                fullWidth
                variant="contained"
              >
                Add Comment
              </Button>
            </Grid>
            <style jsx="true">{`
              .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
                width: 100%;
              }
            `}</style>
          </Grid>
        </Box>
      </Modal>
      <style jsx="true">{`
        .css-1etvr87-MuiGrid2-root {
          margin: auto;
        }
      `}</style>
    </>
  )
}

export default AddCommentForm
