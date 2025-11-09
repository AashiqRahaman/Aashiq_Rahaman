// --- DATA ---
/**
 * An array of project objects. This is the "database" for the portfolio.
 * Each project has a unique 'id', content for the project card (summary, tags, image),
 * and detailed content for the modal (problem, role, tech, challenges, etc.).
 *
 * This data has been updated with the projects from Aashiq Rahaman's resume.
 */
const projects = [
    {
        id: 'project1',
        title: 'University Resource Portal',
        summary: 'A full-stack web portal to streamline access to academic resources for students.',
        tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: 'https://placehold.co/600x400/6366f1/white?text=University+Portal',
        problem: 'Students lacked a centralized, easy-to-use platform for accessing academic resources like notes, past papers, and syllabi.',
        role: 'Full-Stack Developer (Personal Project)',
        timeline: 'Personal Project',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Authentication'],
        architectureImg: 'https://placehold.co/600x300/333/white?text=Client/Server/DB+Diagram',
        challenges: 'Engineered a full-stack web portal from the ground up. The primary challenges involved implementing a secure user authentication system using JSON Web Tokens (JWT) and building a suite of optimised REST APIs with Node.js and Express to ensure smooth and reliable data transfer between the React front-end and MongoDB database.',
        codeSnippet: `// Example: Node.js/Express REST API endpoint
app.get('/api/resources/:subject', authenticateToken, async (req, res) => {
    try {
        const resources = await Resource.find({ subject: req.params.subject });
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching resources.' });
    }
});`,
        demoImg: 'https://placehold.co/600x400/9ca3af/white?text=Portal+Under+Development',
        results: 'Successfully engineered and deployed a full-stack web portal that streamlines access to academic resources, featuring secure authentication and optimized API performance.',
        lessons: 'Gained hands-on experience in full-stack MERN development, API design, and user authentication.',
        nextSteps: 'Add features like a forum for students and real-time notifications.',
        links: {
            repo: 'https://github.com/AashiqRahaman/PYQ-Portal'
        }
    },
    {
        id: 'project2',
        title: 'Deepfake Detection Model',
        summary: 'A CNN model trained with TensorFlow to detect deepfake images and videos with 95% accuracy.',
        tags: ['Python', 'TensorFlow', 'OpenCV', 'AI/ML'],
        image: 'https://placehold.co/600x400/10b981/white?text=Deepfake+Detection',
        problem: 'The rising proliferation of deepfake media poses a significant threat to information integrity and personal security, making reliable detection methods essential.',
        role: 'ML Engineer (Academic Project)',
        timeline: 'Academic Project',
        tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Scikit-learn', 'Matplotlib'],
        architectureImg: 'https://placehold.co/600x300/333/white?text=CNN+Model+Architecture',
        challenges: 'A key challenge was building a robust data preprocessing pipeline. This involved using OpenCV for face detection from video frames, normalizing the facial frames, and augmenting the data to prevent overfitting. The model was trained on a large dataset of over 5,500 real and 6,000 fake facial frames.',
        codeSnippet: `
        // Example: TensorFlow/Keras CNN Model Snippet
        https://github.com/AashiqRahaman/DeepFake_Detection_Final_Year_College_Project`,
        demoImg: 'https://placehold.co/600x400/9ca3af/white?text=Real+vs+Fake+Demo',
        results: 'The final CNN model achieved 95% accuracy on a custom test set of 1,200 real and 1,200 fake frames, demonstrating a strong ability to distinguish between authentic and manipulated media.',
        lessons: 'Gained deep experience in building and training computer vision models, data preprocessing pipelines for image/video data, and evaluating model performance.',
        nextSteps: 'Improve the model to detect more subtle deepfakes and test on real-time video streams.',
        links: {
            repo: 'https://github.com/AashiqRahaman/DeepFake_Detection_Final_Year_College_Project' // Note: Used shorter link from resume
        }
    },
    {
        id: 'project3',
        title: 'Secure Image Encryption (AES)',
        summary: 'Implementation of AES encryption for medical images (JPEG 2000) to ensure secure storage and transmission.',
        tags: ['Python', 'Cryptography', 'AES'],
        image: 'https://placehold.co/600x400/f59e0b/white?text=Image+Encryption',
        problem: 'Medical images contain sensitive patient data and require robust encryption for secure storage and transmission to comply with privacy regulations and prevent unauthorized access.',
        role: 'Python Developer (Academic Project)',
        timeline: 'Academic Project',
        tech: ['Python', 'AES (pycryptodome)', 'JPEG 2000', 'NumPy'],
        architectureImg: 'https://placehold.co/600x300/333/white?text=Encryption/Decryption+Flow',
        challenges: 'Researched and implemented the conversion of standard medical images (like DICOM or PNG) into the JPEG 2000 format. The main task was writing Python scripts to correctly implement AES encryption/decryption, verify image integrity after decryption, and handle key management.',
        codeSnippet: `
        // Example: Python AES Encryption Snippet
        https://github.com/AashiqRahaman/AES_Image_Encryption_College_Project`,
        demoImg: 'https://placehold.co/600x400/9ca3af/white?text=Encrypted+Image+Data',
        results: 'Successfully wrote Python scripts to encrypt, decrypt, and verify image integrity, significantly reducing the risk of unauthorized access. Conducted performance analysis on image quality (post-decryption) and encryption time to find the optimal trade-off between fidelity and performance.',
        lessons: 'Learned the fundamentals of symmetric encryption, the importance of data integrity checks (using tags), and file I/O operations in Python.',
        nextSteps: 'Integrate this encryption module into a larger medical records management system.',
        links: {
            repo: 'https://github.com/AashiqRahaman/AES_Image_Encryption_College_Project' // Note: Used shorter link from resume
        }
    }
];

