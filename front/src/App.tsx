import { Outlet } from 'react-router-dom';

import styles from './App.module.css';

export type DataType =
  | 'photos'
  | 'posts'
  | 'comments'
  | 'albums'
  | 'todos'
  | 'users';

function App() {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
}

export default App;
