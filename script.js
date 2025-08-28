const favoriteCountDisplay = document.getElementById('fav');
const allHeartIcons = document.querySelectorAll('.fav-icon');

let favoriteCount = 0;

for (let i = 0; i < allHeartIcons.length; i++) {

    allHeartIcons[i].addEventListener('click', function() {
      

        favoriteCount = favoriteCount + 1;

      
        favoriteCountDisplay.innerText = favoriteCount;
    });
}