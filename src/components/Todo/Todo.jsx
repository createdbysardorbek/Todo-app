import { Component } from "react";
import Task from "../Task/Task";
import './Todo.scss';


class Todo extends Component {
    render() {

        return (
            <ul>
                {
                    this.props.todo.map((value) => {
                        const { id, title, done } = value;
                        return <Task
                            onDone={this.props.onDone}
                            onDelete={this.props.onDelete}
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