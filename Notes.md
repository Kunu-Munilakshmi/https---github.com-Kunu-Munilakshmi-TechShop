<!-- 1.Displaying images on web page -->
1. If images are inside public folder then no need to import & use we can give path directly to src attribute
2. If images r other than in public folder then we neeed to import & use
<!-- 2.changing pagination colors -->
Refer carosul.jsx. Need to findout difference of 2 codes and how i got output
<!-- 3.Indian Rupee code -->
sol:&#8377;
<!-- 4.Carosul.jsx how to display overhead, on Air, in ear words as background of slide-->
Solved...Need to Understand code...
Added Below code
<div class="relative sl_ht">
                       
                       <div className='relative '>
                            <p class="text-overlay">
                                {data.type}
                            </p>
                        </div>
.text-overlay {
  position: relative;
  /* Make sure the text is positioned relative to its container */
  font-size: 10.25rem;
  font-weight: bold;
  color:rgba(128, 128, 128, 0.103);
  z-index: 10;
  /* Ensure the text is on top of the overlay */
}


.slickslidr {

  /* height: 50vh !important; */
  z-index: 12 !important;
}

.sl_ht {
  height: 400px;
}
<!-- 5.pyramid carosul -->
Total 5 objects r present in an array while displaying 2nd slide is scaling instead of middle slide ...
Temporary sol: I destructured data and added copied same 5 again Then problem solved
 let fproductsData = productsData.filter(item => item.tag === "featured-product");
    fproductsData = [...fproductsData, ...fproductsData];
    console.log(fproductsData);
Permanent sol=??
<!-- 6. I have doubt in LoginSignup page .How lines are displaying only when its position is absolute -->
 1.<div class="line-with-text">Centered Text</div>
 * Not Cleared...
 2.How to move placeholder up when user focused
 <!--7. In TopProducts section.How to add Loadmore card next to product card -->
 solved*
 sol:added 1 blank div next to map divs
 <!-- 8. Have to  popup LoginSignup.jsx on click of login on button when hovering on user icon of Header right side  -->
 *Pending...
 <!-- 9.Displaying product details in a path http://localhost:3001/product/1 -->
 sol:
 <!-- 1. create route in Path.jsx
 <Route path='/product' element={<Product/>}>
<Route path=':id' element={<Product/>}/>
</Route>
2.Provide link to product image in Item.jsx as below
<Link to={`product/${props.id}`}>
            <img src={props.images} alt="" />
            </Link> -->
I got problem displaying product-details page onClick of Product, so corrected above code as below using dynamic path
 <!-- 9.Displaying product details in a path http://localhost:3000/product-details/1 -->
1. <Route path='/product-details/' element={<Product />}>
        <Route path=':id' element={<Product />} />
      </Route>
2. <Link to={`${props.path}${props.id}`}>
            <img src={props.images} alt="" />
            </Link>
3.In Product.jsx
* const {id}=useParams(); To catch clicked product's id. Here ( path=':id' & {id} these names has to match exactly..orelse we can't know which product is clicked)
* using this id find clicked product outof productsData as below
    const product=productsData.find(e=>e.id===Number(id));
* send product as props to ProductDisplay.jsx
 <ProductDisplay product={product}/>
 <!-- 10. ArrowUp -->
 After click on arrowUp button page has to go up
   <div className='arrowup' onClick={ window.scrollTo(0,0)}
><MdOutlineKeyboardArrowUp/></div>
* with above code page is going to up while refreshing page itself, instead clicking on div.
Sol:placed window.scroll fn within cb fn
  <div className='arrowup' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
><MdOutlineKeyboardArrowUp/></div>
<!-- 11.Search List has to display:none when clicks outside -->
pending.....
<!-- 12.Product.jsx -->
* How to display HTML code onClick of Specification/Overview/Reviews
Solved****
 const [activeSection, setActiveSection] = useState('Specifications'); // Default to 'overview'
 Used above state to update activeSection based on user click on navItem & used && conditional code rendering
 Refer ProductDetails.jsx
 <!-- 13.cart.jsx -->
 If i am adding product from productdetails page by clicking on AddToCart button images are not displaying.or if i adding product from otherthan above images are displaying.
 sol.in first case images are coming in array.in 2nd case images are coming in string to match both conditions we have to asign as below in cart.jsx
<img  src={Array.isArray(item.images) ? item.images[0] : item.images} alt='' className='img-fluid'/>
** later changed the way of /passing data as props to Item.jsx Means instead of sending data individually from shopCategory.jsx
 {/* <Item key={i} images={product.images[0]} title={product.title} info={product.info} finalPrice={product.finalPrice} originalPrice={product.originalPrice} id={product.id} product={product} path={product.path}/> */}
 we can send whole product as props as below 
<Item key={i}  product={product}/>
&& changed code in Item.jsx accoringly to access the data 
const Item = ({product}) => {
    const dispatch=useDispatch();
    return (
        
        <div className='item  p-4'>
            <Link to={`${product.path}${product.id}`}>
            <img src={product.images[0]} alt="" onClick={()=>window.scroll(0,0)}/>
            </Link>
            {/* <div><StarRating product={props.props}/></div> */}
            <h6 className='text-white'>{product.title}</h6>
            <p>{product.info}</p>
            <hr></hr>
            <div className="item-prices">
                <div className="item-price-new">
                &#8377;{product.finalPrice}
                </div>
                <div className="item-price-old">
                &#8377; {product.originalPrice}
                </div>
            </div>
            <button className='bg-danger px-3 py-1 text-white w-100 mt-3 border-0' onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
        </div>
       
    )
}
Earlier we are collecting as props now as product const Item = ({product}) => {}
<!-- 14. onClick of + from Cart.jsx we need to increase the quantity of a product   -->
*From Cart.jsx
   <div className='bg-secondary' onClick={()=>dispatch(addToCart(item))}>  <FaPlus /></div>
