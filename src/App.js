import Form from "./components/Form";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";

function App() {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.operationsReducer);
  return (
    <div className="wrapper">
      <br></br>
      <h1 className='text-center'>TODO-APP USING REACT-REDUX</h1>
      <Form/>
      <Todo/>
      {todo.length > 1 && (
        <button className="btn btn-danger btn-md delete-all" onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
      )}
    
    </div>
  );
}

export default App;
