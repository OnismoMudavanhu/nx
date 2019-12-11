import React from 'react';
import Header from "./components/Header";
import Content from "./home/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from './pages/Home';

 export default function App() {
   return(
     <div>
       <div className="flex flex-col">
            <NavBar/>
            {/* <Header/> */}
            {/* <Content/>  */}
            {/* <Footer/> */}
            <Home/>
            <Footer/>          
       </div>
     </div>
       
   );
 }