import { Component } from "react";
import Active from "../Active/Active";
import Clear from "../Clear/Clear";
import './Edit.scss';

class Edit extends Component {

    render() {

        const { active, onClear } = this.props

        return (
           <div className="edit">
                <Active active={active}/>
                <Clear onClear={onClear} />
           </div> 
        )
    }
}

export default Edit