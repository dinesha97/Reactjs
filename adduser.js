'user strict';
import React,{Component} from 'react';
import Proptypes from 'prop-types';

export default class adduser extends Component{

    static get proptypes(){
        return{
            addUser:Proptypes.func
        }
    }

    constructor(props) {
        super(props);

    }
    onNameChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.name=event.target.value;
    }
    onSubmit(event){
    event.preventDefault();
    event.stopPropagation();
    if (this.name){
        this.props.addUser({name:this.name});
    this.name='';
    }

    }
    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}></form>
            <label>Name:</label>
            <input type="text" onChange={event => this.onNameChange(event)}/>
            <button type="submit">add</button>
        </div>;
    }

}