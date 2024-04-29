// Get current year and populate span with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Get last modified date of the document and populate paragraph with id "lastModified"
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified: " + lastModifiedDate;
