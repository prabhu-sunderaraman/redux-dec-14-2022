import logo from './logo.svg';
import './App.css';
import { MathFormUsingPlainReact } from './MathFormUsingPlainReact';
import { MathFormUsingRedux } from './MathFormUsingRedux';
import { MathFormUsingReduxThunk } from './MathFormUsingReduxThunk';
import { MathFormUsingReduxSaga } from './MathFormUsingReduxSaga';

function App() {
  return (
    <div className="App">
      <MathFormUsingReduxSaga/>
    </div>
  );
}

export default App;
