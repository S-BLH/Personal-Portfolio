
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

// Project data
const projectsData = [
    {
        title: "Project 1",
        shortDescription: "Short description for Project 1",
        fullDescription: "Detailed description for Project 1. This project demonstrates the use of various technologies and showcases problem-solving skills.",
        technologies: ["html", "css", "js"],
        imageUrl: "path/to/project1-image.jpg",
        liveLink: "https://example.com/project1-live",
        sourceLink: "https://github.com/username/project1"
    },
    {
        title: "Project 2",
        shortDescription: "Short description for Project 2",
        fullDescription: "Detailed description for Project 2. This project focuses on creating an interactive user interface with modern web technologies.",
        technologies: ["react", "node", "mongodb"],
        imageUrl: "path/to/project2-image.jpg",
        liveLink: "https://example.com/project2-live",
        sourceLink: "https://github.com/username/project2"
    },
    {
        title: "Project 3",
        shortDescription: "Short description for Project 3",
        fullDescription: "Detailed description for Project 3. This project explores data visualization techniques and real-time data processing.",
        technologies: ["python", "django", "d3js"],
        imageUrl: "path/to/project3-image.jpg",
        liveLink: "https://example.com/project3-live",
        sourceLink: "https://github.com/username/project3"
    },
    {
        title: "Project 4",
        shortDescription: "Short description for Project 4",
        fullDescription: "Detailed description for Project 4. This project implements a robust backend system with advanced security features.",
        technologies: ["java", "spring", "postgresql"],
        imageUrl: "path/to/project4-image.jpg",
        liveLink: "https://example.com/project4-live",
        sourceLink: "https://github.com/username/project4"
    },
    {
        title: "Project 5",
        shortDescription: "Short description for Project 5",
        fullDescription: "Detailed description for Project 5. This project showcases mobile app development with cross-platform compatibility.",
        technologies: ["react-native", "firebase"],
        imageUrl: "path/to/project5-image.jpg",
        liveLink: "https://example.com/project5-live",
        sourceLink: "https://github.com/username/project5"
    },
    {
        title: "Project 6",
        shortDescription: "Short description for Project 6",
        fullDescription: "Detailed description for Project 6. This project demonstrates the implementation of machine learning algorithms for predictive analytics.",
        technologies: ["python", "tensorflow", "scikit-learn"],
        imageUrl: "path/to/project6-image.jpg",
        liveLink: "https://example.com/project6-live",
        sourceLink: "https://github.com/username/project6"
    }
];

// Function to create project cards
function createProjectCards() {
    const container = document.getElementById('projects-container');
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
            <div class="project-image">
                <img src="${project.imageUrl}" alt="${project.title}">
            </div>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<img src="path/to/${tech}-icon.png" alt="${tech}">`).join('')}
            </div>
            <button class="see-project">See project</button>
            <div class="popup hidden">
                <button class="close-popup">&times;</button>
                <img src="${project.imageUrl}" alt="${project.title}">
                <h3>${project.title}</h3>
                <div class="popup-technologies">
                    ${project.technologies.map(tech => `<img src="path/to/${tech}-icon.png" alt="${tech}">`).join('')}
                </div>
                <p class="popup-description">${project.fullDescription}</p>
                <div class="popup-links">
                    <a href="${project.liveLink}" target="_blank" class="live-version">Live Version</a>
                    <a href="${project.sourceLink}" target="_blank" class="source-code">Source Code</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to handle popup visibility
function setupPopups() {
    const seeProjectButtons = document.querySelectorAll('.see-project');
    const closePopupButtons = document.querySelectorAll('.close-popup');

    seeProjectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.nextElementSibling;
            popup.classList.remove('hidden');
        });
    });

    closePopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            popup.classList.add('hidden');
        });
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            e.target.classList.add('hidden');
        }
    });
}

// Initialize the project cards and popups
function initializeProjects() {
    createProjectCards();
    setupPopups();
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeProjects);