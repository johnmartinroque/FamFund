import React, { useEffect, useState } from "react";

function Flask() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {typeof data.members === "undefined" ? (
        <p>Loading members...</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}

export default Flask;
