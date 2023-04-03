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
  const images = document.getElementsByTagName('img');

  // Loop through all image elements
  for (let i = 0; i < images.length; i++) {
    // Check if the image has already been replaced
    if (!replacedImages.hasOwnProperty(images[i].src)) {
      // Get a random index from the imagePaths array
      const randomIndex = Math.floor(Math.random() * imagePaths.length);

      // Replace the image source with a random image from the imagePaths array
      images[i].src = imagePaths[randomIndex];

      // Add the replaced image to the replacedImages object
      replacedImages[images[i].src] = true;
    }
  }
}

// Run the replaceImages function when the page loads
window.onload = function() {
  replaceImages();

  // Observe changes to the DOM and run replaceImages when changes occur
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        replaceImages();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
