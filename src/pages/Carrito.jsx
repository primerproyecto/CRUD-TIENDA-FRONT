import { useEffect, useState } from "react";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useCartRemoveError } from "../hooks";
import {
  getMyCarrito,
  quitarItemCarrito,
} from "../services/API_user/carrito.service";

import { useProducts } from "../context/productsContext";
async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
}
export const Carrito = () => {
  const { id } = useParams();

  const [carrito, setCarrito] = useState([]);

  const { user } = useAuth();
  const idI11 = useId();

  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [okCarrito, setOkCarrito] = useState(false);

  const carritoId = user.carrito;

  const { register, handleSubmit } = useForm();

  const formSubmitQuitar = async (formData) => {
    const customFormData = {
      productId: formData.productId,
    };
    setIsDisabled(true);
    setRes(await quitarItemCarrito(carritoId, customFormData));
    setIsDisabled(false);
  };

  useEffect(() => {
    // Lógica para obtener los valores del endpoint
    const fetchData = async () => {
      try {
        const response = await getMyCarrito(carritoId);
        console.log("que es response", response.data.products);
        const arr = [...response.data.products];
        setCarrito(arr);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    useCartRemoveError(res, setOkCarrito, setRes);
  }, [res]);

  if (okCarrito) {
  }

  return (
    <div>
      {console.log("que es carrito", carrito)}
      <p>
        Carrito {id} del usuario {user.name}{" "}
      </p>
      <p>Lista de productos del usuario</p>
      <ul>
        {carrito.map((item) => {
          return (
            <li key={item._id + Math.random()}>
              {item.productId}- {item.cantidad}
            </li>
          );
        })}
      </ul>
      <ul>
        {/* {carrito.map((item) => console.log("que es item", item))} */}
        {/* {products?.data?.length > 0 &&
          products?.data.map((item) => {
            return (
              <li key={idI11 + Math.random()}>
                {item._id} - {item.title} - <img src={item.image} height="60" />
                <form onSubmit={handleSubmit(formSubmitQuitar)}>
                  <label>
                    <input
                      type="text"
                      hidden={true}
                      value={item.productId}
                      {...register("productId")}
                    />
                  </label>
                  <button>Eliminar</button>
                </form>
              </li>
            );
          })} */}
      </ul>
    </div>
  );
};
