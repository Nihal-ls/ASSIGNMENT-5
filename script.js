const favoriteCountDisplay = document.getElementById('fav');
const allHeartIcons = document.querySelectorAll('.fav-icon');

let favoriteCount = 0;

for (let i = 0; i < allHeartIcons.length; i++) {

  allHeartIcons[i].addEventListener('click', function () {


    favoriteCount = favoriteCount + 1;


    favoriteCountDisplay.innerText = favoriteCount;
  });
}
// copy counter
const copyCountDisplay = document.getElementById('copy-count')
const copybutton = document.querySelectorAll(".copy-btn")

let copycount = 0
for (let i = 0; i < copybutton.length; i++) {
  copybutton[i].addEventListener('click', function () {


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
  }
})

// calling function
const requiredCoins = 20;
const callButton1 = document.querySelector('.call-button-1')
const card1Heading = document.querySelector('.card-1-heading')
const cardNumber1 = document.querySelector('.card-Number-1')

callButton1.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)
  
  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
     alert('CALLING National Emergency Number...')
  }
  else (
    alert('You need more than 20 coins to call National Emergency Number')
  )
   addHistoryItem(card1Heading.innerText, cardNumber1.innerText)
  
})
// card-2
const callButton2 = document.querySelector('.call-button-2')
const card2Heading = document.querySelector('.card-2-heading')
const cardNumber2 = document.querySelector('.card-Number-2')
callButton2.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Police Helpline Number...')
  }
  else {
    alert('You need more than 20 coins to call Police Helpline Number')
  }
 addHistoryItem(card2Heading.innerText, cardNumber2.innerText)


})
// card-3
const callButton3 = document.querySelector('.call-button-3')
const card3Heading = document.querySelector('.card-3-heading')
const cardNumber3 = document.querySelector('.card-Number-3')
callButton3.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Fire Service Number...')
  }
  else {
    alert('You need more than 20 coins to call Fire Service Number')
  }
  
addHistoryItem(card3Heading.innerText, cardNumber3.innerText)

})
// card-4
const callButton4 = document.querySelector('.call-button-4')
const card4Heading = document.querySelector('.card-4-heading')
const cardNumber4 = document.querySelector('.card-Number-4')
callButton4.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Ambulance Service Number...')
  }
  else {
    alert('You need more than 20 coins to call Ambulance Service Number')
  }
addHistoryItem(card4Heading.innerText, cardNumber4.innerText)

})
// card-5
const callButton5 = document.querySelector('.call-button-5')
const card5Heading = document.querySelector('.card-5-heading')
const cardNumber5 = document.querySelector('.card-Number-5')
callButton5.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING  Women & Child Helpline Number...')
  }
  else {
    alert('You need more than 20 coins to call Women & Child Helpline Number')
  }
 
addHistoryItem(card5Heading.innerText, cardNumber5.innerText)
})
// card-6
const callButton6 = document.querySelector('.call-button-6')
const card6Heading = document.querySelector('.card-6-heading')
const cardNumber6 = document.querySelector('.card-Number-6')
callButton6.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING  Women & Child Helpline Number...')
  }
  else {
    alert('You need more than 20 coins to call Women & Child Helpline Number')
  }

addHistoryItem(card6Heading.innerText, cardNumber6.innerText)
})

// card-7
const callButton7 = document.querySelector('.call-button-7')
const card7Heading = document.querySelector('.card-7-heading')
const cardNumber7 = document.querySelector('.card-Number-7')
callButton7.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING  Electricity Helpline Number...')
  }
  else {
    alert('You need more than 20 coins to call  Number')
  }
  addHistoryItem(card7Heading.innerText, cardNumber7.innerText)
})
// card-8
const callButton8 = document.querySelector('.call-button-8')
const card8Heading = document.querySelector('.card-8-heading')
const cardNumber8 = document.querySelector('.card-Number-8')
callButton8.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)
  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Brac Helpline Number...')
  }
  else {
    alert('You need more than 20 coins to call Brac Helpline Number')
  }
addHistoryItem(card8Heading.innerText, cardNumber8.innerText)



})
// card-9
const callButton9 = document.querySelector('.call-button-9')
const card9Heading = document.querySelector('.card-9-heading')
const cardNumber9 = document.querySelector('.card-Number-9')
callButton9.addEventListener('click', function () {
  let totalCoins = document.getElementById('total-coins').innerText
  let FinalTotalCoins = parseInt(totalCoins)

  if (FinalTotalCoins >= requiredCoins) {
    const newCoins = FinalTotalCoins - requiredCoins;
    document.getElementById('total-coins').innerText = newCoins
    alert('CALLING Bangladesh Railway Helpline Number...')
  }
  else {
    alert('You need more than 20 coins to call Bangladesh Railway Helpline Number')
  }
addHistoryItem(card9Heading.innerText, cardNumber9.innerText)

})

// history
// --- NEW JAVASCRIPT FOR HISTORY FUNCTIONALITY ---

// Get a reference to the container where history items will be added.
const historyList = document.getElementById('history-list');

// Get a reference to the "Clear" button.
const clearButton = document.getElementById('clear-history-button');

// Function to add a new item to the call history list.
function addHistoryItem(heading, number) {
    const historyItem = document.createElement('div');
    
    // Use flexbox and padding to create the correct layout and design.
    historyItem.innerHTML = `
        <div class="flex justify-between items-center py-2 border-b border-gray-200">
            <div>
                <h4 class="font-semibold text-sm">${heading}</h4>
                <p class="text-xs text-gray-600">${number}</p>
            </div>
            <span class="text-xs text-gray-400">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
    `;
    
    // Add the new item to the top of the history list.
    historyList.prepend(historyItem);
}

// Function to clear all items from the history list.
function clearHistory() {
    historyList.innerHTML = '';
}

// Attach the event listener to the "Clear" button.
clearButton.addEventListener('click', clearHistory);
