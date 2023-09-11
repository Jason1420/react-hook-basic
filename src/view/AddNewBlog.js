import './Blog.scss'
import { useState } from 'react'
import axios from 'axios'
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmitButton = async () => {
        if (!title) {
            alert(`empty title`)
            return;
        }
        if (!content) {
            alert(`empty content`)
            return
        }
        let data = {
            title: title,
            body: content,
            userId: 1
        }
        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNewBlog(newBlog)
        }
    }
    return (
        <div className="add-new-container">
            <div className="inputs-data">
                <label>Title</label>
                <input type="text" value={title}
                    onChange={(event) => setTitle(event.target.value)} ></input>
            </div>
            <div className="inputs-data">
                <label>Content</label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}></input>
            </div>
            <button className='add-new-blog' type='button'
                onClick={handleSubmitButton}>Submit</button>
        </div>
    )
}
export default AddNewBlog;