/**
 * NEW: Certificate Data Array
 * This holds the information for your certificates.
 * - id: Unique identifier
 * - title: Name of the certificate
 * - issuer: Who issued it (e.g., IBM, HackerRank)
 * - date: When you earned it
 * - image: A URL to an image of the certificate (use placeholders for now)
 * - verify: A URL to the verification page
 */
const certificates = [
    {
        id: 'cert1',
        title: 'Python for Data Science',
        issuer: 'IBM',
        date: 'Aug 2025',
        image: 'https://raw.githubusercontent.com/AashiqRahaman/Aashiq_Rahaman/main/assets/Images/IBMPY0101EN.jpg',
        verify: 'https://courses.cognitiveclass.ai/certificates/e1d37784a806471eb5c494208896ac26' // Truncated from resume
    },
    {
        id: 'cert2',
        title: 'Prompt Engineering for Everyone',
        issuer: 'IBM',
        date: 'Aug 2025',
        image: 'https://raw.githubusercontent.com/AashiqRahaman/Aashiq_Rahaman/main/assets/Images/IBMAI0117EN.jpg',
        verify: 'https://courses.cognitiveclass.ai/certificates/54a174d6f03e45bcaf1ff61d7d5c6989'
    },
    {
        id: 'cert3',
        title: 'Hackathon Participation',
        issuer: 'Give My Certificate',
        date: 'Mar 2024',
        image: 'https://raw.githubusercontent.com/AashiqRahaman/Aashiq_Rahaman/main/assets/Images/HACKAUT.jpg',
        verify: 'https://verification.givemycertificate.com/v/df27dd54-c5f4-41cb-8a99-53690866e79a' // Truncated from resume
    }
];


