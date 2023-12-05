import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { login } from "../services/index/users.js";
import { userActions } from "../store/reducers/userReducer.js";

const AdminLogin = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.admin);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("schoolAdmin", JSON.stringify(data));
       toast.success("admin loggdin succesfully");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/dashboard/admin");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };
    return (
        <div
            className="relative mx-auto w-full max-w-md bg-white px-6 lg:mt-32 mt-4 md:mt-16 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className="w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-[#457B9D]">Sign in</h1>
                    <p className="mt-2 text-[#5588a9]">Sign in Innovation Institute</p>
                </div>
                <div className="mt-5 pb-2">

                    <form onSubmit={handleSubmit(submitHandler)}>
                       <div className="relative mt-6">
                        <input 
                            type="email"
                            id="email"
                        {...register("email", {
                            pattern: {
                                value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Enter a valid email",
                            },
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                        })}     
                           placeholder="Email Address" className={`peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none ${
                             errors.email ? "border-red-500" : "border-[#c3cad9]"}`} />
                            <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                             {errors.email?.message && (
                                <p className="text-red-500 text-xs mt-1">
                                {errors.email?.message}
                                </p>
                            )}
                        </div>

                        <div className="relative mt-6">
                         <input
                            type="password"
                            id="password"
                            {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            minLength: {
                                value: 6,
                                message: "Password length must be at least 6 characters",
                            },
                            })}
                            placeholder="Enter password"
                            className={`peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none ${
                            errors.password ? "border-red-500" : "border-[#c3cad9]"
                            }` } />
                            <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                             {errors.password?.message && (
                                <p className="text-red-500 text-xs mt-1">
                                {errors.password?.message}
                                </p>
                            )}
                        </div>

                        <div className="my-6">
                        <button type="submit"
                        disabled={!isValid || isLoading}
                        className="w-full rounded-md bg-[#457B9D] px-3 py-4 text-white focus:bg-[#8b9fb4] focus:outline-none">Sign in</button>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;