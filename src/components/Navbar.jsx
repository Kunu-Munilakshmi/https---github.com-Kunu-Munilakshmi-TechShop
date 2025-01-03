import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Shopcategory from '../pages/Shopcategory';

function Navbar({ productsData }) {
    let displayProducts = productsData;

    // Filtering unique categories
    const navbarData = [...new Set(productsData.map(product => product.category))];
    const [navItem, setNavitem] = useState("All");

    // State to manage the number of displayed products
    const [visibleCount, setVisibleCount] = useState(11);

    // Filtering products from productsData based on user-selected category
    displayProducts = productsData.filter((item) => {
        if (navItem === item.category) {
            return item;
        } else if (navItem === "All") {
            return item;
        }
        return null;
    });

    // Sliced data for initial display
    const visibleProducts = displayProducts.slice(0, visibleCount);

    // console.log("navItem", navItem);
    // console.log("sdata", visibleProducts);

    return (
        <>
            <div>
                <center className='text-light fs-1 fw-bold my-5'>Top Products</center>
                <ul className='container d-flex flex-wrap align-items-center justify-content-between list-unstyled'>
                    <li
                        onClick={() => setNavitem("All")}
                        className={`fw-bold fs-4 ${navItem === "All" ? "bg-danger text-white px-3 py-1" : "text-secondary"}`}
                        style={{ cursor: "pointer" }}
                    >
                        All
                    </li>

                    {navbarData.map((item, index) => (
                        <li
                            key={index}
                            className={`fw-bold fs-4 ${navItem === item ? "bg-danger text-white px-3 py-1" : "text-secondary"}`}
                            onClick={() => setNavitem(item)}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <Shopcategory productsData={visibleProducts} />
                {/* {visibleProducts.length < displayProducts.length && (
                    <div className='text-center my-3'>
                        <button
                            className='btn btn-primary'
                            onClick={() => setVisibleCount(visibleCount + 3)}>
                            Load More
                        </button>
                    </div>
                )} */}
            </div>

        </>
    );
}

export default Navbar;

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import Shopcategory from '../pages/Shopcategory';
// function Navbar({ productsData }) {
//     let displayProducts = productsData
//     // Filtering unique categories
//     const navbarData = [...new Set(productsData.map(product => product.category))];
//     const [navItem, setNavitem] = useState("All");
//     // filtering products from productsData based on user selected category
//     displayProducts = productsData.filter((item, i) => {
//         if (navItem == item.category) {
//             return item;
//         }
//         else if (navItem == "All")
//             return item;

//     })
//     console.log("navItem", navItem);
//     console.log("sdata", displayProducts);
//     return (<>
//         <div >
//             <center className='text-light fs-1 fw-bold my-5'>Top Products</center>
//             <ul className='container d-flex flex-wrap align-items-center justify-content-between list-unstyled'>
//                 <li onClick={() => setNavitem("All")} className=' fw-bold fs-4'><Link className={navItem == "All" ? "bg-danger text-white px-3 py-1 text-decoration-none" : "text-secondary text-decoration-none"} to='/'>All</Link></li>
//                 {navbarData.map((item, index) => <li className='fw-bold fs-4' onClick={() => setNavitem(item)}><Link className={navItem == item ? "bg-danger text-white px-3 py-1 text-decoration-none" : "text-secondary  text-decoration-none"} to='/' >{item}</Link></li>)}
//             </ul>

//         </div>
//         <Shopcategory productsData={displayProducts} />
//     </>
//     )
// }

// export default Navbar
// {/* <li onClick={()=>setMenu("shop")}> <Link to='/' style={{textDecoration:"none"}}>Shop</Link> {menu=="shop"?<hr/>:<></>}</li> */ }
