import React, {Component} from 'react';

import Title from './components/shared/Title';
import Container from './components/shared/Container';
import PhonesForm from './components/PhonesForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

import './App.scss';

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  onContactAdd = (contact) => {
    this.setState( state => {
      const contacts = [...state.contacts, contact]
      return { contacts }
    })
    console.log(this.state);
  }

  onContactDelete = (contactId) => {
    this.setState( state => {
      const contacts = state.contacts.filter( ({id}) => contactId !== id )
      return {
        contacts
      }
    });
  }

  onFilter = ({target}) => {
    this.setState({
        filter: target.value
      })
  }

  render(){
    const {contacts, filter} = this.state
    const visibleContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()) )
    return (
      <Container className="container feedback">
        <Title title="Phonebook"/>
        <PhonesForm onContactAdd={this.onContactAdd}/>
        <Title title="Contacts" />
        <Filter onFilter={this.onFilter}/>
        <ContactsList onContactDelete={this.onContactDelete} contacts={visibleContacts}/>

      </Container>
    );
  }
  
}

export default App;
