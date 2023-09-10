import { useParams, useHistory } from "react-router-dom"
const DetailBlog = () => {
    let { id } = useParams()
    let history = useHistory()
    const handleBackData = () => {
        history.push('/blog')
    }
    return (
        <>
            <div>
                <span onClick={handleBackData}>
                    {`<-- Back`}
                </span>
            </div>
            <div>DetailBlog {id}</div>
        </>
    )
}

export default DetailBlog;