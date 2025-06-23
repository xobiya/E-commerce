import { wishlist } from '../Components/index';
import trashIcon from '../assets/Icons/trashIcon.png'
import cartIcon  from '../assets/Icons/shopping-cart.png'

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 w-[240px] relative">
    {/* Discount badge */}
    {product.discount && (
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        -{product.discount}%
      </span>
    )}

    {/* Trash icon */}
    <img
      src={trashIcon}
      alt="Remove"
      className="absolute top-2 right-2 h-5 w-5 cursor-pointer hover:opacity-70"
    />

    {/* Product image */}
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-contain my-4"
    />

    {/* Product name */}
    <h3 className="text-sm font-medium truncate">{product.name}</h3>

    {/* Price section */}
    <div className="flex items-center gap-2 mt-1">
      <span className="text-red-500 font-semibold">{product.price}</span>
      {product.oldPrice && (
        <span className="line-through text-sm text-gray-400">{product.oldPrice}</span>
      )}
    </div>

    {/* Add to cart button */}
    <button className="w-full mt-4 bg-black text-white py-2 rounded text-sm flex justify-center items-center gap-2 hover:bg-gray-800">
      <img src={cartIcon} alt="cart" className="h-4 w-4" />
      Add to Cart
    </button>
  </div>
);

const WishlistItem = () => {
  return (
    <div className="px-6 py-10 space-y-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Wishlist ({wishlist.length})</h2>
        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist items grid */}
      <div className="flex flex-wrap gap-6">
        {wishlist.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistItem;
