import React, { useEffect, useState } from 'react';

const SpellsAPI = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const url = 'https://www.dnd5eapi.co/api/spells/';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAdvice(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default SpellsAPI;
