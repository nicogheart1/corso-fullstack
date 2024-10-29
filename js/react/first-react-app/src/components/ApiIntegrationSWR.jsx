import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ApiIntegrationSWR = () => {
  const {
    data: list = [],
    error,
    isLoading,
    mutate: updateList
  } = useSWR("http://universities.hipolabs.com/search?country=Italy", fetcher);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : null}
      {error ? <div>Error: {error.message}</div> : null}
      <h2>API Integration SWR</h2>
      <button onClick={() => updateList()}>Update Results</button>
      <div>
        {list.slice(0, 9).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ApiIntegrationSWR;
