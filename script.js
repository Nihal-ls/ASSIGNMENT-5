const favoriteCountDisplay = document.getElementById('fav');
const allHeartIcons = document.querySelectorAll('.fav-icon');

let favoriteCount = 0;

for (let i = 0; i < allHeartIcons.length; i++) {

    allHeartIcons[i].addEventListener('click', function() {
      

        favoriteCount = favoriteCount + 1;

      
        favoriteCountDisplay.innerText = favoriteCount;
    });
}
// copy counter
const copyCountDisplay = document.getElementById('copy-count')
const copybutton = document.querySelectorAll(".copy-btn")

let copycount = 0
for (let i = 0; i < copybutton.length; i++){
  copybutton[i].addEventListener('click', function(){
      

        copycount = copycount + 1;

      
        copyCountDisplay.innerText = copycount;
    });
}


// coppy number
async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(ta);
    }
  }

  document.addEventListener('click', async (evt) => {
    // Copy button
    let copyCount = 0;
    const btn = evt.target.closest('[data-copy-btn]');
    if (btn) {
      const card = btn.closest('[data-card]');
      const sourceEl = card && card.querySelector('[data-copy]');
      const text = (sourceEl?.innerText || '').trim();
      if (!text) return;

      const statusEl = btn.querySelector('.status');
      const originalLabel = btn.dataset.label ?? btn.textContent;

      btn.disabled = true;
      try {
        const success = await copyTextToClipboard(text);
        const msg = success ? 'Copied!' : 'Copy failed';
        if (statusEl) statusEl.textContent = msg;
        if (success) {
          copyCount++;
          document.getElementById("copy-counter").textContent = copyCount;
        }
      } finally {
        setTimeout(() => {
          if (statusEl) statusEl.textContent = originalLabel;
          btn.disabled = false;
        }, 1500);
      }
    }})

// calling function

const callButton1 = document.querySelector('.call-button-1')
const card1Heading = document.querySelector('.card-1-heading')
const requiredCoins = 20;
callButton1.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   if(FinalTotalCoins >= requiredCoins ){
      const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
   return alert('CALLING National Emergency Number...')
   } 
   else(
    alert('You need more than 20 coins to call National Emergency Number')
   )
   const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
   addHistoryItem(cardHeading, cardNumber);
})
// coppy section

// card-2
const callButton2 = document.querySelector('.call-button-2')
const card2Heading = document.querySelector('.card-2-heading')
callButton2.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Police Helpline Number...')
   } 
   else{
   alert('You need more than 20 coins to call Police Helpline Number')
   }
   addHistoryItem(cardHeading, cardNumber);
  
    
})
// card-3
const callButton3 = document.querySelector('.call-button-3')
const card3Heading = document.querySelector('.card-3-heading')
callButton3.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Fire Service Number...')
   } 
   else{
 alert('You need more than 20 coins to call Fire Service Number')
   }
   addHistoryItem(cardHeading, cardNumber);
    
})
// card-4
const callButton4 = document.querySelector('.call-button-4')
const card4Heading = document.querySelector('.card-4-heading')
callButton4.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Ambulance Service Number...')
   } 
   else{
     alert('You need more than 20 coins to call Ambulance Service Number')
   }
   addHistoryItem(cardHeading, cardNumber);
    
})
// card-5
const callButton5 = document.querySelector('.call-button-5')
const card5Heading = document.querySelector('.card-5-heading')
callButton5.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
    alert('CALLING  Women & Child Helpline Number...')
   } 
   else{
     alert('You need more than 20 coins to call Women & Child Helpline Number')
   }
   addHistoryItem(cardHeading, cardNumber);
    
})
// card-6
const callButton6 = document.querySelector('.call-button-6')
const card6Heading = document.querySelector('.card-6-heading')
callButton6.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
     alert('CALLING  Anti-Corruption Helpline Number...')
   } 
   else{
     alert('You need more than 20 coins to call Anti-Corruption Helpline Number')
   }
   addHistoryItem(cardHeading, cardNumber);
    
})
// card-7
const callButton7 = document.querySelector('.call-button-7')
const card7Heading = document.querySelector('.card-7-heading')
callButton7.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
   alert('CALLING  Electricity Helpline Number...')
   } 
   else{
     alert('You need more than 20 coins to call  Number')
   }
    addHistoryItem(cardHeading, cardNumber);
})
// card-8
const callButton8 = document.querySelector('.call-button-8')
const card8Heading = document.querySelector('.card-8-heading')
callButton8.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Brac Helpline Number...')
   } 
   else{
    alert('You need more than 20 coins to call Brac Helpline Number')
   }
    addHistoryItem(cardHeading, cardNumber);
})
// card-9
const callButton9 = document.querySelector('.call-button-9')
const card9Heading = document.querySelector('.card-9-heading')
const cardNumber9 = document.querySelector('.card-Number-9')
callButton9.addEventListener('click', function(){
 let totalCoins = document.getElementById('total-coins').innerText
    let FinalTotalCoins = parseInt(totalCoins)
   
   if(FinalTotalCoins >= requiredCoins ){
     const newCoins = FinalTotalCoins - requiredCoins;
   document.getElementById('total-coins').innerText = newCoins
     alert('CALLING Bangladesh Railway Helpline Number...')
   } 
   else{
     alert('You need more than 20 coins to call Bangladesh Railway Helpline Number')
   }
   addHistoryItem(card9Heading.innerHTML, cardNumber9.innerText);
    
})



