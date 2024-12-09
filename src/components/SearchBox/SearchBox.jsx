import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/filters/slice';
import { selectFilterContact } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContact);

  const handleFilterChange = value => {
    dispatch(contactsFilter(value));
  };

  return (
    <div className={css.searchbox}>
      <p className={css.label}>Find contacts by name or number</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        placeholder="Почніть пошук ..."
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};
