import Navbar from "./Navbar";

function EmptyPage() {
  return (
    <>
      <Navbar showSignIn={true}/>
      <div className="home-main">
        <h1>Under Progress ... </h1>
      </div>
    </>
  );
}

export default EmptyPage;
