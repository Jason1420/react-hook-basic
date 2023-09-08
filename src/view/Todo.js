const Todo = (props) => {
    let todo = props.todo;
    let title = props.title;
    const handleClickDelete = (id) => {
        props.handleClickDelete(id);
    }
    return (
        <>
            <div>{title}</div>
            {todo && todo.length > 0 &&
                todo.map((item, index) => {
                    return (
                        <div className="child-todo" key={item.id}>
                            {index + 1} - {item.title} &nbsp; &nbsp;
                            <span onClick={() => handleClickDelete(item.id)}>x</span>
                        </div>
                    )

                })}
            <hr />
        </>
    )
}

export default Todo;