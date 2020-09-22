import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-aclonemazon.cloudfunctions.net/api", //the API (cloud function) URL
});

export default instance;

//Clound Functions
//LocalHost Endpoint
//http://localhost:5001/aclonemazon/us-central1/api

//New Endpoint Deploy
//https://us-central1-aclonemazon.cloudfunctions.net/api
