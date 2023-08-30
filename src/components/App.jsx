import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts === null) {
      return;
    }
    const parsedContacts = JSON.parse(savedContacts);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else if (contacts.length === 0) {
      localStorage.clear();
    }
  }, [contacts]);

  const handleSubmit = data => {
    const { name, number } = data;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts([
        ...contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ]);
    }
  };

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className={css.card}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} filter={filter} />
      <ContactList contacts={filteredContacts()} onClick={handleDelete} />
    </div>
  );
};

export default App;
