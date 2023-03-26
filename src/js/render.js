import { fetchLogo,
    fetchProfile, 
    fetchCards } from "./api";

import { getLogoEle,
    getProfileImageEle, 
    getProfilePhotoEle,
    getProfileNameEle, 
    getProfileEmailEle,
    createCardDom } from "./element";

export const renderLogo = async () => {
    const logo = getLogoEle();
    logo.textContent = await fetchLogo();
    // logo.innerHTML =  await fetchLogo();// also works!
};

export const renderProfile = async () => {
    //step 1: fetch profile data from backend
    const profile = await fetchProfile();
    // console.log(profile);

    //step 2: get the target DOM from html
    const profileImageDOM = getProfileImageEle();
    
    const profilePhotoDom = getProfilePhotoEle();
    const profileNameDom = getProfileNameEle();
    const profileEmailDom = getProfileEmailEle();

    //step 3: apply the profile data on above DOM element
    profileImageDOM.src = profile.img_src;
    profilePhotoDom.src = profile.img_src;
    profileNameDom.innerHTML = profile.name;
    profileEmailDom.innerHTML = profile.at;
};

const renderSingleCard = (card) => {
    const cardDom = createCardDom();
    // <div>
    //     <div class="card-profile"></div>
    //     <div class="card-picture"></div>
    // </div>

    renderCardPicture(
        cardDom.querySelector('.card-picture'), 
        card.picture.img_src,
    );
    
    renderCardProfile(
        cardDom.querySelector('.card-profile'),
        card.profile,
    );

    document.querySelector('.cards').appendChild(cardDom);

};

const renderCardPicture = (cardPictureDom, pic) => {
    //cardPictureDom === <div class="card-picture"></div>
    const imgTag = document.createElement('img'); //<img/>
    imgTag.setAttribute('width', '100%')//<img width=100%/>
    imgTag.setAttribute("class", "pictures") 
    cardPictureDom.appendChild(imgTag);//<div class="card-picture"><img width=100%/></div>
    imgTag.src=pic;
};

const renderCardProfile = (cardProfileDom, pro) => {
    const imageID = document.createElement('img');
    imageID.setAttribute("class", "profile-photo");
    cardProfileDom.appendChild(imageID);
    imageID.src=pro.src;

    const profileContainer = document.createElement('div');
    profileContainer.setAttribute ("class", "profile-container");
    cardProfileDom.appendChild(profileContainer);

    const profileName = document.createElement('h2');
    profileName.setAttribute ("class", "profile-name");
    profileContainer.appendChild(profileName);
    profileName.innerHTML = pro.name;

    const profileLocation = document.createElement('p');
    profileLocation.setAttribute ("class", "profile-location");
    profileContainer.appendChild(profileLocation);
    profileLocation.innerHTML = pro.position;

    const profileTime = document.createElement('p');
    profileTime.setAttribute ("class", "profile-time");
    profileContainer.appendChild(profileTime);
    profileTime.innerHTML = pro.time;

    // const profileLink = document.createElement('a');
    // profileLink.setAttribute ("class", "profile-link");
    // cardProfileDom.appendChild(profileLink);
    // profileLink.innerHTML = ". . .";

    const setting = document.createElement('i');
    setting.className = 'uil uil-ellipsis-h';
    cardProfileDom.appendChild (setting)

    // const profileName = document.createElement('h2');
    // profileName.setAttribute ("class", "profile-name");
    // cardProfileDom.appendChild(profileName);
    // profileName.innerHTML = pro.name;

    // const profileLocation = document.createElement('p');
    // profileLocation.setAttribute ("class", "profile-location");
    // cardProfileDom.appendChild(profileLocation);
    // profileLocation.innerHTML = pro.position;

    // const profileTime = document.createElement('p');
    // profileTime.setAttribute ("class", "profile-time");
    // cardProfileDom.appendChild(profileTime);
    // profileTime.innerHTML = pro.time;

};

export const renderCards = async () => {
    //step1: fetch cards data from backend
    const cards = await fetchCards();
    console.log(cards);

    //step2: start render single card one by one
    cards.forEach((card) => {
        console.log(card);
        renderSingleCard(card);
    });
};