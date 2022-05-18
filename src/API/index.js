import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/",
});

const CRUDReqests = {
  get: async (URL) => {
    return await baseApi.get(URL, {});
  },
  delete: async (URL) => {
    return await baseApi.delete(URL, {});
  },
  post: async (URL) => {
    return await baseApi.post(URL, {});
  },
};
export default CRUDReqests;
