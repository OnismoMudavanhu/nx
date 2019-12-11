import React,{Component} from 'react';
import CarouselImages from "./CarouselImages";
import BannerImage from "./BannerImage";
import TopCategory from "./TopCategory";
import ConsumerElec from "./ConsumerElec";
import Antiques from "./Antiques";
import Men from "./Men";
import Women from "./Women";
import Jewellery from "./Jewellery";

export default class Content extends Component{

   
    state = {
// top categories       
categories:[
    {
        category_image:'/images/computer-monitors.jpg',
        category_name:'Computers and Laptops',                
        products: ['Laptops','Desktops','Tablets','Accessories']
    },
    {
        category_image:'/images/makeup-flexiafrica-170x170.jpg',
        category_name:'Health and Beauty',
        products: ['Makeup','Nail Art And Tools','Beauty Tools','Skin Care']
    },
    {
        category_image:'/images/Phone-and-Accessories-FlexiAfrica-170x170.jpg',
        category_name:'Phones and Accessories',               
        products: ['Mobile Phones','Phones Parts','Cases And Covers','Accessories']
    }
    
    
],
// recommended

recommended:[
    {
        product_image:"/images/kente_cloth_grande-150x150.jpg",
        description:"AFRICAN FABRICS 101: KENTE CLOTH",
        price:"$100.00"
    },
    {
        product_image:"/images/Sexy-Classy-Fitted-Black-African-Dashiki-Print-Sleeveless-Dress-Pictures-539x741-150x150.jpg",
        description:"KLASSY - SEXY, CLASSY, FITTED BLACK AFRICAN DASHIKI PRINT SLEEVELESS DRESS",
        price:"$130.00"
    },
    {
        product_image:"/images/unique-classy-ultra-flattering-high-low-west-african-ankara-print-jumpsuit-485x741-150x150.jpg",
        description:"AFREAKA - UNIQUE, CLASSY ULTRA- FLATTERING HIGH- LOW WEST AFRICAN ANKARA PRINT JUMPSUIT",
        price:"$210.34"
    },
    {
        product_image:"/images/vintage-small-store-interior-design-medicine-retail-shop-018-1-825x550-150x150.jpg",
        description:"AUTHENTIC AFRICAN WAX PRINT ANKARA EYELETS HIGH HEEL SHOES W/ MATCHING HANDBAG",
        price:"$149.54"
    },
    {
        product_image:"/images/Authentic-Unique-Dashiki-Handbag-Black-Front-555x416-150x150.jpg",
        description:"AUTHENTIC, HANDMADE DASHIKI HANDBAG WITH WOOD HANDLE - BLACK",
        price:"$60.00"
    },
    {
        product_image:"/images/Authentic-Unique-Dashiki-Handbag-Black-Front-555x416-150x150.jpg",
        description:"AUTHENTIC, HANDMADE DASHIKI HANDBAG WITH WOOD HANDLE - BLACK",
        price:"$60.00"
    },
],

// Antiques
antiques:[
    {
        product_image:"/images/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Fabric-18_-Invincible-480x480.jpg",
        description:"African Ankara Print",
        price:"$20.00",
        discount:"-9%"

    },
    {
        product_image:"/images/Fabric-5_-Royalty-480x480.jpg",
        description:"Ankara Print",
        price:"$20.00",
        discount:"-9%"
    },
    {
        product_image:"/images/Copy-of-Instagram-Post-–-Untitled-Design-480x480.jpg",
        description:"African Print",
        price:"$20.00",
        discount:"-9%"
    },
    {
        product_image:"/images/WhatsApp-Image-2019-05-28-at-13.24.13-480x480.jpeg",
        description:"Backpack",
        price:"$20.00",
        discount:"-9%"
    },
    {
        product_image:"/images/Image-2-480x480.jpg",
        description:"Handmade, Handbags/picnic baskets",
        price:"$30.00",
        discount:"-9%"
    },
    {
        product_image:"/images/IMG-20190126-WA00181-480x480.jpg",
        description:"Hand-Knitted handbag, brown and white shiffon cloth",
        price:"$120.00",
        discount:"-9%"
    },

],
// Men
men:[
    {
        product_image:"/images/14144-fc68da-480x480.jpeg",
        description:"New Pattern 2019 Classic Mens Business Casual Shoes",
        price:"$33.98",
        discount:"-45%"
    },
    {
        product_image:"/images/14115-c52c28-480x480.jpg",
        description:"2019 brand new canvas casual men shoes british loafers flats mens",
        price:"$31.98 - $35.98",
        discount:"-45%"
    },
    {
        product_image:"/images/13730-7ee86d-480x480.jpg",
        description:"2019 Tops T-shirt Men's Slim Fit",
        price:"$18.62",
        discount:"-45%"
    },
    {
        product_image:"/images/13568-5f2514-480x480.jpg",
        description:"New Arrival 2019 men Designer T Shirt Casual Quick Dry Slim Fit ",
        price:"$17.10",
        discount:"-45%"
    },
    {
        product_image:"/images/13021-85d8b4-480x480.jpg",
        description:"Male Spring Autumn Cotton Printed Floral Long Sleeve Shirt Mens Both Side Print Casual Men Shirts Plus Size",
        price:"$37.78",
        discount:"-45%"
    },
    {
        product_image:"/images/12930-89ef97-480x480.jpg",
        description:"Fashion Men Plus Size Shirt Male Dress Shirts Men's Fashion Colorful Casual Long Sleeve Business Shirt",
        price:"$28.46",
        discount:"-45%"
    },
],

// Women
women:[
    {
        product_image:"/images/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Fabric-18_-Invincible-480x480.jpg",
        description:"African Ankara Print",
        price:"$20.00",
        discount:"-9%"
    },
    {
        product_image:"/images/Fabric-5_-Royalty-480x480.jpg",
        description:"Ankara Print",
        price:"$20.00",
        discount:"-9%"
    },
    {
        product_image:"/images/Copy-of-Instagram-Post-–-Untitled-Design-480x480.jpg",
        description:"African Print",
        price:"$20.00",
        discount:"-9%"
    },
    {
        product_image:"/images/DSC_28611-480x480.jpg",
        description:"handmade comfort design ladies & gents variety sizes.",
        price:"$10.00",
        discount:"-9%"
    },
    {
        product_image:"/images/IMG_5298-480x480.jpg",
        description:"Denim with patterned synthetic fabrics",
        price:"$35.00",
        discount:"-9%"
    },
    {
        product_image:"/images/IMG_5311-2-480x480.jpg",
        description:"Africa Native Yellow Ankara",
        price:"$45.00",
        discount:"-9%"
    },
],


// Jewellery
jewellery:[
    {
        product_image:"/images/14433-0062cd-480x480.jpg",
        description:"NIBOSI Relogio Masculino Men Watches Luxury",
        price:"$28.78 – $31.98 ",
        discount:"-84%"
    },
    {
        product_image:"/images/14539-e165ca-480x480.jpg",
        description:"LIGE Watch Men Relogio Masculino",
        price:"$45.58 – $49.38",
        discount:"-84%"
    },
    {
        product_image:"/images/14482-b52a02-480x480.jpg",
        description:"Japan Business Watch",
        price:"$15.52",
        discount:"-84%"
    },
    {
        product_image:"/images/14244-8fc0c5-480x480.jpg",
        description:"CURREN Gold Watch For Ladies",
        price:"$28.96",
        discount:"-84%"
    },
    {
        product_image:"/images/14263-f1d586-480x480.jpg",
        description:"SKMEI Watch For Couples Top Brand Luxury Wrist Watches",
        price:"$19.92 – $23.04",
        discount:"-84%"
    },
    {
        product_image:"/images/14282-5d0dfb-480x480.jpg",
        description:"Kimio luxury Fashion Women’s watches",
        price:"$19.44",
        discount:"-84%"
    },
    {
        product_image:"/images/14558-e65891-480x480.jpg",
        description:"2019 New Military Quartz Wristwatch",
        price:"$23.98",
        discount:"-84%"
    },
    {
        product_image:"/images/14297-29d903-480x480.jpg",
        description:"2019 Hannah Martin Classic Watch",
        price:"$20.58",
        discount:"-84%"
    },
    {
        product_image:"/images/14499-c88c42-480x480.jpg",
        description:"Curren Watches with Chronograph Sport",
        price:"$27.28",
        discount:"-84%"
    },
    {
        product_image:"/images/14348-6bd482-480x480.jpg",
        description:"YAZOLE Business Watch Men",
        price:"$9.95",
        discount:"-84%"
    },
    {
        product_image:"/images/14312-00dce1-480x480.jpg",
        description:"Classic Quartz Couple Wrist Watch",
        price:"$8.99",
        discount:"-84%"
    },
    {
        product_image:"/images/14605-81c113-480x480.jpg",
        description:"SOUTHBERG Luxury Fashion Mens Watches Quartz Steel Top Brand Wrist Watch For Man relogio masculino",
        price:"$22.50",
        discount:"-84%"
    },
],




    }

    



    render() { 
       return (
           <div className="">
               {/* <CarouselImages/> */}
               <BannerImage />
               <TopCategory categories={this.state.categories} />
               <ConsumerElec recommended={this.state.recommended}/>
               <Antiques antiques={this.state.antiques}/>
               <Men men={this.state.men}/>
               <Women women={this.state.women} />
               <Jewellery jewellery={this.state.jewellery} />
           </div>

       );
    }
}