const init = () => {
    const inputForm = document.querySelector('form');
    console.log(inputForm)

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
    
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
        console.log(input.value);
        
      });
}

document.addEventListener('DOMContentLoaded', init);