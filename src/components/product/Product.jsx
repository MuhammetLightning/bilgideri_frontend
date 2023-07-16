import { useEffect, useState } from "react";
import ProductList from "../productList/ProductList.jsx";
import "./product.css";
import LoadingBox from "../boxes/LoadingBox.jsx";
import useFetch from "../../hooks/useFetch.js";

export default function Product() {
  const [selected, setSelected] = useState("LAMB NAPPA");
  const { data, loading, error } = useFetch(`/leathers?title=${selected}`);
  const [data1, setData1] = useState([]);
  const list = [
    {
      id: "lambNappa",
      title: "LAMB NAPPA",
    },
    {
      id: "stretchLambNappa",
      title: "STRETCH LAMB NAPPA",
    },
    {
      id: "metisSuede",
      title: "METIS SUEDE",
    },
    {
      id: "stretchMetisSuede",
      title: "STRETCH METIS SUEDE",
    },
    {
      id: "babyCalf",
      title: "BABY CALF",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "LAMB NAPPA":
        setData1(data);
        break;
      case "STRETCH LAMB NAPPA":
        setData1(data);
        break;
      case "METIS SUEDE":
        setData1(data);
        break;
      case "STRETCH METIS SUEDE":
        setData1(data);
        break;
      case "BABY CALF":
        setData1(data);
        break;

      default:
        setData1(data);
        break;
    }
  }, [selected, data]);

  return (
    <div className="product" id="product">
      <h1>Products</h1>
      <ul>
        {list.map((item) => (
          <ProductList
            title={item.title}
            active={selected === item.title}
            setSelected={setSelected}
            setData={setData1}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="itemContainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : (
          data1.map((d) => (
            <div className="item" key={d._id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
