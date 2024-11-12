const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*50)+1;

input.addEventListener("keypress", function(e){
  if (e.keyCode === 13) {
    play()
  }
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#guess").value;
    
    if (userNumber < 1 || userNumber > 50) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a number between 1 and 50!",
      });
    } 
    else if (isNaN(userNumber)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a number!",
      });
    }
    else {
      if (userNumber < answer) {
        Swal.fire("Try bigger number!",
          "Computer is still a winner"
        );
      }
      else if (userNumber > answer) {
        Swal.fire("Try lower number!",
           "Computer is still a winner"
        );
      }
      else {
        Swal.fire({
          title: "WINNER!!!",
          imageUrl: "winner.jpg",
          imageWidth: 600,
          imageHeight: 400,
          imageAlt: "winner"
        });
      }
    }
}



tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
      color: "#000"
    },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.05,
          sync: true,
          startValue: "max",
          count: 1,
          destroy: "min"
        },
        value: {
          min: 0,
          max: 0.5
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    }
  });
  