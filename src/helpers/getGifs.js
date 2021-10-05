export const getGifs = async ( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=PlWDtfT2YD09AY9EHc6u02Ym8v33cxuL`;
  const result = await fetch(url);
  const { data } = await result.json();

  // extraemos las propiedades que ns harán falta
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized.url,
  }));
  return(gifs);
};
