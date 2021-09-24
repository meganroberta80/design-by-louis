import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class BlogPosts extends Component {
    state = {
        blogData: [],
        blogTitle: "",
        blogPost: ""
    }

    componentDidMount() {
        axios.get("http://localhost:4000/blog").then((data) => {
            this.setState({ blogData: data.data })
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { blogTitle, blogPost } = this.state
        const blog = {
            blogTitle,
            blogPost
        }
        console.log(blog)
        axios.post('http://localhost:4000/blog', blog)
            .then((data) => {
                this.setState({ blogData: [...this.state.blogData, data.data] })
                console.log(data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    renderBlog() {
        const blogJSX = this.state.blogData.map((blogObj, idx) => {
            return (
                <Link key={idx} to={`/blog/${blogObj._id}`}>
                    <div>
                        <h2>{blogObj.blogTitle}</h2>
                        <p>{blogObj.blogPost}</p>
                    </div>
                </Link>
            )
        })
        return blogJSX
    }

    render() {
        return (
            <div>
                <main>
                    <h1>Blog Posts</h1>
                    {this.renderBlog()}
                </main>
                <div className="project-form-wrapper">
                    <form className="post-form" onSubmit={this.handleSubmit}>
                        <h3 className="title" >Add A Post!</h3>
                        <br />

                        <div className="input-field">
                            <input className="input" placeholder="Blog Title" type='text' name='blogTitle' value={this.state.blogTitle} onChange={this.handleInputChange}></input>
                        </div>
                        <br />

                        <div className="input-field">
                            <input className="input" placeholder="Blog Post" type='text' name='blogPost' value={this.state.blogPost} onChange={this.handleInputChange}></input>
                        </div>
                        <br />

                        <button className="button-sign" type='submit'>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogPosts;



/*
function BlogPost(props) {
    console.log('Props inside BlogPosts =>', props)
    const title = props.blogTitle.map((t, idx) => {
        return (
        <div className="blog-posts" key={idx}>
            <h3>{t}</h3>
        
        </div>
        )
        
    })

    return (
        <div className="blog-posts">
            {title}
            <br />
            {props.blogText[0]}
        </div>
    )
}

export default BlogPost;
*/