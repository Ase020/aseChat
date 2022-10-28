import { Helmet } from "react-helmet";
import {
  FacebookTwoTone,
  LinkedIn,
  Instagram,
  Pinterest,
  Twitter,
  Place,
  Language,
  EmailOutlined,
  MoreVert,
} from "@mui/icons-material";

import "./profile.scss";
import { Posts } from "../../components";

const Profile = () => {
  return (
    <>
      {/* <Helmet>
        <title>{`AseChat ${post.name}`}</title>
        <meta
          name={`${post.name}'s profile`}
          content={`View & Connect ${post.name}'s profile on AseChat `}
        />
      </Helmet> */}
      <Helmet>
        <title>{`AseChat User`}</title>
        <meta
          name={`User's profile`}
          content={`View & Connect user's profile on AseChat `}
        />
      </Helmet>

      <main className="profile">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="cover"
          />
          <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="profilePic"
          />
        </div>

        <div className="profileContainer">
          <div className="userInfo">
            <div className="left">
              <a href="http://facebook.com">
                <FacebookTwoTone fontSize="medium" />
              </a>
              <a href="http://instagram.com">
                <Instagram fontSize="medium" />
              </a>
              <a href="http://twitter.com">
                <Twitter fontSize="medium" />
              </a>
              <a href="http://linkedin.com">
                <LinkedIn fontSize="medium" />
              </a>
              <a href="http://pinterest.com">
                <Pinterest fontSize="medium" />
              </a>
            </div>

            <div className="center">
              <span>Tabitha Wanjala</span>

              <div className="address">
                <div className="item">
                  <Place />
                  <span>Kenya</span>
                </div>

                <div className="item">
                  <Language />
                  <span>asedesign.netlify.app</span>
                </div>
              </div>

              <button>Follow</button>
            </div>

            <div className="right">
              <EmailOutlined />
              <MoreVert />
            </div>
          </div>
        </div>

        <div className="posts">
          <Posts />
        </div>
      </main>
    </>
  );
};

export default Profile;
