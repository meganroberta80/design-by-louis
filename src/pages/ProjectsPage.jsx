import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Widget } from "@uploadcare/react-widget";

import design4 from '../img/design4.jpeg'
import design5 from '../img/design5.jpeg'

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
            .then((data) => {
                this.setState({ projectData: [...this.state.projectData, data.data] })
                console.log(data)
            })
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
            <div className="projectsPage">
                <main>
                    <h1>Previous Projects</h1>
                    {this.renderProjects()}
                </main>
                <div className="exampleProjects">
                <img src={design4} className="design" alt="Interior design"></img>
                <img src={design5} className="design" alt="Interior design"></img>
                </div>
                <div className="project-form-wrapper">
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <h3 className="title" ></h3>
                        <br />

                        <div className="input-field">
                            <input className="input" placeholder="Project Title" type='text' name='projectTitle' value={this.state.projectTitle} onChange={this.handleInputChange}></input>
                        </div>
                        <br />

                        <div>
                            <label htmlFor='file'></label>{' '}
                            <Widget publicKey='f86e0b7d379d6636300dY' id='file' />
                        </div>
                        <br />

                        <button className="btn" type='submit'>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;
