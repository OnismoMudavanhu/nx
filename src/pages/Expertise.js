import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

import Background from './expertise.jpg';

var sectionStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: "url(" + Background + ")"
  };

export default class Expertise extends Component{
    render(){
        return(
            <div className="">
                <section style={ sectionStyle }>
                    <div className="pt-10 lg:pt-20 mx-4 md:mx-20">
                        <div className="text-gray-100 font-semibold">
                            <span className="hover:underline"><Link to="/">Home</Link></span><span className="text-gray-600 px-2 text-xs">></span><span>Expertise</span>
                        </div>
                       <h1 className="text-2xl md:text-5xl text-gray-200 font-semibold text-center">Expertise</h1>
                       </div>
                </section>
                expertise
            </div>
        );
    }
}