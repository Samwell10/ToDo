import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Router from './routes';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Router/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
