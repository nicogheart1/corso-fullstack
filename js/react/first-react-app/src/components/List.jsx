import CardList from "./CardList";

const List = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

  return (
    <div>
      <h2>List (map)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "0.5rem",
        }}
      >
        {numbers.map((num, i) => (
          <CardList key={i} value={num} />
        ))}
      </div>
    </div>
  );
};

export default List;
