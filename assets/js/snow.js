(function () {
    let snowflakes = [];
    let canvas = document.createElement("canvas");
    canvas.id = "snow-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = 9999;
    document.body.appendChild(canvas);
  
    let ctx = canvas.getContext("2d");
  
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();
  
    function createSnowflake() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5
      };
    }
  
    for (let i = 0; i < 150; i++) {
      snowflakes.push(createSnowflake());
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFF";
  
      snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
  
        flake.y += flake.speedY;
        flake.x += flake.speedX;
  
        if (flake.y > canvas.height) {
          flake.y = -5;
          flake.x = Math.random() * canvas.width;
        }
      });
  
      requestAnimationFrame(draw);
    }
  
    draw();
  })();
  