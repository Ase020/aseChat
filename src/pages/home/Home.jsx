import { Helmet } from "react-helmet";
import { Posts, Stories } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AseChat Home</title>
        <meta
          name="homepage"
          content="This is the main contents' page of a user's AseChat Feed"
        />
      </Helmet>

      <div className="home">
        <Stories />
        <Posts />
      </div>
    </>
  );
};

export default Home;
