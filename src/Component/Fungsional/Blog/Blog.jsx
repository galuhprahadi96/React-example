import React from 'react'
import './Blog.css'

const Blog = (props) => {
    return (
        <div className="blog-wrapper">
            <img src="https://placeimg.com/300/300/tech" alt="" />
            <h2>{props.Judul}</h2>
            <p>{props.Tanggal}</p>
            <span>{props.Author}</span>
        </div>
    )
}

export default Blog
