import React,{Component} from  'react';


export default class Jewellery extends Component{
    render() {

        const {jewellery} = this.props;
        const jewelleryList = jewellery.map(jew=>{
            return(
                <div className="w-1/2 md:w-1/3 border border-r-0 border-b-0">
                    <div className="ml-6 mr-6 mt-4">
                        <a href="#"><img src={jew.product_image} className=""/></a>
                    </div>
                    <div className="px-1 -mt-24 ml-24  bg-orange-600 text-white absolute md:-mt-20 md:ml-16 lg:-mt-32 lg:ml-24 rounded">
                        <a href="#" className="flex justify-center ">{jew.discount}</a>
                    </div>
                    <div className="ml-6 mr-6 mt-2 text-sm">
                        <a href="#" className="text-blue-700 hover:text-orange-500">{jew.description}</a>
                        <p className="py-1 text-gray-900"> {jew.price} </p>
                    </div>
                </div>
            )
        })




        return(
        <div className="">
            <div className="hidden lg:block mx-8 bg-white  mt-10 shadow-md">
                <div className="flex font-semibold">
                    <div className="w-1/6 ml-6 pt-4">
                        <span className=" text-2xl">Jewellery And Watches</span>
                        <ul className="mt-6 text-sm">
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Best Seller</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Jewelleries For Men</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Jewelleries For Women</a></li>                            
                        </ul>
                    </div>
                    <div className="">
                        <img src="/images/female-watches-banner-shop-1.jpg" />
                    </div>
                    {/* Tiles START */}
                    <div className="w-3/5 ">
                        {/* Top START */}
                        <div className="flex">

                            {jewelleryList.slice(0,4)}

                        </div>
                        {/* Top END */}
                        {/* middle START */}
                        <div class="flex">
                            
                            {jewelleryList.slice(4,8)}
                            
                        </div>
                        {/* Middle END */}
                        {/* Bottom START */}
                        <div class="flex">
                           
                            {jewelleryList.slice(8,12)}
                            
                        </div>
                        {/* Bottom END */}
                        

                    </div>
                    {/* Tiles END */}
                </div>
            </div>

            {/* md Screens */}
            <div className="hidden md:block lg:hidden container mx-auto  mt-10 ">
                <div className="bg-white shadow-md flex mx-4 font-semibold">
                    <div className="w-3/12 ml-6 pt-4">
                        <span className=" text-2xl">Jewellery And Watches</span>
                        <ul className="mt-6 text-sm">
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Best Seller</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Jewelleries For Men</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Jewelleries For Women</a></li>                            
                        </ul>
                    </div>
                    
                    {/* Tiles START */}
                    <div className="w-4/5">
                        {/* Top START */}
                        <div className="flex">
                                                                                  
                         {jewelleryList.slice(0,4)}

                        </div>
                        {/* Top END */}
                        {/* middle START */}
                        <div class="flex">
                                                                                   
                            {jewelleryList.slice(4,8)}

                        </div>
                        {/* Middle END */}
                        {/* Bottom START */}
                        <div class="flex">
                        
                            {jewelleryList.slice(8,12)}                            
                           
                        </div>
                        {/* Bottom END */}
                        

                    </div>
                    {/* Tiles END */}
                </div>
            </div>


            {/* sm screens */}
            <div className="mt-10 shadow-lg md:hidden lg:hidden mx-4">
                <div className="bg-white font-semibold">
                    <h1 className=" text-xl ml-4 pt-4">Jewellery And Watches</h1>

                    <ul className="w-full flex flex-wrap mt-6 text-sm flex px-4">
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Best Seller</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Jewelleries For Men</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Jewelleries For Women</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>                                                                   
                    </ul>
                    <hr className="border-gray-300 w-full mt-4"></hr>
                    <div class="">
                        <div class="flex flex-wrap -mx-2">


                            {jewelleryList.slice(0,13)}


                            
                            
                            
                            
                            
                            
                            
                            
                            
                            {/* <div class="w-1/2">
                                <div class="ml-6 mr-6 mt-4">
                                    <img src="/images/14605-81c113-480x480.jpg"/>
                                </div>
                                <div className="w-12 bg-orange-600 text-white absolute -mt-24 ml-24">
                                    <a href="#" className="flex justify-center rounded">-9%</a>
                                </div>
                                <div class="ml-6 mr-6 mt-2 text-sm">
                                    <h1 class="text-blue-700">SOUTHBERG Luxury Fashion Mens Watches Quartz Steel Top Brand Wrist Watch For Man relogio masculino</h1>                                           
                                    <p class="py-1 text-red-600">$22.50</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div> 



        </div>
        );
    }
}