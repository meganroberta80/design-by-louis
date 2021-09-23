function BlogPosts() {
    return (
        <h1>Blog Posts Component</h1>
    )
}

export default BlogPosts;

// function BlogPost(props) {
//     console.log('Props inside BlogPosts =>', props)
//     const title = props.blogTitle.map((t, idx) => {
//         return (
//         <div className="blog-posts" key={idx}>
//             <h3>{t}</h3>
        
//         </div>
//         )
        
//     })

//     return (
//         <div className="blog-posts">
//             {title}
//             <br />
//             {/* {props.blogText[0]} */}
//         </div>
//     )
// }

// export default BlogPost;