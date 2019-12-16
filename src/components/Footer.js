import React,{Component} from 'react';
export default class Footer extends Component{
    render() {
        return(
            <div className="bg-black text-gray-100">
                <div className="mx-4 md:mx-20">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-1/2 md:w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">SERVICES</h1>
                            <ul className="pt-4">
                                <li><a href="#" className="hover:underline">Dedicated Development Team</a></li>
                                <li><a href="#" className="hover:underline">Software Product Development</a></li>
                                <li><a href="#" className="hover:underline">Mobile Application Development</a></li>
                                <li><a href="#" className="hover:underline">OpenText Professional Services</a></li>
                                <li><a href="#" className="hover:underline">SAP Consulting</a></li>
                                <li><a href="#" className="hover:underline">Game Development & VR</a></li>
                                <li><a href="#" className="hover:underline">Game Art Production</a></li>
                                <li><a href="#" className="hover:underline">Software QA & Testing</a></li>
                                <li><a href="#" className="hover:underline">Technical Support</a></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">EXPERTISE</h1>
                            <ul className="pt-4">
                                <li><a href="#" className="hover:underline">Digital Transformation</a></li>
                                <li><a href="#" className="hover:underline">Business Intelligence</a></li>
                                <li><a href="#" className="hover:underline">Machine Learning & AI</a></li>
                                <li><a href="#" className="hover:underline">Data Science</a></li>
                                <li><a href="#" className="hover:underline">Big Data</a></li>
                                <li><a href="#" className="hover:underline">Blockchain</a></li>
                                <li><a href="#" className="hover:underline">Virtual Reality</a></li>
                                <li><a href="#" className="hover:underline">Enterprise VR Production</a></li>
                                <li><a href="#" className="hover:underline">Enterprise Mobility</a></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">INDUSTRIES</h1>
                            <ul className="pt-4">
                                <li><a href="#" className="hover:underline">FinTech</a></li>
                                <li><a href="#" className="hover:underline">InsurTech</a></li>
                                <li><a href="#" className="hover:underline">Finance & Banking</a></li>
                                <li><a href="#" className="hover:underline">Hi-Tech</a></li>
                                <li><a href="#" className="hover:underline">Telecom</a></li>
                                <li><a href="#" className="hover:underline">Media & Entertainment</a></li>
                                <li><a href="#" className="hover:underline">Healthcare</a></li>
                                <li><a href="#" className="hover:underline">Hospitality</a></li>
                                <li><a href="#" className="hover:underline">Education</a></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">TECHNOLOGIES</h1>
                            <ul className="pt-4">
                                <li><a href="#" className="hover:underline">Java</a></li>
                                <li><a href="#" className="hover:underline">JavaScript</a></li>
                                <li><a href="#" className="hover:underline">Python</a></li>
                                <li><a href="#" className="hover:underline">Php</a></li>
                                <li><a href="#" className="hover:underline">Android</a></li>
                                <li><a href="#" className="hover:underline">Dart</a></li>
                                <li><a href="#" className="hover:underline">.NET</a></li>
                                <li><a href="#" className="hover:underline">Scala</a></li>
                                <li><a href="#" className="hover:underline">Ruby</a></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">STORIES</h1>
                            <ul className="pt-4">
                                <li><a href="#" className="hover:underline">Clients</a></li>
                                <li><a href="#" className="hover:underline">Case Studies</a></li>
                                <li><a href="#" className="hover:underline">Articles</a></li>
                                
                                <li className="pt-6"><a href="#">Call us at:</a></li>
                                <li><a href="#" className="hover:underline">+380 322 295 767</a></li>

                                <li className="pt-10"><a href="#" className="">Follow us on:</a></li>                                
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/6 pt-10">
                            <h1 className="font-semibold text-gray-100">COMPANY</h1>
                            <ul className="pt-4">
                                <li><a href="#" className="hover:underline">Company Overview</a></li>
                                <li><a href="#" className="hover:underline">Industry Recognition</a></li>
                                <li><a href="#" className="hover:underline">News</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>                                
                            </ul>
                        </div>
                    </div>
                    <h1 className="pt-16">Copyright © 2016 - 2019 N-X digital solutions</h1>
                </div>
                
            </div>
        );
    }
}