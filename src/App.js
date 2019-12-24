import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';




// components
import Header from "./components/Header";
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
    expertise:[
      {
        id:'1',
        imageUrl:'/images/expertise/high-load-systems.jpg',
        title:'High Load Systems',
        desc:'N-X engineers build scalable high-load systems designed specifically to support large volumes of user data requests and backend computations. We use the most efficient technologies such as Scala, Java, Python, NodeJS to ensure the best performance and reliability of your software products.'
      },
      {
        id:'2',
        imageUrl:'/images/expertise/cloud-solutions.jpg',
        title:'Cloud Solutions',
        desc:'We build secure cloud solutions enabling businesses to increase efficiency, reduce time to market and improve scalability. Our developers provide cloud application development, cloud solutions for Big Data, cloud infrastructure and DevOps services etc. We have implemented Private, Public and Hybrid cloud infrastructures for customers in various industries.'
      },
      {
        id:'3',
        imageUrl:'/images/expertise/digital-transformation.png',
        title:'Digital Transformation',
        desc:'N-X diverse technological expertise and over 15 years’ experience in delivering software development services across multiple industries allow us to implement end-to-end digital transformations. We leverage the latest technological advances including Data Science, Machine Learning and AI, Blockchain, VR, and IoT to drive innovations within your organization.'
      },
      {
        id:'4',
        imageUrl:'/images/expertise/business-intelligence.jpg',
        title:'Business Intelligence',
        desc:'Our BI specialists build, deploy and maintain secure, scalable and manageable Business Intelligence solutions to help businesses transform their raw data into actionable insights. We implement data warehousing and reporting solutions using a wide stack of BI technologies and tools.'
      },
      {
        id:'5',
        imageUrl:'/images/expertise/machine-learning-ai.jpg',
        title:'Machine Learning & AI',
        desc:'N-X engineers are well-versed in machine learning, artificial intelligence, and neural networks development utilizing R and Python. We specialize in self-taught software development delivering fraud detection solutions, AI applications, analytical tools, NLP solutions, cybersecurity systems, and more.'
      },
      {
        id:'6',
        imageUrl:'/images/expertise/data-science.jpg',
        title:'Data Science',
        desc:'We provide Data Science as a Service (DSaaS) and develop complex analytics systems using modern methods of data collection, analysis, and processing. Our Data Scientists know how to turn all your data, big and small, structured and unstructured, into valuable business insights.'
      },
      {
        id:'7',
        imageUrl:'/images/expertise/big-data.jpg',
        title:'Big Data',
        desc:'Using Big Data tools and methods, N-iX engineers deal with data of any volume, velocity and variety helping organizations drive tangible business benefits. We offer Hadoop-based big data analytics and work with a number of open source big data technologies including Spark, Hive, Flume, Pig, Impala, Oozie, and others.'
      },
      {
        id:'8',
        imageUrl:'/images/expertise/blockchain-solutions.jpg',
        title:'Blockchain',
        desc:'N-X engineers have hands-on experience in implementing blockchain solutions for FinTech and other industries. We build dynamic decentralized blockchain applications ensuring the security of transactions, immutability of records and solution scalability, while empowering the users and providing unprecedented transparency.'
      },
      {
        id:'9',
        imageUrl:'/images/expertise/virtual-reality.jpg',
        title:'Virtual Reality Solutions',
        desc:'N-iX VR studio delivers custom virtual reality solutions powered by Unity and Unreal Engine. We create VR and AR applications for various industries including gaming, advertising, education, real estate, hospitality, and healthcare.'
      }
    ],

    // industries
    industries:[
      {
        id:'1',
        imageUrl:'/images/industries/fintech.jpg',
        title:'Fintech',
        desc:'We have implemented innovative financial technology solutions for global FinTech leaders including Currencycloud and RateSetter. Our qualified engineers have designed and developed scalable and secure money transaction platforms, digital banking and P2P lending solutions and thus developed extensive expertise and domain knowledge in financial technology development.'
      },
      {
        id:'2',
        imageUrl:'/images/industries/1caae10c-7c5a-42d9-9107-23a29882c2a0.jpg',
        title:'InsurTech',
        desc:'N-X offers InsurTech software development services helping insurance and InsurTech companies to go digital and succeed in their omnichannel initiatives. We build functional InsurTech applications that leverage BI and Data Analytics, blockchain and VR to drive digital transformation in the industry.'
      },
      {
        id:'3',
        imageUrl:'/images/industries/finance.jpg',
        title:'Finance & Banking',
        desc:'Our IT specialists have completed many successful projects in finance and banking empowering our clients with reliable software solutions for increasing operational efficiency and enhancing customer experience. We have cooperated with renowned financial and banking institutions from Europe and North America helping them embrace disruptive technological strides.'
      },
      {
        id:'4',
        imageUrl:'/images/industries/high-tech.jpg',
        title:'Hi-Tech',
        desc:'N-X has become a high-tech solution development partner for many innovative brands thanks to the vast expertise accumulated in our delivery centres in Eastern Europe. Our engineers have successfully implemented multiple R&D projects in the leading-edge technological fields.'
      },
      {
        id:'5',
        imageUrl:'/images/industries/cc84afb8-beb3-4344-9ba0-3e259275cd0c.jpg',
        title:'Telecom',
        desc:'We have cooperated with global telecom industry leaders including Lebara, one of Europe’s fastest growing mobile companies. Our professionals have developed a diverse range of software products for telecom such as consumer friendly mobile and web applications, BSS/OSS solutions, VoIP services, and others.'
      }      
    ],

    // technologies      
    technologies:[
      {
        id:'1',
        imageUrl:'/images/technology/756dd7e8-2689-43a1-b7f0-9e758c3e2319.jpg',
        title:'Java Development',
        desc:'N-X has provided Java development services for over 15 years building scalable and reliable software solutions in the FinTech, Hospitality, Manufacturing, and other industries. We are experts in Spring MVC, Spring Boot, JSF, GWT, Struts, Grails, and other frameworks.'
      },
      {
        id:'2',
        imageUrl:'/images/technology/71b50549-480f-4cf4-86c4-05f55d40fcde.jpg',
        title:'Scala',
        desc:'Our Scala development team delivers high-performance secure applications using the best practices of both object-oriented and functional programming. Dedicated Scala developers at N-iX are well-versed in such frameworks and libraries as Play, Akka, Spark, Slick, Lift, Scalaz, Cats, and more.'
      },
      {
        id:'3',
        imageUrl:'/images/technology/64b753d1-a5cd-430b-9e90-3e99468ee543.jpg',
        title:'.NET',
        desc:'For many years we have been using .Net to develop efficient back-end systems, web applications, enterprise software solutions, and more. We have provided .Net development services to many of our customers including Lebara (telecom), Anoto (digital pen), Manodo (energy management), Spotzer (digital marketing), and others.'
      },
      {
        id:'4',
        imageUrl:'/images/technology/5929dbee-ac22-47d6-a231-2432db9db0c7.jpg',
        title:'Unity 3D',
        desc:'Our certified Unity developers build cross-platform feature-rich games with advanced graphics, immersive virtual reality solutions, demos and 3D presentations. We have delivered multiple solutions built with Unity to our international customers including MindArk, Disruptive Interactive, Brighter AB, Virtech Attractions, and others.'
      },
      {
        id:'5',
        imageUrl:'/images/technology/054e9815-1a8a-4b44-8d6a-2c30207d2bc5.jpg',
        title:'Hybris',
        desc:'We deliver scalable omnichannel solutions with SAP Hybris enabling our customers reduce time-to-market and offer personalized user experiences. Our engineers employ Hybris platform to implement large-scale yet flexible e-commerce solutions tailored to the most specific business needs.'
      },
      {
        id:'6',
        imageUrl:'/images/technology/3fbd4035-3103-4def-af7e-6eae562a4c6d.jpg',
        title:'Python development services',
        desc:'N-X offers high-quality Python development services employing the most efficient Python frameworks such as Django, Flask, Tornado, Pyramid, and Falcon. We use this technology to provide custom development of web-based applications and high-load web services, cloud based solutions and APIs, data science solutions and self-taught software.'
      },
      {
        id:'7',
        imageUrl:'/images/technology/0e696735-7bed-420f-8e1d-b29130a5576d.jpg',
        title:'Ruby development',
        desc:'N-X developers have wide experience in Ruby development with many successful projects, such as cross-border payments platform for Currencycloud and a healthcare solution for Think Research. We have in-depth expertise in RoR, JRuby, Sinatra, TorqueBox, and other technologies.'
      },
      {
        id:'8',
        imageUrl:'/images/technology/eecf6c7a-1531-4b89-82db-b7a313b45b19.jpg',
        title:'С/C++ Development',
        desc:'We develop complex solutions with C/C++ across a variety of domains such as High-Tech, manufacturing, FinTech, embedded, and network security for our global customers including Anoto, StreamServe, Novell, AlienVault, and others. Our engineers have hands-on experience in Visual Studio, OCL, Eclipse, Code::Blocks, and other technologies.'
      },
      {
        id:'9',
        imageUrl:'/images/technology/62ee97f2-a83d-406c-ba17-ebe725d9e2c5.jpg',
        title:'Unreal Engine',
        desc:'N-X Game Development and VR studio creates Unreal Engine-powered PC and console games. Our portfolio includes MMORPGs, city-builder strategies and sport games with high-quality graphics and engaging gameplay. We also deliver immersive Virtual Reality experiences achieved thanks to the impressive Unreal Engine capabilities like complex particle simulations systems and advanced dynamic lighting.'
      },
      {
        id:'10',
        imageUrl:'/images/technology/b63cccfb-f0ce-4d96-89c0-094b496ddc60.jpg',
        title:'PHP',
        desc:'We specialize in PHP development of custom web applications, database-driven websites, project management software, REST APIs, flexible SEO systems, CMS solutions for multi-language newspapers, social networks, server side & front end multimedia applications. Our expertise covers multiple PHP frameworks including Laravel, Symfony, Cake PHP, Yii, and others.'
      },
      {
        id:'11',
        imageUrl:'/images/technology/102e2fa0-7240-45c5-b590-a506bf36f5b7.jpg',
        title:'JavaScript',
        desc:'N-X has developed profound expertise in both front-end and back-end JavaScript development applying the most efficient JavaScript frameworks and libraries such as Node.JS, Angular.JS, Meteor, React, Backbone.JS, Knockout, Ember to deliver interactive and functional web applications.'
      },
      {
        id:'12',
        imageUrl:'/images/technology/40ac843a-7a05-45d7-83f2-5b90d72f52c7.jpg',
        title:'iOS',
        desc:'We provide custom end-to-end iOS development from initial concept to UI/UX design, programming, testing, and release. Our mobile development specialists have wide experience in building native applications for iPhone, iPad, Apple Watch, and Apple TV encompassing enterprise solutions, mobile commerce apps, game development, applications for wearables, and more.'
      },
      {
        id:'13',
        imageUrl:'/images/technology/ed0f23d9-7467-4403-9ce4-7270e3030cd8.jpg',
        title:'Android',
        desc:'Our Android development expertise includes enterprise applications for manufacturing and energy management, fintech and telecom domains, popular mobile games and consumer apps. Android developers at N-iX have built dozens of applications for smartphones, tablets, and wearables covering initial concept development, UI/UX design, programming, testing, and launching on Google Play.'
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
              <Route exact path="/expertise" render={(props)=><Expertise {...props} expertise={this.state.expertise}/>}/>
              <Route exact path="/company" component={Company}/>
              <Route exact path="/contact-us" component={ContactUs}/>
              <Route exact path="/industries" render={(props)=><Industries {...props} industries={this.state.industries}/>}/>
              <Route exact path="/services" render={(props)=><Services {...props} services={this.state.servicesData}/>}/>
              <Route exact path="/success-stories" component={SuccessStories}/>
              <Route exact path="/technologies" render={(props)=><Technologies {...props} technologies={this.state.technologies}/>}/>      
            </Switch>
            {/* footer */}
            <Footer/>          
       </div>
     </BrowserRouter>
       
   );
 }
}