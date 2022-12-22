import React from "react";

export const Section = (props) => {
  return (
    <div className="col-3">
      {props.tests.map((test, i) => {
        const headingId = "heading" + i;
        const collapseId = "collapse" + i;
        return (
          <div key={i} className="accordion mb-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + collapseId}
                  aria-expanded="true"
                  aria-controls={collapseId}
                >
                  {test.name}
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse show"
                aria-labelledby={headingId}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {test.section.map((section, i) => {
                    return (
                      <div
                        onClick={() => {
                          props.setQuesTitle(section.ques);
                          props.setOptions(section.options);
                        }}
                        key={i}
                        className="card border-rounded p-3 mt-3 user-select-none"
                      >
                        Q{i + 1}. {section.ques}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
