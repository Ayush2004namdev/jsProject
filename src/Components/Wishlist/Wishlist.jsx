import React from 'react'
import { getWishlist } from '../useLocalStorage';
import './Wishlist.css';

const Wishlist = () => {
    const [wishList, setWishlist] = useState(getWishlist());

    return (
      <div className="wishlistPage__container">
        {wishList.length === 0 ? (
          <h1>No Items in wishList</h1>
        ) : (
          wishList.map((item) => (
            <WishlistCard
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              rating={item.rating}
              setWishlist={setWishlist}
            />
          ))
        )}
      </div>
    );
}

export default Wishlist