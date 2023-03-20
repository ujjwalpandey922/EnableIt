import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./home.css";

const Home = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await fetch(
          `https://give-me-users-forever.vercel.app/api/users/${currentPage}/next`
        );
        const data = await res.json();

        setInfo([...data.users.slice(0, 10)]);
      } catch (error) {}
    };
    getInfo();
  }, [currentPage]);
  const handleNext = () => {
    setCurrentPage((pre) => (pre = pre + 1));
  };
  const handlePre = () => {
    setCurrentPage((pre) => (pre < 1 ? 0 : (pre = pre - 1)));
  };
  return (
    <div className="home">
      <div className="cardInfo">
        {info.map((e) => (
          <Card key={e.ID} individualInfo={e} />
        ))}
      </div>
      <div className="buttons">
        <button
          onClick={handlePre}
          className={!currentPage ? " btn pre " : `btn`}
    
        >
          Pre
        </button>
        <button className="next btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
