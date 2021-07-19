import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ImgSlider.css";
import styled from "styled-components";


const photos=[
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_eng_3000x1200._CB664069228_.jpg"
    },
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
    },
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNewLaunch/GW/Comingsoon/D25249523_IN_WLME_RedmiK19_NewLaunch_tallhero_3000x1200._CB664270084_.jpg"
    },
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD20-December/DesktopHero_Template_3000x1200_1._CB664430072_.jpg"
    },
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroJune21/2X_D_XCMCampaign_opt04._CB666416034_.jpg"
    },
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/HSS/HSS_3000x1200-set21._CB664063568_.jpg"
    },
    {
        name: "photo1",
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Echodevice21/smartshoppingdays/ASH-GW_3000X1200._CB664047323_.jpg"
    } 
]

function ImgSlider() {
    let setting={
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        className:"slides",
    }
    return (
        <div>
        <Slider {...setting}>
            {photos.map((photo)=>{
                return(
                    <div>
                        <img src={photo.url} width="100%" />
                    </div>
                )
            })}
        </Slider>
        </div>
    )
}
export default ImgSlider;
