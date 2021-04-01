import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    <span className={styles.label__text}>Filter by name</span>

    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter name for search"
    />
  </label>
);

export default Filter;
