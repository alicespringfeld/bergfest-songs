import React from 'react';
import styles from './Form.module.css';

function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.form__field}
        placeholder="First name"
      />
      <input
        type="text"
        className={styles.form__field}
        placeholder="Last name"
      />
      <input type="submit" value="check-in" className={styles.form__button} />
    </form>
  );
}

export default Form;
