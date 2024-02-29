const btnContainer = document.getElementById('btn-container');

const fetchCatagories = () =>{
    const url = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
    .then((res) => res.json())
    .then(({data}) => {
        data.forEach((card) => {
            console.log(card)

            const newBtn = document.createElement('button');
            newBtn.classList = 'btn btn-ghost bg-slate-500 text-white text-lg'
            newBtn.innerText = card.category;
            newBtn.addEventListener('click', () => fetchDataByCatagories())
            btnContainer.appendChild(newBtn)
        })
    })
}


const fetchDataByCatagories = (catagoriesID) =>{
    console.log(catagoriesID)
}
fetchCatagories()