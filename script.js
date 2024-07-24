
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.menu').classList.remove('active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
      let particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = Math.random() * 5 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      particle.style.borderRadius = '50%';
      particle.style.position = 'absolute';
      container.appendChild(particle);
  }
}

document.addEventListener('DOMContentLoaded', createParticles);

// Get all buttons and modals
const buttons = document.querySelectorAll('.button');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Add click event to buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.textContent.toLowerCase() + 'Modal';
        openModal(modalId);
    });
});

// Add click event to close buttons
closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            closeModal(modal);
        }
    });
});

// Function to show certificate
function showCertificate() {
    openModal('certificateModal');
}

if (!document.querySelector('.button[onclick="showCertificate()"]')) {
    const certificateBtn = document.createElement('button');
    certificateBtn.className = 'button';
    certificateBtn.textContent = 'Certificate';
    certificateBtn.onclick = showCertificate;
    document.querySelector('.buttons').appendChild(certificateBtn);
}

const projectsData = [
    {
        title: "Project 1:Survey-form",
        shortDescription: "It is a survey form",
        fullDescription: "A survey form is a structured document or digital interface used to collect information from respondents by asking a series of questions or requesting feedback on specific topics.",
        technologies: ["Technologies used:","HTML", "CSS"],
        image: "Rectangle 19 (1).png",
        screenshot: "Screenshot 2024-07-14 161407.png",
        liveLink: "https://s-blh.github.io/survey-form/",
        sourceLink: "https://github.com/S-BLH/survey-form"
    },
    {
        title: "Project 2:Palindrome-checker",
        shortDescription: "It is a palindrome checker",
        fullDescription: "A palindrome checker is a program or tool that examines a given word, phrase, or number to determine if it reads the same forward and backward..",
        technologies: ["Technologies used:","HTML","CSS" ,"JAVA SCRIPT"],
        image: "Rectangle 19 (1).png",
        screenshot: "Screenshot 2024-07-14 162352.png",
        liveLink: "https://s-blh.github.io/palindrome-checker/",
        sourceLink: "https://github.com/S-BLH/palindrome-checker"
    },
    {
        title: "Project 3:Cash-register-app",
        shortDescription: "It is a cash register app",
        fullDescription: "A cash register app is a software application that assists in managing and processing retail transactions, such as recording sales, calculating change, and tracking inventory.",
        technologies: ["Technologies used:","HTML", "CSS", "JAVA SCRIPT"],
        image: "Rectangle 19 (1).png",
        screenshot: "Screenshot 2024-07-14 162447.png",
        liveLink: "https://s-blh.github.io/cash-register/",
        sourceLink: "https://github.com/S-BLH/cash-register"
    },
    {
    title: "Project 4:Pokemon-search-app",
    shortDescription: "It is a pokemon search app",
    fullDescription: "A Pokémon search app is a mobile or web-based application that allows users to search for information about various Pokémon characters, including their names, types, abilities, and other relevant details.",
    technologies: ["Technologies used:","HTML", "CSS", "JAVA SCRIPT"],
    image: "Rectangle 19 (1).png",
    screenshot: "Screenshot 2024-07-14 162531.png",
    liveLink: "https://s-blh.github.io/pokemon-search-app/",
    sourceLink: "https://github.com/S-BLH/pokemon-search-app"
},

];

function createProjectCards() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        
        const techIcons = project.technologies.map(tech => {
            if (tech.toLowerCase() === 'html') {
                return '<img src="Group 85.png" alt="HTML" class="tech-icon">';
            } else if (tech.toLowerCase() === 'css') {
                return '<img src="Group 83.png" alt="CSS" class="tech-icon">';
            } else if (tech.toLowerCase() === 'javascript' || tech.toLowerCase() === 'java script') {
                return '<img src="Group 68.png" alt="JavaScript" class="tech-icon">';
            }
            return '';
        }).join('');

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-technologies">
                ${techIcons}
            </div>
            <button class="see-project" data-project="${index}">See project</button>
        `;
        container.appendChild(card);
    });
}

function setupPopups() {
    const container = document.getElementById('projects-container');
    const popupTemplate = document.getElementById('popup-template');
    
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('see-project')) {
            const projectIndex = e.target.dataset.project;
            const project = projectsData[projectIndex];
            
            const popup = popupTemplate.content.cloneNode(true).querySelector('.popup');
            popup.querySelector('h3').textContent = project.title;
            popup.querySelector('.project-screenshot').innerHTML = `<img src="${project.screenshot}" alt="${project.popup}">`;
            popup.querySelector('.popup-technologies').innerHTML = project.technologies;
            popup.querySelector('.popup-description').textContent = project.fullDescription;
            popup.querySelector('.live-version').href = project.liveLink;
            popup.querySelector('.source-code').href = project.sourceLink;
            
            document.body.appendChild(popup);
            popup.classList.add('active');
            
            popup.querySelector('.close-popup').addEventListener('click', () => {
                popup.remove();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    setupPopups();
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('errorMessage');

    // Load data from localStorage
    const savedData = JSON.parse(localStorage.getItem('contactFormData')) || {};
    nameInput.value = savedData.name || '';
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';

    // Save data to localStorage on input change
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', saveToLocalStorage);
    });

    function saveToLocalStorage() {
        const data = {
            name: nameInput.value,
            email: emailInput.value.toLowerCase(), // Save email in lowercase
            message: messageInput.value
        };
        localStorage.setItem('contactFormData', JSON.stringify(data));
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            errorMessage.style.display = 'block';
            return;
        }

        // Check if email is in lowercase
        if (emailInput.value !== emailInput.value.toLowerCase()) {
            errorMessage.textContent = 'Email must be in lowercase.';
            errorMessage.style.display = 'block';
            return;
        }

        // If validation passes
        errorMessage.style.display = 'none';
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        
        // Clear localStorage after successful submission
        localStorage.removeItem('contactFormData');
        form.reset();
    });

    // Convert email to lowercase on blur
    emailInput.addEventListener('blur', function() {
        this.value = this.value.toLowerCase();
    });
});


