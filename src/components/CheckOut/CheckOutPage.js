import React, { Component } from "react";

class CheckOutPage extends Component {
  render() {
    return (
      <>
        <div className="page-title-section section">
          <div className="page-title">
            <div className="container">
              <h1 className="title">Course Checkout</h1>
            </div>
          </div>
          <div className="page-breadcrumb">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Course Checkout</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="checkout-section section section-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row row-40">
                  <div className="col-lg-7">
                    <button className="btn btn-primary btn-hover-secondary btn-width-40 ">
                      Back to Course Curriculum
                    </button>
                    <div className="row mt-3">
                      <div className="col-md-12 col-12 mb-20">
                        <label>First Name*</label>
                        <input type="text" placeholder="First Name" />
                      </div>

                      <div className="col-md-12 col-12 mb-20">
                        <label>Email Address*</label>
                        <input type="email" placeholder="Email Address" />
                      </div>

                      <div className="col-md-12 col-12 mb-20">
                        <label>Phone no*</label>
                        <input type="text" placeholder="Phone number" />
                      </div>

                      <button className="btn btn-primary btn-hover-secondary btn-width-100 mt-40">
                        Place order
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <h5>Your Course</h5>
                    <div className="border border-rounded">
                      <ul>
                        <li>Course 1</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*    <div className="checkout-section section section-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#" className="checkout-form">
                  <div className="row row-40">
                    <div className="col-lg-7">
                      <div id="billing-form" className="mb-10">
                        <h4 className="checkout-title">Billing Address</h4>

                        <div className="row">
                          <div className="col-md-6 col-12 mb-20">
                            <label>First Name*</label>
                            <input type="text" placeholder="First Name" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Last Name*</label>
                            <input type="text" placeholder="Last Name" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email Address" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Phone no*</label>
                            <input type="text" placeholder="Phone number" />
                          </div>

                          <div className="col-12 mb-20">
                            <label>Company Name</label>
                            <input type="text" placeholder="Company Name" />
                          </div>

                          <div className="col-12 mb-20">
                            <label>Address*</label>
                            <input type="text" placeholder="Address line 1" />
                            <input type="text" placeholder="Address line 2" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Country*</label>
                            <select>
                              <option>Bangladesh</option>
                              <option>China</option>
                              <option>country</option>
                              <option>India</option>
                              <option>Japan</option>
                            </select>
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Town/City*</label>
                            <input type="text" placeholder="Town/City" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>State*</label>
                            <input type="text" placeholder="State" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Zip Code*</label>
                            <input type="text" placeholder="Zip Code" />
                          </div>

                          <div className="col-12 mb-20">
                            <div className="check-box">
                              <input type="checkbox" id="create_account" />
                              <label for="create_account">
                                Create an Acount?
                              </label>
                            </div>
                            <div className="check-box">
                              <input
                                type="checkbox"
                                id="shiping_address"
                                data-shipping
                              />
                              <label for="shiping_address">
                                Ship to Different Address
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="shipping-form">
                        <h4 className="checkout-title">Shipping Address</h4>

                        <div className="row">
                          <div className="col-md-6 col-12 mb-20">
                            <label>First Name*</label>
                            <input type="text" placeholder="First Name" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Last Name*</label>
                            <input type="text" placeholder="Last Name" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email Address" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Phone no*</label>
                            <input type="text" placeholder="Phone number" />
                          </div>

                          <div className="col-12 mb-20">
                            <label>Company Name</label>
                            <input type="text" placeholder="Company Name" />
                          </div>

                          <div className="col-12 mb-20">
                            <label>Address*</label>
                            <input type="text" placeholder="Address line 1" />
                            <input type="text" placeholder="Address line 2" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Country*</label>
                            <select className="nice-select">
                              <option>Bangladesh</option>
                              <option>China</option>
                              <option>country</option>
                              <option>India</option>
                              <option>Japan</option>
                            </select>
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Town/City*</label>
                            <input type="text" placeholder="Town/City" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>State*</label>
                            <input type="text" placeholder="State" />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>Zip Code*</label>
                            <input type="text" placeholder="Zip Code" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="row">
                        <div className="col-12 max-mb-60">
                          <h4 className="checkout-title">Cart Total</h4>

                          <div className="checkout-cart-total">
                            <h4>
                              Product <span>Total</span>
                            </h4>

                            <ul>
                              <li>
                                Teritory Quentily X 01 <span>$35.00</span>
                              </li>
                              <li>
                                Adurite Silocone X 02 <span>$59.00</span>
                              </li>
                              <li>
                                Baizidale Momone X 01 <span>$78.00</span>
                              </li>
                              <li>
                                Makorone Cicile X 01 <span>$65.00</span>
                              </li>
                            </ul>

                            <p>
                              Sub Total <span>$296.00</span>
                            </p>
                            <p>
                              Shipping Fee <span>$00.00</span>
                            </p>

                            <h4>
                              Grand Total <span>$296.00</span>
                            </h4>
                          </div>
                        </div>

                        <div className="col-12">
                          <h4 className="checkout-title">Payment Method</h4>

                          <div className="checkout-payment-method">
                            <div className="single-method">
                              <input
                                type="radio"
                                id="payment_check"
                                name="payment-method"
                                value="check"
                              />
                              <label for="payment_check">Check Payment</label>
                              <p data-method="check">
                                Please send a Check to Store name with Store
                                Street, Store Town, Store State, Store Postcode,
                                Store Country.
                              </p>
                            </div>

                            <div className="single-method">
                              <input
                                type="radio"
                                id="payment_bank"
                                name="payment-method"
                                value="bank"
                              />
                              <label for="payment_bank">
                                Direct Bank Transfer
                              </label>
                              <p data-method="bank">
                                Please send a Check to Store name with Store
                                Street, Store Town, Store State, Store Postcode,
                                Store Country.
                              </p>
                            </div>

                            <div className="single-method">
                              <input
                                type="radio"
                                id="payment_cash"
                                name="payment-method"
                                value="cash"
                              />
                              <label for="payment_cash">Cash on Delivery</label>
                              <p data-method="cash">
                                Please send a Check to Store name with Store
                                Street, Store Town, Store State, Store Postcode,
                                Store Country.
                              </p>
                            </div>

                            <div className="single-method">
                              <input
                                type="radio"
                                id="payment_paypal"
                                name="payment-method"
                                value="paypal"
                              />
                              <label for="payment_paypal">Paypal</label>
                              <p data-method="paypal">
                                Please send a Check to Store name with Store
                                Street, Store Town, Store State, Store Postcode,
                                Store Country.
                              </p>
                            </div>

                            <div className="single-method">
                              <input
                                type="radio"
                                id="payment_payoneer"
                                name="payment-method"
                                value="payoneer"
                              />
                              <label for="payment_payoneer">Payoneer</label>
                              <p data-method="payoneer">
                                Please send a Check to Store name with Store
                                Street, Store Town, Store State, Store Postcode,
                                Store Country.
                              </p>
                            </div>

                            <div className="single-method">
                              <input type="checkbox" id="accept_terms" />
                              <label for="accept_terms">
                                I’ve read and accept the terms & conditions
                              </label>
                            </div>
                          </div>

                          <button className="btn btn-primary btn-hover-secondary btn-width-100 mt-40">
                            Place order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default CheckOutPage;