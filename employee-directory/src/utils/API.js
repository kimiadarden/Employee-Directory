import axios from "axios";

export default {
    getUsers: function() {
        
        // displaying only 20 users 
    return axios.get("https://randomuser.me/api/?results=20");

  }
};
