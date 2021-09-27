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
            <div className="blogPosts">
                <main>
                    <h1>Blog Posts</h1>
                    {this.renderBlog()}
                </main>
                <div className="exampleBlogPosts">
                    <h2>How to Change a Lightbulb</h2>
                    <p>His autem everti temporibus ea. Dico veritus comprehensam sed ea, prompta consequuntur usu cu. Nec ridens impetus cu. Ex sed nihil aliquid molestiae. Has alii erant partiendo no, cum ne vidit summo primis.
                    <br />
                    Invidunt reprehendunt nam no. Ferri reque petentium mea an, vim in natum salutandi voluptatum. Nam habeo fugit assueverit id, vivendo sensibus per eu. Ex eos malis habemus iracundia, sea solum erant causae ex, laudem graecis his an. Pri ex quis legimus.</p>

                    <h2>How to Paint Cabinets</h2>
                    <p>Altera invidunt mediocrem has te, tritani nostrud blandit vix ea. Meis quas reformidans in mea. Cum dolore altera verear no, sit pertinax atomorum abhorreant et. Perfecto interesset id usu. Eu melius intellegam mei, definiebas reprehendunt nec an.
                    <br />
                    Te cum epicuri rationibus quaerendum, habeo periculis ei cum, ea doming delenit per. Et cibo placerat tractatos mea. In vim lorem meliore senserit. Nec nisl voluptua delicata ei, te quem iusto urbanitas pro. Aperiri constituto ne duo, sea probo saepe ne. Oportere consectetuer eu nam.</p>
                </div>
                <div className="project-form-wrapper" >
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

                        <button className="btn" type='submit'>Create</button>
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