// --- DATA ---
/**
 * An array of project objects. This is the "database" for the portfolio.
 * Each project has a unique 'id', content for the project card (summary, tags, image),
 * and detailed content for the modal (problem, role, tech, challenges, etc.).
 *
 * To add a new project, simply copy one of the objects, paste it as a new
 * element in the array, and change its content. Make sure the 'id' is unique.
 */
const projects = [
    {
        id: 'project1',
        title: 'AI-Powered Code Assistant',
        summary: 'A VS Code extension to provide real-time code suggestions and bug detection using machine learning.',
        tags: ['AI/ML', 'TypeScript', 'Python', 'VS Code API'],
        image: 'https://placehold.co/600x400/6366f1/white?text=AI+Assistant',
        problem: 'Developers spend too much time on boilerplate code and simple bug hunting, slowing down the development lifecycle.',
        role: 'Lead Developer (Solo Project)',
        timeline: '3 Months (Jan 2024 - Mar 2024)',
        tech: ['Python (FastAPI)', 'TypeScript', 'Hugging Face Transformers', 'Docker', 'GCP'],
        architectureImg: 'https://placehold.co/600x300/333/white?text=Architecture+Diagram',
        challenges: 'One of the main challenges was optimizing the ML model for real-time inference without causing high latency in the editor. This was solved by using model quantization (8-bit) and deploying a lightweight FastAPI backend on Google Cloud Run for scalable, serverless inference.',
        codeSnippet: `// Example: Debounced API call from VS Code Extension
async function getSuggestion(text) {
    // Debounce logic to avoid excessive API calls
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        const response = await fetch('https://api.my-assistant.com/suggest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: text })
        });
        const data = await response.json();
        showSuggestionInEditor(data.suggestion);
    }, 500);
}`,
        demoImg: 'https://placehold.co/600x400/9ca3af/white?text=Demo+GIF',
        results: 'Reduced boilerplate code time by an estimated 30% for test users. The API backend successfully handled 100+ concurrent requests during stress testing with minimal latency increase.',
        lessons: 'Learned the importance of model optimization for production use cases. Gained deep experience with the VS Code Extension API and asynchronous processing in both TypeScript and Python.',
        nextSteps: 'Integrate with more models (e..g., Llama 3) and add support for JetBrains IDEs.',
        links: {
            live: '#',
            repo: '#',
            case: '#' // Can link to a blog post or this modal itself
        }
    },
    {
        id: 'project2',
        title: 'Distributed File System',
        summary: 'A simple, fault-tolerant distributed file system written in Go, inspired by the Google File System (GFS) paper.',
        tags: ['Go', 'Distributed Systems', 'gRPC', 'Raft'],
        image: 'https://placehold.co/600x400/10b981/white?text=File+System',
        problem: 'Understanding the core principles of distributed systems is challenging. This project aimed to implement them from scratch to learn about fault tolerance, concurrency, and data replication.',
        role: 'Solo Developer',
        timeline: '2 Months (Apr 2024 - May 2024)',
        tech: ['Go (Golang)', 'gRPC', 'Protocol Buffers', 'Raft Consensus (HashiCorp lib)'],
        architectureImg: 'https://placehold.co/600x300/333/white?text=Master/Chunkserver+Diagram',
        challenges: 'Handling concurrent client requests and ensuring data consistency during chunkserver failure. This was solved by implementing a gRPC-based master node that manages metadata and a simple lease mechanism for writes.',
        codeSnippet: `// Example: Go gRPC service definition for Master
service MasterService {
    // Client requests a location to write a chunk
    rpc FindChunkLocation(FindChunkRequest) returns (FindChunkResponse);
    // Chunkserver reports its status
    rpc Heartbeat(HeartbeatRequest) returns (HeartbeatResponse);
}

func (s *MasterServer) FindChunkLocation(ctx context.Context, req *pb.FindChunkRequest) (*pb.FindChunkResponse, error) {
    // ... logic to find a healthy chunkserver
    return &pb.FindChunkResponse{Location: "chunkserver-01.local:9001"}, nil
}`,
        demoImg: 'https://placehold.co/600x400/9ca3af/white?text=CLI+Usage+Demo',
        results: 'Successfully implemented file create, read, and append operations. The system can tolerate the failure of up to N-1 chunkservers (where N=3 replication factor) without data loss.',
        lessons: 'Gained a fundamental understanding of how large-scale storage systems operate. Learned the power of gRPC and Protocol Buffers for defining clear, efficient APIs between services.',
        nextSteps: 'Implement automated chunk re-replication on server failure and add a more robust client library.',
        links: {
            repo: '#'
        }
    },
    {
        id: 'project3',
        title: 'Full-Stack E-Commerce Platform',
        summary: 'A complete e-commerce solution built with React (Next.js), Node.js, and PostgreSQL for a local business.',
        tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
        image: 'https://placehold.co/600x400/f59e0b/white?text=E-Commerce',
        problem: 'A local artisan shop wanted to move its sales online but lacked a digital presence.',
        role: 'Full-Stack Developer (Freelance)',
        timeline: '4 Months (Aug 2023 - Nov 2023)',
        tech: ['Next.js (App Router)', 'Tailwind CSS', 'Node.js (Express)', 'PostgreSQL', 'Stripe API', 'Vercel'],
        architectureImg: 'https://placehold.co/600x300/333/white?text=Frontend/Backend/DB+Diagram',
        challenges: 'Implementing a secure and reliable payment processing flow. This was solved by using Stripe Checkout, which offloads PCI compliance and provides a seamless user experience. Managing complex application state (like the shopping cart) was handled with React Context and \`localStorage\` for persistence.',
        codeSnippet: `// Example: Stripe Checkout session creation in Node.js
app.post('/api/create-checkout-session', async (req, res) => {
    const { items } = req.body;
    
    const lineItems = items.map(item => ({
        price: item.priceId,
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://your-store.com/success',
        cancel_url: 'https://your-store.com/cart',
    });

    res.json({ id: session.id });
});`,
        demoImg: 'https://placehold.co/600x400/9ca3af/white?text=Storefront+Screenshot',
        results: 'Launched the online store, which processed over $10,000 in sales in its first two months. The client was ableto manage products and orders through a simple admin dashboard.',
        lessons: 'Mastered end-to-end full-stack development, from UI design in React to database schema design in PostgreSQL. Learned the intricacies of integrating third-party APIs like Stripe.',
        nextSteps: 'Implement a "product reviews" feature and an email marketing integration.',
        links: {
            live: '#'
        }
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
    
    // --- SELECTORS (PAGE-SPECIFIC) ---
    // These elements only exist on specific pages (e.g., 'projects-grid' is only on projects.html).
    // We get them here, but we will check if they exist (are not null) before
    // trying to add event listeners to them.
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalContentContainer = document.getElementById('modal-content-container');
    const modalFooter = document.getElementById('modal-footer');
    const carouselContainer = document.getElementById('featured-carousel');
    const carouselPrevBtn = document.getElementById('carousel-prev');
    const carouselNextBtn = document.getElementById('carousel-next');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    
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
        if (!project || !modal) return;
        
        // 1. Set the modal title
        if (modalTitle) modalTitle.textContent = project.title;

        // 2. Build the HTML for the project tags
        const tagsHTML = project.tags.map(tag =>
            `<span class="text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2.5 py-0.5 rounded-full">${tag}</span>`
        ).join(' ');

        // 3. Build the main modal content HTML
        if (modalContentContainer) {
            modalContentContainer.innerHTML = `
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
        if (modalFooter) {
            modalFooter.innerHTML = ''; // Clear previous links
            if (project.links.live) {
                modalFooter.innerHTML += `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40">Live Demo</a>`;
            }
            if (project.links.repo) {
                modalFooter.innerHTML += `<a href="${project.links.repo}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40">GitHub Repo</a>`;
            }
            if (project.links.case) {
                modalFooter.innerHTML += `<a href="${project.links.case}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1">Full Case Study</a>`;
            }
        }
        
        // 5. Show the modal and block background scrolling
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    /**
     * Hides the project modal and restores background scrolling.
     */
    const hideProjectModal = () => {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        // Clear content to prevent "flash" of old content next time
        if (modalContentContainer) modalContentContainer.innerHTML = '';
        if (modalFooter) modalFooter.innerHTML = '';
    };

    // Add modal close listeners ONLY if the modal exists on the page
    // (This code will run on index.html and projects.html, but not others)
    if (modal && modalCloseBtn) {
        // 1. Close button click
        modalCloseBtn.addEventListener('click', hideProjectModal);
        
        // 2. Click outside the modal content (on the backdrop)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideProjectModal();
            }
        });
        
        // 3. 'Escape' key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
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
        // Use the first 3 projects for the featured carousel
        let featuredProjects = projects.slice(0, 3);

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

});