import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/Home/Homepage.jsx';
import HomeHi from './components/Home/Homepagehi'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import ContactUs from './components/Health/Health';
import Chatbot from './components/Chatbot/Chatbot';
import DiseaesPred from './components/DiseasePred/DiseaseDetection';
import Doctor from './components/Doctor/Doctor';
import Details from './components/Doctor/Details';
import NotfoundPage from "./components/NotfoundPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import Login from './Login'
import { useStateValue } from './StateProvider';
import DispredSym from './components/DiseasePred/DispredSym/DispredSym';
import Symtoms from './components/DiseasePred/DispredSym/Symtoms';
function App() {

  // for login athentication
  // const[user , setUser] = useState(null);
  const [{user}, dispatch] = useStateValue();

    //all the routes
    const routes = [
        { path: '/',  Component: Home },
        { path: '/DiseaesPred',  Component: DiseaesPred },
        { path: '/hi',Component: HomeHi },
        { path: '/Doctor',  Component: Doctor },
        { path: '/Details',  Component: Details },
        { path: '/health',  Component: ContactUs },
        {path: '/DiseasePredsym',  Component: DispredSym },
        {path: '/sym',  Component: Symtoms }
      ]

  return (
    <Router>
      {
        !user ? (
          <Login></Login>
        ) :(
          <>
        <Chatbot />
      <Navbar />

      <Switch>


        {
            routes.map(route=>
                {
                    const {path,Component} = route;

                    return <Route key={path} path ={path} exact >
                        {
                            ({ match }) => (
                                //component to make page transiiton on routing
                                <CSSTransition
                                    in={match!=null}
                                    timeout={500}
                                    unmountOnExit
                                    classNames="page"
                                >
                                    <div className="page">
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )
                        }
            

                    </Route> 
                })
        }

        <Route >
          <NotfoundPage/> 
        </Route>


      

      </Switch> 
          </>
        )
      }
    
    </Router>
  );
}

export default App;
