export default function TodoInput({ todo, HandleAddTodo, setTodo }) {

    return (

        <form className='input-wrapper'>
            <input
                type='text'
                name='todo'
                value={todo}
                placeholder='Create a new todo'
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <button className='add-button' onClick={HandleAddTodo}>Add</button>

        </form>

    );

};