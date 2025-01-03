import React from 'react'
import '../App.css'
import { footMenu,footSocial } from '../components/Assets/data/footerData'
const Footer = () => {
    return (
        <div className="bg-black">
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-md-5  mb-3">
                        <form>
                            <h2 className='mb-4 text-white'>Tech-Shop</h2>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input
                                id="newsletter1"
                                type="email"
                                className="form-control bg-transparent p-1 border border-white rounded custom-placeholder"
                                placeholder="Email address*"
                            />
                            <button className="btn btn-danger mt-4" type="button">Subscribe</button>
                        </form>
                    </div>
                    {footMenu.map((item, i) => <div key={i} className="col-6 col-md-2 mb-3 ">
                        <h5 >{item.title}</h5>
                        <ul className="nav flex-column">
                            {item.menu.map((item1, i) => <li key={i} className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">{item1.link}</a></li>
                            )}
                        </ul>
                    </div>)}
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
                    <p>© 2024 | All rights reserved. Built by | MuniLakshmi</p>
                    <ul className="list-unstyled d-flex gap-4">
                        {footSocial.map((item,i)=><p key={i}>{item.icon}</p>)}
                    </ul>
                </div>
            </footer>
        </div>
        </div>
    )
}

export default Footer