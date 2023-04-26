export function getRandomPage() {
  const maxPage = 1000;
  return Math.ceil(Math.random() * maxPage);
}
