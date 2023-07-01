import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import "./Home.css";

export const Home = () => {
  const { user, allUser } = useAuth();
  useEffect(() => {}, [user]);

  return <div>Home</div>;
};
