// import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            className=" border-primary"
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            className=" border-primary"
            type="password"
            name="password"
            placeholder="Password"
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default LoginForm;

/* <form className={css.form} onSubmit={handleSubmit}>
<label className={css.label}>
  Email
  <input type="email" name="email" />
</label>
<label className={css.label}>
  Password
  <input type="password" name="password" />
</label>
<button type="submit">Log In</button>
</form> */
