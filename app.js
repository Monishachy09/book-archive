const searchBook = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => desplaysearchresult(data.books))
}

const desplaysearchresult = books => {
    const searchresult = document.getElementById('result-search');
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                </div>
                `;
        searchresult.appendChild(div);
    })
}