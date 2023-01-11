import { Component } from "react";
import './App.scss';
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit";



class App extends Component {
    constructor (props) {
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
            ]
        }
    }

    onDone = (id) => {
        this.setState(({todos}) => {
            const newData = this.state.todos.map(elem => {
                if(elem.id === id) {
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
        this.setState(({todos}) => {

            let leftTasks = this.state.todos.filter(elem => elem.id !== id);

            return {
                todos: [...leftTasks]
            }
            
        })  
        
    }

    onClear = () => {
        this.setState (({todos})=>{
            const cleared = this.state.todos.filter(elem => !elem.done);

            return {
                todos: [...cleared]
            }
        })
    }

    render() {

        

        const { todos } = this.state

        const filterData = this.state.todos.filter(elem => !elem.done).length;

        return (
            <div className="wrapper">
                <h1>Todo App</h1>
                <Input />
                <Todo todo={todos} onDone={this.onDone} onDelete={this.onDelete} />
                <Edit active={filterData} onClear={this.onClear} />
            </div>
        )
    }
}

export default App 