import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import './PhonesForm.styles.scss';

class PhonesForm extends Component  {
  state = {
    name: '',
    number: ''
  }

  changeHandler = ({target}) => {
    this.setState(state => {

      if (target.id === "contactName"){
        return {
          name: target.value
        }
      }

      if (target.id === "contactNumber"){
        return {
          number: target.value
        }
      }
      
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    const newRecord = this.makeRecord()
    this.setState({
      name: '',
      number: ''
      })
    this.props.onContactAdd(newRecord);
  }

  makeRecord(){
    const id = uuid();
    const {name, number} = this.state;
    return {id, name, number}
  }

  render(){
    console.log(this.state);
    const {name, number} = this.state
    return (
      <form className="contacts-form" onSubmit={this.submitHandler}>

        <div className="contacts-form__group">
          <label className="contacts-form__label" htmlFor="contactName" >Name</label>
          <input className="contacts-form__input" 
            onChange={this.changeHandler} 
            id="contactName"
            value={name}/>
        </div>
        
        <div className="contacts-form__group">
          <label className="contacts-form__label" htmlFor="contactNumber">Number</label>
          <input 
            className="contacts-form__input" 
            onChange={this.changeHandler} 
            id="contactNumber"
            value={number}/>
        </div>

        <button type="submit" className="contacts-form__submit-btn">Add contact</button>
      </form>
    )
  }  
};

PhonesForm.propTypes = {
  onContactAdd: PropTypes.func.isRequired,
};

export default PhonesForm;
