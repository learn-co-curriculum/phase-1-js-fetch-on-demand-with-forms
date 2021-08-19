const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#searchByID").value;
    console.log(input);
    fetch(`http://localhost:3000/movies/${input}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
