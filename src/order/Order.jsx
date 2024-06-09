import React from 'react'
import OrderCard from './OrderCard';
import './Order.css';
import { useSelector } from 'react-redux';

const Order = () => {
    const orders = useSelector((state => state.Storedata.orderItems));
    console.log(orders);
    return (
      <div className="orders__container">
        {!orders || (orders && orders.length === 0) ? (
          <h1>No orders</h1>
        ) : (
          <>
            {orders && orders?.map((item) => (
              <OrderCard
                name={item?.name}
                price={item?.price}
                img={item?.img}
                date={item.date}
              />
            ))}
          </>
        )}
      </div>
    );
}

export default Order