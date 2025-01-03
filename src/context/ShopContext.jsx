import react, { createContext, useState } from "react";
import productsData from "../components/Assets/data/productsData";
export const Shopcontext = createContext(null);
const ShopcontextProvider = (props) => {
        const [showModal, setShowModal] = useState(false);
    
        const contextValue = { productsData, showModal,setShowModal }
    return (
        <>
            <Shopcontext.Provider value={contextValue}>
                {props.children}
            </Shopcontext.Provider>
        </>
    )
}
export default ShopcontextProvider