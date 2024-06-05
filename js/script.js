const elHamburgerBtn = document.querySelector("#hamburger");
const elNavigation = document.querySelector("#navigation");
const elDetails = document.querySelectorAll("#faq__details");

elHamburgerBtn.addEventListener("click", function () {
   document.body.classList.toggle("unscroll");
   elHamburgerBtn.classList.toggle("hamburger");
   elHamburgerBtn.classList.toggle("cross");
   elNavigation.classList.toggle("hidden");
   elNavigation.classList.toggle("flex");
});

elDetails.forEach((details) => {
   details.addEventListener("toggle", () => {
      if (details.open) {
         elDetails.forEach((det) => {
            if (det !== details) {
               det.removeAttribute("open");
            }
         });
      }
   });
});