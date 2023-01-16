import { Component } from "react";
import { AiOutlineFileDone } from 'react-icons/ai'

class Completed extends Component {

    render() {


        return (
            <span>
                <AiOutlineFileDone onClick={() => this.props.completed()} color="white" size="25px" />
            </span>
        )
    }
}

export default Completed