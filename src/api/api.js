import axios from "axios";

const baseURL = "http://localhost:5000/";

const api = axios.create({
  baseURL,
});

const postContent = async (content) => {
  await api
    .post("/predict",{
        'data': content
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postContent;