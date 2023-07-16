import "./productList.css";

export default function ProductList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "productList active" : "productList"}
      onClick={() => {
        setSelected(title);
      }}
      key={id}
    >
      {title}
    </li>
  );
}
