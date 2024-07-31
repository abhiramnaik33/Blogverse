alert("We are about to reload");


document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');

    loginBtn.addEventListener('click', () => { 
        loginModal.style.display = 'block';
    });

    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    closeSignup.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    fetchBlogs();
});

function fetchBlogs() {
    fetch('/api/blogs')
        .then(response => response.json())
        .then(blogs => {
            const blogContainer = document.getElementById('blogContainer');
            blogContainer.innerHTML = ''; // Clear existing content
            blogs.forEach(blog => {
                const blogElement = document.createElement('div');
                blogElement.className = 'blog';
                blogElement.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.content}</p>
                    <button onclick="editBlog('${blog.id}')">Edit</button>
                `;
                blogContainer.appendChild(blogElement);
            });
        })
        .catch(error => {
            console.error('Error fetching blogs:', error);
        });

    }


    // app.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const exploreBlogsBtn = document.getElementById('exploreBlogsBtn');

    // Add click event listener
    exploreBlogsBtn.addEventListener('click', function() {
        window.location.href = 'blogs.html';
    });
});

// forgot password
document.getElementById('forgotPasswordButton').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value;
    if (email) {
        alert(`An email has been sent to ${email} with instructions to reset your password.`);
    } else {
        alert('Please enter your email address to receive password reset instructions.');
    }
});
