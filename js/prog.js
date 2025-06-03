document.addEventListener("DOMContentLoaded", function () {
  // تأثير التمرير للقائمة
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("shadow-md");
    } else {
      nav.classList.remove("shadow-md");
    }
  });
  // عداد الإحصائيات
  const countElements = document.querySelectorAll(".count-up");
  countElements.forEach((el) => {
    const target = el.innerText;
    const suffix = target.match(/[^\d.]/g)?.join("") || "";
    const value = parseFloat(target.replace(/[^\d.]/g, ""));
    let current = 0;
    const increment = value / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        el.innerText = target;
        clearInterval(timer);
      } else {
        el.innerText = Math.floor(current) + suffix;
      }
    }, 30);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // تأثير ظهور العناصر عند التمرير
  const revealElements = document.querySelectorAll(".card-hover");
  function checkReveal() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }
  // تهيئة العناصر
  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });
  window.addEventListener("scroll", checkReveal);
  checkReveal(); // تشغيل عند تحميل الصفحة
});

let se = document.getElementsByClassName("serch")
function serch(){
 se.style.display="block"
}



document.addEventListener('DOMContentLoaded', function() {
  // Portfolio Filter
  const portfolioFilters = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioFilters.forEach(filter => {
      filter.addEventListener('click', function() {
          // Remove active class from all filters
          portfolioFilters.forEach(f => {
              f.classList.remove('active');
              f.classList.remove('bg-primary');
              f.classList.remove('text-white');
              f.classList.add('bg-gray-200');
              f.classList.add('text-gray-700');
          });
          
          // Add active class to clicked filter
          this.classList.add('active');
          this.classList.add('bg-primary');
          this.classList.add('text-white');
          this.classList.remove('bg-gray-200');
          this.classList.remove('text-gray-700');
          
          const filterValue = this.getAttribute('data-filter');
          
          // Show/hide items based on filter
          portfolioItems.forEach(item => {
              if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                  item.style.display = 'block';
              }
               else {
                  item.style.display = 'none';
              }
          });
      });
  });})