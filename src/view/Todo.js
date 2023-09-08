const Todo = (props) => {
    let todo = props.todo;
    let title = props.title;
    return (
        <>
            <div>{title}</div>
            {todo && todo.length > 0 &&
                todo.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {index + 1} - {item.title}
                        </div>)
                })}
            <hr />
        </>
    )
}

export default Todo;