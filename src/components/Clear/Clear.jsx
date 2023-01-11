import { Component } from "react";
import { VscClearAll } from 'react-icons/vsc';
import './Clear.scss'

class Clear extends Component {

    render() {

        const { onClear } = this.props

        return (
            <span onClick={() => {
                onClear()
            }}>
                <VscClearAll color="white" size="25px" />
            </span>
        )
    }
}

export default Clear