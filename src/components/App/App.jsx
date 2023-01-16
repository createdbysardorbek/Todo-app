import { Component } from "react";
import './App.scss';
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit";



class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Drink coffee',
                    done: false
                },
                {
                    id: 2,
                    title: 'Exercise',
                    done: false
                },
                {
                    id: 3,
                    title: 'Run',
                    done: false
                },
                {
                    id: 4,
                    title: 'Play football',
                    done: false
                },
            ],

            all: true,
        }
    }

    onDone = (id) => {
        this.setState(({ todos }) => {
            const newData = this.state.todos.map(elem => {
                if (elem.id === id) {
                    elem.done = !elem.done
                }
                return elem
            })

            return {
                todos: [...newData]
            }
        })
    }

    onDelete = (id) => {
        this.setState(({ todos }) => {

            let leftTasks = this.state.todos.filter(elem => elem.id !== id);

            return {
                todos: [...leftTasks]
            }

        })

    }

    onClear = () => {
        this.setState(({ todos }) => {
            const cleared = this.state.todos.filter(elem => !elem.done);

            return {
                todos: [...cleared]
            }
        })
    }

    onSubmit = (task) => {

        const taskItem = {
            title: task,
            done: false,
            id: this.state.todos.length + 2,
        }

        this.setState(({ todos }) => {
            return {
                todos: [...todos, taskItem]
            }
        })

    }

    completed = () => this.setState({all: false});

    allTasks = () => this.setState({all: true});

    render() {



        let { todos, all } = this.state

        if (all) {
            todos = todos
        } else {
            todos = todos.filter(elem => elem.done)
        }

        const filterData = todos.filter(elem => !elem.done).length;

        return (
            <div className="wrapper">
                <h1>Todo App</h1>
                <Input onSubmit={this.onSubmit} />
                <Todo todo={todos} onDone={this.onDone} onDelete={this.onDelete} />
                <Edit all={this.allTasks} completed={this.completed} active={filterData} onClear={this.onClear} />
            </div>
        )
    }
}

export default App 