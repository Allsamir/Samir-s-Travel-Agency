import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [isPasswordVisiable, setPasswordVisiable] = useState(false);
  const { createUser } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    const { name, email, photoURL, password } = data;
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (isValidPassword) {
      createUser(email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              showToastMessage();
              const userEmail = { email };
              fetch(
                "https://assinment-10-server-ten.vercel.app/my-tourist-sports",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userEmail),
                },
              )
                .then((res) => res.json())
                .then((result) => {
                  if (result.acknowledged) {
                    Swal.fire({
                      title: "Successfully Registerd",
                      icon: "success",
                      confirmButtonText: "close",
                    });
                    event.target.reset();
                    navigate("/");
                  }
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => {
              console.error(err);
              showToastMessage2();
            });
        })
        .catch((error) => {
          console.error(error);
          showToastMessage2(error.message);
          event.target.reset();
        });
    } else {
      showToastMessage3();
    }
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisiable(!isPasswordVisiable);
  };

  const showToastMessage = () => {
    toast.success("Successfull Registation !", {
      position: "top-right",
    });
  };
  const showToastMessage2 = (errorMessage) => {
    toast.error(errorMessage || "Registation failed!", {
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

  return (
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
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className={`input ${
                isDarkMode ? "bg-dim-black" : "bg-white"
              } input-bordered ${
                isDarkMode ? "text-white" : "text-light-black"
              }`}
              required
              {...register("name")}
            />
          </div>
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
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Live Photo URL"
              className={`input ${
                isDarkMode ? "bg-dim-black" : "bg-white"
              } input-bordered ${
                isDarkMode ? "text-white" : "text-light-black"
              }`}
              required
              {...register("photoURL")}
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
          </div>
          <div className="form-control mt-6">
            <button
              className={`btn btn-outline ${
                isDarkMode ? "text-white" : "text-light-black"
              }`}
            >
              <input type="submit" value={"Register"} />
            </button>
          </div>
          <p className="pt-4 text-center">
            Already registerd?{" "}
            <Link to={"/login"} className="text-blue-700 font-bold">
              Login
            </Link>{" "}
            here
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
