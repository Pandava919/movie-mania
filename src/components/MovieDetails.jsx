import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const MovieDetails = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (
        <Slider {...settings}>
            <div>
                <img src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain" alt="" />
                <h3>1</h3>
            </div>
            <div>
            <img src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain" alt="" />

                <h3>2</h3>
            </div>
            <div>
            <img src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain" alt="" />

                <h3>3</h3>
            </div>
            <div>
            <img src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain" alt="" />

                <h3>4</h3>
            </div>
            <div>
            <img src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain" alt="" />

                <h3>5</h3>
            </div>
            <div>
            <img src="https://th.bing.com/th/id/OIP.4XB8NF1awQyApnQDDmBmQwHaEo?rs=1&pid=ImgDetMain" alt="" />

                <h3>6</h3>
            </div>
        </Slider>
    )
}

export default MovieDetails
