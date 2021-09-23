import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsPage extends Component {
    state = {
        projectData: [],
        projectTitle: "",
        projectImg: ""
    }

    componentDidMount() {
        axios.get("http://localhost:4000/projects").then((data) => {
            this.setState({ projectData: data.data })
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { projectTitle, projectImg } = this.state
        const projects = {
            projectTitle,
            projectImg
        }
        axios.post('http://localhost:4000/projects', projects)
            .then(() => window.location.href = "/projects")
            .catch(err => {
                console.error(err)
            })
    }

    renderProjects() {
        const projectsJSX = this.state.projectData.map((projectObj, idx) => {
            return (
                <Link key={idx} to={`/projects/${projectObj._id}`}>
                    <div>
                        <h2>{projectObj.projectTitle}</h2>
                        <p>{projectObj.projectImg}</p>
                    </div>
                </Link>
            )
        })
        return projectsJSX
    }

    render() {
        return (
            <div>
                <main>
                    <h1>Previous Projects</h1>
                    {this.renderProjects()}
                </main>
                <div className="project-form-wrapper">
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <h3 className="title" >Add A Project!</h3>
                        <br />

                        <div className="input-field">
                            <input className="input" placeholder="Project Title" type='text' name='projectTitle' value={this.state.projectTitle} onChange={this.handleInputChange}></input>
                        </div>
                        <br />

                        <div className="input-field">
                            <input className="input" placeholder="Project Image" type='text' name='projectImg' value={this.state.projectImg} onChange={this.handleInputChange}></input>
                        </div>
                        <br />

                        <button className="button-sign" type='submit'>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;