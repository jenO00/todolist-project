import React, { Component } from "react";
import './ListItem.css';
import starOutline from '../resources/star-outline.png';
import starFilled from '../resources/star-filled.png';

type ListItemProps = {
    id:number;
    text: string;
    onChange?: () => void;
    dueDate?: Date;
    priority?: boolean;
    onTogglePriority: (id:number) => void;
}

class ListItem extends Component<ListItemProps>{

    render() {
        return (
        <div className = "list-item-container">
        <div id="star-container" onClick={() => this.props.onTogglePriority(this.props.id)}>
            <img
                src={this.props.priority ? starFilled : starOutline}
                alt="star"
                className="star-img"
            />
        </div>
           <label className="container">
                <input type="checkbox" checked={false} onChange={this.props.onChange}/>{this.props.text}
                <span className="checkmark"></span>
            </label>
        </div>
        );
    };
    
}
export default ListItem;