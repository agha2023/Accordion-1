var panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
  panel.addEventListener('click', function(){
    removeActiveClasses();
    panel.classList.add('active');
});
});


function removeActiveClasses() {
  panels.forEach( functionecho "# Accordion-Style" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/agha2023/Accordion-Style.git
  git push -u origin main(panel){
    panel.classList.remove('active');
  });
}