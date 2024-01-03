import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-text">Welcome to the Home Page</h1>
      <p className="text-secondary mt-2">This is a secondary</p>
      <p className="text-primary mt-2">This is a primary</p>
      <button className="bg-accent text-white px-4 py-2 rounded mt-4">
        This is accent
      </button>
      {/* Corrected class name here */}
    </div>
  );
};

export default Home;
