import React from 'react';
import styles from './Input.module.css';

type InputProps = {
  placeholder: string;
};
function Input({ text }: InputProps): JSX.Element {
  return (
    <input type="text" className={styles.form__field} placeholder={text} />
  );
}

export default Input;
