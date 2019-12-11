import React,{Component} from  'react';


export default class Men extends Component{
    render() {
        const {men} = this.props;
        const menList = men.map(man=>{
            return(
                <div className="w-1/2 md:w-1/3 border border-r-0 border-b-0">
                    <div className="ml-6 mr-6 mt-4">
                        <a href="#"><img src={man.product_image} className=""/></a>
                    </div>
                    <div className="px-1 -mt-24 ml-24  lg:w-12 md:-mt-32 md:ml-32 lg:-mt-48 lg:ml-40 bg-orange-600 text-white absolute  rounded">
                        <a href="#" className="flex justify-center ">{man.discount}</a>
                    </div>
                    <div className="ml-6 mr-6 mt-2 text-sm">
                        <a href="#" className="text-blue-700 hover:text-orange-500">{man.description}</a>
                        <p className="py-1 text-red-600">{man.price}</p>
                    </div>
                </div>
            )
        })




        return(
        <div className="">
            <div className="hidden lg:block mx-8 bg-white  mt-10 shadow-md">
                <div className="bg-white  flex font-semibold">
                    <div className="w-1/6 ml-6 pt-4">
                        <span className=" text-2xl">Men</span>
                        <ul className="mt-6 text-sm">
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Best Seller</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Top</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Shoe For Men</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Accessories For Men</a></li>
                            <li className="py-1 w-3/4"><a href="#" className="hover:text-orange-500 ">Bottoms For Men</a></li>
                            <li class="py-1"><a href="#" class="hover:text-orange-500">Suits</a></li>
                            <li class="py-1"><a href="#" class="hover:text-orange-500">Underwear and Nightwear</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <img src="/images/men-cloths-banner-shop.jpg" />
                    </div>
                    {/* Tiles START */}
                    <div className="w-3/5">
                        {/* Top START */}
                        <div className="flex">
                           
                           {menList.slice(0,3)}     

                        </div>
                        {/* Top END */}
                        {/* Bottom START */}
                        <div class="flex">
                            
                            
                        {menList.slice(3,7)} 
                           
                        </div>
                        {/* Bottom END */}

                    </div>
                    {/* Tiles END */}
                </div>
            </div>

            {/* md Screens */}
            <div className="mt-10  hidden md:block lg:hidden ">
                <div className="bg-white shadow-md  flex mx-4 font-semibold">
                    <div className="w-3/12   ml-6 pt-4">
                        <span className=" text-2xl">Men</span>
                        <ul className="mt-6 text-sm">
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Best Seller</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Top</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Shoe For Men</a></li>
                            <li className="py-1"><a href="#" className="hover:text-orange-500">Accessories For Men</a></li>
                            <li className="py-1 w-3/4"><a href="#" className="hover:text-orange-500 ">Bottoms For Men</a></li>
                            <li class="py-1"><a href="#" class="hover:text-orange-500">Suits</a></li>
                            <li class="py-1"><a href="#" class="hover:text-orange-500">Underwear and Nightwear</a></li>
                        </ul>
                    </div>
                    
                    {/* Tiles START */}
                    <div className="w-4/5">
                        {/* Top START */}
                        <div className="flex">
                            
                            {menList.slice(0,3)} 
                            

                        </div>
                        {/* Top END */}
                        {/* Bottom START */}
                        <div class="flex">
                            
                            {menList.slice(3,7)} 
                            
                        </div>
                        {/* Bottom END */}

                    </div>
                    {/* Tiles END */}
                </div>
            </div>


            {/* sm screens */}
            <div className="mt-10 shadow-lg md:hidden lg:hidden mx-4">
                <div className="bg-white font-semibold">
                    <h1 className=" text-xl ml-4 pt-4">Men</h1>

                    <ul className="w-full flex flex-wrap mt-6 text-sm flex px-4">
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Best Seller</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Top</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Shoe For Men</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500">Accessories For Men</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li className="py-1"><a href="#" className="hover:text-orange-500 ">Bottoms For Men</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li class="py-1"><a href="#" class="hover:text-orange-500">Suits</a></li>
                        <li className="py-1 ml-2 mr-2">|</li>
                        <li class="py-1"><a href="#" class="hover:text-orange-500">Underwear and Nightwear</a></li>
                    </ul>
                    <hr className="border-gray-300 w-full mt-4"></hr>
                    <div class="">
                        <div class="flex flex-wrap -mx-2">                       
                           
                            {menList.slice(0,7)}                           
                            
                        </div>
                    </div>

                </div>
            </div> 



        </div>
        );
    }
}