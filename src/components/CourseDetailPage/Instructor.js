import React from "react";

const Instructor = ({ instructor }) => {

  return (
    <div className="course-instructor">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-image">
            <img src="assets/images/profile/instructor.jpg" alt="profile" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="profile-info">
            <h5>
              <a href="profile.html">{instructor.name}</a>
            </h5>
            <div className="author-career">{instructor.designation}</div>
            <p className="author-bio">{instructor.about}</p>

            {/*  <ul className="author-social-networks">
              {instructor.social_links.map((link) => {
                var linkClass = "";
                switch (link.platform) {
                  case "facebook":
                    linkClass = "fab fa-facebook social-link-icon";
                    break;
                  case "instagram":
                    linkClass = "fab fa-instagram social-link-icon";
                    break;
                }

                return (
                  <li className="item">
                    <a
                      href="JavaScript:Void(0);"
                      target="_blank"
                      className="social-link"
                    >
                      <i className={linkClass}></i>
                    </a>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Instructor;
