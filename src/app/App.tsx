import React from 'react';
import styles from './app.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.title}>Welcome to Bergfest! 🍻</h1>
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
