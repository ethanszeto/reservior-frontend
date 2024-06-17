import Button from "../../components/button/button";
import rose from "../../assets/rose.png";
import "../Home/Home.css";

const Home = () => {
  return (
    <>
      <img id="rose-img" src={rose} alt="rose"></img>
      <div id="homepage-header">
        <h1 id="homepage-header-text-left" className="homepage-header-text">
          Reservior
        </h1>
        <h1 id="homepage-header-text-center">|</h1>
        <h1 id="homepage-header-text-right" className="homepage-header-text">
          rəˈzərv - vi.ˈoɾ
        </h1>
      </div>
      <div id="home-description">
        <p id="description-text">a place to store adventures with meaningful people...</p>
      </div>
      <div id="home-btn-container">
        <Button
          className="login-home home-btn"
          text="Log In"
          onclick={() => {
            window.location.href = "/log-in";
          }}
        ></Button>
        <Button
          className="signup-home home-btn"
          text="Sign Up"
          onclick={() => {
            window.location.href = "/sign-up";
          }}
        ></Button>
      </div>
    </>
  );
};

export default Home;
