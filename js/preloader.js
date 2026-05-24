// preloader 

        var loader = document.getElementById("preloader");
        window.addEventListener("load", function(){
loader.style.display ="none";

        })

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".why-content, .why-image").forEach(el => {
  el.classList.add("fade");
  observer.observe(el);
});