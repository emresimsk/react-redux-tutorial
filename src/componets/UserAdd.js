import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAddUser} from '../actions/formAction';


const initialDefault = {name:"",surname:""};

class UserAdd extends Component {
    constructor(props){
        super(props);

        this.state = initialDefault;


        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }


    handleOnchange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const user = {
            name:this.state.name,
            surname:this.state.surname
        };

        this.props.fetchAddUser(user);
        this.setState(initialDefault);
    }

    render() {
        return (
            <div>  
                <h1>User Add Component</h1>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputName">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleOnchange}
                                placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSurname">Surname:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputSurname"
                                name="surname"
                                value={this.state.surname}
                                onChange={this.handleOnchange}
                                placeholder="Enter Surname"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Send </button>            
                    </form>   
            </div>
        )
    }
}


export default connect(null,{fetchAddUser})(UserAdd);