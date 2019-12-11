import React,{Component} from  'react';


export default class ConsumerElec extends Component{
    render() {
        const {recommended} = this.props;
        const recommendedList = recommended.map(recommended=>{
            return(
                <div className="w-full mt-6 flex">
                    <img src={recommended.product_image} className="h-16"/>
                    <div className="px-4 text-sm">
                        <a href="#" className="text-blue-700 hover:text-orange-500">{recommended.description}</a>
                        <p>{recommended.price}</p> 
                    </div>                                
                </div>
            )
        })





        return(
        <div className=" ">
        <div className="hidden lg:block my-8 mx-8 bg-white shadow-md">
            {/* Top bar START */}
            <div className="flex border-b border-gray-300 p-2 ">
                <a href="#" className="w-1/4 px-6">
                    <i className="fa fa-camera-retro fa-lg"></i>
                    <span className="text-gray-900 text-xl px-3">Consumer Electronic</span>
                </a>
                <ul className="w-3/4 flex px-10 justify-end">
                    <li className="hover:text-orange-500">
                        <a href="#">Accessories and Parts</a>
                    </li>
                    <li className="px-10 hover:text-orange-500"><a href="#">Home Audio and Video</a></li>
                    <li className="hover:text-orange-500"><a href="#">Camera</a></li>
                    <li className="px-10 hover:text-orange-500"><a href="#">Video Games</a></li>
                    <li className="hover:text-orange-500"><a href="#">Smart Electronics</a></li>
                </ul>
            </div>
            {/* Top bar END */}

            {/* Bottom START */}
            <div className=" flex ">
            {/* left START */}
                <div className="border-r border-gray-300 px-6 w-full max-w-4xl ">
                    <div className="carousel relative  h-64 bg-gray-100 mt-6">
                        
                        {/* Carousel */}
                        <div className="carousel-inner relative overflow-hidden w-full ">
                            <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
                            <div className="carousel-item absolute opacity-0" >
                                {/* <img src="/images/b1-1.jpg" className="block h-full w-full  text-white text-5xl text-center bg-cover"/> */}
                                <div className="block h-full w-full  text-white text-5xl text-center imageOne"></div>
                            </div>
                            <label for="carousel-3" className="prev control-1 w-10 h-10  absolute cursor-pointer hidden text-3xl font-light text-black hover:text-white  bg-gray-400 hover:bg-gray-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                            <label for="carousel-2" className="next control-1 w-10 h-10 absolute cursor-pointer hidden text-3xl font-light text-black hover:text-white  bg-gray-400 hover:bg-gray-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                            {/* Slide 2 */}
                            <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
                            <div className="carousel-item absolute opacity-0" >
                                <div className="block h-full w-full  text-white text-5xl text-center imageTwo"></div>
                            </div>
                            <label for="carousel-1" className="prev control-2 w-10 h-10  absolute cursor-pointer hidden text-3xl font-light text-black hover:text-white bg-gray-400 hover:bg-gray-500 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                            <label for="carousel-3" className="next control-2 w-10 h-10  absolute cursor-pointer hidden text-3xl font-light text-black hover:text-white bg-gray-400 hover:bg-gray-500 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


                            <ol className="carousel-indicators">
                                <li className="inline-block mr-3">
                                    <label for="carousel-1" className="carousel-bullet cursor-pointer block text-5xl text-white hover:text-orange-500">•</label>
                                </li>
                                <li className="inline-block mr-3">
                                    <label for="carousel-2" className="carousel-bullet cursor-pointer block text-5xl text-white hover:text-orange-500">•</label>
                                </li>
			
		                    </ol>
                        </div>

                        {/* Carousel */}
                    </div>
                    <div className=" w-full max-w-4xl ">
                    <hr className="border-r border-gray-300 w-full mt-4"></hr>
                        <ul className="flex mt-6">
                            <li><a href="#" className="pr-8">New Arrivals</a></li>
                            <li><a href="#" className="pr-8">Best Seller</a></li>
                            <li><a href="#" className="pr-8">Sale</a></li>
                            <li><a href="#">Featured Product</a></li>
                        </ul>
                        
                    </div>
                    <div className="w-full max-w-4xl   mt-6">



                        {/* Top START */}
                        <div className="flex font-semibold">
                            <div className="w-1/3 border border-r-0 ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/download-3.jpg" className=""/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">USB OTG (On-The-Go) an extension of the USB 2.0 specification for connecting peripheral devices to each other.</a>
                                    <p className="py-1 text-red-600"> $3.00</p>
                                </div>
                            </div>
                            <div className="w-1/3 border border-r-0 ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/b23243fe-969f-46a9-87c0-it151c394dcb8c-480x480.jpg"/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">itel P33 brand new cell phone built-in battery have both back and front camera</a>
                                    
                                    <p className="py-1 text-red-600"> $130.00</p>
                                </div>
                            </div>
                            <div className="w-1/3 border border-r-0 ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/IMG-20190703-WA0086-480x480.jpg"/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm mb-6">
                                    <a href="#" className="text-blue-700 hover:text-orange-500 uppercase">Nesty wireless bluetooth speaker ox cable fm radio tf card</a>         
                                    <p className="py-1 text-red-600">$48.00</p>
                                </div>
                            </div>
                            <div className="w-1/3 border ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/IMG-20190604-WA0013-480x480.jpg"/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm mb-6">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">Nesty bluetooth speaker fm ox cable</a>         
                                    <p className="py-1 text-red-600">$35.00</p>
                                </div>
                            </div>

                        </div>
                        {/* Top END */}



                    </div>
                </div>
                {/* left END */}

                {/* right START */}
                <div className="w-full max-w-xs px-6 mt-4 font-semibold">
                    <span className="">Recommended For You</span>
                    <hr className="border-r border-gray-300 px-6 w-3/3 mt-4"></hr>


                    {recommendedList.slice(0,5)}



                    {/* <div className="w-full mt-6 flex">
                        <img src="/images/kente_cloth_grande-150x150.jpg" className="h-16"/>
                        <div className="px-4 text-sm">
                            <a href="#" className="text-blue-700 hover:text-orange-500">AFRICAN FABRICS 101: KENTE CLOTH</a>
                            <p>$100.00</p> 
                        </div>                                
                    </div>
                    <div className="w-full mt-6 flex">
                        <img src="/images/Sexy-Classy-Fitted-Black-African-Dashiki-Print-Sleeveless-Dress-Pictures-539x741-150x150.jpg" className="h-16"/>
                        <div className="px-4 text-sm">
                            <a href="#" className="text-blue-700 hover:text-orange-500">KLASSY - SEXY, CLASSY, FITTED BLACK AFRICAN DASHIKI PRINT SLEEVELESS DRESS</a>
                            <p>$130.00</p> 
                        </div>                                
                    </div>
                    <div className="w-full mt-6 flex">
                        <img src="/images/unique-classy-ultra-flattering-high-low-west-african-ankara-print-jumpsuit-485x741-150x150.jpg" className="h-16"/>
                        <div className="px-4 text-sm">
                            <a href="#" className="text-blue-700 hover:text-orange-500">AFREAKA - UNIQUE, CLASSY ULTRA- FLATTERING HIGH- LOW WEST AFRICAN ANKARA PRINT JUMPSUIT</a>
                            <p>$210.34</p> 
                        </div>                                
                    </div>
                    <div className="w-full mt-6 flex">
                        <img src="/images/vintage-small-store-interior-design-medicine-retail-shop-018-1-825x550-150x150.jpg" className="h-16"/>
                        <div className="px-4 text-sm">
                            <a href="#" className="text-blue-700 hover:text-orange-500">AUTHENTIC AFRICAN WAX PRINT ANKARA EYELETS HIGH HEEL SHOES W/ MATCHING HANDBAG</a>
                            <p>$149.54</p> 
                        </div>                                
                    </div>
                    <div className="w-full mt-6 flex">
                        <img src="/images/Authentic-Unique-Dashiki-Handbag-Black-Front-555x416-150x150.jpg" className="h-16"/>
                        <div className="px-4 text-sm">
                            <a href="#" className="text-blue-700 hover:text-orange-500">AUTHENTIC, HANDMADE DASHIKI HANDBAG WITH WOOD HANDLE - BLACK</a>
                            <p>$60.00</p> 
                        </div>                                
                    </div> */}
                    
                    <a href="#" className="float-right p-6" >View More ></a>

                </div>
                {/* right END */}

            </div>
            {/* Bottom END */}

        </div>




        {/* For md */}
        {/* Top bar START */}
        <div className="hidden shadow-md md:block lg:hidden bg-white mx-4">
            {/* Top bar START */}
            <div className=" border-b border-gray-300 p-2">
                <a href="#" className="ml-2">
                    <i className="fa fa-camera-retro fa-lg"></i>
                    <span className="text-gray-900 text-xl px-3">Consumer Electronic</span>
                </a>
                <ul className="w-full flex text-sm ml-2 py-2">
                    <li className="hover:text-orange-500">
                        <a href="#">Accessories and Parts</a>
                    </li>
                    <li className="ml-10 hover:text-orange-500"><a href="#">Home Audio and Video</a></li>
                    <li className="ml-10 hover:text-orange-500"><a href="#">Camera</a></li>
                    <li className="ml-10 hover:text-orange-500"><a href="#">Video Games</a></li>
                    <li className="ml-10 hover:text-orange-500"><a href="#">Smart Electronics</a></li>
                </ul>
                <hr className="border-gray-300 w-full mt-4"></hr>
                <div className=" w-full px-2">                    
                    <div className=" w-full ">
                        <ul className="flex mt-6 ">
                            <li><a href="#" className="mr-8">New Arrivals</a></li>
                            <li><a href="#" className="mr-8">Best Seller</a></li>
                            <li><a href="#" className="mr-8">Sale</a></li>
                            <li><a href="#">Featured Product</a></li>
                        </ul>
                        {/* <hr className="border-r border-gray-300 w-full mt-4"></hr> */}
                    </div>
                    <div className="w-full max-w-4xl mt-6">


                        {/* Top START */}
                        <div className="flex font-semibold">
                            <div className="w-1/3 border border-r-0 ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/download-3.jpg" className=""/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">USB OTG (On-The-Go) an extension of the USB 2.0 specification for connecting peripheral devices to each other.</a>
                                    <p className="py-1 text-red-600"> $3.00</p>
                                </div>
                            </div>
                            <div className="w-1/3 border border-r-0 ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/b23243fe-969f-46a9-87c0-it151c394dcb8c-480x480.jpg"/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">itel P33 brand new cell phone built-in battery have both back and front camera</a>
                                    
                                    <p className="py-1 text-red-600"> $130.00</p>
                                </div>
                            </div>
                            <div className="w-1/3 border">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/IMG-20190703-WA0086-480x480.jpg"/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm mb-6">
                                    <a href="#" className="text-blue-700 hover:text-orange-500 uppercase">Nesty wireless bluetooth speaker ox cable fm radio tf card</a>         
                                    <p className="py-1 text-red-600">$48.00</p>
                                </div>
                            </div>
                            

                        </div>
                        {/* Top END */}


                    </div>

                    <div className="w-full mt-4">
                        <span className="">Recommended For You</span>
                        <hr className="border-gray-300 px-6 mt-4"></hr>

                        <div className="w-full mt-6 flex">
                            <img src="/images/kente_cloth_grande-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AFRICAN FABRICS 101: KENTE CLOTH</a>
                                <p>$100.00</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/Sexy-Classy-Fitted-Black-African-Dashiki-Print-Sleeveless-Dress-Pictures-539x741-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">KLASSY - SEXY, CLASSY, FITTED BLACK AFRICAN DASHIKI PRINT SLEEVELESS DRESS</a>
                                <p>$130.00</p> 
                             </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/unique-classy-ultra-flattering-high-low-west-african-ankara-print-jumpsuit-485x741-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AFREAKA - UNIQUE, CLASSY ULTRA- FLATTERING HIGH- LOW WEST AFRICAN ANKARA PRINT JUMPSUIT</a>
                                <p>$210.34</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/vintage-small-store-interior-design-medicine-retail-shop-018-1-825x550-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AUTHENTIC AFRICAN WAX PRINT ANKARA EYELETS HIGH HEEL SHOES W/ MATCHING HANDBAG</a>
                                <p>$149.54</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/Authentic-Unique-Dashiki-Handbag-Black-Front-555x416-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AUTHENTIC, HANDMADE DASHIKI HANDBAG WITH WOOD HANDLE - BLACK</a>
                                <p>$60.00</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-4 mb-4 flex">
                            <a href="#" className="" >View More ></a>
                        </div>
                                            

                    </div>

                </div>
                
            </div>
            {/* Top bar END */}                 
               

        </div>


        {/* For sm */}
        {/* Top bar START */}
        <div className="lg:hidden md:hidden bg-white mx-4">
            {/* Top bar START */}
            <div class=" border-b border-gray-300 p-2">
                <a href="#" className="ml-2">
                    <i className="fa fa-camera-retro fa-lg"></i>
                    <span className="text-gray-900 text-xl px-3">Consumer Electronic</span>
                </a>
                <ul class="w-full flex flex-wrap text-sm ml-2 py-2">
                    <li className="hover:text-orange-500">
                        <a href="#">Accessories and Parts</a>
                    </li>
                    <li className="ml-4 hover:text-orange-500"><a href="#">Home Audio and Video</a></li>
                    <li className="ml-4 hover:text-orange-500"><a href="#">Camera</a></li>
                    <li className="ml-4 hover:text-orange-500"><a href="#">Video Games</a></li>
                    <li className="ml-4 hover:text-orange-500"><a href="#">Smart Electronics</a></li>
                </ul>
                <hr className="border-gray-300 w-full mt-4"></hr>
                <div className=" w-full px-2">                    
                    <div className=" w-full ">
                        <ul className="flex flex-wrap mt-6">
                            <li className=""><a href="#" className="mr-8">New Arrivals</a></li>
                            <li><a href="#" className="mr-8">Best Seller</a></li>
                            <li><a href="#" className="mr-8">Sale</a></li>
                            <li><a href="#">Featured Product</a></li>
                        </ul>
                        
                    </div>
                    <div className="w-full max-w-4xl mt-6">

                         {/* Top START */}
                         <div className="flex font-semibold">
                            <div className="w-1/2 border border-r-0 ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/download-3.jpg" className=""/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">USB OTG (On-The-Go) an extension of the USB 2.0 specification for connecting peripheral devices to each other.</a>
                                    <p className="py-1 text-red-600"> $3.00</p>
                                </div>
                            </div>
                            <div className="w-1/2 border ">
                                <div className="ml-6 mr-6 mt-4">
                                    <a href="#"><img src="/images/b23243fe-969f-46a9-87c0-it151c394dcb8c-480x480.jpg"/></a>
                                </div>
                                <div className="ml-6 mr-6 mt-2 text-sm">
                                    <a href="#" className="text-blue-700 hover:text-orange-500">itel P33 brand new cell phone built-in battery have both back and front camera</a>
                                    
                                    <p className="py-1 text-red-600"> $130.00</p>
                                </div>
                            </div>
                            
                            

                        </div>
                        {/* Top END */}

                    </div>

                    <div className="w-full mt-4 font-semibold">
                        <span className="">Recommended For You</span>
                        <hr className="border-gray-300 px-6 mt-4"></hr>

                        <div className="w-full mt-6 flex">
                            <img src="/images/kente_cloth_grande-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AFRICAN FABRICS 101: KENTE CLOTH</a>
                                <p>$100.00</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/Sexy-Classy-Fitted-Black-African-Dashiki-Print-Sleeveless-Dress-Pictures-539x741-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">KLASSY - SEXY, CLASSY, FITTED BLACK AFRICAN DASHIKI PRINT SLEEVELESS DRESS</a>
                                <p>$130.00</p> 
                             </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/unique-classy-ultra-flattering-high-low-west-african-ankara-print-jumpsuit-485x741-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AFREAKA - UNIQUE, CLASSY ULTRA- FLATTERING HIGH- LOW WEST AFRICAN ANKARA PRINT JUMPSUIT</a>
                                <p>$210.34</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/vintage-small-store-interior-design-medicine-retail-shop-018-1-825x550-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AUTHENTIC AFRICAN WAX PRINT ANKARA EYELETS HIGH HEEL SHOES W/ MATCHING HANDBAG</a>
                                <p>$149.54</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-6 flex">
                            <img src="/images/Authentic-Unique-Dashiki-Handbag-Black-Front-555x416-150x150.jpg" className="h-16"/>
                            <div className="px-4 text-sm">
                                <a href="#" className="text-blue-700 hover:text-orange-500">AUTHENTIC, HANDMADE DASHIKI HANDBAG WITH WOOD HANDLE - BLACK</a>
                                <p>$60.00</p> 
                            </div>                                
                        </div>
                        <div className="w-full mt-4 mb-4 flex">
                            <a href="#" className="" >View More ></a>
                        </div>
                                            

                    </div>

                </div>
                
            </div>
            {/* Top bar END */}                 
               

        </div>        
            

        </div>
        );
    }
}