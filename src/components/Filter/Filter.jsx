import { addFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
// import css from './Filter.module.css';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
export function Filter() {
  const dispatch = useDispatch();

  const handleFilter = event =>
    dispatch(addFilter(event.target.value.toLowerCase()));

  return (
    <div>
      <h5> Filter by name:</h5>
      <Form.Group className="mb-3" controlId="filter">
        <FloatingLabel
          controlId="filter"
          label="Filter by name:"
          className="mb-3"
        >
          <Form.Control
            className=" border-primary"
            type="text"
            name="filter"
            onChange={handleFilter}
            placeholder="Filter by name:"
          />
        </FloatingLabel>
      </Form.Group>
    </div>
  );
}
/* <div className={css.container}>
<label className={css.label} htmlFor="filter">
  Filter by name:
</label>
<input
  className={css.input}
  type="text"
  name="filter"
  onChange={handleFilter}
/>
</div> */
