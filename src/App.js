import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import './css/home.scss'

const App=()=>(
   <Router>
     <Switch>
       <Route exact path ='/' component={Home} />
     </Switch>
   </Router>
)
export default App;