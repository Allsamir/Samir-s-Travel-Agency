import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [myTouristSports, setMyTouristSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/my-tourist-sports/${user.email}`,
        );
        const result = await res.json();
        if (result) {
          setMyTouristSports(result);
        } else {
          setMyTouristSports([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user.email]);

  const deleteTouristSport = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-tourist-sports/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMyTouristSports(
                myTouristSports.filter(
                  (touristSport) => touristSport._id !== id,
                ),
              );
            }
          });
      }
    });
  };

  if (myTouristSports.length === 0) {
    return (
      <div className="text-center h-screen flex justify-center items-center">
        <h1 className="text-xl">You have not added tourist sport yet</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="container mx-auto px-4">
          {loading && (
            <div className="text-center">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          )}
          <div className="overflow-x-auto min-h-screen">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th
                    className={`${
                      isDarkMode ? "text-white" : "text-dim-black"
                    } text-xl`}
                  >
                    Tourist Sport
                  </th>
                  <th
                    className={`${
                      isDarkMode ? "text-white" : "text-dim-black"
                    } text-xl`}
                  >
                    Country
                  </th>
                  <th
                    className={`${
                      isDarkMode ? "text-white" : "text-dim-black"
                    } text-xl`}
                  >
                    Location
                  </th>
                  <th
                    className={`${
                      isDarkMode ? "text-white" : "text-dim-black"
                    } text-xl`}
                  >
                    Update
                  </th>
                  <th
                    className={`${
                      isDarkMode ? "text-white" : "text-dim-black"
                    } text-xl`}
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myTouristSports.map((touristSport, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{touristSport.tourists_spot_name}</td>
                    <td>{touristSport.country_Name}</td>
                    <td>{touristSport.location}</td>
                    <td>
                      <Link to={`/update-tourist-sport/${touristSport._id}`}>
                        <button
                          className={`btn btn-outline ${
                            isDarkMode ? "text-white" : "text-light-black"
                          }`}
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className={`btn btn-outline ${
                          isDarkMode ? "text-white" : "text-light-black"
                        }`}
                        onClick={() => deleteTouristSport(touristSport._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default MyList;
