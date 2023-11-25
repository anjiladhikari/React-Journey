export default function TodoList({todos,HandleDeleteTodo}) {

    return (
        <>
            {todos?.length > 0 ? (

                <ul className='todo-wrapper'>
                    {todos.map((todo, index) => (

                        <div className='todo'>
                            <li key={index} > {todo}  </li>
                            <button
                                className='delete-button'
                                onClick={() => HandleDeleteTodo(todo)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>

            )}
        </>
    )
};