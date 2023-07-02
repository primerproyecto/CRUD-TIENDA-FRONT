import React, { useState, useEffect } from "react";
import { ShoppingCart, Heart } from "react-feather";
import { useCart } from "../context/cartContext";
import { useForm } from "react-hook-form";
import {
  getMyCarrito,
  postCarrito,
} from "../services/API_user/carrito.service";
import { useCartAddError } from "../hooks/useCartAddError";

export const ProductGallery = ({ producto }) => {
  const { carrito, setCarrito } = useCart();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});

  const formSubmit = async (formData) => {
    /*  setSend(true); */
    setRes(await postCarrito(formData, carrito.data._id));
    /* setSend(false); */
  };

  //? 2) funcion que se encarga del formulario- de la data del formulario
  //! ------------------------------------------------------------------------------
  useEffect(() => {
    useCartAddError(res, setRes);
    /* if (res?.status == 200) bridgeData("ALLUSER"); */
  }, [res]);

  //! ------------------------------------------------------------------------------
  //? 3) Estados de navegacion ----> lo veremos en siguiente proyectos
  //! ------------------------------------------------------------------------------

  return (
    <figure>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.desc}</p>
      <p>Precio: {producto.price}</p>
      <p>Size: {producto.size}</p>
      <p>Color: {producto.color}</p>
      <p>Categoría: {producto.categories}</p>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          type="text"
          hidden
          value={producto._id}
          {...register("productId")}
        />
        <button>
          <ShoppingCart />
        </button>
      </form>
      <button>
        <Heart />
      </button>
      <figcaption></figcaption>
    </figure>
  );
};
