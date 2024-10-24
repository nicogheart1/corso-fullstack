import { useEffect, useState } from "react";

const ApiIntegration = () => {
  const [loading, setLoading] = useState(false);
  const [beerList, setBeerList] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      console.log("data", data);
      setBeerList(data);
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
        {beerList.slice(0,9).map((beer) => (
          <div key={beer.id}>{beer.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ApiIntegration;
