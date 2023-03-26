export const getLogoEle = () => {
    return document.querySelector('nav .logo');
}

export const getProfileImageEle = () => {
    return document.querySelector('nav .profile-photo img');
}

export const getProfilePhotoEle = () => {
    return document.querySelector('.sidebar .profile .profile-photo img');
}

export const getProfileNameEle = () => {
    return document.querySelector('.sidebar .profile h2');
}

export const getProfileEmailEle = () => {
    return document.querySelector('.sidebar .profile p');
}

export const createCardDom = () => {
    const cardDom = document.createElement('div');
    cardDom.innerHTML = `
        <div class="card-profile"></div>
        <div class="card-picture"></div>
    `;

    return cardDom;
};
