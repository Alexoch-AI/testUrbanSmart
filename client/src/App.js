import './App.css';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileUser from './components/ProfileUser/ProfileUser';
import { useSelector } from 'react-redux';

function App() {

  const authUser = useSelector(state => state.auth)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/profile">
            {authUser ? <ProfileUser /> : <MainPage />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
