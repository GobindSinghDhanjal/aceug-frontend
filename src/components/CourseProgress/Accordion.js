import React from "react";
import { useDispatch } from "react-redux";
import { fetchResource } from "../../redux/courseprogress/cpActions";
import ListQuiz from "./ListQuiz";
import ListReading from "./ListReading";
import ListVideo from "./ListVideo";

const Accordion = ({ module, index }) => {
  const dispatch = useDispatch();
  return (
    <div class="accordion" id={"accordionExample" + index}>
      <div class="accordion-item">
        <h2 class="accordion-header" id={"heading" + index}>
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapseOne" + index}
            aria-expanded="true"
            aria-controls={"collapseOne" + index}
          >
            {module.name}
          </button>
        </h2>
        <div
          id={"collapseOne" + index}
          class="accordion-collapse collapse show"
          aria-labelledby={"heading" + index}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="list-group">
              {module.resources &&
                module.resources.map((resource, index) => {
                  switch (resource.type) {
                    case "video":
                      return (
                        <ListVideo
                          resource={resource}
                          key={index}
                          onClick={() => dispatch(fetchResource(resource.id))}
                        />
                      );
                    case "quiz":
                      return (
                        <ListQuiz
                          resource={resource}
                          key={index}
                          onClick={() => dispatch(fetchResource(resource.id))}
                        />
                      );
                    case "lesson":
                      return (
                        <ListReading
                          resource={resource}
                          key={index}
                          onClick={() => dispatch(fetchResource(resource.id))}
                        />
                      );
                    default:
                      return;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
