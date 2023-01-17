import {
    Component
} from "react";
import './Active.scss'


class Active extends Component {

    render() {

        const { active } = this.props

        return (
            <h3 > Active: {active}</h3>
        )
    }
}

export default Active
