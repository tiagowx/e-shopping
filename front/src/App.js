import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store'
import Header from './components/Header';
import MainRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
    </Provider>
  );
}

export default App;
