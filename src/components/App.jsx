import {useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import ContactForm from "components/ContactForm/ContactForm";
import {ContactList} from "components/ContactList/ContactList"
import {Filter} from "components/Filter/Filter"
import {Title, Container, TitleContact}  from "./App.styled"

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue});

  useEffect(() => {window.localStorage.setItem(key, JSON.stringify(state));}, [state, key]);

  return [state, setState];
}


export default function App (){

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
 
const getFilteredContacts = () => {
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

const handleChange = e => {
  const { value } = e.target;
  setFilter(value);
};
const addContacts = (data) => {
  if(isDuplicate(data)){
    return alert(`${data.name} is already in contacts.`)
  }
  setContacts((prev) => {
    const newContact = {
      id: nanoid(),
      ...data
    }
    return [newContact, ...prev]
  })
 }

const removeContact = (id) => {
 setContacts(prev => {
    const newContacts = prev.filter((item) => item.id !== id);
  return newContacts;
    })
 }
const isDuplicate = ({name}) => {
  const result = contacts.find((item) => item.name === name)
  return result
}
  
  
    return(
    <Container>
     <Title>Phonebook</Title>
     <ContactForm onSubmit={addContacts}/>
     <Filter handleChange={handleChange} />
     {contacts.length !== 0 && <TitleContact>Contacts</TitleContact>}
     <ContactList items={getFilteredContacts()} removeContact={removeContact} />
     </Container>) 
  }

