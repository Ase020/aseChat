import { useContext } from "react";
import {
  Courses,
  Events,
  Friends,
  Fund,
  Gallery,
  Gaming,
  Groups,
  Market,
  Memories,
  Messages,
  Tutorials,
  Videos,
  Watch,
} from "../../assets";
import { AuthContext } from "../../context/authContext";
import "./leftBar.scss";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt="user"
              height={30}
              width={30}
            />
            <span>{currentUser.name}</span>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>

          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>

          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
