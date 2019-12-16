import React, {Component} from 'react';
import Background from './background_image.jpg';
import BackgroundTwo from './dedicated-development-team.jpg';
import BackgroundThree from './95c6a985-92f6-4d71-af6c-a2de1f9bf599.jpg';

var sectionStyle = {
    width: "100%",
    height: "550px",
    backgroundImage: "url(" + Background + ")"
  };

var sectionTwo={
    width: "100%",
    height: "200px",
    backgroundImage: "url(" + BackgroundTwo + ")"
}

var sectionThree={
    width:"100%",
    height:"300px",
    backgroundImage: "url(" + BackgroundThree + ")"
}



export default class Home extends Component{

    render(){
        return(
            <div>
                <section style={ sectionStyle }>
                    <div className="pt-32 mx-4 md:mx-20">
                       <h1 className="text-2xl md:text-5xl text-gray-200 font-semibold">Trusted Software Development </h1>
                       <h1 className="text-2xl md:text-5xl text-gray-200 font-semibold">Partner Since 2014</h1>
                       <p className=" md:w-2/3 text-gray-100 md:text-xl pt-10">N-X digital solutions is an International provider of software development outsourcing services with delivery
                         centres in Zimbabwe, Botswana, Zambia, and Australia and over 1000 expert software developers. We partner with technology businesses globally helping them to build successful engineering teams and create innovative software products.</p>
                    </div>
                </section>
                {/* our clients START */}
                <div className="pt-16 bg-gray-200">
                    <div className=" mx-4 md:mx-20">
                        <h1 className="text-center font-bold text-2xl uppercase text-gray-800">Our Clients</h1>
                        <p className="text-gray-800 text-center text-xl">From Tech leaders to telecom giants, see our clients</p>
                        <div className="flex flex-wrap justify-between mx-20">
                            <img className="h-32" src="images/4dc8342a-903c-4592-a26c-2b2c2410ab28.png"/>
                            <img className="h-32" src="images/d2ac9bc8-bd36-4feb-8853-0887e908c114.png"/>
                            <img className="h-32" src="images/c054ae24-2160-4c6c-b453-a5f04326e6e7.png"/>
                            <img className="h-32" src="images/f89ac858-96fa-46f9-ade6-7d7a178dd4f5.png"/>
                            <img className="h-32" src="images/780c54cb-b850-45bd-8f0b-bdb49971cbeb.png"/>
                        </div> 
                        <hr className="mx-20"/>                   
                            {/* 2nd row */}
                        <div className="flex flex-wrap justify-between mx-20">
                            <img className="h-32" src="images/15d77bc8-7620-4a4b-a877-97bfef559f64.png"/>
                            <img className="h-32" src="images/opentext.png"/>
                            <img className="h-32" src="images/c323f87b-316a-4091-8e7a-a890e123db31.png"/>
                            <img className="h-32" src="images/80617be9-624c-4045-94eb-f679e2d8bf1d.png"/>
                            <img className="h-32" src="images/780c54cb-b850-45bd-8f0b-bdb49971cbeb.png"/>
                        </div>
                        <div className="h-56">
                            
                        </div>
                    </div>
                </div>
                {/* our clients END */}


                {/* SERVICES PROVIDED INDUSTRIES WE SERVE */}
                <div className="pt-16 mx-4 md:mx-20">
                    <h1 className="text-center font-semibold text-2xl uppercase text-gray-800 nxText pb-10">SERVICES PROVIDED/ INDUSTRIES WE SERVE</h1>
                    <div className="flex flex-wrap justify-between ">
                        <div className="md:w-1/3 px-2 py-2">
                            <img src='/images/dedicated-development-team.jpg'/>
                        </div>
                        <div className="md:w-1/3 px-2 py-2">
                            <img src='/images/software-development.jpg'/>
                        </div>
                        <div className="md:w-1/3 px-2 py-2">
                            <img src='/images/mobile-development.jpg'/>
                        </div>                       
                    </div>
                    <div className="flex flex-wrap justify-between ">
                        <div className="md:w-1/3 px-2 py-2">
                            <img src='/images/opentext-professional-services.jpg'/>
                        </div>
                        <div className="md:w-1/3 px-2 py-2">
                            <img src='/images/game-development.jpg'/>
                        </div>
                        <div className="md:w-1/3 px-2 py-2">
                            <img src='/images/software-testing.jpg'/>
                        </div>
                    </div>
                    <div className="pt-16 flex justify-center">
                        <button className="px-20 py-4 bg-gray-700 hover:bg-orange-500 text-gray-100 font-semibold">ALL SERVICES</button>               
                    </div>
                    
                </div>
                {/* OUR TECH EXPERTISE START */}
                <div className="mt-16 bg-gray-200">
                    <div className=" mx-4 md:mx-20">
                        <h1 className="text-center font-semibold text-2xl uppercase text-gray-900 py-10">OUR TECH EXPERTISE</h1>
                        {/* 1st */}
                        <div className="block md:flex  pb-4">
                            <div className=" md:w-1/3 mx-4 my-2 bg-white rounded hover:shadow-lg">
                                <a href="#" className="">
                                   <h1 className="p-4 font-semibold hover:text-orange-500">HIGH LOAD SYSTEMS</h1>
                                    <p className="p-4 ">Building robust high-load architectures and scalable applications powered by the most efficient 
                                        technologies including Scala, Java, Python, NodeJS, and others
                                    </p> 
                                </a>                                                                                                
                            </div>
                            <div className="md:w-1/3 mx-4 my-2 bg-white rounded hover:shadow-lg">
                                <a href="#" className="">
                                    <h1 className="p-4 font-semibold hover:text-orange-500">CLOUD SOLUTIONS</h1>
                                    <p className="p-4">Building robust high-load architectures and scalable applications powered by the most efficient 
                                        technologies including Scala, Java, Python, NodeJS, and others
                                    </p>  
                                </a>                                
                            </div>
                            <div className="md:w-1/3 mx-4 my-2 bg-white rounded hover:shadow-lg">
                                <a href="#">
                                    <h1 className="p-4 font-semibold hover:text-orange-500">BUSINESS INTELLIGENCE</h1>
                                    <p className="p-4">Developing secure, scalable, and manageable solutions using a wide stack of Business
                                    Intelligence technologies and tools to 
                                    </p>
                                </a>                                
                            </div>                       
                        </div>
                        {/* 2nd */}
                        <div className="block md:flex  pb-16">
                            <div className=" md:w-1/3 mx-4 my-2 bg-white rounded hover:shadow-lg">
                                <a href="#" className="">
                                   <h1 className="p-4 font-semibold hover:text-orange-500">MACHINE LEARNING & AI</h1>
                                    <p className="p-4 ">Utilizing machine learning, artificial intelligence, and neural networks in the development of self-taught enterprise solutions
                                    </p> 
                                </a>                                                                                                
                            </div>
                            <div className="md:w-1/3 mx-4 my-2 bg-white rounded hover:shadow-lg">
                                <a href="#" className="">
                                    <h1 className="p-4 font-semibold hover:text-orange-500">DATA SCIENCE</h1>
                                    <p className="p-4">Creating complex analytics systems to support competitive intelligence with the help of modern methods of data collection, analysis and processing
                                    </p>  
                                </a>                                
                            </div>
                            <div className="md:w-1/3 mx-4 my-2 bg-white rounded hover:shadow-lg">
                                <a href="#">
                                    <h1 className="p-4 font-semibold hover:text-orange-500">BLOCKCHAIN</h1>
                                    <p className="p-4">Complex blockchain expertise including blockchain application development, consulting and operation support for blockchain-enabled solutions
                                    </p>
                                </a>                                
                            </div>                       
                        </div>
                        <div className="flex justify-center pb-16">
                            <button className="px-20 py-4 bg-orange-500 hover:bg-gray-700 text-orange-100  font-semibold">ALL SERVICES</button>               
                        </div>
                    </div>  
                </div>

                {/* SUCCESS STORIES START */}
                <div className="mt-10">
                    <div className=" mx-4 md:mx-20">
                        <h1 className="text-center font-semibold text-2xl uppercase text-gray-900  py-10">SUCCESS STORIES</h1>
                        <div className="h-56">
                            
                        </div>
                        <div className="flex justify-center pb-16">
                            <button className="px-20 py-4 bg-gray-700 hover:bg-orange-500 text-orange-100  font-semibold">SHOW ALL CASES</button>               
                        </div>                        
                    </div>
                </div>

                {/*  */}
                <div className="mt-10">
                    <div className="mx-4 md:mx-20">
                        <div className="flex bg-orange-500">
                            <div className="justify-start">
                                <h1 className="text-gray-100 pt-10 text-3xl p-2">REPORT</h1>                             
                                <p className="text-gray-100 pt-4 text-3xl px-2">Zimbabwe - The Country That Codes
                                    2019 IT Industry Report
                                </p>
                            </div>
                            <div className=" justify-end">
                                <img src="/images/report-background.png"/>
                            </div>
                        </div>

                        {/* years on the market */}
                        <div className="flex flex-wrap pt-16">
                            <div className="w-1/4 text-center">
                                <h1 className="font-semibold text-5xl">04</h1>
                                <p className="text-gray-700">Years on the market</p>
                            </div>
                            <div className="w-1/4 text-center">
                                <h1 className="font-semibold text-5xl"><span className="text-orange-600">+</span>331<span className="text-orange-600 text-3xl">%</span></h1>
                                <p className="text-gray-700">Growth in 3 years</p>
                            </div>
                            <div className="w-1/4 text-center">
                                <h1 className="font-semibold text-5xl">TOP 100</h1>
                                <p className="text-gray-700">Global outsourcing company</p>
                            </div>
                            <div className="w-1/4 text-center">
                                <h1 className="font-semibold text-5xl">1000<span className="text-orange-600">+</span></h1>
                                <p className="text-gray-700">Professionals</p>
                            </div>
                        </div>
                        <div className="pt-16">
                            <h1 className="font-semibold text-3xl">ABOUT NX</h1>
                            <p className="leading-loose w-1/2">N-X is an African provider of software development services with 1000+ expert software
                             engineers onboard that power innovative technology businesses. Since 20014 we have formed strategic 
                             partnerships with a variety of global industry leaders including OpenText, Novell, Lebara, Currencycloud 
                             and over 50 other medium and large-scale businesses. With delivery centers in Ukraine, Poland, Bulgaria, 
                             and Belarus, we deliver excellence in software engineering and deep expertise in a range of verticals including 
                             finance, healthcare, hospitality, telecom, energy and enterprise content management helping our clients to innovate 
                             and implement technology transformations.
                             </p>
                        </div>
                        
                    </div>
                </div>

                <div className="h-56">
                </div>         
                    
                <section style={ sectionThree }>
                        <h1 className="font-bold text-3xl text-center text-orange-500 pt-16">CONNECT WITH OUR EXPERTS</h1>
                        <div className="flex justify-center pt-10">
                            <button className="px-20 py-4 bg-orange-500 hover:bg-gray-900 text-orange-100  font-semibold">GET IN TOUCH</button>               
                        </div> 
                </section>

                
            </div>
        );
    }
} 