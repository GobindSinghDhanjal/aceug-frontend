import React from "react";

export const Section = ({ tests, setOptions, setCurrentQues, classes }) => {
  if (tests.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={classes}>
      {tests[0].sections.map((test, i) => {
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
                  {test.questions.map((question, i) => {
                    return (
                      <div
                        onClick={() => {
                          setCurrentQues(question);
                          setOptions(question.options);
                        }}
                        key={i}
                        className="card border-rounded p-3 mt-3 user-select-none"
                      >
                        Q{i + 1}. {question.statement}
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
