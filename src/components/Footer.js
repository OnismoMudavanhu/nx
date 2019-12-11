import React,{Component} from 'react';
export default class Footer extends Component{
    render() {
        return(
            <div className="bg-black text-gray-100">
                <div className="mx-20">
                    <div className="flex">
                        <div className="w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">SERVICES</h1>
                            <ul className="pt-4">
                                <li><a href="#">Dedicated Development</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Software Product</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Mobile Application</a></li>
                            </ul>
                        </div>
                        <div className="w-1/6"></div>
                        <div className="w-1/6"></div>
                        <div className="w-1/6"></div>
                        <div className="w-1/6"></div>
                        <div className="w-1/6"></div>
                    </div>
                    <h1>Copyright © 2016 - 2019 N-X digital solutions</h1>
                </div>
                
            </div>
        );
    }
}