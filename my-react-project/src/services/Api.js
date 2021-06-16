const getApiData = () => {
  return fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          photo: character.image,
          specie: character.species,
          id: character.id,
          planet: character.origin.name,
          episode: character.episode,
          status: character.status,
        };
      });
      return cleanData;
    });
};

export default getApiData;
