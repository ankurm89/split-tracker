import React, {Component} from "react";

import "./MemeberList.css";
import Member from "../../components/Member/Member";
import {members} from "../../globals/Global";

class MemberList extends Component{

    state ={
        members:{
            name: members
        }
    };

    render() {
        return <div className="MemberList">
            <div className="Title">
                <strong>Members</strong>
            </div>
            <div className="Action">
                <button onClick={this.props.onRemoveMember}>-</button>
                <button onClick={this.props.onAddMember}>+</button>
            </div>

            {this.state.members.name.map(name => <Member name={name} key={name}/>)}
        </div>;
    }
}

export default MemberList;
