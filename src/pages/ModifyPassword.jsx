import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { changePasswordUser } from "../services/API_user/user.service";
import { Link, Navigate } from "react-router-dom";

import { useModifyPassword } from "../hooks";

export const ModifyPassword = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const { handleSubmit, register } = useForm();
  const [modifyPass, setModifyPass] = useState(false);

  //! 1)-------------------- LA FUNCIOON QUE SE ENCARGA DE GESTIONAR LOS DATOS DEL FORMULARIO

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await changePasswordUser(formData));
    setSend(false);
  };
  //! 2) ----------------USEEFFECT QUE GESTIONA LA RES CON SUS ERRORES Y SUS 200

  useEffect(() => {
    console.log("que es res desde el fortogpass", res);
    useModifyPassword(res, setRes, setModifyPass);
  }, [res]);

  //! 3) ---------------- ESTADOS DE NAVEGACION O QUE LA fiuncion ESTA ok

  if (modifyPass) {
    console.log("envio de la contraseña correcto");
    /*  return <Navigate to="/login" />; */
  }
  return (
    <div className="form-wrap">
      <h1>Change your password dddd💱</h1>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="user_container form-group">
          <input
            className="input_user"
            type="text"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
          <label htmlFor="custom-input" className="custom-placeholder">
            Password
          </label>
        </div>
        <div className="user_container form-group">
          <input
            className="input_user"
            type="text"
            id="newPassword"
            name="newPassword"
            autoComplete="false"
            {...register("newPassword", { required: true })}
          />
          <label htmlFor="custom-input" className="custom-placeholder">
            newPassword
          </label>
        </div>

        <div className="btn_container">
          <button
            className="btn"
            type="submit"
            disabled={send}
            style={{ background: send ? "#49c1a388" : "#49c1a2" }}
          >
            Change password
          </button>
        </div>
      </form>
    </div>
  );
};
