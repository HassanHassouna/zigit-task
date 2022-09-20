import axios from "axios"
const BASE_URL = `http://localhost:8000/api/`
const USER = `user/`
const PROJECT = `project/`
const COMMENT = `comment/`

class Api {
  static async getUserByEmailAndPassowrd(email, password) {
    const response = await axios.post(`${BASE_URL}${USER}auth`, {
      email,
      password,
    })
    return response.data.token
  }
  static async getProjects() {
    const response = await axios.get(`${BASE_URL}${PROJECT}`)
    return response.data
  }

  static async getProjectById(id) {
    const response = await axios.get(`${BASE_URL}${PROJECT}${id}`)
    return response.data
  }

  static async addProject(project) {
    const response = await axios.post(`${BASE_URL}${PROJECT}`, project)
    return response.data
  }

  static async addComment(comment) {
    const response = await axios.post(`${BASE_URL}${COMMENT}`, comment)
    return response.data
  }

  static async getCommentsByProjectId(id) {
    const response = await axios.get(`${BASE_URL}${COMMENT}${id}/`)
    return response.data
  }

  static async getComments() {
    const response = await axios.get(`${BASE_URL}${COMMENT}`)
    return response.data
  }
}

export default Api
