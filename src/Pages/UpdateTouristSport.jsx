import { useParams } from "react-router-dom";

const UpdateTouristSport = () => {
  const { touristSportID } = useParams();
  console.log(touristSportID);
  return <div>UpdateTouristSport</div>;
};

export default UpdateTouristSport;
