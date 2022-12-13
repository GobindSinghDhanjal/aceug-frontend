import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Question = (props) => {

    function handleDelete() {
        props.deleteQues(props.id);
    }

    function handleEdit() {
        props.editQues(props.id)
    }
  return (
    <div className="login-form-wrapper p-3 mb-4">
      <div className="row">
        <div className="col-8">Ques. {props.question}</div>
        <div className="col-2">
          <EditIcon onClick={handleEdit} key={props.id} />
        </div>
        <div  className="col-2">
          <DeleteIcon onClick={handleDelete} key={props.id} />
        </div>
      </div>
    </div>
  );
};
