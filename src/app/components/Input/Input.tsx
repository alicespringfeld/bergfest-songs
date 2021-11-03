import React, { useState } from 'react';
import styles from './Input.module.css';

type InputProps = {
  text: string;
};
function Input({ text }: InputProps): JSX.Element {
  const [lastName, setLastName] = useState('');
  console.log(lastName);
  return (
    <input
      type="text"
      className={styles.form__field}
      placeholder={text}
      value={lastName}
      onChange={(event) => setLastName(event.target.value)}
    />
  );
}

export default Input;
