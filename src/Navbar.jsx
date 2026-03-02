import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Navbar() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products", {
          params: {
            limit: limit,
            skip: (page - 1) * limit,
          },
        });

        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / limit));
      } catch (error) {
        console.log("Xatolik:", error);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Mahsulotlar
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-5 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Oldingi
          </button>

          <span className="text-lg font-medium">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
            className="px-5 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Keyingi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;