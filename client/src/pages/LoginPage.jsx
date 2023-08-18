import { useForm } from "react-hook-form";
import { useAuth } from '../context/authContext.jsx';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors } = useAuth();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      {
        loginErrors.map((error, index) => (
          <div key={index} className="bg-red-500 p-2 text-white text-center my-2">
            {error}
          </div>
        ))  
      }
        <h1 className="text-2xl font-bold ">Inicio de sesion</h1> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email es requerido</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerido</p>
          )}
          <button type="submit">Iniciar sesion</button>
        </form>
      </div>
    </div>
  );
}
