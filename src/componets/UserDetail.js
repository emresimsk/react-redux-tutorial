import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDeleteUser} from '../actions/formAction';
import PropTypes from 'prop-types';


class UserDetail extends Component {
    constructor(props){
        super(props);
        this.state = {id:'',name:'',surname:''}
        this.handleUserDelete = this.handleUserDelete.bind(this);
    }

    handleUserDelete(id){
        if(id){
            this.props.fetchDeleteUser(id);
        }
        
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            id:nextProps.user.id,
            name:nextProps.user.name,
            surname:nextProps.user.surname
        })
    }
        
    render() {
        return (
            <div>
                <h1>User Detail Component</h1>
                <div className="form-group">
                    <label htmlFor="inputName">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        value={this.state.name}
                        readOnly={true}
                        placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputSurname">Surname:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputSurname"
                        name="surname"
                        readOnly={true}
                        value={this.state.surname}
                        placeholder="Enter Surname"/>
                </div>
                <button type="button" onClick={()=>this.handleUserDelete(this.state.id)} className="btn btn-danger">Delete </button>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    user : state.form.user
})

UserDetail.propTypes = {
    user:PropTypes.object.isRequired
}


export default connect(mapStateToProps,{fetchDeleteUser})(UserDetail);