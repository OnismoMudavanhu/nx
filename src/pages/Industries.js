import React, {Component} from 'react';
import Background from './industries.jpg';

var sectionStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: "url(" + Background + ")"
  };

export default class Industries extends Component{
    render(){
        // industries
        const {industries}=this.props;

        const industriesList=industries.length ?(
                            industries.map(ind=>{
                                return(
                                    <div className="md:w-1/2 rounded overflow-hidden shadow-lg hover:shadow-xl my-4 pt-4 px-4" key={ind.id}>
                                        <img className="w-full" src={ind.imageUrl} alt="image"/>
                                        <div className="px-6 py-2 text-center">
                                            <h1 className="font-bold text-gray-900 text-xl mb-2">{ind.title}</h1>                      
                                            <p className="text-gray-700 text-base">{ind.desc}</p>                        
                                        </div>
                                        <div className="px-6 py-2 flex justify-center">
                                            <button className="inline-block navb rounded-full px-3 py-1 text-sm font-semibold text-white">
                                            View More
                                            </button>   
                                        </div>
                                    </div>
                                )
                            })
                            ):(
                                <div>
                                    <h1 className="text-red-500">No data</h1>
                                </div>
                            )


        return(
            <div className="">
                <section style={ sectionStyle }>
                    <div className="pt-10 lg:pt-20 mx-4 md:mx-20">
                       <h1 className="text-2xl md:text-5xl text-gray-200 font-semibold text-center">Industries</h1>
                       </div>
                </section>
                <div>
                    <div className="mt-16">
                        <div className="mx-4 md:mx-20">
                            <div className="flex flex-wrap">
                                
                                {
                                    industriesList
                                }
                                
                            </div>                                           
                        </div>
                    </div>
                
                
                </div>
            </div>
        );
    }
}