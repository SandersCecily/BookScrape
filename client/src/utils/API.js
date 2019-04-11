import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  getSavedBooks: function() {
      return axios.get("/api/savedBooks");
  },
  deleteSavedBook: function(id) {
      return axios.delete(`/api/savedBooks/${id}`);
  },
  saveBook: function(bookData) {
      return axios.post("/api/savedBooks", bookData);
  }
};