import axios from "axios";

const API = "https://691224d952a60f10c820c600.mockapi.io/AboutCarousel";

export const getProducts = () => axios.get(API);

export const postProduct = (product) => axios.post(API, product);

export const updateProduct = (id, product) => axios.put(`${API}/${id}`, product);

export const deleteProduct = (id) => axios.delete(`${API}/${id}`);