import { Component } from "react";
import './Input.scss';


class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    onChangeTitle = (e) => {
        this.setState(() => {
            return {
                title: e.target.value,
            }
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.title);
        this.setState({title: ''});
    }


    render() {

       

        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    onChange={this.onChangeTitle}
                    type="text"
                    placeholder="Enter your task..."
                    value={this.state.title}
                />
            </form>
        )
    }
}

export default Input