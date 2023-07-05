import { updateToken } from "../../utils/updateToken";
import { APIuser } from "./serviceApiUser.config";

//! ------------------------------- GETALLPRODUCTS -----------------------------------
export const getAllProducts = async () => {
  return APIuser.get("/products/getAllProducts")
    .then((res) => {
      return res;
    })
    .catch((error) => error);
};

//! -----------------------------ADD A PRODUCT----------------------------------

export const postOneProduct = async (formData) => {
  return APIuser.post("/products/new", formData)
    .then((res) => {
      return res;
    })
    .catch((error) => error);
};

//! ---------------------------LOGIN --------------------------------------------

/* export const loginUser = async (formData) => {
  return APIuser.post("/users/login", formData)
    .then((res) => res)
    .catch((error) => error);
}; */

//! ------------------------- AUTO LOGIN ------------------------------------------

/* export const autoLoginUser = async (formData) => {
  return APIuser.post("/users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
}; */

//! ------------------------ FORGOT PASSWORD --------------------------------------
/* export const forgotPasswordUser = async (formData) => {
  return APIuser.patch("/users/forgotpassword", formData)
    .then((res) => res)
    .catch((error) => error);
}; */

//! ----------------------- CHANGE PASSWORD ----- ESTAMOS LOGADOS----------------

/* export const changePasswordUser = async (formData) => {
  return APIuser.patch("/users/changepassword", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
}; */

//! --------------------- UPDATE ---------------------------------------

/* export const updateUser = async (formData) => {
  return APIuser.patch("/users/update/update", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
}; */

//!----------------------- DELETE ---------------------------------------

/* export const deleteUser = async () => {
  return APIuser.delete("/users/", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => error);
}; */
