import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './feactures/counter/Count'
import Coins from './feactures/coins/Coin'
import Theme from './feactures/theme/Theme'
function App() {
  return (
    <section className="App">
     <div>
      <Counter />
      {/* <Coins /> */}
      {/* <Theme /> */}
      </div>
    </section>
  );
}

export default App;
