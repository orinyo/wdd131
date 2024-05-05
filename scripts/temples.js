// Get current year and populate span with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Get last modified date of the document and populate paragraph with id "lastModified"
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified: " + lastModifiedDate;

// Get references to the navigation menu and the hamburger button
const navMenu = document.querySelector('nav ul');
const hamburgerBtn = document.querySelector('.hamburger');

// Add event listener to the hamburger button to toggle navigation menu
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
