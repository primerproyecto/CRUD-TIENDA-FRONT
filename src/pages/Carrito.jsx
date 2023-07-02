import { ShoppingCart } from "react-feather";
import { useParams } from "react-router-dom";
export const Carrito = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Carrito {id}</h1>
      <p>Lista de productos del usuario</p>
    </div>
  );
};
