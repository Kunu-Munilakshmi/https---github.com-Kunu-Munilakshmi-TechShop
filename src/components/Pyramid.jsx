import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './pyramid.css'; // Custom styles
import { Link } from 'react-router-dom';

const Pyramid = ({ productsData }) => {
    const [currentSlide, setCurrentSlide] = useState(0); // Track the center slide

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const fproductsData = productsData.filter(item => item.tag === "featured-product");

    return (
        <div className='container p-5'>
            <Slider {...settings}>
                {fproductsData.map((data, index) => {
                    // Calculate relative position with circular indexing
                    const totalSlides = fproductsData.length;
                    const relativePosition = (index - currentSlide + totalSlides) % totalSlides-1;

                    // Assign scales based on the relative position
                    let scale = 0.3; // Default scale
                    // if (relativePosition === 1 || relativePosition === totalSlides ) {
                    //     scale = 0.8; // First adjacent slides (both sides)
                    // }
                    if ( relativePosition ===1 || relativePosition === totalSlides-6) {
                        scale = 0.6; // First adjacent slides (both sides)
                    }
                    if (relativePosition === 0) {
                        scale = 1; // Center slide
                    }

                    return (
                        <div
                            key={index}
                            className="d-flex align-items-center justify-content-center"
                        >
                            <div
                                className="card bg-transparent"
                                style={{
                                    transform: `scale(${scale})`,
                                    transition: "transform 0.3s ease-in-out",
                                }}
                            >
                                <center className="card-text text-white">
                                    {data.title}
                                </center>
                                <Link to={`${data.path}${data.id}`}>
                                    <img
                                        src={data.images[0]}
                                        className="card-img-top"
                                        alt={data.title}
                                    />
                                </Link>
                                <div className="card-body d-flex justify-content-around mt-3">
                                    <h6 className='text-white'>&#8377;{data.finalPrice}</h6>
                                    <h6 className='text-secondary text-decoration-line-through'>&#8377;{data.originalPrice}</h6>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Pyramid;
