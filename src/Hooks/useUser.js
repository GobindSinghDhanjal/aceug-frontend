import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../shared/baseUrl";

const useUser = () => {
    const [student, setStudent] = useState();
    
    useEffect(() => {

    const header = localStorage.getItem("token");
    axios
      .get(baseURL + "student/profile",{headers : {
        Authorization: header
      }})
      .then((data) => data.data)
      .then((student) => {
        setStudent(student);
        console.log(student);
      })
      .catch((err) => console.log(err));
  }, []);
  
  

    return student;

}

export default useUser;