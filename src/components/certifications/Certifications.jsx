import useFetch from "../../hooks/useFetch";
import LoadingBox from "../boxes/LoadingBox";
import "./certifications.css";

const Certifications = () => {
  const { data, loading, error } = useFetch(
    `https://bilgideri.onrender.com/api/leathers?title=Certifications`
  );

  return (
    <div className="certifications" id="certifications">
      <h1>Certifications</h1>
      <div className="infoCertifications">
        <p>
          Bilgi Deri ® holds following certifications ; TS EN ISO
          9001 : 2015; QUALITY MANAGEMENT SYSTEM , TS EN ISO 14001 : 2015 ;
          ENVIROMENTAL MANAGEMENT SYSTEM TS OHSAS 18001 : 2008;OCCUPATIONAL
          HEALTH AND SAFETY MANAGEMENT SYSTEM, CERTIFICATE NO : 936-01-02-03 UCD
          Uşak Cevahir Deri ® has been audited against Leather Working Group
          Standards .
        </p>
      </div>
      <div className="itemContainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          data.map((d) => (
            <div className="itemCer" key={d._id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Certifications;
