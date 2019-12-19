import React, {Component} from 'react';
import Background from './expertise.jpg';

var sectionStyle = {
    width: "100%",
    height: "550px",
    backgroundImage: "url(" + Background + ")"
  };

export default class Expertise extends Component{
    render(){
        return(
            <div className="">
                <section style={ sectionStyle }>
                    <div className="pt-10 lg:pt-32 mx-4 md:mx-20">
                       <h1 className="text-2xl md:text-5xl text-gray-200 font-semibold text-center">Expertise</h1>
                       </div>
                </section>
                expertise
            </div>
        );
    }
}