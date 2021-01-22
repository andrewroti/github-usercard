import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const userData ='https://api.github.com/users/andrewroti';
const userNameGet = 'https://api.github.com/users/';

axios.get(userData)
.then(res =>{
  console.log("worked");
  cardCreator(res.data);
  
})
.catch(err =>{
  console.log(err.data);
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "credleo95",
  
];

followersArray.forEach(name =>{
  axios.get(userNameGet + name)
  .then(res =>{
    cardCreator(res.data);
  })
  .catch(err =>{
    console.log(err.data);
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function cardCreator(userDataObject){
    const cardContainer = document.querySelector('.cards');
    const card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);
    const userImage = document.createElement('img');
    userImage.src = userDataObject.avatar_url;
    const userImageLink = document.createElement('a');
    userImageLink.href = userDataObject.avatar_url;
    userImageLink.appendChild(userImage);
    card.appendChild(userImageLink);
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);
    // everything below this line appends to cardInfo
    const name = document.createElement('h3');
    name.textContent = userDataObject.name;
    name.classList.add('name');
    cardInfo.appendChild(name);
    const userName = document.createElement('p');
    userName.classList.add('username');
    userName.textContent = userDataObject.login;
    cardInfo.appendChild(userName);
    const location = document.createElement('p');
    location.textContent = userDataObject.location;
    cardInfo.appendChild(location);
    const profile = document.createElement('p');
    profile.textContent = "Profile: ";
    cardInfo.appendChild(profile);
    const userURL = document.createElement('a');
    userURL.href = userDataObject.html_url;
    userURL.textContent = userDataObject.html_url;
    profile.appendChild(userURL);
    const followers = document.createElement('p');
    followers.textContent = "Followers: " + userDataObject.followers;
    cardInfo.appendChild(followers);
    const following = document.createElement('p');
    following.textContent = "Following: " + userDataObject.following;
    cardInfo.appendChild(following);
    const bio = document.createElement('p');
    bio.textContent = "Bio: " + userDataObject.bio;
    if(userDataObject.bio === null){
      bio.textContent = "All right, then.  Keep your secrets."
    }
    cardInfo.appendChild(bio);
    
    return cardContainer;
}





