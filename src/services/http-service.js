import axios from "axios";

export default class HttpService {
  static async get(url, params = {}) {
    try {
      const response = await axios.get(url, { params });
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async post(url, data = {}) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
