const searchBtn = document.querySelector(".search-btn");
const searchField = document.querySelector(".search-bar");

searchBtn.addEventListener("click", search);
searchField.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) search();
});

function search() {
  const queryValue = searchField.value;
  const queryString = `https://www.google.com/search?q=${queryValue}`;
  window.location.href = queryString;
}
