import { Component } from "react";
import { VscLayersActive } from 'react-icons/vsc'

class NotDone extends Component {
    render() {
        return (
            <span>
                <VscLayersActive onClick={() => this.props.notDone()} color="white" size="25px" />
            </span>

        )
    }
}

export default NotDone