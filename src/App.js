import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';




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

 export default class App extends Component{
// static data
constructor(){
  super();
  
  this.state={
    // services
    servicesData:[
      {
        id:'1',
        imageUrl:'/images/dedicated-development-team.jpg',
        title:'Dedicated Development Team',
        desc:'N-X builds dedicated development teams and R&D centers for global companies. We help enterprises like Lebara, Gogo, and Ratesetter scale development capacity, tap into new expertise, and implement digital transformations.'
      },
      {
        id:'2',
        imageUrl:'/images/software-development.jpg',
        title:'Software Product Development',
        desc:'N-iX development centers in Ukraine, Poland, and Belarus build innovative digital solutions for global companies and well-funded startups. We specialize in full-cycle software product development including business analysis, architecture design, UI/UX, and more.'
      },
      {
        id:'3',
        imageUrl:'/images/71e9d85c-f39b-45a8-8eee-918b9f5c44d5.jpg',
        title:'Mobile Application Development',
        desc:'N-iX builds custom mass-market mobile applications and enterprise mobility solutions across all major platforms. We deliver full-cycle mobile development services, including concept, UI/UX design, prototyping, programming, testing, and maintenance.'
      },
      {
        id:'4',
        imageUrl:'/images/6e924c68-2c2a-4292-9da6-af682d68200a.jpg',
        title:'OpenText Professional Services',
        desc:'Our OpenText Professional services allow companies to streamline their business processes and improve operational efficiency with OpenText based solutions. Our technical consultants have implemented hundreds of Enterprise Content Management and Customer Communications Management solutions for enterprises across the globe.'
      },
      {
        id:'5',
        imageUrl:'/images/sap-consulting.jpg',
        title:'SAP Consulting',
        desc:'N-iX helps enterprises drive full business value from their SAP investment. Our qualified SAP consultants and ABAP developers implement SAP and OpenText integrations, extend the existing product ecosystems, provide SAP Hybris and SAP HANA development services, and more.'
      },
      {
        id:'6',
        imageUrl:'/images/e7758911-9330-4210-959f-da3d06117723.jpg',
        title:'Game Development and VR Studio',
        desc:'N-iX Game and VR Studio is part of a Ukraine-based software development company. We specialize in full-cycle game development with Unity and Unreal Engine and offer art production as a service.'
      },
      {
        id:'7',
        imageUrl:'/images/game-art.jpg',
        title:'Game Art Production',
        desc:'Our game art professionals deliver excellence at every stage of the game art production process. N-iX artists apply a diverse toolset to create compelling 3D models and illustrations, intuitive user interfaces and realistic animations etc. Our art portfolio is full of appealing assets that represent the quality of our art production services.'
      },
      {
        id:'8',
        imageUrl:'/images/software-testing.jpg',
        title:'Software QA & Testing',
        desc:'N-iX software testing services allow companies to scale testing capacity with minimum effort. We help enterprises substantially reduce the cost of downtime between releases and deploy additional testing resources during project’s peak loads.'
      },
      {
        id:'9',
        imageUrl:'/images/technical-support.jpg',
        title:'Technical Support',
        desc:'We provide comprehensive 2nd and 3rd line technical support for customers across diverse business domains from our delivery centres in Ukraine and Poland. Our engineers have wide experience in handling technical supportincidents involving product integration, product enhancement, network connectivity, database service, and software issues of any complexity.'
      }
    ],
    // expertise
    expertiseData:[
      {
        id:'1',
        imageUrl:'/images/dedicated-development-team.jpg',
        title:'Dedicated Development Team',
        desc:'N-X builds dedicated development teams and R&D centers for global companies. We help enterprises like Lebara, Gogo, and Ratesetter scale development capacity, tap into new expertise, and implement digital transformations.'
      },
      {
        id:'2',
        imageUrl:'/images/software-development.jpg',
        title:'Software Product Development',
        desc:'N-iX development centers in Ukraine, Poland, and Belarus build innovative digital solutions for global companies and well-funded startups. We specialize in full-cycle software product development including business analysis, architecture design, UI/UX, and more.'
      },
      {
        id:'3',
        imageUrl:'/images/71e9d85c-f39b-45a8-8eee-918b9f5c44d5.jpg',
        title:'Mobile Application Development',
        desc:'N-iX builds custom mass-market mobile applications and enterprise mobility solutions across all major platforms. We deliver full-cycle mobile development services, including concept, UI/UX design, prototyping, programming, testing, and maintenance.'
      },
      {
        id:'4',
        imageUrl:'/images/6e924c68-2c2a-4292-9da6-af682d68200a.jpg',
        title:'OpenText Professional Services',
        desc:'Our OpenText Professional services allow companies to streamline their business processes and improve operational efficiency with OpenText based solutions. Our technical consultants have implemented hundreds of Enterprise Content Management and Customer Communications Management solutions for enterprises across the globe.'
      },
      {
        id:'5',
        imageUrl:'/images/sap-consulting.jpg',
        title:'SAP Consulting',
        desc:'N-iX helps enterprises drive full business value from their SAP investment. Our qualified SAP consultants and ABAP developers implement SAP and OpenText integrations, extend the existing product ecosystems, provide SAP Hybris and SAP HANA development services, and more.'
      },
      {
        id:'6',
        imageUrl:'/images/e7758911-9330-4210-959f-da3d06117723.jpg',
        title:'Game Development and VR Studio',
        desc:'N-iX Game and VR Studio is part of a Ukraine-based software development company. We specialize in full-cycle game development with Unity and Unreal Engine and offer art production as a service.'
      },
      {
        id:'7',
        imageUrl:'/images/game-art.jpg',
        title:'Game Art Production',
        desc:'Our game art professionals deliver excellence at every stage of the game art production process. N-iX artists apply a diverse toolset to create compelling 3D models and illustrations, intuitive user interfaces and realistic animations etc. Our art portfolio is full of appealing assets that represent the quality of our art production services.'
      },
      {
        id:'8',
        imageUrl:'/images/software-testing.jpg',
        title:'Software QA & Testing',
        desc:'N-iX software testing services allow companies to scale testing capacity with minimum effort. We help enterprises substantially reduce the cost of downtime between releases and deploy additional testing resources during project’s peak loads.'
      },
      {
        id:'9',
        imageUrl:'/images/technical-support.jpg',
        title:'Technical Support',
        desc:'We provide comprehensive 2nd and 3rd line technical support for customers across diverse business domains from our delivery centres in Ukraine and Poland. Our engineers have wide experience in handling technical supportincidents involving product integration, product enhancement, network connectivity, database service, and software issues of any complexity.'
      }
    ],

    // industries
    industriesData:[
      {
        id:'1',
        imageUrl:'/images/dedicated-development-team.jpg',
        title:'Dedicated Development Team',
        desc:'N-X builds dedicated development teams and R&D centers for global companies. We help enterprises like Lebara, Gogo, and Ratesetter scale development capacity, tap into new expertise, and implement digital transformations.'
      },
      {
        id:'2',
        imageUrl:'/images/software-development.jpg',
        title:'Software Product Development',
        desc:'N-iX development centers in Ukraine, Poland, and Belarus build innovative digital solutions for global companies and well-funded startups. We specialize in full-cycle software product development including business analysis, architecture design, UI/UX, and more.'
      },
      {
        id:'3',
        imageUrl:'/images/71e9d85c-f39b-45a8-8eee-918b9f5c44d5.jpg',
        title:'Mobile Application Development',
        desc:'N-iX builds custom mass-market mobile applications and enterprise mobility solutions across all major platforms. We deliver full-cycle mobile development services, including concept, UI/UX design, prototyping, programming, testing, and maintenance.'
      },
      {
        id:'4',
        imageUrl:'/images/6e924c68-2c2a-4292-9da6-af682d68200a.jpg',
        title:'OpenText Professional Services',
        desc:'Our OpenText Professional services allow companies to streamline their business processes and improve operational efficiency with OpenText based solutions. Our technical consultants have implemented hundreds of Enterprise Content Management and Customer Communications Management solutions for enterprises across the globe.'
      },
      {
        id:'5',
        imageUrl:'/images/sap-consulting.jpg',
        title:'SAP Consulting',
        desc:'N-iX helps enterprises drive full business value from their SAP investment. Our qualified SAP consultants and ABAP developers implement SAP and OpenText integrations, extend the existing product ecosystems, provide SAP Hybris and SAP HANA development services, and more.'
      },
      {
        id:'6',
        imageUrl:'/images/e7758911-9330-4210-959f-da3d06117723.jpg',
        title:'Game Development and VR Studio',
        desc:'N-iX Game and VR Studio is part of a Ukraine-based software development company. We specialize in full-cycle game development with Unity and Unreal Engine and offer art production as a service.'
      },
      {
        id:'7',
        imageUrl:'/images/game-art.jpg',
        title:'Game Art Production',
        desc:'Our game art professionals deliver excellence at every stage of the game art production process. N-iX artists apply a diverse toolset to create compelling 3D models and illustrations, intuitive user interfaces and realistic animations etc. Our art portfolio is full of appealing assets that represent the quality of our art production services.'
      },
      {
        id:'8',
        imageUrl:'/images/software-testing.jpg',
        title:'Software QA & Testing',
        desc:'N-iX software testing services allow companies to scale testing capacity with minimum effort. We help enterprises substantially reduce the cost of downtime between releases and deploy additional testing resources during project’s peak loads.'
      },
      {
        id:'9',
        imageUrl:'/images/technical-support.jpg',
        title:'Technical Support',
        desc:'We provide comprehensive 2nd and 3rd line technical support for customers across diverse business domains from our delivery centres in Ukraine and Poland. Our engineers have wide experience in handling technical supportincidents involving product integration, product enhancement, network connectivity, database service, and software issues of any complexity.'
      }
    ],


  }
}

render(){
   return(
     
     <BrowserRouter>
       <div className="flex flex-col">
            {/* footer */}
            <NavBar/>
            {/* pages to be switched */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/expertise" render={(props)=><Expertise {...props} expertise={this.state.expertiseData}/>}/>
              <Route exact path="/company" component={Company}/>
              <Route exact path="/contact-us" component={ContactUs}/>
              <Route exact path="/industries" render={(props)=><Industries {...props} industries={this.state.industriesData}/>}/>
              <Route exact path="/services" render={(props)=><Services {...props} services={this.state.servicesData}/>}/>
              <Route exact path="/success-stories" component={SuccessStories}/>
              <Route exact path="/technologies" component={Technologies}/>      
            </Switch>
            {/* footer */}
            <Footer/>          
       </div>
     </BrowserRouter>
       
   );
 }
}