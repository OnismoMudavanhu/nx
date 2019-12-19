import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

import Background from './services.jpg';

var sectionStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: "url(" + Background + ")"
  };

export default class Services extends Component{
    render(){
        return(
            <div className="">
                <section style={ sectionStyle }>
                    <div className="pt-10 lg:pt-20 mx-4 md:mx-20">
                        <div className="text-gray-100 font-semibold">
                            <span className="hover:underline"><Link to="/">Home</Link></span><span className="text-gray-600 px-2 text-xs">></span><span>Services</span>
                        </div>
                       <h1 className="text-2xl md:text-5xl text-gray-200 font-semibold text-center">Services</h1>
                    </div>
                </section>
                
                <div>
                <div className="mt-16">
                    <div className="mx-4 md:mx-20">
                        <div className="flex flex-wrap">
                            {/* 1 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg my-4 pt-4 px-4">
                                <img className="w-full" src="/images/dedicated-development-team.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Dedicated Development Team</h1>                      
                                    <p className="text-gray-700 text-base">N-X builds dedicated development teams and R&D
                                    centers for global companies. We help enterprises like Lebara, Gogo, and Ratesetter 
                                    scale development capacity, tap into new expertise, and implement digital transformations.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg  my-4 pt-4 px-4">
                                <img className="w-full" src="/images/software-development.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Software Product Development</h1>                      
                                    <p className="text-gray-700 text-base">N-iX development centers in Ukraine, Poland, and Belarus 
                                    build innovative digital solutions for global companies and well-funded startups. We specialize 
                                    in full-cycle software product development including business analysis, architecture design, UI/UX, and more.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg my-4 pt-4 px-4">
                                <img className="w-full" src="/images/71e9d85c-f39b-45a8-8eee-918b9f5c44d5.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Mobile Application Development</h1>                      
                                    <p className="text-gray-700 text-base">N-iX builds custom mass-market mobile applications and
                                     enterprise mobility solutions across all major platforms. We deliver full-cycle mobile development
                                      services, including concept, UI/UX design, prototyping, programming, testing, and maintenance.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg  my-4 pt-4 px-4">
                                <img className="w-full" src="/images/6e924c68-2c2a-4292-9da6-af682d68200a.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">OpenText Professional Services</h1>                      
                                    <p className="text-gray-700 text-base">Our OpenText Professional services allow companies to streamline
                                     their business processes and improve operational efficiency with OpenText based solutions. Our technical 
                                     consultants have implemented hundreds of Enterprise Content Management and Customer Communications Management
                                      solutions for enterprises across the globe.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg my-4 pt-4 px-4">
                                <img className="w-full" src="/images/sap-consulting.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">SAP Consulting</h1>                      
                                    <p className="text-gray-700 text-base">N-iX helps enterprises drive full business value from their SAP investment.
                                     Our qualified SAP consultants and ABAP developers implement SAP and OpenText integrations, extend the existing product
                                      ecosystems, provide SAP Hybris and SAP HANA development services, and more.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg  my-4 pt-4 px-4">
                                <img className="w-full" src="/images/e7758911-9330-4210-959f-da3d06117723.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Game Development and VR Studio</h1>                      
                                    <p className="text-gray-700 text-base">N-iX Game and VR Studio is part of a Ukraine-based software development company.
                                     We specialize in full-cycle game development with Unity and Unreal Engine and offer art production as a service.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 7 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg my-4 pt-4 px-4">
                                <img className="w-full h-48" src="/images/game-art.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Game Art Production</h1>                      
                                    <p className="text-gray-700 text-base">Our game art professionals deliver excellence at every stage of the
                                     game art production process. N-iX artists apply a diverse toolset to create compelling 3D models and illustrations,
                                      intuitive user interfaces and realistic animations etc. Our art portfolio is full of appealing assets that represent
                                       the quality of our art production services.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 8 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg  my-4 pt-4 px-4">
                                <img className="w-full" src="/images/software-testing.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Software QA & Testing</h1>                      
                                    <p className="text-gray-700 text-base">N-iX software testing services allow companies to scale testing capacity with minimum
                                     effort. We help enterprises substantially reduce the cost of downtime between releases and deploy additional testing resources
                                      during project’s peak loads.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div>
                            {/* 9 */}
                            <div className="md:w-1/2 rounded overflow-hidden shadow-lg  my-4 pt-4 px-4">
                                <img className="w-full" src="/images/technical-support.jpg" alt="image"/>
                                <div className="px-6 py-2 text-center">
                                    <h1 className="font-bold text-gray-900 text-xl mb-2">Technical Support</h1>                      
                                    <p className="text-gray-700 text-base">We provide comprehensive 2nd and 3rd line technical support for customers across diverse 
                                    business domains from our delivery centres in Ukraine and Poland. Our engineers have wide experience in handling technical support
                                     incidents involving product integration, product enhancement, network connectivity, database service, and software issues of any complexity.</p>                        
                                </div>
                                <div className="px-6 py-2 flex justify-center">
                                    <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                    View More
                                    </button>   
                                </div>
                            </div> 
                        </div>                                           
                    </div>
                </div>
                
                
                </div>
            </div>
        );
    }
}