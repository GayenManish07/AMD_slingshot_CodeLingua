import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/question");
  };

  return (
    <>
      <Navbar showSignIn={true}/>
      <div className="home-main">
        <div className="intro-text">
          Learn <span className="rainbow">DSA</span>
        </div>

        <div className='subtext'>
          Learn DSA by playing bite sized games.    
        </div>

        <button onClick={handleSubmit} className="my-button">
          Start Your Journey
        </button>    

      </div>
    </>
  );
}

export default Home;
