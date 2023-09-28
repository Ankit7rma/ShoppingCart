import './index.css';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <h1>Hello</h1>
    </Provider>
  );
}

export default App;
