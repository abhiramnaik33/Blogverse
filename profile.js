document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profilePic');
    const userName = document.getElementById('userName');
    const userBlogs = document.getElementById('userBlogs');

    // Example user ID, replace with actual user ID or session info
    const userId = '123'; 

    // Replace these URLs with actual API endpoints
    const userApiUrl = `https://api.example.com/users/${userId}`;
    const blogsApiUrl = `https://api.example.com/users/${userId}/blogs`;

    // Fetch user profile information
    fetch(userApiUrl)
        .then(response => response.json())
        .then(userData => {
            profilePic.src = userData.profilePicture;
            userName.textContent = userData.name;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

    // Fetch user's blogs
    fetch(blogsApiUrl)
        .then(response => response.json())
        .then(blogsData => {
            blogsData.blogs.forEach(blog => {
                const blogElement = document.createElement('div');
                blogElement.className = 'blog';

                blogElement.innerHTML = `
                    <h3>${blog.title}</h3>
                    <p>${blog.description}</p>
                `;

                userBlogs.appendChild(blogElement);
            });
        })
        .catch(error => {
            console.error('Error fetching user blogs:', error);
            userBlogs.innerHTML = '<p>Failed to load blogs.</p>';
        });




        
});


