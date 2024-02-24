// Save third-page and fourth-page buttons as variables
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');

// Add click event to both elements and set scrollPage function as callback function
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);

function scrollPage() {
    // Get the scroll position for each page
    let scrollPosition;
    if (this.id === 'third-page') {
        scrollPosition = window.innerHeight * 2;
    } else if (this.id === 'fourth-page') {
        scrollPosition = window.innerHeight * 3;
    }

    // Scroll to the specified position
    window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth'
    });
}

// An array of stories as strings
let stories = [
    'This is Heesoo, a high school student who loves filming her friends dancing. Everyone looked at her weird, like she is out of place and she did not know why.',
    'One day, Heesoo invited her friends over for a slumber party and after dancing a lot, they all ended up falling asleep on the couch.',
    'Everything was fine until Heesoo woke up. All of her friends were gone, they were nowhere to be found. She thought they hated her and left her.',
    'She checked her camera footage just to find out that they were missing from all the videos she filmed.',
    'She realized that they never existed...  Filming them was the only way of escaping from reality. ',
    'She decided to continue living her life by taking the first step for moving on...'
];

let bunnyDiv = document.getElementById('bunny-div');
let bunnyText = document.getElementById('bunny-text');
let navButtons = document.getElementsByClassName('nav-btn');

// Add scroll event for the whole HTML document and set changeText function as callback
document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Get the index of the story based on the scroll position
    let sectionNum = Math.floor(scrollPosition / window.innerHeight);

    // Set the text of bunny-text element depending on which section the user has currently scrolled to
    bunnyText.innerHTML = stories[sectionNum];

    // Map vertical scroll position to the horizontal position of the bunny
    bunnyDiv.style.left = scrollPosition / 3 + 'px';

    // Fix color of navigation button
    // Set all button color to white
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].style.backgroundColor = 'white';
    }

    // Set color of current section button to black
    navButtons[sectionNum].style.backgroundColor = 'black';
}

