import React,{Component} from  'react';
export default class BannerImage extends Component{
    render() {
        return(
        <div>
              {/*for large screens  */}
            <div className="lg:flex flex-row bg-white shadow-md my-5 mx-8 h-32 hidden items-center ">
                <div className="w-1/4 flex flex-row my-4">
                    <span className=" flexi-color mx-4 fa fa-ship fa-3x"></span>
                    <div className="flex-col">
                        <h1 className="font-bold">Fast Delivery</h1>
                        <p className="font-medium text-gray-700">For all orders</p>
                    </div>

                </div>
                <div className="w-1/4 flex flex-row my-4">
                    <span className=" flexi-color mx-4 fa fa-refresh fa-3x"></span>
                    <div className="flex-col">
                        <h1 className="font-bold">30 Days Return</h1>
                        <p className="font-medium text-gray-700">If goods have problems</p>
                    </div>

                </div>
                <div className="w-1/4 flex flex-row my-4">
                    <span className=" flexi-color mx-4 fa fa-credit-card-alt fa-3x"></span>
                    <div className="flex-col">
                        <h1 className="font-bold">Secure Payment</h1>
                        <p className="font-medium text-gray-700">100% Secure Payment.</p>
                    </div>

                </div>
                <div className="w-1/4 flex flex-row my-4">
                    <span className=" flexi-color mx-4 fa fa-comments-o fa-3x"></span>
                    <div className="flex-col">
                        <h1 className="font-bold">24/7 Support</h1>
                        <p className="font-medium text-gray-700">Dedicated Support.</p>
                    </div>

                </div>
            </div>

            {/*for md screens  */}
            <div className="bg-white hidden md:block lg:hidden shadow-lg my-5 mx-4">
            <div className="p-8">
                <div className="flex justify-start">
                    <div className="w-1/2 flex flex-row my-4 ">
                        <span className=" flexi-color mx-4 fa fa-ship fa-3x"></span>
                        <div className="flex-col">
                            <h1 className="font-bold">Fast Delivery</h1>
                            <p className="font-medium text-gray-700">For all orders</p>
                        </div>

                    </div>
                    <div className="w-1/2 flex flex-row my-4">
                        <span className=" flexi-color mx-4 fa fa-refresh fa-3x"></span>
                        <div className="flex-col">
                            <h1 className="font-bold">30 Days Return</h1>
                            <p className="font-medium text-gray-700">If goods have problems</p>
                        </div>

                    </div>                
                </div>
                
                <div className="flex ">
                    <div className="w-1/2 flex flex-row my-4">
                        <span className=" flexi-color mx-4 fa fa-credit-card-alt fa-3x"></span>
                        <div className="flex-col">
                            <h1 className="font-bold">Secure Payment</h1>
                            <p className="font-medium text-gray-700">100% Secure Payment.</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-row my-4">
                        <span className=" flexi-color mx-4 fa fa-comments-o fa-3x"></span>
                        <div className="flex-col">
                            <h1 className="font-bold">24/7 Support</h1>
                            <p className="font-medium text-gray-700">Dedicated Support.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* for sm screen */}
            <div className="bg-white  md:hidden lg:hidden shadow-lg my-6 mx-4">
                <div className="">
                    <div className="w-full flex flex-row  p-4">
                        <span className=" flexi-color mx-4 fa fa-ship fa-3x"></span>
                        <div className="flex-col ml-4">
                            <h1 className="font-bold">Fast Delivery</h1>
                            <p className="font-medium text-gray-700">For all orders</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row p-4">
                        <span className=" flexi-color mx-4 fa fa-refresh fa-3x"></span>
                        <div className="flex-col ml-6">
                            <h1 className="font-bold">30 Days Return</h1>
                            <p className="font-medium text-gray-700">If goods have problems</p>
                        </div>

                    </div>
                    <div className="w-full flex flex-row p-4">
                        <span className=" flexi-color mx-4 fa fa-credit-card-alt fa-2x"></span>
                        <div className="flex-col ml-6">
                            <h1 className="font-bold">Secure Payment</h1>
                            <p className="font-medium text-gray-700">100% Secure Payment.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row p-4">
                        <span className=" flexi-color mx-4 fa fa-comments-o fa-3x"></span>
                        <div className="flex-col ml-4">
                            <h1 className="font-bold">24/7 Support</h1>
                            <p className="font-medium text-gray-700">Dedicated Support.</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
        );
    }
}