import React, { useEffect, useState } from 'react';
import fetchData from '../fetchData';

const IndexPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const data = await fetchData();
      setPlayers(data.players);
    }

    fetchPlayers();
  }, []);

  return (
    <div>
      {players.map((player, index) => (
        <PlayerStats key={index} player={player} />
      ))}
    </div>
  );
};

export default IndexPage;
