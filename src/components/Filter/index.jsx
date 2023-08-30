import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <p className={css.search}>Find contacts by name</p>
      <input onChange={onChange} type="text" name="filter" value={filter} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
