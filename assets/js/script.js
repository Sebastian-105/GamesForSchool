
fetch('/assets/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      const game105 = document.createElement('div');
      game105.className = 'games';
      game105.innerHTML = `${game.name}`;
      gamesContainer.appendChild(game105);
      // Add click event listener to the game element to show the game in the game container
      game105.onclick = (e) => {
      };

      // Add click event listener to the back button in the game container to go back to the games list
      gameNav.querySelector('#back').addEventListener('click', (e) => {
      });

      // Add click event listener to the fullscreen button in the game container to enter fullscreen mode
      gameNav.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
          gameFrame.requestFullscreen();
        }
      });
    });
  })
  .catch((e) => {
    alert('Could not load games\n-Sebastian-105');
    alert(e + "\n-Sebastian-105");
    location.replace('./file.html');
  });

// Hide the spinner element after the page is loaded
document.querySelector('.spinner').style.display = 'none';

// Function to get the main save data
function getMainSave() {
  var mainSave = {};

  // List of items in localStorage that should not be saved
  var localStorageDontSave = ['theme', 'tab', 'nebelung'];

  // Convert localStorage to an array of key-value pairs and remove the items that should not be saved
  localStorageSave = Object.entries(localStorage);

  for (let entry in localStorageSave) {
    if (localStorageDontSave.includes(localStorageSave[entry][0])) {
      localStorageSave.splice(entry, 1);
    }
  }

  // Convert the localStorage array to a base64-encoded JSON string
  localStorageSave = btoa(JSON.stringify(localStorageSave));

  // Add the localStorage data to the mainSave object
  mainSave.localStorage = localStorageSave;

  // Get the cookies data and add it to the mainSave object
  cookiesSave = document.cookie;
  cookiesSave = btoa(cookiesSave);
  mainSave.cookies = cookiesSave;

  // Convert the mainSave object to a base64-encoded JSON string
  mainSave = btoa(JSON.stringify(mainSave));

  // Encrypt the mainSave data using AES encryption with the key 'save'
  mainSave = CryptoJS.AES.encrypt(mainSave, 'save').toString();

  // Return the encrypted mainSave data
  return mainSave;
}

// Function to download the main save data as a file
function downloadMainSave() {
  var data = new Blob([getMainSave()]);
  var dataURL = URL.createObjectURL(data);

  var fakeElement = document.createElement('a');
  fakeElement.href = dataURL;
  fakeElement.download = 'games.save';
  fakeElement.click();
  URL.revokeObjectURL(dataURL);
}

// Function to get the main save data from an uploaded file
function getMainSaveFromUpload(data) {
  // Decrypt the uploaded data using AES decryption with the key 'save'
  data = CryptoJS.AES.decrypt(data, 'save').toString(CryptoJS.enc.Utf8);

  // Parse the decrypted data as JSON
  var mainSave = JSON.parse(atob(data));
  var mainLocalStorageSave = JSON.parse(atob(mainSave.localStorage));
  var cookiesSave = atob(mainSave.cookies);

  // Set the items in localStorage using the uploaded data
  for (let item in mainLocalStorageSave) {
    localStorage.setItem(mainLocalStorageSave[item][0], mainLocalStorageSave[item][1]);
  }

  // Set the cookies using the uploaded data
  document.cookie = cookiesSave;
}

// Function to handle the file upload
function uploadMainSave() {
  var hiddenUpload = document.querySelector('.hiddenUpload');
  hiddenUpload.click();

  // Listen for the change event on the file input element
  hiddenUpload.addEventListener('change', function (e) {
    var files = e.target.files;
    var file = files[0];
    if (!file) {
      return;
    }

    // Read the contents of the uploaded file as text and call getMainSaveFromUpload with the result
    var reader = new FileReader();

    reader.onload = function (e) {
      getMainSaveFromUpload(e.target.result);

      // Show a success message to the user
      var uploadResult = document.querySelector('.uploadResult');
      uploadResult.innerText = 'Uploaded save!';
      uploadResult.style.display = 'initial';
      setTimeout(function () {
        uploadResult.style.display = 'none';
      }, 3000);
    };

    reader.readAsText(file);
  });
}

// Handle the hii pattern when keys are pressed
var hiiPattern = ['h', 'i', 'i'];
var hiiCurrent = 0;

document.addEventListener('keydown', function (e) {
  if (e.key !== hiiPattern[hiiCurrent]) {
    return (hiiCurrent = 0);
  }

  hiiCurrent++;

  if (hiiPattern.length == hiiCurrent) {
    hiiCurrent = 0;
    document.querySelector('.hii').removeAttribute('hidden');
  }
});
 //Shadow on scroll script
      let lastKnownScrollPosition = 0;
      let ticking = false;
      document.addEventListener('scroll', function (e) {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function () {
            if (lastKnownScrollPosition == 0) {
              document.getElementsByTagName("nav")[0].style.boxShadow = "";
            } else {
              document.getElementsByTagName("nav")[0].style.boxShadow = "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)";
            }
            ticking = false;
					});
          ticking = true;
        }
      });

      function myFunction105() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }
      
      function myFunction77() {
        const banner = document.querySelectorAll('.banner');
        banner.forEach(banner => {
          var link = 'background-image: url("../assets/images/banner';
          let a = (Math.floor(Math.random() * 9)) + 1;
          link += a.toString();
          link += '.jpg");';
          banner.style = link;
        });
      }
      
      function myFunction2468() {
        var myWindow = window.open("../index.html", "_blank", "width=400,height=400");
      }

      function blocked2() {
        var myWindow = window.open("../105/blocked/index.html", "_blank", "width=300,height=330,resizable=yes,left=500,top=200,toolbar=yes");
      }