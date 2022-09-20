import React, { useEffect, useState } from "react"
import AddProjectForm from "../components/AddProjectForm"
import ProjectCard from "../components/ProjectCard"
import Grid from "@mui/material/Unstable_Grid2"
import { useSelector } from "react-redux"
import Loading from "../components/Loading"
import { getIsLoading } from "../app/selectors/viewSelector"
import Api from "../services/api"
function Dashbord() {
  const [projects, setProjects] = useState([])
  const [comments, setComments] = useState([])
  const isLoading = useSelector(getIsLoading)
  // fetching projects and rerendering when adding a new project
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await Api.getProjects()
      setProjects(projects)
    }
    const fetchComments = async () => {
      const comments = await Api.getComments()
      setComments(comments)
    }
    fetchProjects()
    fetchComments()
  }, [])

  console.log("comments:", comments)

  if (isLoading) return <Loading />

  return (
    <div className="h-screen flex flex-col items-center w-full justify-evenly px-10">
      <Grid className="w-3/4 flex justify-between" container spacing={2}>
        {/* needs to filter the comments by the projects */}
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <ProjectCard project={project} comments={comments} />
          </Grid>
        ))}
      </Grid>
      <div className="flex w-3/4 items-center justify-evenly px-10">
        <AddProjectForm />
      </div>
    </div>
  )
}

export default Dashbord

// {projects.map((project) => (

//   <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
//     <ProjectCard project={project} />
//   </Grid>
// ))}
