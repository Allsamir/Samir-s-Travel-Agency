import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isDarkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const onSubmit = (data, event) => {
    const email = user.email;
    const touristSportData = data;
    const dataToDB = { email, touristSportData };
    fetch("http://localhost:3000/my-tourist-sports", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToDB),
    })
      .then((res) => res.json())
      .then((result) => {
        event.target.reset();
        if (result.acknowledged) {
          Swal.fire({
            title: "Added Successfully",
            text: "Tourist Sport has been added",
            icon: "success",
            confirmButtonText: "close",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen my-16">
        <div className="flex-col lg:flex-row-reverse w-full">
          <div
            className={`card shrink-0 lg:w-1/2 md:w-4/5 mx-auto w-full shadow-2xl ${
              isDarkMode ? "bg-dim-black" : "bg-white"
            } ${isDarkMode ? "text-white" : "text-light-black"}`}
          >
            <form
              className="card-body w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label className="label">
                  <span
                    className={`label-text ${
                      isDarkMode ? "text-white" : "text-dim-black"
                    }`}
                  >
                    Tourist Sport
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Tourist Sport"
                  className={`input ${
                    isDarkMode ? "bg-dim-black" : "bg-white"
                  } input-bordered ${
                    isDarkMode ? "text-white" : "text-light-black"
                  } w-full`}
                  required
                  {...register("tourists_spot_name")}
                />
              </div>
              <div className="form-control flex-row gap-6">
                <div className="w-1/2">
                  <label className="label">
                    <span
                      className={`label-text ${
                        isDarkMode ? "text-white" : "text-dim-black"
                      }`}
                    >
                      Country Name
                    </span>
                  </label>
                  <select
                    className={`select w-full max-w-xs ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    }`}
                    {...register("country_Name")}
                  >
                    <option value={`bangladesh`}>Bangladesh</option>
                    <option value={`thailand`}>Thailand</option>
                    <option value={`indonesia`}>Indonesia</option>
                    <option value={`malaysia`}>Malaysia</option>
                    <option value={`vietnam`}>Vietnam</option>
                    <option value={`cambodia`}>Cambodia</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span
                      className={`label-text ${
                        isDarkMode ? "text-white" : "text-dim-black"
                      }`}
                    >
                      Location
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    className={`input ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    } w-full`}
                    required
                    {...register("location")}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className={`label-text ${
                      isDarkMode ? "text-white" : "text-dim-black"
                    }`}
                  >
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  className={`input ${
                    isDarkMode ? "bg-dim-black" : "bg-white"
                  } input-bordered ${
                    isDarkMode ? "text-white" : "text-light-black"
                  } w-full`}
                  required
                  {...register("short_description")}
                />
              </div>
              <div className="form-control flex-row gap-6">
                <div className="w-1/2">
                  <label className="label">
                    <span
                      className={`label-text ${
                        isDarkMode ? "text-white" : "text-dim-black"
                      }`}
                    >
                      Travel Time
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Travel Time"
                    className={`input ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    } w-full`}
                    required
                    {...register("travel_time")}
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span
                      className={`label-text ${
                        isDarkMode ? "text-white" : "text-dim-black"
                      }`}
                    >
                      Total Visitors Per Year
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Total Visitors Per Year"
                    className={`input ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    } w-full`}
                    required
                    {...register("totalVisitorsPerYear")}
                  />
                </div>
              </div>
              <div className="form-control flex-row gap-6">
                <div className="w-1/2">
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
                    type="text"
                    placeholder="Email"
                    className={`input ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    } w-full`}
                    value={user.email}
                    required
                    {...register("email")}
                  />
                </div>
                <div className="w-1/2">
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
                    } w-full`}
                    value={user.displayName}
                    required
                    {...register("name")}
                  />
                </div>
              </div>
              <div className="form-control flex-row gap-6">
                <div className="w-1/2">
                  <label className="label">
                    <span
                      className={`label-text ${
                        isDarkMode ? "text-white" : "text-dim-black"
                      }`}
                    >
                      Average Cost
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Average Cost"
                    className={`input ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    } w-full`}
                    required
                    {...register("average_cost")}
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span
                      className={`label-text ${
                        isDarkMode ? "text-white" : "text-dim-black"
                      }`}
                    >
                      Seasonality
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Seasonality"
                    className={`input ${
                      isDarkMode ? "bg-dim-black" : "bg-white"
                    } input-bordered ${
                      isDarkMode ? "text-white" : "text-light-black"
                    } w-full`}
                    required
                    {...register("seasonality")}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className={`label-text ${
                      isDarkMode ? "text-white" : "text-dim-black"
                    }`}
                  >
                    Image URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className={`input ${
                    isDarkMode ? "bg-dim-black" : "bg-white"
                  } input-bordered ${
                    isDarkMode ? "text-white" : "text-light-black"
                  } w-full`}
                  required
                  {...register("image_URL")}
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="form-control mt-6">
                <button
                  className={`btn btn-outline ${
                    isDarkMode ? "text-white" : "text-light-black"
                  }`}
                >
                  <input type="submit" value={`Add`} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
