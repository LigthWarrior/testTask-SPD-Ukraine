let followed = false;

const dataFollowersNode = document.querySelector('[data-followers]').lastElementChild;
const dataButtonNode = document.querySelector('[data-button]');

document.querySelector('[data-button]').addEventListener('click', () => {
    let dataFollowersNumber = +dataFollowersNode.textContent;

    if (followed) {
        dataFollowersNode.textContent = --dataFollowersNumber;
        dataButtonNode.textContent = 'Follow';
        dataButtonNode.style.backgroundColor = '#2888cb';
        followed = false;
    } else {
        dataFollowersNode.textContent = ++dataFollowersNumber;
        dataButtonNode.textContent = 'Following';
        dataButtonNode.style.backgroundColor = '#34cf7a';
        followed = true;
    }
});
