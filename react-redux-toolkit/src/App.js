import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './feactures/counter/Count'
import Coins from './feactures/coins/Coin'
import Theme from './feactures/theme/Theme'
function App() {
  return (
    <div className="App my-p">
      <Counter />
      <Coins />
      <Theme />
    </div>
  );
}

export default App;
