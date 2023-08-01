import { Helmet } from "react-helmet";
import css from "./Phonebook.module.css"
import { ContactForm, ContactList, Filter } from "components";

const Tasks = () => {
  return (
    <>
    <div className={css.container}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      </div>
    </>
  );
};
export default Tasks;


