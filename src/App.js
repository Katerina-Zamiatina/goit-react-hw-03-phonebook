import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Form from './components/Form';
import ContactsList from './components/Contacts';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact =>
    setContacts(prevState => [...prevState, newContact]);

  const handleCheckUnique = name => {
    const existingContact = !!contacts.find(contact => contact.name === name);
    existingContact && alert(`${name} is already in contacts`);
    return !existingContact;
  };

  const handleDeleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleFilteredContact = e => {
    setFilter(e.currentTarget.value);
  };

  const handleVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onAdd={handleAddContact} isUnique={handleCheckUnique} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilteredContact} />
      <ContactsList
        contacts={handleVisibleContacts()}
        onDelete={handleDeleteContact}
      />
    </Container>
  );
};

export default App;
