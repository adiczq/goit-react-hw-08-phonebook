// import css from './Phonebook.module.css';
import { ContactForm, ContactList, Filter } from '../../components';
import Container from 'react-bootstrap/Container';

const Phonebook = () => {
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
