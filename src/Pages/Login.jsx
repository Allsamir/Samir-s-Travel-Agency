import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { ThemeContext } from "../ContextProvider/ThemeContext";
const Login = () => {
  const { logIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [isPasswordVisiable, setPasswordVisiable] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data, event) => {
    const { email, password } = data;
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (isValidPassword) {
      logIn(email, password)
        .then(() => {
          event.target.reset();
          showToastMessage();
          navigate(location?.state || "/");
        })
        .catch((err) => {
          console.error(err);
          showToastMessage2(err.message);
        });
    } else {
      showToastMessage3();
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        showToastMessage();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        showToastMessage2(errorMessage);
      });
  };

  const handleFacebookLogin = () => {
    signInWithGithub()
      .then(() => {
        showToastMessage();
        navigate(location?.state || "/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        showToastMessage2(errorMessage);
      });
  };

  const showToastMessage = () => {
    toast.success("Login Successfully !", {
      position: "top-right",
    });
  };

  const showToastMessage2 = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-right",
    });
  };

  const showToastMessage3 = () => {
    toast.error(
      "Your password should contain an Upper & Lower case letter and at least 6 character",
      {
        position: "top-right",
      },
    );
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisiable(!isPasswordVisiable);
  };
  return (
    <>
      <div className="hero min-h-screen mb-20">
        <div
          className={`card shrink-0 w-full max-w-sm shadow-2xl ${
            isDarkMode ? "bg-dim-black" : "bg-white"
          } ${isDarkMode ? "text-white" : "text-light-black"}`}
        >
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text ${
                    isDarkMode ? "text-white" : "text-dim-black"
                  }`}
                >
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className={`input ${
                  isDarkMode ? "bg-dim-black" : "bg-white"
                } input-bordered ${
                  isDarkMode ? "text-white" : "text-light-black"
                }`}
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text ${
                    isDarkMode ? "text-white" : "text-dim-black"
                  }`}
                >
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisiable ? "text" : "password"}
                  placeholder="Password"
                  className={`input ${
                    isDarkMode ? "bg-dim-black" : "bg-white"
                  } input-bordered ${
                    isDarkMode ? "text-white" : "text-light-black"
                  } w-full`}
                  required
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-1 bg-transparent"
                  onClick={handleTogglePasswordVisibility}
                >
                  {isPasswordVisiable ? "🙈" : "👁️"}
                </button>
              </div>
              <label className="label">
                <Link
                  to={`/forget-password`}
                  className="label-text-alt link link-hover"
                >
                  <span className="text-black">Forgot password?</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className={`btn btn-outline ${
                  isDarkMode ? "text-white" : "text-light-black"
                }`}
              >
                <input type="submit" value={"Login"} />
              </button>
            </div>
            <p className="pt-4 text-center">
              Don&apos;t have any account?{" "}
              <Link to={"/register"} className="text-blue-700">
                Register
              </Link>{" "}
              here
            </p>
            <div className="flex justify-center items-center gap-4 mt-3">
              <button
                className="btn btn-outline text-sky-500"
                onClick={handleGoogleLogin}
              >
                <FcGoogle />
              </button>
              <button
                className={`btn btn-outline ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={handleFacebookLogin}
              >
                <FiGithub />
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
