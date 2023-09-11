import { useHistory } from 'react-router-dom'
const NotFound = () => {
    let history = useHistory()
    return (
        <div>
            <h4>
                This page isn't available
            </h4>
            <h5>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</h5>
            <button className="btn btn-primary" onClick={() => history.push('/')}>Go to Homepage</button>
        </div>
    )
}

export default NotFound;