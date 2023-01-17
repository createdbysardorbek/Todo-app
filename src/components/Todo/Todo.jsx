import { Component } from "react";
import Task from "../Task/Task";
import './Todo.scss';


class Todo extends Component {
    render() {

        const { onDone, onDelete } = this.props

        return (
            <ul>
                {
                    this.props.todo.map((value) => {
                        const { id, title, done } = value;
                        return <Task
                            onDone={onDone}
                            onDelete={onDelete}
                            key={id}
                            id={id}
                            title={title}
                            done={done}
                        />
                    })
                }
            </ul>
        )
    }
}

export default Todo