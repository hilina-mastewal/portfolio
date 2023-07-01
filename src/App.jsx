import './App.css'
import Contact from './Contact'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Sidebar from './Sidebar'
import Service from './service'
//import Portfolio from './Portfolio'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  
  return (
     <Router>
    <div  className=' h-full w-full overflow-y-scroll '>
    <Navbar/>
    <Sidebar/>
      <Switch>
<Route exact path='/'>
<Home/>
</Route>
<Route exact path='/About'>
  <About/>
</Route>
<Route exact path='/Contact'>
  <Contact/>
</Route>
<Route exact path='/Service'>
  <Service/>
</Route>
{/* <Route exact path='/Portfolio'>
  <Portfolio/>
</Route> */}
      </Switch>
   
     </div>
</Router>
  )
}

export default App
