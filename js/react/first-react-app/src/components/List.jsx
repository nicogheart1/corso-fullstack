import { Outlet, useNavigate } from "react-router-dom";
import CardList from "./CardList";

const List = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

  const navigate = useNavigate();

  return (
    <div>
      <h2>List (map)</h2>

      <Outlet />
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "0.5rem",
        }}
      >
        {numbers.map((num, i) => (
          <CardList key={i} value={num} onBtnClick={() => {
            navigate(`/list/${num}`);
          }} />
        ))}
      </div>
    </div>
  );
};

export default List;
