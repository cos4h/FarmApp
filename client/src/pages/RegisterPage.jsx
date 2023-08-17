import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";
import { useAuth } from "../context/authContext.jsx";

export default function registerPage() {
  const { register, handleSubmit } = useForm();
  const { singup, user } = useAuth();

  console.log(user);
  const onSubmit =  async (values) => {
    singup(values); 
  };
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md"> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Usuario" />
        <input type="email" {...register("email", { required: true })} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"/>
        <input type="password" {...register("password", { required: true })} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"/>
        <input
          type="tel"
          {...register("phone", {
            required: true,
            maxLength: 10,
            minLength: 10,
          })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Celular"/>
        <button type="submit">
          register
        </button>
      </form>
    </div>
  );
}
