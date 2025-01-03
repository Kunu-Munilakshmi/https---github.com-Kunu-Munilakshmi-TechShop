import React, { useReducer, useState } from 'react';
import "./Allproducts.css";
import Shopcategory from './Shopcategory';
import Price from '../components/Sidebar/Price';
import { sortMenu, brandsMenu, categoryMenu } from '../components/Assets/data/filterBarData';

const Allproducts = ({ productsData }) => {
    // State for selected filters
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 499, max: 19990 });

    // Reducer for sorting and filtering
    const reducer = (currentState, action) => {
        switch (action.type) {
            case "SORT":
                switch (action.payload) {
                    case "Latest":
                        return productsData;
                    case "Featured":
                        return currentState.filter(item => item.tag);
                    case "Top Rated":
                        return currentState.filter(item => item.rateCount === 5);
                    case "Price(Lowest First)":
                        return [...productsData].sort((a, b) => a.finalPrice - b.finalPrice);
                    case "Price(Highest First)":
                        return [...productsData].sort((a, b) => b.finalPrice - a.finalPrice);
                    default:
                        return currentState;
                }
            case "FILTER":
                return productsData.filter(item =>
                    (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
                    (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
                    item.finalPrice >= priceRange.min &&
                    item.finalPrice <= priceRange.max
                );
            default:
                return currentState;
        }
    };

    const [fproductsData, dispatch] = useReducer(reducer, productsData);

    // Update selected brands
    const handleBrandChange = (brand) => {
        if(brand=="BoAt")
        brand=brand.charAt(0).toLowerCase()+brand.slice(1);
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
        dispatch({ type: "FILTER" });
    };

    // Update selected categories
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
        dispatch({ type: "FILTER" });
    };

    // Update price range
    const handlePriceChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setPriceRange({ ...priceRange, max: value });
        dispatch({ type: "FILTER" });
    };

    // State for selected sort item
    const [sortItem, setSortItem] = useState(null);

    return (
        <div className='d-flex'>
            <div className="sidebar  m-4 overflow-auto">
               {sortItem!=null && <p className='bg-danger w-50 text-center p-1 fw-bold fs-5' onClick={()=>setSortItem(null)}>close Filters</p>}
                <div>
                    <h3>Sort By</h3>
                    <hr />
                    <ul>
                        {sortMenu.map((item, i) => (
                            <li
                                key={i}
                                className={sortItem === i ? 'selected' : ""}
                                onClick={() => { 
                                    dispatch({ type: "SORT", payload: item.title }); 
                                    setSortItem(i);
                                }}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <h3>Filter By</h3>
                <hr />
                <div>
                    <h3>Brands</h3>
                    <ul className='d-flex flex-column'>
                        {brandsMenu.map((item, i) => (
                            <label key={i}>
                                <input
                                    type="checkbox"
                                    className='me-2'
                                    onChange={() => handleBrandChange(item.label)}
                                />
                                <span>{item.label}</span>
                            </label>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Category</h3>
                    <ul className='d-flex flex-column'>
                        {categoryMenu.map((item, i) => (
                            <label key={i}>
                                <input
                                    type="checkbox"
                                    className='me-2'
                                    onChange={() => handleCategoryChange(item.label)}
                                />
                                <span>{item.label}</span>
                            </label>
                        ))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="priceRange">Price: {priceRange.min} - {priceRange.max}</label>
                    <input
                        type="range"
                        min="499"
                        max="19990"
                        value={priceRange.max}
                        id="priceRange"
                        onChange={handlePriceChange}
                    />
                </div>
            </div>
            <div className='w-75'>
            <Shopcategory productsData={fproductsData} />
            </div>
        
        </div>
    );
};

export default Allproducts;


// import React, { useReducer, useState } from 'react'
// import "./Allproducts.css"
// import Shopcategory from './Shopcategory'
// import Price from '../components/Sidebar/Price'
// // import Category from '../components/Sidebar/Category'
// import { sortMenu,brandsMenu ,categoryMenu} from '../components/Assets/data/filterBarData'

// const Allproducts = ({ productsData }) => {
    
//     // Displaying products based on click of sort by option using useReducer Hook
//     const reducer=(currentState,action)=>{
//         // checking whether productsData is coming or not
//         // console.log("currentState",currentState);
//         // checking whether onclick of sort items that item is coming or not
//         // console.log('action',action); 
//         switch(action){
//             case "Latest":return productsData;
//             case "Featured":return currentState.filter(item=>item.tag);
//             case "Top Rated":return currentState.filter(item=>item.rateCount===5);
//             case "Price(Lowest First)":return [...productsData].sort((a, b) => a.finalPrice - b.finalPrice);
//             case "Price(Highest First)":return [...productsData].sort((b,a) => a.finalPrice - b.finalPrice);;
//             default: return currentState;
//         }
//     }
//     const [fproductsData, dispatch]=useReducer(reducer,productsData);
// // state for making sort item color in red when user clicked
// const [sortItem,setSortItem]=useState();
//     return (
//         <div className='d-flex  '>
//             <div className="sidebar w-75 m-4 overflow-auto">
//                 {/* <Sortby/> */}
//                 <div>
//                     <h3>Sort By</h3>
//                     <hr />
//                     <ul>
//                         {sortMenu.map((item, i) => <li key={i} className={sortItem===i?'selected':""} onClick={()=>{dispatch(item.title);setSortItem(i)}}>{item.title}</li>)}
//                     </ul>
//                 </div>
//                 {/* Sortby Ends */}
//                 <h3>Filter By</h3>
//                 <hr />
//                 {/* <Brands/> */}
//                 <div>
//                     <h3>Brands</h3>
//                     <ul className='d-flex flex-column'>
//                         {brandsMenu.map((item, i) => <label key={i}><input type="checkbox" className='me-2' /><span>{item.label}</span></label>)}
//                     </ul>
//                 </div>
//                 {/* Brands Ends */}
//                 {/* <Category /> */}
//                   <div>
//                         <h3>Category</h3>
//                         <ul className='d-flex flex-column'>
//                             {categoryMenu.map((item,i)=><label><input type="checkbox" className='me-2'/><span>{item.label}</span></label>)}
//                         </ul>
//                     </div>
//                 {/* Category Ends */}
//                 <Price />
//             </div>
//             <Shopcategory productsData={fproductsData} />
//         </div>
//     )
// }

// export default Allproducts