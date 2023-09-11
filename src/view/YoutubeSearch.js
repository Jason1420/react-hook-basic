import './Youtube.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment/moment';
const YoutubeSearch = () => {
    const [video, setVideo] = useState([])
    const [query, setQuery] = useState('')
    useEffect(() => {

    }, [])
    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyAo57at9YakHpuFkT3SEcZ3oaPcKxKtiok',
                'type': 'video',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];

            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }
            setVideo(result)
            console.log(">>> check res", result)
        }

    }
    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder='Search'
                    value={query} onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button" onClick={handleSearchYoutube}>Search</button>
            </div>
            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>

                                <iframe className='iframe-yt'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="#30 Full KHÔNG CHE &#39;Chức Năng Search Youtube&#39; Với React Hook và Google APIs Từ A đến Z"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen />

                            </div>

                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>
                                <div className='created-at'>
                                    Created at: {moment(item.createdAt).format('dd-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className='author'>
                                    Author: {item.author}
                                </div>
                                <div className='description'>
                                    Description: {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default YoutubeSearch;

