const filterElement = document.querySelector('input')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards() {
  if(filterElement.value === '') {
    for(let card of cards){
      card.style.display = 'block'
    }
    return
  }

  for(let card of cards){
    let title = card.querySelector('h2')

    title = title.textContent.toLocaleLowerCase()

    let filterText = filterElement.value.toLocaleLowerCase()

    if(!title.includes(filterText)){
      card.style.display = 'none'
    }else{
      card.style.display = 'block'
    }
  }
  
}