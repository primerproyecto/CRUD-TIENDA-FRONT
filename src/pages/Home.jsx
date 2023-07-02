import { useEffect } from "react";
import { ProductGallery, Spinner } from "../components";
import { useAuth } from "../context/authContext";
import { useProducts } from "../context/productsContext";

import "./Home.css";

export const Home = () => {
  const { products, loading } = useProducts();
  const { user } = useAuth();
  console.log("products", products.data);
  console.log("que es usuarioContext", user);
  /* useEffect(() => {}, [user]); */

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grilla">
          {products?.data?.map((item) => {
            return <ProductGallery key={item._id} producto={item} />;
          })}
        </div>
      )}
    </div>
  );
};
