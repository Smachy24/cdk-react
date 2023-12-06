import { useEffect, useState } from "react";

function ListSeries() {
  const [series, setSeries] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const fetchSeries = async () => {
        const series = await fetch("https://pokeapi.co/api/v2/pokemon", {
          method: "GET",
        });
        const seriesJson = await series.json();
        setSeries(seriesJson.results);
      };

      fetchSeries();
    } catch (error) {
      setMessage(
        "Erreur lors de la récupération des séries, " + JSON.stringify(error)
      );
    }
  }, []);

  if (message) {
    return <div>{message}</div>;
  }

  return series.map(({ name, url }, key) => (
    <div className="p-4 border flex flex-col max-w-fit" key={key}>
      <image src="" className="p-8 bg-red-500" />
      <span>{name}</span> <span>{url}</span>
    </div>
  ));
}

export default ListSeries;
