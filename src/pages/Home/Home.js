import Button from "../../components/button/button";
import rose from "../../assets/rose.png";
import "../Home/Home.css";
import "../../App.css";

const Home = () => {
  return (
    <>
      <img id="rose-img" className="undraggable-img" src={rose} alt="rose"></img>
      <div id="homepage-header">
        <h1 id="homepage-header-text-left" className="homepage-header-text">
          Reservior
        </h1>
        <h1 id="homepage-header-text-center">|</h1>
        <h1 id="homepage-header-text-right" className="homepage-header-text">
          rəˈzərv - vi.ˈoɾ
        </h1>
      </div>

      <Button
        text="Log In"
        onclick={() => {
          window.location.href = "/log-in";
        }}
      ></Button>
      <Button
        text="Sign Up"
        onclick={() => {
          window.location.href = "/sign-up";
        }}
      ></Button>
    </>
  );
};

export default Home;
