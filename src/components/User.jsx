import React, { useContext, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
// import LoginSignup from "./LoginSignup/LoginSignup";
import { Shopcontext } from "../context/ShopContext";

const User = () => {
    const [hover, setHover] = useState(false);
    const { showModal, setShowModal } = useContext(Shopcontext);
    console.log('showModal', showModal);
    return (<>
        <div
            className="position-relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <AiOutlineUser
                style={{ cursor: "pointer" }}
            />
            {(hover) && (
                <div
                    className="position-absolute p-3 fs-5 border rounded-3 bg-black"
                    style={{
                        minWidth: "400px",
                        zIndex: 997,
                        marginTop: "0px",
                        marginLeft: "-360px",
                    }}
                >
                    <h4>Hello!</h4>
                    <p>Access account and manage orders</p>
                    <button
                        onClick={() => { setHover(false); setShowModal(true) }}
                        className="bg-transparent text-secondary border-1 mb-3 px-2 py-1"
                        style={{ borderColor: "#ffff", borderStyle: "solid" }}
                    >
                        Login/Signup
                    </button>
                    <hr />
                    <p>Please Login</p>
                </div>
            )}

        </div>
    </>
    );
};

export default User;
