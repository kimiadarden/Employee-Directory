import React, {useState, useEffect }  from "react";
import API from "../utils/API";

const Main =() =>{

//initilze the state 
  const [state, setstate] = useState({

    header: [{ name: "Image", width: "20px" },{ name: "name", width: "20px" },{ name: "phone", width: "20px" },{ name: "email", width: "20px" }],
    employees: [],
    searchByName: []
  });


//grab the user info from the API 


useEffect(() => {
  API.getUsers().then(results => {
    setstate({
      ...state,
      employees: results.data.results,
      searchByName: results.data.results
    });
  });
}, [""]);










    return (
        ""
    );
  };

export default Main;
