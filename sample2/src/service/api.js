import axios from 'axios'


const API = "https://66e526fe5cc7f9b6273c6ceb.mockapi.io"

const getProjects = () => axios.get(`${API}/Projects`)
const getProjectbyID = (id) => axios.get(`${API}/Projects/${id}`)
const addProject = (projectdata) => axios.post(`${API}/Projects`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/Projects/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/Projects/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }