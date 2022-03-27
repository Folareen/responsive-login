const SIGN_IN_BUTTON = document.querySelector('.sign-in-button');
const SIGN_UP_BUTTON = document.querySelector('.sign-up-button');
const SIGN_IN_SIGN_UP_FORM = document.querySelector('.sign-in-sign-up-form');
const SIGN_IN_FORM = document.querySelector('.sign-in');
const SIGN_UP_FORM = document.querySelector('.sign-up');
const SIGN_IN_INDICATOR = document.querySelector('.sign-in-indicator');
const SIGN_UP_INDICATOR = document.querySelector('.sign-up-indicator');

SIGN_IN_BUTTON.addEventListener('click', displaySignIn);
SIGN_UP_BUTTON.addEventListener('click', displaySignUp);

function displaySignIn(){
    SIGN_IN_BUTTON.style.borderBottom = "2px solid var(--lightblue)";
    SIGN_UP_BUTTON.style.borderBottom = "0";
    SIGN_IN_FORM.style.visibility = "visible";
    SIGN_IN_SIGN_UP_FORM.style.left = "0";
    SIGN_UP_FORM.style.visibility = "hidden";
    SIGN_IN_INDICATOR.style.backgroundColor = "var(--pink)";
    SIGN_UP_INDICATOR.style.backgroundColor = "var(--darkwhite)";
}
function displaySignUp(){
    SIGN_IN_BUTTON.style.borderBottom = "0";
    SIGN_UP_BUTTON.style.borderBottom = "2px solid var(--lightblue)";
    SIGN_UP_FORM.style.visibility = "visible";
    SIGN_IN_SIGN_UP_FORM.style.left = "-100%";
    SIGN_IN_FORM.style.visibility = "hidden";
    SIGN_UP_INDICATOR.style.backgroundColor = "var(--pink)";
    SIGN_IN_INDICATOR.style.backgroundColor = "var(--darkwhite)";
}