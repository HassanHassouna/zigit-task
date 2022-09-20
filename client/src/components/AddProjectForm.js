import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import NativeSelect from "@mui/material/NativeSelect"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import addProjectAction from "../app/actions/addProjectAction"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getIsLoading } from "../app/selectors/viewSelector"
import Loading from "../components/Loading"
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

function AddProjectForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector(getIsLoading)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [projectName, setProjectName] = React.useState("")
  const [projectUrl, setProjectUrl] = React.useState("")
  const [pictureUrl, setPictureUrl] = React.useState("")
  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const handleSubmitProject = () => {
    dispatch(
      addProjectAction({
        projectName,
        projectUrl,
        pictureUrl,
        status,
        endDate,
      })
    )
    if (!isLoading) return <Loading />
    handleClose()
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  const [status, setStatus] = React.useState("Active")
  const [endDate, setEndDate] = React.useState(new Date())

  return (
    <>
      <Button onClick={handleOpen}>Add New Project</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid className="w-1/2" container spacing={3}>
            <Grid xs={6}>
              <TextField
                required
                id="outlined-required"
                label="Project Name"
                fullWidth
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Project URL"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Status
                </InputLabel>
                <NativeSelect
                  defaultValue="Active"
                  value={status}
                  onChange={handleStatusChange}
                  inputProps={{
                    name: "status",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="Active">Active</option>
                  <option value="Finish">Finish</option>
                  <option value="Canceled">Canceled</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12}>
              <TextField
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                fullWidth
                id="outlined-required"
                label="Photo URL"
              />
            </Grid>
            <Grid xs={12}>
              <Button
                onClick={handleSubmitProject}
                fullWidth
                variant="contained"
              >
                Add Project
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
        .css-71wc8y-MuiGrid2-root {
          margin: auto;
        }
      `}</style>
    </>
  )
}

export default AddProjectForm
