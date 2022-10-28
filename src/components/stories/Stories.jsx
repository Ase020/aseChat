import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY DATE
  const stories = [
    {
      id: 1,
      name: "Hymie Bahati",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Max Ajwang",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Elon Musk",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Peter Drury",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map(({ id, name, img }) => (
        <div key={id} className="story">
          <img src={img} alt={img} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
