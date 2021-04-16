import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Habit from './Habit'
import Home from './Home'
import Navbar from './Navbar'
import CreateHabit from './CreateHabit'
import Journal from './Journal'
import JournalDetails from './JournalDetails'
import CreateJournal from './CreateJournal'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Welcome.</h1>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path ='/create'><CreateHabit /></Route>
          <Route path ='/habits'><Habit /></Route>
          <Route path ='/journal'><Journal /></Route>
          <Route path ='/entries/:id'><JournalDetails /></Route>
          <Route path ='/add-entry'><CreateJournal /></Route>
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
