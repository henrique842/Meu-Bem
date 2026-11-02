
// === EFEITO DE PARTÍCULAS EM CANVAS ===

const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -Math.random() * 0.5 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (
            this.y < 0 ||
            this.x < 0 ||
            this.x > canvas.width
        ) {
            this.reset();
            this.y = canvas.height;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 117, 143, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inicializa partículas
for (let i = 0; i < 70; i++) {
    particles.push(new Particle());
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animateCanvas);
}

animateCanvas();


// === INTERAÇÕES DOS CARTÕES ===

function revelarCard(cardElement) {
    cardElement.classList.toggle('revealed');
}


// === SURPRESA FINAL ===

function abrirSurpresa(event) {

    document.getElementById('modalSurpresa').classList.add('active');

    const rect = event.currentTarget.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Cria partículas no local do clique
    for (let i = 0; i < 30; i++) {

        const p = new Particle();

        p.x = x;
        p.y = y;

        p.speedX = (Math.random() - 0.5) * 6;
        p.speedY = (Math.random() - 0.5) * 6;

        p.size = Math.random() * 3 + 1;

        particles.push(p);
    }

    // Limita a quantidade de partículas
    if (particles.length > 200) {
        particles.splice(70, particles.length - 70);
    }
}


// === FECHAR SURPRESA ===

function fecharSurpresa() {
    document.getElementById('modalSurpresa').classList.remove('active');
}
// === INTERAÇÕES DOS CARTÕES ===
function revelarCard(cardElement) {
    cardElement.classList.toggle('revealed');
}

// === INTERAÇÃO DA SURPRESA ===
function abrirSurpresa() {
    document.getElementById('modalSurpresa').classList.add('active');
}

function fecharSurpresa() {
    document.getElementById('modalSurpresa').classList.remove('active');
}
// === INTERAÇÕES DOS CARTÕES ===
function revelarCard(cardElement) {
    cardElement.classList.toggle('revealed');
}

// === INTERAÇÃO DA SURPRESA ===
function abrirSurpresa() {
    document.getElementById('modalSurpresa').classList.add('active');
}

function fecharSurpresa() {
    document.getElementById('modalSurpresa').classList.remove('active');
}