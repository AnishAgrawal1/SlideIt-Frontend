import axios from "axios";

const baseURL = "http://localhost:5000/";

const api = axios.create({
  baseURL,
});

export const postText = async (content) => {
  await api
    .post("/predict_text",{
        'data': content
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postUrl = async (content) => {
  await api
    .post("/predict_url",{
        'url': content
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postUpload = async (content) => {
  await api
    .post("/predict_upload",{
        'upload': content
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};