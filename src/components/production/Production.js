import useFetch from "../../hooks/useFetch.js";
import LoadingBox from "../boxes/LoadingBox.jsx";
import "./production.css";

const Production = () => {
  const { data, loading, error } = useFetch(
    `https://bilgideri.onrender.com/api/leathers?title=Production`
  );
  return (
    <div className="production" id="production">
      <h1>Production</h1>
      <div className="infoProduction">
        <p>
          Bilgi Deri ® continues its journey with a professional and
          experienced management team, 150 employees and two separate factories
          in total 13000 m2 of covered space, set with the latest technology in
          tanning equipment and machinery, capable of producing 9.000.000 sqft
          annually.
        </p>
      </div>
      <div className="itemContainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          data.map((d) => (
            <div className="item" key={d._id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Production;
