// Toggle menu functionality
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  if (menu) {
    menu.classList.toggle('active');
  }
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('active');
};

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger-menu');
  if (menu && hamburger && !menu.contains(event.target) && !hamburger.contains(event.target) && menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
});

// Handle menu item clicks
document.querySelectorAll('.menu a').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.remove('active');
    }
    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// Highlight active section
const highlightActiveSection = () => {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.menu a');

  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === currentSection) {
      item.classList.add('active');
    }
  });
};

// Call highlightActiveSection on scroll and page load
window.addEventListener('scroll', highlightActiveSection);
document.addEventListener('DOMContentLoaded', highlightActiveSection);

// Close (X) button functionality
const closeButton = document.querySelector('.close-menu');
if (closeButton) {
  closeButton.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.remove('active');
    }
  });
}

// Create particles
const createParticles = () => {
  const container = document.getElementById('particles');
  if (container) {
    for (let i = 0; i < 20; i += 1) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${Math.random() * 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      particle.style.borderRadius = '50%';
      particle.style.position = 'absolute';
      container.appendChild(particle);
    }
  }
};

document.addEventListener('DOMContentLoaded', createParticles);

// Modal functionality
const buttons = document.querySelectorAll('.button');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(modal) {
  modal.style.display = 'none';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = `${button.textContent.toLowerCase()}Modal`;
    openModal(modalId);
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    closeModal(btn.closest('.modal'));
  });
});

window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

// Show certificate
function showCertificate() {
  openModal('certificateModal');
}

// Create certificate button if it doesn't exist
if (!document.querySelector('.button[onclick="showCertificate()"]')) {
  const certificateBtn = document.createElement('button');
  certificateBtn.className = 'button';
  certificateBtn.textContent = 'Certificate';
  certificateBtn.onclick = showCertificate;
  const buttonsContainer = document.querySelector('.buttons');
  if (buttonsContainer) {
    buttonsContainer.appendChild(certificateBtn);
  }
}

// Project data
const projectsData = [
  {
    title: 'Project 1',
    shortDescription: 'It is a survey form',
    fullDescription: 'A survey form is a structured document or digital interface used to collect information from respondents by asking a series of questions or requesting feedback on specific topics.',
    technologies: ['html', 'css'],
    image: 'Rectangle 19 (1).png',
    screenshot: 'Screenshot 2024-07-14 161407.png',
    liveLink: 'https://s-blh.github.io/survey-form/',
    sourceLink: 'https://github.com/S-BLH/survey-form',
  },
  {
    title: 'Project 2',
    shortDescription: 'It is a palindrome checker',
    fullDescription: 'A palindrome checker is a program or tool that examines a given word, phrase, or number to determine if it reads the same forward and backward..',
    technologies: ['html', 'css', 'java script'],
    image: 'Rectangle 19 (1).png',
    screenshot: 'Screenshot 2024-07-14 162352.png',
    liveLink: 'https://s-blh.github.io/palindrome-checker/',
    sourceLink: 'https://github.com/S-BLH/palindrome-checker',
  },
  {
    title: 'Project 3',
    shortDescription: 'It is a cash register app',
    fullDescription: 'A cash register app is a software application that assists in managing and processing retail transactions, such as recording sales, calculating change, and tracking inventory.',
    technologies: ['HTML', 'CSS', 'JAVA SCRIPT'],
    image: 'Rectangle 19 (1).png',
    screenshot: 'Screenshot 2024-07-14 162447.png',
    liveLink: 'https://s-blh.github.io/cash-register/',
    sourceLink: 'https://github.com/S-BLH/cash-register',
  },
  {
    title: 'Project 4',
    shortDescription: 'It is a pokemon search app',
    fullDescription: 'A Pokémon search app is a mobile or web-based application that allows users to search for information about various Pokémon characters, including their names, types, abilities, and other relevant details.',
    technologies: ['HTML', 'CSS', 'JAVA SCRIPT'],
    image: 'Rectangle 19 (1).png',
    screenshot: 'Screenshot 2024-07-14 162447.png',
    liveLink: 'https://s-blh.github.io/pokemon-search-app/',
    sourceLink: 'https://github.com/S-BLH/pokemon-search-app',
  },

];

// Create project cards
function createProjectCards() {
  const container = document.getElementById('projects-container');
  if (container) {
    container.innerHTML = '';
    projectsData.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      const techIcons = project.technologies.map((tech) => {
        if (tech.toLowerCase() === 'html') {
          return '<img src="Group 85.png" alt="HTML" class="tech-icon">';
        } {
          return '<img src="Group 83.png" alt="CSS" class="tech-icon">';
        }  {
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
}

// Set up popups
function setupPopups() {
  const container = document.getElementById('projects-container');
  const popupTemplate = document.getElementById('popup-template');
  if (container && popupTemplate) {
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
}

// Initialize project cards and popups
document.addEventListener('DOMContentLoaded', () => {
  createProjectCards();
  setupPopups();
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMessage = document.getElementById('errorMessage');

  // Load data from localStorage
  const savedData = JSON.parse(localStorage.getItem('contactFormData')) || {};
  if (nameInput) nameInput.value = savedData.name || '';
  if (emailInput) emailInput.value = savedData.email || '';
  if (messageInput) messageInput.value = savedData.message || '';

  // Save data to localStorage on input change
  [nameInput, emailInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', saveToLocalStorage);
    }
  });

  function saveToLocalStorage() {
    const data = {
      name: nameInput ? nameInput.value : '',
      email: emailInput ? emailInput.value.toLowerCase() : '',
      message: messageInput ? messageInput.value : ''
    };
    localStorage.setItem('contactFormData', JSON.stringify(data));
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      if (!nameInput || !emailInput || !messageInput || 
          nameInput.value.trim() === '' || 
          emailInput.value.trim() === '' || 
          messageInput.value.trim() === '') {
        if (errorMessage) {
          errorMessage.textContent = 'Please fill in all fields.';
          errorMessage.style.display = 'block';
        }
        return;
      }

      // Check if email is in lowercase
      if (emailInput.value !== emailInput.value.toLowerCase()) {
        if (errorMessage) {
          errorMessage.textContent = 'Email must be in lowercase.';
          errorMessage.style.display = 'block';
        }
        return;
      }

      // If validation passes
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      console.log('Form submitted:', {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      });
      
      // Clear localStorage after successful submission
      localStorage.removeItem('contactFormData');
      form.reset();
    });
  }

  // Convert email to lowercase on blur
  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      this.value = this.value.toLowerCase();
    });
  }
});