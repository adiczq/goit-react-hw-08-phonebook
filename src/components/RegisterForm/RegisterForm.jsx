import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    console.log(form.value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
