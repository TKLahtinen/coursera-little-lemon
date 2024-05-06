import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;