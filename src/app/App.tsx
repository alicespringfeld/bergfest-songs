import React from 'react';
import styles from './app.module.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <Title text="Welcome to Bergfest! 🍻" />
        <Form />
      </div>
    </main>
  );
}
export default App;
