import React,{Component} from 'react';
export  default class NavBar  extends Component{

    render() {
    return(
        <div>
            {/* sm screen */}
            {/* logo START */}
            <div className="lg:hidden flex justify-between h-16 text-center">
                <a href="#" className="flex  mx-4 items-center">                        
                    <span className="text-white font-sans text-2xl font-bold nxText">N-</span>
                    <span className="text-black font-black font-sans text-2xl">X</span>
                    {/* <img src='/images/fa-logo-01.png' alt="FLEXI-AFRICA LOGO" /> */}
                </a>
                <div className="flex  mx-4 items-center">                        
                    <span className="fa fa-bars fa-2x  mt-1 lg:hidden "></span>                    
                </div>
            </div>
                {/* logo END */}

            {/* on large screens */}
        <nav className="h-16 w-full  shadow-xl fixed bg-gray-200 hidden lg:block">
            <ul className="flex flex-wrap justify-between mx-20">
                {/* logo START */}
                <li className=" ">
                    <a href="#" className="flex justify-center">                        
                        <span className="text-white font-sans text-4xl font-bold nxText">N-</span>
                        <span className="text-black font-black font-sans text-4xl">X</span>
                        {/* <img src='/images/fa-logo-01.png' alt="FLEXI-AFRICA LOGO" /> */}
                    </a>
                </li>
                {/* logo END */}

                {/* nav */}
                <li className="py-4">
                    <a href="#" className="hover:text-orange-600 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> Services</div>
                    </a>
                </li>
                <li className="py-4">
                    <a href="#" className="hover:text-orange-600 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> expertise</div>
                    </a>
                </li>
                <li className="py-4">
                    <a href="#" className="hover:text-orange-600 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> industries</div>
                    </a>
                </li>
                <li className="py-4">
                    <a href="#" className="hover:text-orange-600 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> technologies</div>
                    </a>
                </li>
                <li className="py-4 ">
                    <a href="#" className="hover:text-orange-600 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> success stories</div>
                    </a>
                </li>
                <li className="py-4 ">
                    <a href="#" className="hover:text-orange-600 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> company</div>
                    </a>
                </li>
                <li className="navb hover:bg-gray-900 px-2">
                    <a href="#" className="py-5 text-gray-200 flex justify-around flex-auto">
                        <div className=" font-bold text-sm uppercase"> Contact us</div>
                    </a>
                </li>
                {/* nav END */}
            </ul>
        </nav>       
        
        </div>
    );
    }
}