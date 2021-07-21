import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/Routes';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
