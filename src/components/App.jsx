import React from "react";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm/ContactForm";
import {ContactList} from "components/ContactList/ContactList"
import {Filter} from "components/Filter/Filter"
import {Title, Container, TitleContact}  from "./App.styled"
class App extends React.Component{
  state = {
    contacts: [],
    filter: '',
  }
handleChange = (e) =>{
    const {name, value} = e.target;
    this.setState({[name]: value})
}
getFilteredContacts(){
  const { contacts, filter } = this.state;
  if (!filter){
    return contacts;
  }
  const normalisedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({name}) => {
    const normalisedName = name.toLocaleLowerCase();
    const result = normalisedName.includes(normalisedFilter);
    return result;
  })
  return filteredContacts;
}
addContacts = (data) => {
  if(this.isDuplicate(data)){
    return alert(`${data.name} is already in contacts.`)
  }
  this.setState((prevState) => {
    const newContact = {
      id: nanoid(),
      ...data
    }
    return { contacts: [newContact, ...prevState.contacts]}
  })
 }

removeContact = (id) => {
  this.setState((prevState) => {
    const newContacts = prevState.contacts.filter((item) => item.id !== id);
  return {
    contacts: newContacts
  }
  })
 }
isDuplicate({name}){
  const {contacts} = this.state;
  const result = contacts.find((item) => item.name === name)
  return result
}



  render() {
    const check = this.state.contacts;
  
    return(
    <Container>
     <Title>Phonebook</Title>
     <ContactForm onSubmit={this.addContacts}/>
     <Filter handleChange={this.handleChange} />
     {check.length === 0 ? ` ` : (<TitleContact>Contacts</TitleContact>)}
     <ContactList items={this.getFilteredContacts()} removeContact={this.removeContact} />
     </Container>) 
  }

}

export default App;