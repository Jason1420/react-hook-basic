import useFetch from "../customize/Fetch";
import './Blog.scss'
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";


const Blog = () => {
    const { data: dataBlogs, isLoading, isErr } = useFetch('https://jsonplaceholder.typicode.com/posts')
    let [newData, setNewData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            newData = dataBlogs.slice(0, 9)
            setNewData(newData);
        }
    }, [dataBlogs])

    const handleAddNewBlog = (newBlog) => {
        let data = newData;
        data.unshift(newBlog)
        setShow(false)

        setNewData(data);
    }
    const deletePost = (blog) => {
        let newDataCopy = newData.filter(item => item.id !== blog.id)
        setNewData(newDataCopy)
    }
    return (
        <>
            <>
                <Button variant="primary" onClick={handleShow}>
                    + Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                    </Modal.Body>

                </Modal>
            </>





            <div className="blog-container">

                {isErr === false && isLoading === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                <button type="button">
                                    <Link to={`/blog/${item.id}`}>View Detail</Link></button>
                                <button type="button"
                                    onClick={() => deletePost(item)}>Delete</button>
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
        </>
    )
}

export default Blog;

