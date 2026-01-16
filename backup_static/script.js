// Scroll fade-in
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {threshold:0.2});
sections.forEach(section => observer.observe(section));

// Optional: Animate icons on scroll
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  observer.observe(icon);
});

document.querySelector('.nav-toggle').addEventListener('click', function(){
    document.querySelector('nav ul').classList.toggle('show');
  });