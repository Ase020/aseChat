import "./post.scss";

import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  const toggleCommentOpen = () => {
    setCommentOpen(!commentOpen);
  };

  return (
    <section className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />

            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <p>{post.name}</p>
              </Link>

              <span>12 min ago</span>
            </div>
          </div>

          <MoreHorizOutlined style={{ cursor: "pointer" }} />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlined
                onClick={toggleLiked}
                style={{ cursor: "pointer", color: "red" }}
              />
            ) : (
              <FavoriteBorderOutlined
                onClick={toggleLiked}
                style={{ cursor: "pointer", color: "#5271ff" }}
              />
            )}
            {liked ? 13 : 12} Likes
          </div>

          <div className="item" onClick={toggleCommentOpen}>
            <TextsmsOutlined style={{ cursor: "pointer", color: "#5271ff" }} />
            26 Comments
          </div>

          <div className="item">
            <ShareOutlined style={{ cursor: "pointer", color: "#5271ff" }} />
            Share
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </section>
  );
};

export default Post;
