import "./Profile.css";
import { useAuth } from "../context/authContext";
export const Profile = () => {
  const { user } = useAuth();
  console.log("que es user", user);
  return (
    <div>
      <h1>
        Nombre {user.email} - {user.rol}
      </h1>
      <img src={user.image} />
      <h2>Carrito: {user.carrito}</h2>
    </div>
  );
};
