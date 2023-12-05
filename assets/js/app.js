import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const count_num = document.querySelector(".loading__counter--number")
let c = 0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    count_num.innerText = c + "%";
    c++; // Incrementa a largura para simular o progresso
    if (c === 101) {
        clearInterval(barInterval); // Interrompe a animação quando atinge 100%
        gsap.to(".loading__bar", {
            duration: 5,
            rotate: "90deg",
            left: '1000%',
        });
        gsap.to(".loading__text,.loading__counter", {
            duration: 1,
            opacity: 0,
        });
        gsap.to(".loading__box", {
            duration: 1,
            delay: 0.5,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to(".loading__svg", {
            duration: 5,
            opacity: 1,
            rotate: "360deg",
            
        });
        gsap.to(".loading__box", {
            delay: 2,
            border: "none",
            
            
        });
        gsap.to(".loading", {
            duration: 2,
            delay: 2,
            zIndex: 1,
            background: "transparent",
            opacity: 0.5,
        });

    }
}, 25);

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um evento de clique a todos os links do menu
    document.querySelectorAll('.coollink').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Obtém o alvo da rolagem (o ID vinculado ao link)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        // Rola suavemente até o elemento alvo
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });

function downloadFile(filePath) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}