import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [personData, setPersonData] = useState({ name: '', number: '' });

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setPersonData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(personData);
    setPersonData({ name: '', number: '' });
  };

  return (
    <form className={css.contact} onSubmit={handleSubmit}>
      <label>
        <p className={css.text}>Name</p>
        <input
          type="text"
          name="name"
          value={personData.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p className={css.text}>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={personData.number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
