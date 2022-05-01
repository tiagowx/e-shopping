import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainRoutes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  );
}

export default App;