Now after clicking on + we r calling addToCart fn with passing item. so from ActionCreator this fn returns obj to productReducer.jsx as below
   export const addToCart=(product)=>{
return {type:ActionType.ADD_TO_CART, payload:product}
}
* In productReducer.jsx
depending on ActionType value corresponding case code will execute through switch as below..
  case "ADD_TO_CART":
            const index = state.cartData.findIndex(item => item.id === action.payload.id);
            if (index >= 0)
                ++state.cartData[index].count;
            else
                return { ...state, cartData: [...state.cartData, { ...action.payload, count: 1 }] };
in the above code we are collecting index value of product residing in cartData.If the product is already there in cartData means we have increament the count value.
If we are adding product for the first time to cart means else code will execute by adding count: 1 to the action.payload (or) product to be add to the cart.(This else code will execute when user clicks on AddToCart button)
<!-- 15.Delete button functionality -->
* From cart.jsx 
 <div className="col-md-2 fs-2" onClick={()=>dispatch(removeFromCart(item.id))}><RiDeleteBin6Line/></div>
 Now below code will execute to delete the product from cart details
  case "REMOVE_FROM_CART":
            const fproducts = state.cartData.filter(cartItem => cartItem.id != action.payload)
            return { ...state, cartData: fproducts };
<!-- 16. onClick of - from Cart.jsx we need to decrease the quantity of a product   -->
To achieve this i followed below steps
*Added  REMOVE_FROM_CART_QTY:"REMOVE_FROM_CART_QTY" in ActionType.jsx
export const ActionType={
    ADD_TO_CART:"ADD_TO_CART",
    REMOVE_FROM_CART:"REMOVE_FROM_CART",
    REMOVE_FROM_CART_QTY:"REMOVE_FROM_CART_QTY"
}
* Added ActionCreator fn in ActionCreator.jsx
export const removeFromCartQty=(id)=>{
    return {type:ActionType.REMOVE_FROM_CART_QTY, payload:id}
}
*logic written in ProductReducer.jsx as below
 case "REMOVE_FROM_CART_QTY":
            state.cartData.map(item => console.log("before updating state cart", item))
            const updatedState = state.cartData.map(item => {
                if (item.id == action.payload) {
                    if (item.count == 1) {
                    }
                    else return { ...item, count: --item.count }
                }
                else return item
            }).filter(item => item !== undefined);
            
            updatedState.map(item => console.log("After updating state cart", item));
            return { ...state, cartData: updatedState };
    In the above code we r applying map on state.cartData based on logic returned items are storing in updatedState.later we are destructuring state and assigining updatedState to cartData     return { ...state, cartData: updatedState };
    * in If condition we r checking  if (item.count == 1) means if product quantity is 1 means we r not returning the item to updatedStatus to delete the product from cart but within if condition we didn't write any logic so it returns undefined.To remove this added undefined to updatedStatus ,we applied filter method like this filter(item => item !== undefined); 
  else return { ...item, count: --item.count } means count value of product is morethan 1 ,so we r decreamenting by 1 and returning (else return { ...item, count: --item.count }) to updatedStatus
  *if (item.id == action.payload) this condition fails we simply return item to the updatedStatus.
  <!-- 17.Showing no.of products added into cart on top of cart icon  -->
  * In Header.jsx
  Accessing redux store cartData using useSelector Hook as below
       import { useSelector } from "react-redux";
       const cartData = useSelector(state => state.productData.cartData);

    <Link to="/cart"  >
                        <div className="position-relative text-secondary">
                            <IoCart />
                            {cartData.length>0 && <div
                                className="fs-6 position-absolute top-0 start-100 translate-middle bg-danger text-white d-flex p-1 align-items-center justify-content-center rounded-circle"
                                style={{ width: "20px", height: "20px" }}
                            >
                                {cartData.length}
                            </div>}
                        </div>
                    </Link>
  in above code we r checking cartData.length if cartData.length is more than 0 then only next div code will execute to show no.of products added into cart.
  <!--18.Displaying popup of Login/signup page onclick of button onhovering user icon  -->
  1. making showModal & setShowModal states available for all components of an APP. refer ShopContext.jsx
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
2. Setting showModal value as true onclick of login/signup button onHovering user icon, in User.jsx
import { Shopcontext } from "../context/ShopContext";
const { showModal, setShowModal } = useContext(Shopcontext);
  <button  onClick={() => { setHover(false); setShowModal(true) }}
                        className="bg-transparent text-secondary border-1 mb-3 p-1"
                        style={{ borderColor: "#ffff", borderStyle: "solid" }}
                    >
                        Login/Signup
                    </button>
Now popup is coming successfully.
<!-- 19. login/signUp page has to disappear whenever user clicks on x button or outside of popup-->
a.x button
* in LoginSignUp.jsx
import { Shopcontext } from '../../context/ShopContext';
const {showModal,setShowModal}=useContext(Shopcontext); <p className='close-btn'onClick={()=>setShowModal(false)}><IoIosClose/></p>
b.on outside click
*   const loginCloseRef=useRef(null);
* <p className='close-btn' ref={loginCloseRef} onClick={()=>setShowModal(false)}><IoIosClose/></p>
* closing LoginSignup comp onclick of outside using useEffect
    useEffect(() => {
          const handleClickOutside = (event) => {
              if (loginCloseRef.current && !loginCloseRef.current.contains(event.target)) {
                  setShowModal(false);
              }             
          };
  
          document.addEventListener("mousedown", handleClickOutside);
  
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, []);








5
8
11


