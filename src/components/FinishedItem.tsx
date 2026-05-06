import React, { Component } from "react";
import './FinishedItem.css';

type FinishedItemProps = {
    text: string;
    
    onChange?: () => void;
}
class FinishedItem extends Component<FinishedItemProps>{

    render() {
        return (
        <div className = "finished-item-container">
            <label className="container">
                <input type="checkbox" checked={true} onChange={this.props.onChange}/>
                <span className="checkmark"></span>
                <span className="finished-text">{this.props.text}</span>
            </label>
        </div>
        );
    };
}
export default FinishedItem;