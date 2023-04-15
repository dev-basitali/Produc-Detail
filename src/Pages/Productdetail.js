import React from 'react'

export const Productdetail = () => {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-12 col-sm-6">

                        <div className="">
                            <img className='product-img' src="/images/img1.png" alt="product image" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 ">

                        <div className="product-detail p-4">
                            <p className='fs-7'>CARTINGTOYS.PK</p>
                            <p className='fs-1'>Electric Baby Nail Trimer</p>
                            <h5 className='mb-1' >
                                <s className='ms-2'>Rs. 50000.00 PKR</s>
                                &nbsp;Rs . 25000.00 PKR
                                <span className="badge bg-secondary ms-2 bg-danger">Sale</span>
                            </h5>
                            <div className='mt-3'>
                                <p htmlFor="">Color</p>
                                <button className='color bg-dark text-light p-2'>Blue</button>
                                <button className='color p-2'>Pink</button>
                            </div>
                            <p className='mt-3'>Quantity</p>
                            <div className="counter-grp input-group  mb-3 ">
                                <button type='button' className="my-btn input-group-text bg-light">-</button>
                                <input type="text" className="my-counter text-center bg-light" />
                                <button type='button' className="my-btn input-group-text bg-light">+</button>
                            </div>


                            <button type='button' className="cart-btn p-2 bg-light">Add to Cart</button>
                            <button type='button' className="buy-btn p-2 bg-dark text-light ms-2 ms-sm-0 ms-lg-2">Buy it Now</button>
                            <div className='mt-4'>

                                <h4>Product Description</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima vitae recusandae quod alias accusantium nisi culpa ex in distinctio, rerum dolores mollitia illo aliquam quibusdam laudantium eligendi voluptate iure!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
