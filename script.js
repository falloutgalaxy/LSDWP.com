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
const reportForm = document.getElementById("reportForm");

if(reportForm){

reportForm.addEventListener("submit",(e)=>{

e.preventDefault();

const ticket="LSDWP-"+Math.floor(100000+Math.random()*900000);

document.getElementById("ticket").textContent=ticket;

document.getElementById("successMessage").style.display="block";

reportForm.reset();

});

}
