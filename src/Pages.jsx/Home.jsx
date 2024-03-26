import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  return (
    <div>
        
      <div className="container mx-auto pr-0 md:pr-20 pl-0 md:pl-20 ">
        <Banner />
        <Books />
      </div>
    </div>
  );
};

export default Home;