// --- MAIN APP LOGIC ---
/**
 * Wait for the HTML document to be completely loaded and parsed
 * before running any JavaScript. This ensures all elements are
 * available in the DOM when we try to select them.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- SELECTORS (COMMON) ---
    // These are elements expected to be on *every* page.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    // --- SELECTORS (PROJECTS) ---
    const projectsGrid = document.getElementById('projects-grid');
    const projectModal = document.getElementById('project-modal');
    const projectModalCloseBtn = document.getElementById('modal-close-btn');
    const projectModalTitle = document.getElementById('modal-title');
    const projectModalContent = document.getElementById('modal-content-container');
    const projectModalFooter = document.getElementById('modal-footer');

    // --- SELECTORS (CAROUSEL) ---
    const carouselContainer = document.getElementById('featured-carousel');
    const carouselPrevBtn = document.getElementById('carousel-prev');
    const carouselNextBtn = document.getElementById('carousel-next');

    // --- SELECTORS (CONTACT) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // --- SELECTORS (CERTIFICATES - NEW) ---
    const certificatesGrid = document.getElementById('certificates-grid');
    const certModal = document.getElementById('certificate-modal');
    const certModalCloseBtn = document.getElementById('cert-modal-close-btn');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certModalImage = document.getElementById('cert-modal-image');
    const certModalFooter = document.getElementById('cert-modal-footer');


    // --- DARK MODE (RUNS ON ALL PAGES) ---

    /**
     * Initializes the dark mode state on page load.
     * It checks:
     * 1. If a 'theme' value is saved in `localStorage`.
     * 2. If not, it checks the user's OS preference via `window.matchMedia`.
     * It then applies the 'dark' class to the <html> element and updates the icons.
     */
    const initDarkMode = () => {
        if (localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            if (sunIcon) sunIcon.classList.add('hidden'); // Hide sun
            if (moonIcon) moonIcon.classList.remove('hidden'); // Show moon
        } else {
            document.documentElement.classList.remove('dark');
            if (sunIcon) sunIcon.classList.remove('hidden'); // Show sun
            if (moonIcon) moonIcon.classList.add('hidden'); // Hide moon
        }
    };

    /**
     * Toggles dark mode when the toggle button is clicked.
     * It adds/removes the 'dark' class from <html>,
     * saves the new preference to `localStorage`,
     * and toggles the visibility of the sun/moon icons.
     */
    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (sunIcon) sunIcon.classList.toggle('hidden', isDark);
        if (moonIcon) moonIcon.classList.toggle('hidden', !isDark);
    };

    // Attach the click listener to the dark mode button, if it exists.
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    // Run the init function on every page load.
    initDarkMode();

    // --- MOBILE MENU (RUNS ON ALL PAGES) ---

    // If the mobile menu button exists, add a click listener.
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu itself
            if (mobileMenu) mobileMenu.classList.toggle('hidden');
            // Toggle the hamburger/close icons
            if (hamburgerIcon) hamburgerIcon.classList.toggle('hidden');
            if (closeIcon) closeIcon.classList.toggle('hidden');
            // Update the 'aria-expanded' attribute for accessibility
            const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    /**
     * Helper function to programmatically close the mobile menu.
     * This is used when a user clicks a nav link inside the menu.
     */
    const closeMobileMenu = () => {
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
    }

    // Find all mobile nav links and add a click listener to close the menu
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });


    // --- PROJECT MODAL (Functions defined globally, but listeners are page-specific) ---

    /**
     * Displays the project modal with details for a specific project.
     * @param {string} projectId - The unique ID of the project to display.
     */
    const showProjectModal = (projectId) => {
        // Find the project data from the main `projects` array
        const project = projects.find(p => p.id === projectId);
        // If no project is found or the modal element doesn't exist, do nothing.
        if (!project || !projectModal) return;

        // 1. Set the modal title
        if (projectModalTitle) projectModalTitle.textContent = project.title;

        // 2. Build the HTML for the project tags
        const tagsHTML = project.tags.map(tag =>
            `<span class="text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2.5 py-0.5 rounded-full">${tag}</span>`
        ).join(' ');

        // 3. Build the main modal content HTML
        if (projectModalContent) {
            projectModalContent.innerHTML = `
                <img src="${project.demoImg || project.image}" alt="Project demo" class="w-full rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
                <div class="flex flex-wrap gap-2 mb-4">${tagsHTML}</div>
                
                <!-- Using Tailwind's 'prose' plugin for nice article formatting -->
                <section class="prose prose-lg dark:prose-invert max-w-none space-y-4">
                    <h3 class="text-xl font-semibold !mb-2">Problem Statement</h3>
                    <p>${project.problem}</p>
                    <h3 class="text-xl font-semibold !mb-2">My Role & Timeline</h3>
                    <p><strong>Role:</strong> ${project.role} | <strong>Timeline:</strong> ${project.timeline}</p>
                    <h3 class="text-xl font-semibold !mb-2">Tech Stack</h3>
                    <p>${project.tech.join(', ')}</p>
                    
                    <!-- Conditionally add Architecture Diagram if it exists -->
                    ${project.architectureImg ? `<img src="${project.architectureImg}" alt="Architecture Diagram" class="w-full rounded-lg shadow-md my-4 border border-gray-200 dark:border-gray-700">` : ''}
                    
                    <h3 class="text-xl font-semibold !mb-2">Key Challenges & Solutions</h3>
                    <p>${project.challenges}</p>
                    
                    <!-- Conditionally add Code Snippet if it exists -->
                    ${project.codeSnippet ? `<pre class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm my-4 border border-gray-300 dark:border-gray-700"><code>${project.codeSnippet.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>` : ''}
                    
                    <h3 class="text-xl font-semibold !mb-2">Results & Metrics</h3>
                    <p>${project.results}</p>
                    <h3 class="text-xl font-semibold !mb-2">Lessons Learned</h3>
                    <p>${project.lessons}</p>

                    <!-- Conditionally add Next Steps if it exists -->
                    ${project.nextSteps ? `<h3 class="text-xl font-semibold !mb-2">Next Steps</h3><p>${project.nextSteps}</p>` : ''}
                </section>
            `;
        }

        // 4. Build the modal footer links
        if (projectModalFooter) {
            projectModalFooter.innerHTML = ''; // Clear previous links
            if (project.links.live) {
                projectModalFooter.innerHTML += `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40">Live Demo</a>`;
            }
            if (project.links.repo) {
                projectModalFooter.innerHTML += `<a href="${project.links.repo}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40">GitHub Repo</a>`;
            }
            if (project.links.case) {
                projectModalFooter.innerHTML += `<a href="${project.links.case}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1">Full Case Study</a>`;
            }
        }

        // 5. Show the modal and block background scrolling
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    /**
     * Hides the project modal and restores background scrolling.
     */
    const hideProjectModal = () => {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        // Clear content to prevent "flash" of old content next time
        if (projectModalContent) projectModalContent.innerHTML = '';
        if (projectModalFooter) projectModalFooter.innerHTML = '';
    };

    // Add modal close listeners ONLY if the modal exists on the page
    // (This code will run on index.html and projects.html, but not others)
    if (projectModal && projectModalCloseBtn) {
        // 1. Close button click
        projectModalCloseBtn.addEventListener('click', hideProjectModal);

        // 2. Click outside the modal content (on the backdrop)
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                hideProjectModal();
            }
        });

        // 3. 'Escape' key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                hideProjectModal();
            }
        });
    }


    // --- PROJECT POPULATION (RUNS ONLY ON PROJECTS.HTML) ---

    // This `if` block ensures this code only runs if the '#projects-grid' element
    // is on the current page. This prevents errors on other pages.
    if (projectsGrid) {
        projectsGrid.innerHTML = ''; // Clear existing (e.g., if any static content was there)

        // Loop through all projects in the data array
        projects.forEach(project => {
            // Create a new <div> element for the card
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/20';

            // Build the tag HTML
            const tagsHTML = project.tags.map(tag =>
                `<span class="text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2.5 py-0.5 rounded-full">${tag}</span>`
            ).join(' ');

            // Set the inner HTML of the card
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                    <div class="flex flex-wrap gap-2 mb-4">${tagsHTML}</div>
                    <p class="text-gray-700 dark:text-gray-300 mb-6 flex-grow">${project.summary}</p>
                    <button class="project-details-btn mt-auto w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40" data-project-id="${project.id}">
                        View Case Study
                    </button>
                </div>
            `;

            // Add a click listener to the new card's button
            card.querySelector('.project-details-btn').addEventListener('click', () => {
                showProjectModal(project.id);
            });

            // Append the new card to the grid
            projectsGrid.appendChild(card);
        });
    }


    // --- FEATURED CAROUSEL (RUNS ONLY ON INDEX.HTML) ---

    // This `if` block ensures this code only runs if the '#featured-carousel'
    // element is on the current page (index.html).
    if (carouselContainer) {
        let currentSlide = 0;
        // Use all projects for the featured carousel
        let featuredProjects = projects;

        carouselContainer.innerHTML = ''; // Clear any static content

        // Create a 'slide' for each featured project
        featuredProjects.forEach((project, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            // Make the first slide 'active'
            if (index === 0) slide.classList.add('active');

            slide.innerHTML = `
                <div class="text-center">
                    <h3 class="text-2xl font-semibold">${project.title}</h3>
                    <p class="text-lg text-indigo-600 dark:text-indigo-400 my-2">${project.tags.join(', ')}</p>
                    <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">${project.summary}</p>
                    <button class="project-details-btn px-5 py-2.5 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 font-medium rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors" data-project-id="${project.id}">
                        View Case Study
                    </button>
                </div>
            `;

            // Add click listener to this slide's button to open the modal
            slide.querySelector('.project-details-btn').addEventListener('click', () => {
                showProjectModal(project.id);
            });

            carouselContainer.appendChild(slide);
        });

        /**
         * Shows a specific slide in the carousel.
         * @param {number} index - The index of the slide to show.
         */
        const showSlide = (index) => {
            const slides = carouselContainer.querySelectorAll('.carousel-slide');
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        };

        // Show the initial (first) slide
        showSlide(currentSlide);

        // Add click listener for the 'Previous' button
        if (carouselPrevBtn) {
            carouselPrevBtn.addEventListener('click', () => {
                // Modulo math to loop back to the end
                currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length;
                showSlide(currentSlide);
            });
        }

        // Add click listener for the 'Next' button
        if (carouselNextBtn) {
            carouselNextBtn.addEventListener('click', () => {
                // Modulo math to loop back to the beginning
                currentSlide = (currentSlide + 1) % featuredProjects.length;
                showSlide(currentSlide);
            });
        }
    }

    // --- CONTACT FORM (RUNS ONLY ON CONTACT.HTML) ---

    // This `if` block ensures this code only runs if the '#contact-form'
    // element is on the current page (contact.html).
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission (page reload)

            // In a real application, you would send this data to a backend API
            // or a service like Formspree, Netlify Forms, etc.
            // For this demo, we just show a success message.

            if (formStatus) {
                formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                formStatus.classList.remove('hidden');
            }
            contactForm.reset(); // Clear the form fields

            // Hide the status message after 5 seconds
            setTimeout(() => {
                if (formStatus) formStatus.classList.add('hidden');
            }, 5000);
        });
    }

    // --- NEW: CERTIFICATE MODAL ---

    /**
     * Displays the certificate modal with a preview image and link.
     * @param {string} certId - The unique ID of the certificate to display.
     */
    const showCertificateModal = (certId) => {
        const cert = certificates.find(c => c.id === certId);
        if (!cert || !certModal) return;

        // 1. Set modal title
        if (certModalTitle) certModalTitle.textContent = cert.title;

        // 2. Set modal image source
        if (certModalImage) {
            certModalImage.src = cert.image;
            certModalImage.alt = `${cert.title} Certificate Preview`;
        }

        // 3. Set modal footer link
        if (certModalFooter) {
            certModalFooter.innerHTML = ''; // Clear previous
            if (cert.verify) {
                certModalFooter.innerHTML = `<a href="${cert.verify}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40">Verify Certificate</a>`;
            }
        }

        // 4. Show modal
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    /**
     * Hides the certificate modal.
     */
    const hideCertificateModal = () => {
        if (!certModal) return;
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Reset image to a placeholder to avoid "flash" of old cert
        if (certModalImage) certModalImage.src = 'https://placehold.co/800x600/6366f1/white?text=Certificate';
    };

    // Add modal close listeners ONLY if the modal exists on the page (certificates.html)
    if (certModal && certModalCloseBtn) {
        // 1. Close button click
        certModalCloseBtn.addEventListener('click', hideCertificateModal);

        // 2. Click outside modal
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                hideCertificateModal();
            }
        });

        // 3. 'Escape' key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && certModal.classList.contains('active')) {
                hideCertificateModal();
            }
        });
    }

    // --- NEW: CERTIFICATE POPULATION (RUNS ONLY ON CERTIFICATES.HTML) ---

    // This `if` block ensures this code only runs if the '#certificates-grid'
    // element is on the current page.
    if (certificatesGrid) {
        certificatesGrid.innerHTML = ''; // Clear existing

        certificates.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/20';

            card.innerHTML = `
                <!-- Use a cropped version of the cert image for the card -->
                <img src="${cert.image.replace('800x600', '600x400')}" alt="${cert.title}" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-semibold mb-2">${cert.title}</h3>
                    <p class="text-indigo-600 dark:text-indigo-400 mb-1">${cert.issuer}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">Issued: ${cert.date}</p>
                    
                    <div class="flex gap-4 mt-auto">
                        <button class="cert-preview-btn w-1/2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40" data-cert-id="${cert.id}">
                            Preview
                        </button>
                        <a href="${cert.verify}" target="_blank" rel="noopener noreferrer" class="cert-verify-btn w-1/2 text-center px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-500/40">
                            Verify
                        </a>
                    </div>
                </div>
            `;

            // Add click listener to the new card's "Preview" button
            card.querySelector('.cert-preview-btn').addEventListener('click', () => {
                showCertificateModal(cert.id);
            });

            certificatesGrid.appendChild(card);
        });
    }

});