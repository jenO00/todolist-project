import React, { Component } from "react";
import './FinishedItem.css';

type FinishedItemProps = {
    text: string;
    
    onChange?: () => void;
}
class FinishedItem extends Component<FinishedItemProps>{

    render() {
        return (
        <div className = "finished-item-postit">
            <label className="container-finished">
                <span className="finished-text">{this.props.text}</span>
                <input type="checkbox" checked={true} onChange={(this.props.onChange)}/>
                <span className="checkmark-finished"></span>
            </label>
        </div>
        )
    }
}
export default FinishedItem;