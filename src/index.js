const userName = new URLSearchParams(location.search).get('username');

getUser(userName);

function getUser(user) {
    const url = `https://api.github.com/users/${user}`;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Информация о пользователе не доступна');
        })
        .then(response => renderUser(response))
        .catch(e => alert(e.message || e));
}

function renderUser(user) {
    const html = `
        <div class="user">
            <img class="user__avatar" src="${user.avatar_url}">
            <div class="user__bio">${user.bio || ''}</div>
            <a href="${user.html_url}">${user.name}</a>
        </div>
    `;

    document.getElementById('user').innerHTML = html;
}