import Carousel from "react-bootstrap/Carousel";
import "./intro.css";

function Intro() {
  return (
    <div className="introContainer" id="intro">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.usakcevahirderi.com/img/production/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bilgi Deri</h3>
            <p>
              as of july 2021, ucd usak cevahir deri upgraded its membership
              status and became gold rated lwg member
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.usakcevahirderi.com/img/production/9.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>TRADITION &</h3>
            <p>INNOVATION</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.usakcevahirderi.com/img/production/10.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ECO-FRIENDLY</h3>
            <p>
            ENVIRONMENTAL SUSTAINABILITY
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Intro;
