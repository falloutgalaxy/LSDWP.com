document.addEventListener("DOMContentLoaded", () => {

console.log("LSDWP Website Online");

const serviceStatuses = {
electrical: "Operational",
water: "Operational",
emergency: "Available",
maintenance: "Vinewood Police Department"
};

console.log(serviceStatuses);

const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {

const copyright = document.createElement("p");

copyright.textContent = `© ${year} Los Santos Department of Water & Power`;

footer.appendChild(copyright);

}

});
