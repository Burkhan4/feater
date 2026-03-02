function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-12">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>

        <div className="mt-3 flex items-center gap-1">
          <span className="text-xl font-bold">
            ${product.price}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-sm line-through">
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;