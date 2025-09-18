import logo from './logo.svg';
import './App.css';
import NAvigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <NAvigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
