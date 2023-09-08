import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    useEffect(async () => {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        let data = res && res.data ? res.data : []
        setDataCovid(data);
    }, [])


    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {dataCovid && dataCovid.length > 0 &&
                    dataCovid.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Completed" : "Uncompleted"}</td>
                            </tr>
                        )
                    })

                }
            </tbody>

        </table>
    )
}
export default Covid;