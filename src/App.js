import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';



// components
import Header from "./components/Header";
import Content from "./home/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Industries from './pages/Industries';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
import Technologies from './pages/Technologies';

 export default function App() {
   return(
     
     <BrowserRouter>
       <div className="flex flex-col">
            {/* footer */}
            <NavBar/>
            {/* pages to be switched */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/expertise" component={Expertise}/>
              <Route exact path="/company" component={Company}/>
              <Route exact path="/contact-us" component={ContactUs}/>
              <Route exact path="/industries" component={Industries}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/success-stories" component={SuccessStories}/>
              <Route exact path="/technologies" component={Technologies}/>      
            </Switch>
            {/* footer */}
            <Footer/>          
       </div>
     </BrowserRouter>
       
   );
 }