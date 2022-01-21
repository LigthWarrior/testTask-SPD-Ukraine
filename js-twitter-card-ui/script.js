let followed = false;

const dataFollowersNode = document.querySelector('[data-followers]');
const dataButtonNode = document.querySelector('[data-button]');

document.querySelector('[data-button]').addEventListener('click', () => {
    let dataFollowersNumber = dataFollowersNode.textContent.replace(',', '');

    if (followed) {
        --dataFollowersNumber;
        dataFollowersNode.textContent = getdataFollowersString(dataFollowersNumber);
        dataButtonNode.textContent = 'Follow';
        dataButtonNode.style.backgroundColor = '#2888cb';
        followed = false;
    } else {
        ++dataFollowersNumber;
        dataFollowersNode.textContent = getdataFollowersString(dataFollowersNumber);
        dataButtonNode.textContent = 'Following';
        dataButtonNode.style.backgroundColor = '#34cf7a';
        followed = true;
    }

    function getdataFollowersString(number) {
        const dataFollowersArray = number.toString().split('');
        dataFollowersArray.splice(3, 0, ',');
        const dataFollowersString = dataFollowersArray.join('');
        return dataFollowersString;
    }
});
