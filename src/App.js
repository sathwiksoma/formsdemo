import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import refLogin from './components/refLogin';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <main>
      <Header/>
      {/* <Login/> */}
      <Signup/>
    </main></>
  );
}

export default App;
