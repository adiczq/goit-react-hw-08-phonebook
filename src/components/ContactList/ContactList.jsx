import { deleteContact } from '../../redux/slices/operations';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectVisibleContacts } from 'redux/slices/selectors';

export function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} id={id} className={css.contact}>
            {name} {number}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
