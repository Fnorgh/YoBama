// Create an array of image paths
const imagePaths = [
  'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg',
  'https://www.linkpicture.com/q/yoda3.png',
  'https://www.linkpicture.com/q/yoda5.png',
  'https://www.linkpicture.com/q/yoda33.png',
  'https://www.linkpicture.com/q/yoda2.png',
  'https://www.linkpicture.com/q/yoda1.png',
  'https://www.linkpicture.com/q/image_598.png',
  'https://www.linkpicture.com/q/yoda333_1.jpg',
  'https://www.linkpicture.com/q/yoda55_1.png',
  'https://www.linkpicture.com/q/yoda3453.jpg',
  'https://www.linkpicture.com/q/yoda69.jpg',
  'https://www.linkpicture.com/q/yoda353332.jpg',
  'https://www.linkpicture.com/q/yoda99439.png',
  'https://www.linkpicture.com/q/yoda3333.png',
  // Add as many image paths as you want to display randomly
];

// This object will keep track of the replaced images
const replacedImages = {};

// This function replaces all images on the page with a random image
function replaceImages() {
  // Get all image elements on the page
  const images = document.querySelectorAll('all');

  for(var i = 0; i < images.length; i++)
  {
    var img = images[i];
    
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    img.src = imagePaths[randomIndex]

    img.dataset.randomized = "true";
  }
}


window.addEventListener('load', function () {

  replaceImages();

  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var mutation = mutations[i];

      if (mutation.addedNodes.length > 0){
        replaceImages();
        break;
      }
    }
  });

    observer.observe(document.body, {
    childList: true,
    subtree: true
  });

});