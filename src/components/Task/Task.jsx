import { Component } from "react";
import './Task.scss'
import { AiOutlineDelete } from 'react-icons/ai';

class Task extends Component {


     render() {

        const { id, done, onDelete, onDone } = this.props

        return (
            <li className={done ? 'done' : ''}>
                <h1 onClick={() => { onDone(this.props.id) }}>{this.props.title}</h1>
                <span onClick={() => {onDelete(id)}}>
                    <AiOutlineDelete color="white" size='25px' />
                </span>
            </li>
        )
     }
}

export default Task