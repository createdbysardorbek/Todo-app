import { Component } from "react";
import NotDone from "../Done/NotDone";
import Active from "../Active/Active";
import All from "../All/All";
import Clear from "../Clear/Clear";
import Completed from "../Completed/Completed";
import './Edit.scss';

class Edit extends Component {

    render() {

        const { active, onClear, completed, notDone, all } = this.props

        return (
            <div className="edit">
                <Active active={active} />

                <div className="edits">
                    <All all={all} />
                    <NotDone notDone={notDone} />
                    <Completed completed={completed} />
                    <Clear onClear={onClear} />
                </div>
            </div>
        )
    }
}

export default Edit