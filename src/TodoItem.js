import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon.js";

function TodoItem(props) {
    return (
      <li className= "TodoItem">
        < CompleteIcon type= { props.complited ? 'active': null}
          onComplete={props.onComplete}
       />
        {/* <span className= {`TodoItem-complited ${props.complited && "TodoItem-complited--active"}`}
        onClick={props.onComplete}
        >V</span> */}
        <p className= {` TodoItem-check ${props.complited && "TodoItem-check--active"}`}>{props.text}</p>
        <span className= "TodoItem-deleted"
        onClick={props.onDelete}
        >X</span>
      </li>
    )
  }

  export { TodoItem };