import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";
import axios from "axios";
import CourseTile from "../CoursesGridPage/CourseTile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { TestSeriesTile } from "../TestSeriesGrid/TestSeriesTile";

export const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  const [courses, setCourses] = useState([]);
  const [coursePage, setCoursePage] = useState(0);

  const [testSeries, setTestSeries] = useState([]);
  const [testPage, setTestPage] = useState(0);

  useEffect(() => {
    axios
      .get(baseURL + "blogs/blog/" + title)
      .then((data) => data.data)
      .then((blog) => {
        setBlog(blog);
        console.log(blog);
      })
      .catch((err) => console.log(err));

      axios
      .get(baseURL + "courses/"+coursePage)
      .then((data) => data.data)
      .then((courses) => {
        setCourses(courses);
        console.log(courses);
      })
      .catch((err) => console.log(err));

      axios
      .get(baseURL + "testSeries/"+testPage)
      .then((data) => data.data)
      .then((testSeries) => {
        setTestSeries(testSeries);
        console.log(testSeries);
      })
      .catch((err) => console.log(err));
  }, []);

  

  if (!blog) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div className=" page-title-section section">
        <div className="page-title">
          <div className="container">
          <div className="row">
            <div className="col-8">
                <div className="row">
                    <h1>{blog.title}</h1>
                </div>
                <div className="row">
                    <div className="col-10">
                    <p><small>Published Date : {blog.createdAt}</small></p>
                    </div>
                    
                </div>
                
                <hr />

                <div className="row">
                    <img src={blog.thumbnail} alt="thumbnail"/>
                </div>
                <div className="row">
                <td dangerouslySetInnerHTML={{__html: blog.body}} />
                </div>
            </div>
            <div className="col-4 text-left hidden-sm">
            <h1>
                Related Courses
            </h1>
            {courses.map((course, i) => (
              <CourseTile key={i} course={course} />
            ))}
            </div>
          </div>
          </div>
          <br />
          <br />
          <div className="row mx-3">
          <div className="container">

   
          <h1>Related Test Series</h1>
            <Swiper slidesPerView={4}

                        centeredSlides
                        spaceBetween={40}
                        centeredSlidesBounds
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          590: {
                            slidesPerView: 2,
                          },
                          770: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 4,
                          },
                        }}
                        loop>
            {testSeries.map((testSeries, i) => (
                <SwiperSlide key={i}>
              <TestSeriesTile key={i} testSeries={testSeries} />
              </SwiperSlide>
            ))}
            </Swiper>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
