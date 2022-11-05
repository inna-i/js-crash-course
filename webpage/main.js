/* Fetch users using GitHub API */
const USERS_URL = "https://api.github.com/users";

async function getUsers() {
    try {
        let res = await fetch(USERS_URL);

        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

/* Fetch user by login using GitHub API */
async function getUserByLogin(login) {
    try {
        let res = await fetch(`${USERS_URL}/${login}`);

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
            <div class="user" data-login="${user.login}">
                <img src="${user.avatar_url}" data-login="${user.login}">
                <h2>${user.login}</h2>
            </div>`;

        html += htmlSegment;
    });

    const container = document.getElementById('users-list');
    container.innerHTML = html;
}

/* Show user info in a popup */
async function showUserPopup() {
    const container = document.getElementById('users-list');
    const popup = document.getElementById('popup-wrapper');
    const popupClose = document.getElementById('popup-close');
    const popupContent = document.getElementById('popup-content');

    container.onclick = async ({ target }) => {
        if (target.dataset.login == undefined) {
            return;
        }

        const user = await getUserByLogin(target.dataset.login);
   
        const html = `
            <img src="${user.avatar_url}">
            <div>
                <h2>${user.login}</h2>
                <p>name: <b>${user.name}</b></p>
                <p>company: <b>${user.company ? user.company : '-'}</b></p>
                <p>location: <b>${user.location ? user.location : '-'}</b></p>
                <p>blog: <a href="${user.blog}" target="_blank">${user.blog}</a></p>
                <p>repository: <a href="${user.url}" target="_blank">${user.url}</a></p>
            </div>`;
    
        popupContent.innerHTML = html;
        // make popup visible
        popup.style.top = 0;
    };

    popupClose.addEventListener('click', () => {
        popup.style.top = '-100%';
    });
}

document.addEventListener('DOMContentLoaded', function(){
    renderUsers();
    showUserPopup();
}, false);
