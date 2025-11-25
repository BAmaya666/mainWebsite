// Blog posts data
const blogPosts = [
    {
        title: "Devfest Vancouver 2025",
        date: "November 24, 2025",
        readTime: "5 minutes read",
        image: "devfest0.jpg",
        link: "n242025.html",
        alt: ""
    },
    {
        title: "Chasing Bigger Causes and Connecting Dots",
        date: "March 6, 2025",
        readTime: "6 minutes read",
        image: "plastic.jpg",
        link: "m62025.html",
        alt: ""
    },
    {
        title: "2024, Year of Design Exploration and Skill Development",
        date: "December 30, 2024",
        readTime: "6 minutes read",
        image: "robot.jpg",
        link: "d302024.html",
        alt: ""
    },
    {
        title: "Cherry Bumm",
        date: "May 19, 2024",
        readTime: "4 minutes read",
        image: "cherry bum cover.png",
        link: "m192024.html",
        alt: ""
    },
    {
        title: "\"The Design of everyday things\" by Don Norman",
        date: "March 21, 2024",
        readTime: "5 minutes read",
        image: "don norman.jpg",
        link: "m212024.html",
        alt: ""
    },
    {
        title: "Brainstation workshop: Intro day",
        date: "March 14, 2024",
        readTime: "4 minutes read",
        image: "diamond.png",
        link: "m142024.html",
        alt: ""
    },
    {
        title: "Learning techniques",
        date: "March 13, 2024",
        readTime: "10 minutes read",
        image: "learn.png",
        link: "m132024.html",
        alt: ""
    },
    {
        title: "Running towards Ux",
        date: "March 1, 2024",
        readTime: "12 minutes read",
        image: "run.jpg",
        link: "m12024.html",
        alt: ""
    },
    {
        title: "Getting the oven ready",
        date: "February 4, 2024",
        readTime: "9 minutes read",
        image: "ovenai.jpg",
        link: "f42024.html",
        alt: ""
    }
];

// Function to render blog posts
function renderBlogPosts() {
    const postsSection = document.getElementById('posts');
    
    if (!postsSection) {
        console.error('Posts section not found');
        return;
    }

    // Clear any existing content (if needed)
    postsSection.innerHTML = '';

    // Generate HTML for each post
    blogPosts.forEach(post => {
        const postHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm">
                        <a href="${post.link}"><img src="${post.image}" alt="${post.alt}"></a>
                    </div>
                    <div class="col-lg-6 postInfo">
                        <a href="${post.link}"><h5>${post.title}</h5></a>
                        <p>${post.date}</p>
                        <p style="color: orange;">${post.readTime}</p>
                    </div>
                </div>
            </div>
        `;
        postsSection.insertAdjacentHTML('beforeend', postHTML);
    });
}

// Render posts when DOM is loaded
document.addEventListener('DOMContentLoaded', renderBlogPosts);

