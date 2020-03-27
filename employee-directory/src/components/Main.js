import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Main = () => {

  //initilze the state 
  const [state, setstate] = useState({

    header: [{ name: "Image", width: "20px" }, { name: "name", width: "20px" }, { name: "phone", width: "20px" }, { name: "email", width: "20px" }],
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



  const handlNameSerach = event => {
    const filter = event.target.value;
    const filteredList = state.employees.filter(seerchName => {
      if ((seerchName.name.first.toLowerCase()).indexOf(filter.toLowerCase()) !== -1) {
        return seerchName
      };
    });

    setstate({ ...state, searchByName: filteredList });
  };


  return (

    <div value={{ state, handlNameSerach }}>

      <nav className="navbar" >
        <div >
          <input
            placeholder="Serach by name"
            onChange={e => handlNameSerach(e)}
          />
        </div>
      </nav>






    </div>
  );
};

export default Main;
