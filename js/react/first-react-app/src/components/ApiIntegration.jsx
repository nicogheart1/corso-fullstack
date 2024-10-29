import { useEffect, useState } from "react";

const ApiIntegration = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch("http://universities.hipolabs.com/search?country=Italy");
      const data = await response.json();
      console.log("data", data);
      setList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>{loading ? "Loading..." : null}</div>
      <h2>API Integration</h2>
      <div>
        {list.slice(0,9).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ApiIntegration;
