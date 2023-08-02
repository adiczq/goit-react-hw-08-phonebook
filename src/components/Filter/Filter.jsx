import { addFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const handleFilter = event =>
    dispatch(addFilter(event.target.value.toLowerCase()));

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="filter">
        Filter by name:
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleFilter}
      />
    </div>
  );
}
