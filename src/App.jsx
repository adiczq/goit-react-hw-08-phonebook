import { Layout, PrivateRoute, RestrictedRoute } from "./components";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home/Home"));
const RegisterPage = lazy(() => import("./pages/Register/Register"));
const LoginPage = lazy(() => import("./pages/Login/Login"));
const PhonebookPage = lazy(() => import("./pages/Phonebook/Phonebook"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;




// import { ContactForm } from './components';
// import { ContactList } from './components';
// import { Filter } from './components';
// import css from './App.module.css';

// export function App() {
//   return ()
//     // <div className={css.container}>
//     //   <h1>Phonebook</h1>
//     //   <ContactForm />
//     //   <h2>Contacts</h2>
//     //   <Filter />
//     //   <ContactList />
//     // </div>
  
// }
