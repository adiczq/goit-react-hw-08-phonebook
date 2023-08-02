import css from './Phonebook.module.css';
import { ContactForm, ContactList, Filter } from '../../components';

const Phonebook = () => {
  return (
    <>
      <div className={css.container}>
        <title>Phonebook</title>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
export default Phonebook;
