import useFetch from "../customize/Fetch"


const Data = () => {

    const { data: dataCovid, isLoading, isErr } = useFetch('https://jsonplaceholder.typicode.com/todos')

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
                {isErr === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
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
                {isLoading === true &&
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>Loading...</td></tr>}
                {isErr === true &&
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>Something wrong...</td></tr>}
            </tbody>

        </table>
    )
}
export default Data;