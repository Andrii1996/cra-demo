import React, {Component} from  'react';

import './addItem.css';

export default class AddItem extends Component {

    state = {
        label : ''
    };
   onLabelChange = (e) => {
      this.setState({
          label : e.target.value
      }); 
   };
   
   onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label)
    this.setState({
        label : ''
    });
   };
    render() {
        return (
            <form className = 'add-item'
            onSubmit = { this.onSubmit }>
            < input type='text' 
            className = "form-control search-input"
            placeholder="Write new Imput" 
            onChange = { this.onLabelChange }
            value = {this.state.label}/>
            <button type="button"
            className = 'btn btn-outline-secondary'>
                <i className = 'add-bt-style-i'> add </i>
            </button>
            </form>
        );
    } 
    
};

