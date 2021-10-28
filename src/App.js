import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/LoginPage/Login';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import VolunteerAdmin from './components/VolunteerAdmin/VolunteerAdmin';
import User from './components/VolunteerAdmin/user/User';
import AddEvent from './components/AddEvent/AddEvent';
import Events from './components/EventComponent/Events';
import Header from './components/Header/Header'

function App() {
  return (
    

    <BrowserRouter>
   <Header></Header>
  
    {/* <div className="App"> */}
    <Switch>

      <Route exact path="/">
     
      </Route>
   
      {/* Log in page route  */}
      <Route exact  path = "/login">

       <Login></Login>

      </Route>

      <Route path='/admin/:id'>
        <VolunteerAdmin></VolunteerAdmin>
      </Route>

      <Route path='/add-event/:id'>
        <AddEvent></AddEvent>
      </Route>

      <Route path='/events'>
        <Events></Events>
      </Route>



      <Route path='/user'>
        <User></User>
      </Route>

      <Route path='/register-volunteer'>
      <RegisterVolunteer></RegisterVolunteer>
      </Route>





















   




    </Switch>
    
    {/* </div>
     */}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
    </BrowserRouter>


  
   
  );
}

export default App;
