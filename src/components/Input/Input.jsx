import { Component } from "react";
import './Input.scss';


class Input extends Component {
    render () {
        return (
            <form>
                <input type="text" placeholder="Enter your task..."/>
            </form>
        )
    }
}

export default Input