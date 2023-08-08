// import css from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { ContactForm, ContactList, Filter } from '../../components';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/slices/operations';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container className="d-flex justify-content-center w-75 ">
        <Container className="">
          <title>Phonebook</title>
          <h1 className="mb-5 ">Phonebook</h1>

          <h3>Add contact</h3>
          <ContactForm />
          <h3>Contacts</h3>
          <Filter />
        </Container>
        <Container>
          <ContactList />
        </Container>
      </Container>
    </>
  );
};
export default Phonebook;
