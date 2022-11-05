/* Fetch users ugin GitHub API */
async function getUsers() {
    const USERS_URL = "https://api.github.com/users";

    try {
        let res = await fetch(USERS_URL);

        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

/* async operation - elements rendering */
async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.forEach(user => {
        let htmlSegment = `
            <div class="user">
                <img src="${user.avatar_url}" >
                <h2>${user.login}</h2>
            </div>`;

        html += htmlSegment;
    });

    let container = document.getElementById('users-list');
    container.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', function(){
    renderUsers();
}, false);


// fetch(USERS_URL)
//     .then(res => res.json())
//     .then(res => {
//         fetch(res[0].repos_url)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     })

// throw erro
// fetch(`${USERS_URL}---`)
//     .then(res => {
//         if (res.ok) {
//           return res.json();
//         }

//         throw new Error("You are using wrong URL")
//     })
//     .then(res => console.log(res))
//     .catch(e => console.info(e))
