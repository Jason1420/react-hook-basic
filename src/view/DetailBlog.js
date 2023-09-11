import { useParams, useHistory } from "react-router-dom"
import useFetch from "../customize/Fetch"
import './DetailBlog.scss'
const DetailBlog = () => {
    let { id } = useParams()
    let history = useHistory()
    const handleBackData = () => {
        history.push('/blog')
    }
    const { data: dataBlogDetail, isLoading, isErr } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return (
        <>
            {console.log(dataBlogDetail)}
            <div>
                <span onClick={handleBackData}>
                    {`<-- Back`}
                </span>
            </div>
            <div className="blog-detail">
                {dataBlogDetail &&

                    <>

                        <div className="title">Blog ID: {id} - {isLoading === true ? 'Loading data...' : dataBlogDetail.title}</div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                }
            </div >
        </>
    )
}

export default DetailBlog;