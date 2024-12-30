import axios from "axios";

const API_URL = "http://localhost:5000/api"

const Create = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/stories`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const GetStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/stories`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const storyservice = {
  Create,
  GetStories,
};

export default storyservice;
