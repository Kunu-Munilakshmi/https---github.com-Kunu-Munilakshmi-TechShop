// import React from 'react'
// import productsData from './Assets/data/productsData'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './carosal.css'
// const Carosal = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,            // Enable autoplay
//         autoplaySpeed: 3000,       // Set the speed of autoplay (in milliseconds)
//         arrows: false,  // Disable arrows 
//     };
//     const data = productsData.filter((item) => item.tagline);
//     console.log(data);
//     return (
//         <div className='container my-5'>
//              <Slider {...settings}>
//             {data.map((data,i) => <div key={i} className='d-flex align-items-center justify-content-center'>
//                 <div className='mb-5'>
//                     <p className='fs-5'>{data.title}</p>
//                     <h2 className='my-4 fs-1 fw-bold'>{data.tagline}</h2>
//                     <h4>&#8377;
//                         {data.finalPrice} <span className='text-decoration-line-through text-body-secondary'>&#8377;{data.originalPrice}</span></h4>
//                     <button className='bg-danger text-white px-2 py-1 mt-4 '>Shop Now</button>
//                 </div>
//                 <div className=' w-50 '>
//                     <img className="img-fluid" src={data.heroImage} alt=''/>

//                 </div>
//             </div>)}
//             </Slider>
//         </div>
//     )
// }

// export default Carosal
import React from 'react';
import productsData from './Assets/data/productsData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carosal.css'; // Import your CSS file for custom styles
import { Link } from 'react-router-dom';

const Carosal = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        
    };

    const data = productsData.filter((item) => item.tagline);
    console.log(data);

    return (
        <div className='container p-5 my-5'>
            <Slider {...settings}>
                {data.map((data, i) => (
                    <div class="relative sl_ht">
                       
                       <div className='relative '>
                            <p class="text-overlay">
                                {data.type}
                            </p>
                        </div>


                        <div key={i} className='position-absolute top-0 d-flex  gap-5 align-items-center justify-content-between slickslidr'>
                           
                            <div className='mt-5  '>
                                <h5 className='fs-5'>{data.title}</h5>
                                <h2 className='my-4 fs-1 fw-bold'>{data.tagline}</h2>
                                <h4>
                                    &#8377;{data.finalPrice}{" "}
                                    <span className='text-decoration-line-through text-body-secondary'>
                                        &#8377;{data.originalPrice}
                                    </span>
                                </h4>

                                <Link to={`${data.path}${data.id}`}>
                                    <button className='bg-danger text-white px-5 py-2 mt-5 border-0'>Shop Now</button>
                                </Link>
                            </div>
                            <div className="">
                                <img className="img-fluid w-25" src={data.images[0]} alt='' />
                            </div>

                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carosal;
// pagination colors are different in above 2 types of code. Don't know where exactly difference is??? how acheived in 2nd code
