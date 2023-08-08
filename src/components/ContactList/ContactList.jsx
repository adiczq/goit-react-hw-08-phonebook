import { deleteContact } from '../../redux/slices/operations';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import css from './ContactList.module.css';
import { selectVisibleContacts } from 'redux/slices/selectors';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ListGroup>
      {filteredContacts.map(({ id, name, number }) => (
        <ListGroup key={id} id={id}>
          <Card className="mb-1" border="primary" style={{ width: '18rem' }}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
              <Card.Title>
                <a
                  className="link-offset-2 link-underline link-underline-opacity-10"
                  href="tel:{number}"
                >
                  {number}
                </a>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={() => dispatch(deleteContact(id))}
                variant="danger"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </ListGroup>
      ))}
    </ListGroup>
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

/* <ul className={css.list}>
{filteredContacts.map(({ id, name, number }) => (
  <li key={id} id={id} className={css.contact}>
    {name} {number}
    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
  </li>
))}
</ul> */

/* <button onClick={() => dispatch(deleteContact(id))}>Delete</button> */
