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
            <label className="container">
                <span className="finished-text">{this.props.text}</span>
                <input type="checkbox" checked={true} onChange={this.props.onChange}/>
                <span className="checkmark"></span>
            </label>
        </div>
        )
    }
}
export default FinishedItem;