import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGetUsers,fetchGetUser} from '../actions/formAction';

class UserList extends Component {
    constructor(props){
        super(props);

        this.handleUserDetail = this.handleUserDetail.bind(this);
    }

    componentWillMount(){
        this.props.fetchGetUsers();
    }

    handleUserDetail(id){
        if(id){
            this.props.fetchGetUser(id)
        }
    }

    render() {
        const userList = this.props.list.map(user => 
            <tr key={user.id} onClick={()=>this.handleUserDetail(user.id)}> 
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
            </tr>
        );

        return (
            <div>
                <h1>User List Component</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
            </div>
        )
    }
};


const mapStateToProps = state => ({
    list:state.form.list,
  })
  

export default connect(mapStateToProps, {fetchGetUsers,fetchGetUser})(UserList);