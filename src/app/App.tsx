import React from 'react';
import styles from './app.module.css';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <Title />
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
          <input type="submit" className={styles.form__button} />
        </form>
      </div>
    </main>
  );
}
export default App;
