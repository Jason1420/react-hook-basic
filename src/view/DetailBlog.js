import { useParams } from "react-router-dom"
const DetailBlog = () => {
    let { id } = useParams()
    return (
        <div>DetailBlog {id}</div>
    )
}

export default DetailBlog;