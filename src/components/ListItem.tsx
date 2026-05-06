import React, { Component } from "react";
import './ListItem.css';

type ListItemProps = {
    text: string;
    onChange?: () => void;
}
class ListItem extends Component<ListItemProps>{

    render() {
        return (
        <div className = "list-item-container">
           <label className="container">
                <input type="checkbox" checked={false} onChange={this.props.onChange}/>{this.props.text}
                <span className="checkmark"></span>
            </label>
        </div>
        );
    };
}
export default ListItem;