import React,{Component} from  'react';


export default class TopCategory extends Component{
    render() {
        //from parent component
        const {categories} = this.props;
        const categoryList = categories.map( function(category){
            return(
                <div className="w-full md:w-1/2 lg:w-1/3 md:px-2">
                    <div className=" flex bg-white border border-gray-400 shadow-md hover:border-orange-500">
                        <a href="#"><img src={category.category_image} alt="computer" className=""/></a> 
                        <ul className="px-2 md:px-6 lg:px-6 ">
                            <li className="font-semibold"><a href="#" className="hover:text-orange-500">{category.category_name}</a></li>
                            <li className="mt-2 md:mt-3 text-gray-700"><a href="#" className="hover:underline">{category.products[0]}</a></li>
                            <li className=" text-gray-700"><a href="#" className="hover:underline">{category.products[1]}</a></li>
                            <li className="text-gray-700"><a href="#" className="hover:underline">{category.products[2]}</a></li>
                            <li className="text-gray-700"><a href="#" className="hover:underline">{category.products[3]}</a></li>
                        </ul>

                    </div>
                </div>
            )
        })

        //what to display
        return(
        <div className=" my-8 mx-4">
            
            {/*For lg*/}
            <div className="px-4 hidden lg:block">
                <h1 className="font-bold text-2xl text-gray-900 font-sans">Top Categories Of The Month</h1>

                <div className="py-4">
                <div className="flex flex-wrap -mx-2">
                    {categoryList}                       
                </div>

                </div>

            </div>

            {/* for md */}
            <div className="hidden md:block lg:hidden container mx-auto">
                <h1 className="font-bold text-2xl text-gray-900 font-sans">Top Categories Of The Month</h1>
                
                <div className="py-4">
                    <div className="flex flex-wrap -mx-2">
                    {categoryList}                         
                    </div>
                </div>
                

            </div>
            


            {/*For sm*/}
            <div className="lg:hidden md:hidden">
                <h1 className="font-bold text-xl text-gray-900 font-sans">Top Categories Of The Month</h1>
                
                <div className="py-4">
                    {categoryList}                     
                </div>

            </div>
            
        </div>
        );
    }
}