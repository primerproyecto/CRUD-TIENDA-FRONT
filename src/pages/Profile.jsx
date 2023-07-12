import "./Profile.css";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import { Key, UserX } from "react-feather";
Key;
export const Profile = () => {
  const { user } = useAuth();
  console.log("que es user", user);
  return (
    <div>
      <Link to="/changepassword">
        <Key />
        Cambiar contraseña
      </Link>
      <Link to="/changepassword">
        <UserX />
        Borrar usuario
      </Link>
      <h1>
        Nombre {user.email} - {user.rol}
      </h1>
      <img src={user.image} />
      <h2>Carrito: {user.carrito}</h2>
    </div>
  );
};
