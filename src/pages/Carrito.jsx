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

export const Carrito = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [productos, setProducts] = useState([]);
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
        const response = await getMyCarrito(user.carrito);
        const jsonData = await response.data;
        setProducts(jsonData.products);
        setRes(await getMyCarrito(user.carrito));
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
      <h1>Carrito {id}</h1>
      <p>Lista de productos del usuario</p>
      <ul>
        {productos.map((item) => {
          {
            /* console.log("ques es item", item); */
          }
          return (
            <li key={idI11 + Math.random()}>
              {item.productId} - {item.cantidad}{" "}
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
        })}
      </ul>
    </div>
  );
};
