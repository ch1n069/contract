const axios = require("axios");

// function to make the call to the api
const getStudentsDataFromApi = async () => {
  const apiEndpoint = process.env.ST_ENDPOINT;
  try {
    const response = await axios.get(`${apiEndpoint}`);
    return response.data;
  } catch (error) {}
};

module.exports = getStudentsDataFromApi;
