import React, { useState } from 'react'
import './ProductDescription.css'
import reviewsData from '../Assets/data/reviewsData'
import StarRating from '../StarRating'

const ProductDescription = ({ product }) => {
    const navbarData = ["Specifications", "Overview", "Reviews"];
    
    // Fix: Remove the duplicate state declaration
    const [activeSection, setActiveSection] = useState('specifications'); // Default to 'overview'
    const [navItem, setNavitem] = useState(navbarData[0]); // Default to the first nav item (Specifications)

    return (
        <div className='my-5'>
            <ul className='container d-flex flex-wrap align-items-center justify-content-between list-unstyled'>
                {navbarData.map((item, index) => (
                    <li
                        key={index}
                        className={`fw-bold fs-4 ${navItem === item ? "bg-danger text-white px-3 py-1" : "text-secondary"}`}
                        onClick={() => {
                            setNavitem(item);
                            setActiveSection(item.toLowerCase()); // Set active section on click
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            {/* Specifications / Overview Content */}
            <div className="content-container">
                {activeSection === 'overview' && (
                    <div className='m-5'>
                        <h4>The <span className='text-danger fw-bold'>{product.title} </span>{product.type} Truly {product.category} {product.connectivity} Earbuds provides fabulous sound quality</h4>
                        <div className='my-4'>
                            <li>. Sound Tuned to Perfection</li>
                            <li>. Comfortable to Wear</li>
                            <li>. Long Hours Playback Time</li>
                        </div>
                        <p className='lh-lg'>
                            Buy the <span className='text-white fw-semibold'>{product.title} {product.type} Truly {product.category} {product.connectivity}</span> which offers you a fabulous music experience with exceptional sound quality.
                        </p>
                    </div>
                )}

                {activeSection === 'specifications' && (
                    <div className='w-25 m-5 fs-5'>
                        <div className='d-flex justify-content-between'>
                            <h6>Brand</h6>
                            <p className='text-white'>{product.brand}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Model</h6>
                            <p className='text-white'>{product.title}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Generic Name</h6>
                            <p className='text-white'>{product.category}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Headphone Type</h6>
                            <p className='text-white'>{product.type}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Connectivity</h6>
                            <p className='text-white'>{product.connectivity}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Microphone</h6>
                            <p className='text-white'>Yes</p>
                        </div>
                    </div>
                )}

                {activeSection === 'reviews' && (
                    <div>
                        {reviewsData.map((item, i) => (
                            <div className='m-5' key={i}>
                                <div className='d-flex gap-3'>
                                    <div className='circle'></div>
                                    <div>
                                        <h6>{item.name}</h6>
                                        <StarRating product={item} />
                                    </div>
                                </div>
                                <div className='mt-3'>{item.review}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDescription;
