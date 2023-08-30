import css from './ContactList.module.css';
import ContactListElement from './ContactListElement';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={css.element} key={contact.id}>
          <ContactListElement
            onClick={onClick}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
