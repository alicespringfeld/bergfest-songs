import React, { useState } from 'react';
import styles from './Form.module.css';
import Input from '../Input/Input';

function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  console.log(firstName);
  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.form__field}
        placeholder="First name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input text="e-mail" />
      <input type="submit" value="check-in" className={styles.form__button} />
    </form>
  );
}

export default Form;
