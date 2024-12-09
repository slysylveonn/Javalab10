//fetch API for weather alerts

document.getElementById('fetch').addEventListener('click', function () {                               
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayPost1(data);  
        })
        .catch(error => console.error('Error fetching data:', error));        //error logging 
});

function displayPost1(data) {
    const post1Display = document.getElementById('fetch-display');
    post1Display.innerHTML = ''; // Clear previous data
    
    if (data) {
        const post1Element = document.createElement('div');
        post1Element.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `;
        post1Display.appendChild(post1Element);
    } else {
        post1Display.textContent = 'No posts available';
    }
}

//XHR request for weather alerts


document.getElementById('xhr').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // 4 means the request is complete
            if (xhr.status === 200) { // 200 means the request was successful
                const data = JSON.parse(xhr.responseText);
                console.log(data);  
                displayPost2(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);          
            }
        }
    };

    xhr.send();
});
    
    function displayPost2(data) {
        const post2Display = document.getElementById('fetch-display');
        post2Display.innerHTML = ''; // Clear previous data
        
        if (data) {
            const post2Element = document.createElement('div');
            post2Element.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
            post2Display.appendChild(post2Element);
        } else {
            post2Display.textContent = 'No posts available';
        }
}
    

//POST function
let title = document.getElementById('title');
let input = document.getElementById('input');

document.getElementById('post').addEventListener('click', function () {
    if (title && input) {
        let postData = {
            title: title.value,  
            body: input.value     
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',     
            headers: {
                'Content-Type': 'application/json'   
            },
            body: JSON.stringify(postData)  
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data);  
            displayPost1(data); 
        })
        .catch(error => console.error('Error uploading post:', error));  
    } else {
        console.error('Required elements not found.');
    }
});