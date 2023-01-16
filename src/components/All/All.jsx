import { Component } from "react";
import { BiBorderAll } from 'react-icons/bi'

class All extends Component {

    render() {


        return (
            <span>
                <BiBorderAll onClick={() => this.props.all()} color="white" size="25px" />
            </span>
        )
    }
}

export default All