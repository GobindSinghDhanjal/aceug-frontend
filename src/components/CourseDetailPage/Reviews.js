import React, { Component } from "react";

class Reviews extends Component {
  render() {
    return (
      <>
        <div id="reviews" className="tab-pane fade">
          <div className="course-reviews">
            <div className="course-rating">
              <h3 className="title">Reviews</h3>
              <div className="course-rating-content">
                <div className="average-rating">
                  <p className="rating-title secondary-color">Average Rating</p>
                  <div className="rating-box">
                    <div className="average-value primary-color">4.50</div>
                    <div className="review-star">
                      <div className="tm-star-rating">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star-half-alt"></span>
                      </div>
                    </div>
                    <div className="review-amount">(2 ratings)</div>
                  </div>
                </div>
                <div className="detailed-rating">
                  <p className="rating-title secondary-color">
                    Detailed Rating
                  </p>
                  <div className="rating-box">
                    <div className="rating-rated-item">
                      <div className="rating-point">
                        <div className="tm-star-rating">
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                        </div>
                      </div>
                      <div className="rating-progress">
                        <div className="single-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-count">1</div>
                    </div>

                    <div className="rating-rated-item">
                      <div className="rating-point">
                        <div className="tm-star-rating">
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="far fa-star"></span>
                        </div>
                      </div>
                      <div className="rating-progress">
                        <div className="single-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-count">1</div>
                    </div>

                    <div className="rating-rated-item">
                      <div className="rating-point">
                        <div className="tm-star-rating">
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="far fa-star"></span>
                          <span className="far fa-star"></span>
                        </div>
                      </div>
                      <div className="rating-progress">
                        <div className="single-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-count">0</div>
                    </div>

                    <div className="rating-rated-item">
                      <div className="rating-point">
                        <div className="tm-star-rating">
                          <span className="fas fa-star"></span>
                          <span className="fas fa-star"></span>
                          <span className="far fa-star"></span>
                          <span className="far fa-star"></span>
                          <span className="far fa-star"></span>
                        </div>
                      </div>
                      <div className="rating-progress">
                        <div className="single-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-count">0</div>
                    </div>

                    <div className="rating-rated-item">
                      <div className="rating-point">
                        <div className="tm-star-rating">
                          <span className="fas fa-star"></span>
                          <span className="far fa-star"></span>
                          <span className="far fa-star"></span>
                          <span className="far fa-star"></span>
                          <span className="far fa-star"></span>
                        </div>
                      </div>
                      <div className="rating-progress">
                        <div className="single-progress-bar">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="rating-count">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-reviews-area">
              <ul className="course-reviews-list">
                <li className="review">
                  <div className="review-container">
                    <div className="review-author">
                      <img
                        src="assets/images/review-author/author1.jpg"
                        alt="author"
                      />
                    </div>
                    <div className="review-content">
                      <h4 className="title">ednawatson</h4>
                      <div
                        className="review-stars-rated"
                        title="5 out of 5 stars"
                      >
                        <div className="review-stars empty"></div>
                      </div>
                      <h5 className="review-title">Cover all my needs</h5>
                      <div className="review-text">
                        The course identify things we want to change and then
                        figure out the things that need to be done to create the
                        desired outcome. The course helped me in clearly define
                        problems and generate a wider variety of quality
                        solutions. Support more structures analysis of options
                        leading to better decisions.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="review">
                  <div className="review-container">
                    <div className="review-author">
                      <img
                        src="assets/images/review-author/author2.jpg"
                        alt="author"
                      />
                    </div>
                    <div className="review-content">
                      <h4 className="title">Owen Christ</h4>
                      <div
                        className="review-stars-rated"
                        title="5 out of 5 stars"
                      >
                        <div className="review-stars empty"></div>
                      </div>
                      <h5 className="review-title">Engaging & Fun</h5>
                      <div className="review-text">
                        This is the third course I attend from you, and I
                        absolutely loved all of them. Especially this one on
                        leadership. Your method of explaining the concepts, fun,
                        engaging and with real-world examples, is excellent.
                        This course will help me a lot in my job, my career, and
                        life in general, and I thank you for that. Thank you for
                        improving the lives of many people with engaging and
                        in-depth courses.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Reviews;
