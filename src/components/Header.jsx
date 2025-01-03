
// export default Header;
import React, { useState, useRef, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Shopcontext } from "../context/ShopContext";
import User from "./User";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showUl, setShowUl]=useState(false);
    const searchRef = useRef(null);
    // Accessing redux stored cart data as below
     const cartData = useSelector(state => state.productData.cartData);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    // Showing items based on search
    const { productsData } = useContext(Shopcontext);
    const [ip, setIp] = useState("");
    console.log("productsData",productsData);
    // console.log("useState",useState(""));
    const fproductData = productsData.filter(item =>
        item.title.toLowerCase().includes(ip.toLowerCase())
    );

    // console.log("search", fproductData);

    // Close search bar on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false);
                setIp("")
            }
           
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-light m-2 mx-3">
            <div className="container-fluid position-relative">
                <h1>
                    <Link className="navbar-brand  text-white  fs-1" to="/" >
                        Tech-Shop
                    </Link>
                </h1>
                <div className="d-flex gap-5  align-items-center fs-4">
                    <div
                        onClick={toggleSearch}
                        style={{ cursor: "pointer", position: "relative" }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Search"
                    >
                        <FaSearch />
                    </div>
                    <Link to="/cart" className="text-secondary">
                        <div className="position-relative"  data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Cart">
                            <IoCart />
                            {cartData.length>0 && <div
                                className="fs-6 position-absolute top-0 start-100 translate-middle bg-danger text-white d-flex p-1 align-items-center justify-content-center rounded-circle"
                                style={{ width: "20px", height: "20px" }}
                            >
                                {cartData.length}
                            </div>}
                        </div>
                    </Link>
                    {/* <AiOutlineUser /> */}
                    <User />
                </div>
                {showSearch && (
                    <div
                        ref={searchRef}
                        className="position-absolute d-flex justify-content-center w-100"
                        style={{ top: "60px", left: "0", zIndex: "1000" }}
                    >
                        <div style={{ position: "relative", width: "50%" }}>
                            <input
                                type="search"
                                className=" w-100 bg-transparent py-1 ps-2 border-light rounded-2 text-white"
                                placeholder="Search for Product..."
                                onChange={(e) => setIp(e.target.value)
                                }
                            />
                            {ip && fproductData.length > 0 && (
                                <ul
                                    className="list-unstyled mt-5 p-1"
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: "0",
                                        width: "100%",
                                        backgroundColor: "black",
                                        // borderRadius: "4px",
                                        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        // maxHeight: "200px",
                                        // overflowY: "auto",
                                        zIndex: "999"
                                    }}
                        
                                >
                                    {fproductData.map((item, i) => (
                                        <Link to={`${item.path}${item.id}`} className="text-decoration-none text-white">
                                            <li
                                                key={i}
                                                className="p-2 "
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => setShowSearch(false)}
                                            >
                                                {item.title}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;

