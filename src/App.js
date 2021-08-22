import { Paper } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/DashBoard/Main';

function App() {
  return (
    <Paper style={{ height: '100vh' }}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Paper>
  );
}

export default App;
