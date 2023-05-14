import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation'


function App() {
  return (
    <>
      <Router>
          <Navigation />
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
