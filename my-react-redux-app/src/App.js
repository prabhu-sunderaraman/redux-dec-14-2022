import logo from './logo.svg';
import './App.css';
import { MathFormUsingPlainReact } from './MathFormUsingPlainReact';
import { MathFormUsingRedux } from './MathFormUsingRedux';
import { MathFormUsingReduxThunk } from './MathFormUsingReduxThunk';

function App() {
  return (
    <div className="App">
      <MathFormUsingReduxThunk/>
    </div>
  );
}

export default App;
