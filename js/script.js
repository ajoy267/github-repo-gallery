//where my profile information will appear//
const overview = document.querySelector(".overview");
const username = "ajoy267";

const githubProfile = async function() {
    const resume = await fetch(
        `https://api.github.com/users/${username}`
    );
    const data = await resume.json();
    console.log(data);
    displayData(data);
};

const displayData = function(data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
    <img alt="user avatar" src=${data.avatar_url} />
  </figure>
  <div>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
  </div>
  `;
  overview.append(div);
};

githubProfile();