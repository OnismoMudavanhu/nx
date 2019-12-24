import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

import Background from './services.jpg';

var sectionStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: "url(" + Background + ")"
  };

export default class Services extends Component{
   
    render(){
        // receiving props
        const {services} = this.props;
        
        const servicesList =services.length ? (
                            services.map(service=>{
                                return(
                                <div className="md:w-1/2 rounded overflow-hidden shadow-lg hover:shadow-xl my-4 pt-4 px-4" key={service.id}>
                                    <img className="w-full" src={service.imageUrl} alt="image"/>
                                    <div className="px-6 py-2 text-center">
                                        <h1 className="font-bold text-gray-900 text-xl mb-2">{service.title}</h1>                      
                                        <p className="text-gray-700 text-base">{service.desc}</p>                        
                                    </div>
                                    <div className="px-6 py-2 flex justify-center">
                                        <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                        View More
                                        </button>   
                                    </div>
                                </div>
                                )          
                                })
                                )
                            :(
                                <div>
                                    <h1 className="text-red-500">No data</h1>
                                </div>                                
                            )


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
                                
                                {
                                    servicesList
                                }
                                
                            </div>                                           
                        </div>
                    </div>
                
                
                </div>
            </div>
        );
    }
}