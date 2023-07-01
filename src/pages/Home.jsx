import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import "./Home.css";

export const Home = () => {
  const { user, allUser } = useAuth();
  useEffect(() => {
    console.log("que es allUser desde el hook authContext", allUser);
    console.log("que es user desde el hook authContext", user);
  }, [user]);

  return <div>Home</div>;
};
