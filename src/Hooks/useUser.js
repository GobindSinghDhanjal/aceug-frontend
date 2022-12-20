import axios from "axios";
import { useState } from "react";
import { baseURL } from "../shared/baseUrl";

const useUser = () => {
    const [student, setStudent] = useState(null);
    if (!(localStorage.getItem("token"))){
        return student;
    }

    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    };
  
    axios.get(baseURL+"student/profile", config).then((response)=>{
      setStudent(response.data)
       
    }).catch((err) => {
        return null
    })

    return {student};

}

export default useUser;