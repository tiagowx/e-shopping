import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store'
import Header from './components/Header';
import MainRoutes from './routes';
import { Footer } from './components/Footer';

function App() {

  const localCart = JSON.parse(localStorage.getItem('Shopping:Cart'));

  if (localCart !== null) {
    store.dispatch({type:'CHANGE_CART', localCart})
  }


  return (
    <Provider store={store}>
      <Router>
        <Header />
        <MainRoutes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
