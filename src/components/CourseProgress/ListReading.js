import React from "react";
import { useDispatch } from "react-redux";
import { fetchResource } from "../../redux/courseprogress/cpActions";

const ListReading = ({ resource }) => {
  const dispatch = useDispatch();

  return (
    <a
      className="list-group-item list-group-item-action flex-column align-items-start"
      onClick={() => dispatch(fetchResource(resource.id, resource.type))}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{resource.name}</h5>
      </div>
      <small>Random Dummy Text here</small>
    </a>
  );
};

export default ListReading;
