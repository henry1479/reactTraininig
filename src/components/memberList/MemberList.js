import { Component } from "react";
import { getFakeMembers } from "../../API/getFakeMembers";
import {Member} from "./Member";

export class MemberList extends Component{
    constructor(){
        super();
        this.state = {
            members: [],
            loading: false,
            error: null,
            count: 10,
        }
    }

    componentWillMount() {
        this.setState({loading:true});
        getFakeMembers(this.state.count).then(members => {
            this.setState({members, loading:false}
            );
            console.log(members)
        },
        error=> {
            this.setState({error,loading:false})
        })
    }

    componentWillUpdate(){
        console.log('updating lifecycle', this.state.members);
    }

    render() {
        const {members, loading, error} = this.state;
        return (
            <div className ="member-list">
                {
                    (loading)?
                    <span>Loading Members</span> :
                    (members?.length)? 
                    members.map((user,i)=> <Member key={i} {...user}/>):
                    <span> 0 members loaded...</span>
                }
                {
                    (error)? <p>Error Loading Members</p>: ""
                }
            </div>
        )
    }
}