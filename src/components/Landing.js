import React, { useEffect, useState } from "react";
import { TESTIMONIALS } from "../shared/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../shared/baseUrl";
import { SignatureCourse } from "./SignatureCourse";
import { firebase, auth } from "../firebase";

const Landing = () => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL + "courses/signature/course")
      .then((data) => data.data)
      .then((courses) => {
        setCourses(courses);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="page" className="section">
        <div
          className="intro1-section section section-fluid "
          style={{
            backgroundImage: `url("assets/images/intro/intro1/bg-1.jpg")`,
          }}
          data-bg-image="%PUBLIC_URL%/assets/images/intro/intro1/bg-1.jpg"
        >
          <div className="container">
            <div className="row row-cols-md-2 row-cols-1 max-mb-n30">
              <div
                className="col align-self-center max-mb-30"
                data-aos="fade-up"
              >
                <div className="intro1-content text-center text-md-start">
                  <span className="sub-title">
                    Get Admission into BEST <br /> Universities of India
                  </span>
                  <h2 className="title">
                    Your Journey <br /> to College Admission Begins Here
                  </h2>
                  <div className="desc">
                    <p>
                      We have created Learning Journeys which uses AI to help
                      every student in strengthening their weaker sections
                    </p>
                  </div>
                  <Link
                    to="/courses"
                    className="btn btn-primary btn-hover-secondary"
                  >
                    Explore Course Journeys
                  </Link>
                </div>
              </div>

              <div className="col max-mb-30" data-aos="fade-up">
                <div className="intro1-course">
                  <img
                    className="popular-course-icon"
                    src="assets/images/intro/intro1/intro-popular-course.png"
                    alt=""
                  />

                  <div className="course-2">
                    <div className="thumbnail">
                      <a href="/course" className="image">
                        <img
                          src="assets/images/courses/370/1_U7CYUus6wy2i8V_HgzBFjw.png"
                          alt="Course Image"
                        />
                      </a>
                    </div>
                    <div className="info">
                      <span className="price">Free</span>
                      <span className="date">Oct 23, 2022</span>
                      <h3 className="title">
                        <a href="course-details-standard-sidebar.html">
                          How to be consistent for preparation?
                        </a>
                      </h3>
                      <div className="desc">
                        <p>
                          Now more than ever, corporations are investing heavily
                          in IT. The quality of these investments affects the
                          daily …
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="intro1-scene scene">
                    <span data-depth="4">
                      <img
                        src="assets/images/shape-animation/shape-1.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-bottom-shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              height="100"
            >
              <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
            </svg>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="sub-title">Education for everyone</span>
              <h2 className="title">
                Online <span>Coaching Lessons</span> For Remote Learning.
              </h2>
            </div>

            <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 g-0">
              <div className="col" data-aos="fade-up">
                <Link
                  to="/courses"
                  className="icon-box text-center"
                  style={{ height: "100%" }}
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-flag2.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Segmented Notes </h3>
                    <div className="desc">
                      <p>
                        Best study material : Developed with lots of Research &
                        Efforts
                      </p>
                    </div>
                    <span className="link">
                      Start here <i className="far fa-long-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="col" data-aos="fade-up">
                <Link
                  to="/courses"
                  style={{ height: "100%" }}
                  className="icon-box text-center"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-gear.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Experienced Faculity </h3>
                    <div className="desc">
                      <p>
                        Experienced, Knowledgeable & Energetic Faculty : Best in
                        Class
                      </p>
                    </div>
                    <span className="link">
                      Discover now <i className="far fa-long-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="col" data-aos="fade-up">
                <Link
                  to="/courses"
                  style={{ height: "100%" }}
                  className="icon-box text-center"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-life-buoy.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Exam Oriented Mock Test</h3>
                    <div className="desc">
                      <p>
                        Proven Results in various entrance test examinations
                      </p>
                    </div>
                    <span className="link">
                      Get Free Quote <i className="far fa-long-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="col" data-aos="fade-up">
                <Link
                  to="/courses"
                  style={{ height: "100%" }}
                  className="icon-box text-center"
                  data-vivus-hover
                >
                  <div className="icon">
                    <img
                      className="svgInject"
                      src="assets/images/svg/linea/linea-basic-display.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Timely completion of Syllabus</h3>
                    <div className="desc">
                      <p>Small batch size for Personalized Attention</p>
                    </div>
                    <span className="link">
                      Start now <i className="far fa-long-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-padding">
          <div className="container">
            <div className="teacher-quote-wrapper" data-aos="fade-up">
              <div className="teacher-quote">
                <div className="image">
                  <img src="assets/images/others/teracher-quote-1.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="section-title">
                    <h2 className="title">
                      Ger rid of <span>Old School Assumptions</span>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="quote">
                      <p>
                        We assist learners in finding new effective belief and
                        get rid of the outdated, discouraged and irrelevant life
                        attitudes. You're upgrading to be a better you.
                      </p>
                    </div>
                    <div className="experience">
                      <span className="amount">
                        19<span>years</span>
                      </span>
                      <h6 className="title">Work Experience</h6>
                      <a href="courses-grid-1.html" className="link">
                        Get Free Guide{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section section-padding bg-pattern fix landing-page-section"
          data-bg-image="assets/images/bg/background-pattern-grid-line.png"
          data-bg-color="#f5f1ed"
        >
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="sub-title">
                MAXIMIZE YOUR POTENTIALS and possibilities
              </span>
              <h2 className="title">
                Learn the secrets to <span>Life Success</span>, <br />
                these people have got the key.​
              </h2>
            </div>

            <div className="row max-mb-70">
              <div className="col-lg-9 mx-auto">
                <div className="row row-cols-md-3 row-cols-1 max-mb-n30">
                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="funfact">
                      <div className="number">
                        <span className="counter">3.092</span>+
                      </div>
                      <h6 className="text">Registered Enrolls</h6>
                    </div>
                  </div>

                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="funfact">
                      <div className="number">
                        <span className="counter">1.926</span>
                      </div>
                      <h6 className="text">Finished sessions</h6>
                    </div>
                  </div>

                  <div className="col max-mb-30" data-aos="fade-up">
                    <div className="funfact">
                      <div className="number">
                        <span className="counter">100</span>%
                      </div>
                      <h6 className="text">Satisfaction rate</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-slider row" data-aos="fade-up">
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  320: {
                    slidesPerView: 1,
                  },
                  990: {
                    slidesPerView: 2,
                  },
                }}
                loop
              >
                {TESTIMONIALS.map((TESTIMONIAL, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="testimonial col-12">
                        <div className="image">
                          <img src={TESTIMONIAL.imgUrl} alt="" />
                        </div>
                        <div className="content">
                          <p>{TESTIMONIAL.comment}</p>
                          <h6 className="name">{TESTIMONIAL.name}</h6>
                          <span className="position">
                            {TESTIMONIAL.occupation}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        <div
          id="video-section-1"
          className="section bg-pattern position-relative landing-page-section"
          data-bg-image="assets/images/bg/background-pattern-grid-line.png"
          data-bg-color="#f5f1ed"
        >
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="sub-title">
                The combination of all senses into learning
              </span>
              <h2 className="title">
                Learn with all your <span>SENSES​</span>
              </h2>
            </div>

            <div className="about-me-video-wrapper">
              
              <a
                href="https://www.youtube.com/watch?v=Dx9bRbhT3SE"
                className="about-me-video video-popup"
                data-aos="fade-up"
                target="_blank"
              >
        
                <img
                  className="image"
                  src="assets/images/about/about-me/about-me-popup-video-poster.jpg"
                  alt=""
                />
                <img
                  className="icon"
                  src="assets/images/icons/icon-youtube-play.png"
                  alt=""
                />
              </a>

              <div className="shape shape-1 scene">
                <span data-depth="3">
                  <img
                    src="assets/images/shape-animation/shape-2.svg"
                    alt=""
                    className="svgInject"
                  />
                </span>
              </div>
              <div className="shape shape-2 scene">
                <span data-depth="-3">
                  <img src="assets/images/shape-animation/shape-3.png" alt="" />
                </span>
              </div>
              <div className="shape shape-3 scene">
                <span data-depth="4">shape 3</span>
              </div>
              <div className="shape shape-4 scene">
                <span data-depth="4">
                  <img src="assets/images/shape-animation/shape-1.png" alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="section-bottom-shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              height="100"
            >
              <path
                className="elementor-shape-fill"
                d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
              ></path>
            </svg>
          </div>
        </div>

        <div className="section section-padding">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="sub-title">Learn at your Pace</span>
              <h2 className="title">Current Signature Courses</h2>
            </div>

            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
              {courses.map((course, i) => {
                return <SignatureCourse key={i} course={course} />;
              })}
            </div>

            <div className="row max-mt-70">
              <div className="text-center col-lg-7 mx-auto">
                <a className="link link-lg" href="courses-grid-1.html">
                  Get the most dedicated consultation for your life-changing
                  course. Earn a certification for your effort and passion
                  <mark>
                    Get Free Guide <i className="far fa-long-arrow-right"></i>
                  </mark>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="blog-section section section-padding bg-pattern-one landing-page-blog"
          data-bg-image="assets/images/bg/maxcoach-shape-03.png"
        >
          <div className="container blog-shape-animation">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="sub-title">study with your favorite tutors</span>
              <h2 className="title">Secrets of learning revealed in blogs</h2>
            </div>

            <div className="row isotope-grid">
              {/* <div className="grid-sizer col-1"></div> */}

              <div
                className="col-xl-3 col-lg-6 col-md-6 grid-item"
                data-aos="fade-up"
              >
                <div className="blog-2 mt-150 mt-md-0 mt-sm-0 mt-xs-0 mb-30 blog-2-1">
                  <div className="thumbnail">
                    <a href="blog-details.html" className="image">
                      <img
                        src="assets/images/blog/270/blog-01.jpg"
                        alt="Blog Image"
                      />
                    </a>
                  </div>
                  <div className="info">
                    <a href="blog-details.html" className="category">
                      Online Education
                    </a>
                    <h3 className="title">
                      <a href="blog-details.html">
                        Become a Better Blogger: Content Planning
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>
                        <i className="far fa-calendar"></i>Dec 11, 2019
                      </li>
                      <li>
                        <i className="far fa-eye"></i>47 views
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 plr-40 grid-item"
                data-aos="fade-up"
              >
                <div className="blog-2 mb-30 blog-2-1">
                  <div className="thumbnail overlay-thumb">
                    <a href="blog-details.html" className="image">
                      <img
                        src="assets/images/blog/500/blog-03.jpg"
                        alt="Blog Image"
                      />
                    </a>
                  </div>
                  <div className="info content-absolute">
                    <a href="blog-details.html" className="category">
                      Learning Strategies
                    </a>
                    <h3 className="title">
                      <a href="blog-details.html">
                        Five Essential Online Learning Strategies
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>
                        <i className="far fa-calendar"></i>Dec 11, 2019
                      </li>
                      <li>
                        <i className="far fa-eye"></i>32 views
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 grid-item"
                data-aos="fade-up"
              >
                <div className="blog-2 mt-50 mt-sm-0 mt-xs-0 mb-30 blog-2-1">
                  <div className="thumbnail">
                    <a href="blog-details.html" className="image">
                      <img
                        src="assets/images/blog/270/blog-02.jpg"
                        alt="Blog Image"
                      />
                    </a>
                  </div>
                  <div className="info">
                    <a href="blog-details.html" className="category">
                      Learning Strategies
                    </a>
                    <h3 className="title">
                      <a href="blog-details.html">
                        Five Essential Online Learning Strategies
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>
                        <i className="far fa-calendar"></i>Dec 11, 2019
                      </li>
                      <li>
                        <i className="far fa-eye"></i>32 views
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row max-mt-70">
              <div className="text-center col-lg-7 mx-auto">
                <a className="link link-lg" href="blog-grid.html">
                  Get into details now?​
                  <mark>
                    View all posts <i className="far fa-long-arrow-right"></i>
                  </mark>
                </a>
              </div>
            </div>

            <div className="shape shape-1 scene">
              <span data-depth="4">shape 3</span>
            </div>
            <div className="shape shape-2 scene">
              <span data-depth="-3">
                <img src="assets/images/shape-animation/shape-3.png" alt="" />
              </span>
            </div>
            <div className="shape shape-3 scene">
              <span data-depth="3">
                <img
                  src="assets/images/shape-animation/shape-2.svg"
                  alt=""
                  className="svgInject"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="brand-section section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand-wrapper">
                  <div className="brand-list">
                    <div className="brand-carousel" data-aos="fade-up">
                      <Swiper
                        slidesPerView={6}
                        centeredSlides
                        centeredSlidesBounds
                        breakpoints={{
                          0: {
                            slidesPerView: 2,
                          },
                          590: {
                            slidesPerView: 4,
                          },
                          770: {
                            slidesPerView: 5,
                          },
                          1200: {
                            slidesPerView: 6,
                          },
                        }}
                        loop
                      >
                        <SwiperSlide>
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-01.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-02.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-03.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-04.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-05.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-06.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="brand">
                            <a href="#">
                              <img
                                src="assets/images/brand/client-logo-07.png"
                                alt="logo image"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
