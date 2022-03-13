import { genresList } from "../axios/dataConfig";

const useGenreConversion = (genreIds) => {

  const genresNamesList = [];
  
  if(genreIds)
 { genreIds.slice(0, 3)
    .map((genreId) =>
      genresList
        .filter((el) => el.id === genreId)
        .map((el) => genresNamesList.push(el.name))
    );

    return genresNamesList;
  }
};

export default useGenreConversion;
