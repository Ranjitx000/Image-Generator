let apikey="cGNAK7Bh_0Fpg28WKESLNV-PEfSfwTqe7_4QaciOGAk"

let form=document.querySelector("form")
let searchbar=document.getElementById("search-input")
// let serchresult=document.querySelector(".search-result")
let searchResultsContainer = document.getElementById("search-results-container");
let showmore=document.getElementById("show-more")

let inputdata=""
let page=1;


 async  function surchengine() {
    inputdata = searchbar.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${ inputdata}&client_id=${apikey}`;


    let responce= await fetch(url)
    let data= await responce.json()
    let results=data.results
    if (page === 1) {
        searchResultsContainer.innerHTML="";
    }
    results.map((result)=>{
        let imagewrapper=document.createElement('div')
        imagewrapper.classList.add("search-result")
        const image=document.createElement('img')
        image.src=result.urls.small
        image.alt=result.alt_description

        imagewrapper.appendChild(image)
        searchResultsContainer.appendChild(imagewrapper)
    });
page++
if (page>1) {
    showmore.style.display="block"
}
    

}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    page=1;
    surchengine();
})
showmore.addEventListener('click',()=>{

    surchengine();
})



