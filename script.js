

let cards = document.querySelectorAll('.card');
console.log(cards);
function removerClaseActiva (){
    cards.forEach(item=>{
        item.classList.remove('activa');
    });
}
cards.forEach(item => {
 item.addEventListener('click', function(){
    removerClaseActiva();
    item.classList.add('activa');
   
 })
} );

