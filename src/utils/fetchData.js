export const exerciseOptions = {
  method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "187d9ee0camshe27b7b60940c816p1b088cjsnd231e9c892b7",
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
