import React, {Component} from 'react';
import {apiWrapper} from '../../config/apisause';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import './auth-form.css';
import {addUser} from '../../redux/actions/user';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    alert: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  };

  signIn = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.setState({alert: ''});

    apiWrapper.post('auth/sign_in', {}, {headers: {email, password}})
      .then((response) => {
        if (response.ok) {
          this.props.addUser(response.data.user);
        } else {
          this.setState({alert: "Wrong email or password"})
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {alert} = this.state;
    const {currentUser} = this.props;

    return (
      <div>
        {Object.keys(currentUser).length < 1 ? (
        <form className='form-sign-in'>
          <span>{alert}</span>
          <label htmlFor='userEmail'
                 className='form-label'>
            Enter Email</label>
          <input className='form-control'
                 id='email'
                 type='email'
                 onChange={this.handleChange}
                 autoComplete='off'/>
          <label htmlFor='userPassword'
                 className='form-label label-for-pass'>
            Enter Password</label>
          <input className='form-control'
                 id='password'
                 type='password'
                 onChange={this.handleChange}
                 autoComplete='off'/>
          <button className='btn btn-outline-secondary'
                  onClick={this.signIn}>Login
          </button>
        </form>
        ) : (
          <Redirect to={{pathname: '/'}}/>
          )
        }
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)