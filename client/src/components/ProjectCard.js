import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import AddCommentForm from "../components/AddCommentForm"
import { useSelector } from "react-redux"
import { getIsLoading } from "../app/selectors/viewSelector"
import Loading from "../components/Loading"
export default function ProjectCard({ project, comments }) {
  const isLoading = useSelector(getIsLoading)
  const [showComments, setShowComments] = React.useState(false)
  const [filteredComments, setFilteredComments] = React.useState([])

  const handleShowComments = () => {
    setShowComments(!showComments)
    // filter the comments by the project id
    const filteredComments = comments.filter(
      (comment) => comment.project_id === project.id
    )
    setFilteredComments(filteredComments)
  }

  if (isLoading) return <Loading />
  return (
    <Card
      sx={{
        minWidth: 145,
        minHeight: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="h-80 object-contain flex flex-col justify-center items-center">
        <CardMedia
          component="img"
          image={project.pictureUrl}
          alt="green iguana"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {"Project Name: " + project.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Project Url: " + project.projectUrl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Status: " + project.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"End Date: " + new Date(project.endDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <AddCommentForm project_id={project.id} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleShowComments}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </CardActions>
      {showComments && (
        <div className="flex flex-col items-center">
          {filteredComments.map((comment) => (
            <div key={comment.id}>
              <Typography variant="body2" color="text.secondary">
                {comment.text}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}
