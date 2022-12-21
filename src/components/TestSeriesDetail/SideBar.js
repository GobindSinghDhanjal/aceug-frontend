import React from "react";
import { useNavigate } from "react-router-dom";


const SideBar = ({ testSeries }) => {

  console.log(testSeries);

  const navigate = useNavigate();

  function onEnrollClick() {
    navigate("/checkout?testSeriesId="+testSeries._id)
  }

  function addToCart() {
    if(localStorage.getItem("cart")){
      let cart1 = JSON.parse(localStorage.getItem("cart"));
      const cart = cart1;
      cart.push({testSeriesId: testSeries._id})
      localStorage.setItem("cart", JSON.stringify(cart));
    }else{
      const cart = [{testSeriesId: testSeries._id}];
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(JSON.parse(localStorage.getItem("cart")));
    }
  
  }
  return (
    <>
    <div className="col-lg-4 col-12 order-lg-2 max-mb-50" id="sticky-sidebar">
      <div className="sidebar-widget-wrapper pr-0">
        <div className="sidebar-widget">
          <div className="sidebar-widget-content">
            <div className="sidebar-entry-course-info">
              <div className="course-price">
                <span className="meta-label">
                  <i className="meta-icon far fa-money-bill-wave"></i>
                  Price
                </span>
                <span className="meta-value">
                  <span className="price">
                   {testSeries.price===0?<> Free</>:<>₹ {testSeries.price} <span className="decimals-separator">.00</span></> }
                    
                  </span>
                </span>
              </div>
              <div className="course-meta">
              
  
              </div>
              <div className="lp-course-buttons">
                <button
                  className="btn btn-primary btn-hover-secondary btn-width-100"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              </div>
              <div className="lp-course-buttons">
                <button
                  className="btn btn-primary btn-hover-secondary btn-width-100"
                  onClick={onEnrollClick}
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
};

export default SideBar;
