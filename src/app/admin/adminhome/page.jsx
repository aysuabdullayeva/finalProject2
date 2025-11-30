"use client";
import React, { useState, useEffect } from "react";
import {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} from "@/app/services/productServices"; 

const AdminHome = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [posts, setPosts] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const savePost = async (e) => {
    e.preventDefault();
    if (!title || !image || !date) return;

    try {
      if (editId) {
        await updateProduct(editId, { title, image, date });
        setPosts(
          posts.map((p) =>
            p.id === editId ? { ...p, title, image, date } : p
          )
        );
        setEditId(null);
      } else {
        const res = await postProduct({ title, image, date });
        setPosts([...posts, res.data]);
      }
      setTitle("");
      setImage("");
      setDate("");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setImage(post.image);
    setDate(post.date);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Admin Home
        </h1>

        <form className="space-y-6" onSubmit={savePost}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
            >
              {editId ? "Update Post" : "Add Post"}
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
