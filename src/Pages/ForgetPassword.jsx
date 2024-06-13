import Swal from "sweetalert2";
import { auth } from "../config/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useContext } from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";

const handleSubmit = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      Swal.fire({
        title: "Password Reset Link Sent",
        icon: "success",
        confirmButtonText: "Close",
        timer: 1500,
      });
    })
    .catch((err) => console.error(err));
};

const ForgetPassword = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="h-screen">
          <form
            className="card-body mt-20 lg:w-1/2 md:w-4/5 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Reset Your Password
                </span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className={`input input-bordered bg-white text-black`}
                required
                name="email"
              />
            </div>
            <div className="form-control mt-6">
              <button
                className={`btn btn-outline uppercase text-black ${
                  isDarkMode && "bg-white text-black"
                }`}
              >
                Send Password Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
