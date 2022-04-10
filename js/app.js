// document.querySelector('#search-input').
// addEventListener('input', filterCard);

// function filterCard(){
//     const searchInput = document.querySelector('#search-input');
//     const filter = searchInput.value.toLowerCase();
//     const cardItems = document.querySelectorAll('.films');

//     cardItems.forEach((item) =>{
//         let text = item.textContent;
//         if(text.toLowerCase().includes(filter.toLowerCase())){
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

// function searchProduct(){
//     const input = document.getElementById('filter').value.toUpperCase();
//     const cardContainer = document.getElementById('card-list');
//     console.log(cardContainer);

//     const card = cardContainer.getElementsByClassName('card');
//     console.log(card);

//     for(let i=0; i<card.length; i++){
//         let tittle = card[i].querySelector(".card-body p.card-text");
//         console.log(tittle);

//         if(tittle.innerText.toUpperCase().indexOf(input) > -1){
//             card[i].syle.display = "";
//         } else {
//             card[i].style.display = "none";
//         }
//     }
// }

$("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mycard > div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });