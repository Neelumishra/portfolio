import React, { useEffect, useState } from "react";
import CardBaord from "../component/Cards";
function Work() {
  const [data, setData] = useState([]);
  function dataFetch() {
    fetch("https://api.github.com/users/Neelumishra/starred")
      .then((r) => r.json())
      .then((final) => setData(final));
  }
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 m-5">
      {data &&
        data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((e) => {
            if (e.stargazers_count > 0) {
              return <CardBaord cardData={e} />;
            }
          })}
    </div>
  );
}

export default Work;
