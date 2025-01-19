const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el =document.getElementById('success-message');
const correctLetters = ['j', 'a', 'v'];
const worngLetters = []

function getRandomWord(){
    const words = ["java","javascirpt",'python'];

    return words[Math.floor(Math.random()* words.length)];
}

console.log(getRandomWord());

function displayWord(){
    const selectedWord = getRandomWord();

    word_el.innerHTML =`
       ${selectedWord.split('').map(letter =>`
       <div class="letter">
         ${correctLetters.includes(letter) ? letter: ''}
       </div>
       `).join('')}
    `;

    const w= word_el.innerText.replace(/\n/g,'');
    if(w === selectedWord){
      popup.style.display = 'flex';
      message_el.innerText = 'tebrikler kazandiniz'
    }


}
displayWord();