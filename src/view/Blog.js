import useFetch from "../customize/Fetch";
import './Blog.scss'
import { Link } from "react-router-dom/cjs/react-router-dom";
const Blog = () => {
    const { data: dataBlogs, isLoading, isErr } = useFetch('https://jsonplaceholder.typicode.com/posts')
    let newData = []
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9)
    }
    return (
        <div className="blog-container">
            {isErr === false && isLoading === false && newData && newData.length > 0 &&
                newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button type="button">
                                <Link to={`/blog/${item.id}`}>View Detail</Link></button>
                        </div>
                    )
                })
            }
            {isLoading === true &&
                <div>
                    Loading data...</div>}
            {isErr === true &&
                <div>
                    Something wrong...</div>}
        </div>
    )
}

export default Blog;

