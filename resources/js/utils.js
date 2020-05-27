export const makeEmbedLinkYT = url => {
  const videoCode = url
    .split("/")
    .find(s => s.includes("watch"))
    .substring(8, 19);
  return `https://youtube.com/embed/${videoCode}?origin=https://localhost:8080`;
}
