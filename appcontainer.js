'use strict';
import React,{Component} from 'react';
import Adduser from './adduser';
import users from './users';
import User from "./user";
export default class appcontainer extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[{
                id:Date.now(),
                name:"jason"

            }]
        }
    }
    adduser(user){
        this.setState(state=>({
            users:state.users.concat({id:Date.now(),name:user.name})
        }))


    }

    render(){
        return <div>
            <h1>user app</h1>
            <Adduser addUser={user=>this.adduser(user)}/>
            <User users={this.state.users}/>
        </div>;
    }


}