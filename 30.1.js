// const data = {
//   login: "Eyal-donut",
//   id: 121382265,
//   node_id: "U_kgDOBzwleQ",
//   avatar_url: "https:avatars.githubusercontent.com/u/121382265?v=4",
//   gravatar_id: "",
//   url: "https:api.github.com/users/Eyal-donut",
//   html_url: "https:github.com/Eyal-donut",
//   followers_url: "https:api.github.com/users/Eyal-donut/followers",
//   following_url: "https:api.github.com/users/Eyal-donut/following{/other_user}",
//   gists_url: "https:api.github.com/users/Eyal-donut/gists{/gist_id}",
//   starred_url: "https:api.github.com/users/Eyal-donut/starred{/owner}{/repo}",
//   subscriptions_url: "https:api.github.com/users/Eyal-donut/subscriptions",
//   organizations_url: "https:api.github.com/users/Eyal-donut/orgs",
//   repos_url: "https:api.github.com/users/Eyal-donut/repos",
//   events_url: "https:api.github.com/users/Eyal-donut/events{/privacy}",
//   received_events_url: "https:api.github.com/users/Eyal-donut/received_events",
//   type: "User",
//   site_admin: false,
//   name: null,
//   company: null,
//   blog: "",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 13,
//   public_gists: 0,
//   followers: 3,
//   following: 5,
//   created_at: "2022-12-25T11:26:31Z",
//   updated_at: "2023-02-01T08:30:01Z",
// };

const button = document.querySelector("button");
const grid = document.querySelector(".grid");
const savedUsernames = [];

function createUser(username, numOfPublicRepo, url, link) {
  const newUser = document.createElement("div");
  newUser.addEventListener("click", function () {
    window.open(link);
  });
  newUser.classList.add("user");
  grid.append(newUser);
  newUser.innerHTML = `<div class="username"><strong>Username:</strong> ${username}</div>
 <div class="repos-number"><strong>Number of public repos:</strong> ${numOfPublicRepo}</div>`;
  const userPhoto = document.createElement("div");
  userPhoto.classList.add("photo");
  const urlString = `${url}`;
  userPhoto.style.background = `url(${urlString}) no-repeat center center/cover`;
  newUser.prepend(userPhoto);
}

button.addEventListener("click", async function (event) {
  event.preventDefault();
  try {
    const input = document.querySelector("input");
    const username = input.value;
    input.value = "";
    const response = await fetch(`https:api.github.com/users/${username}`);
    if (!response.ok) throw "Something went wrong";

    const data = await response.json();

    const numOfPublicRepo = data.public_repos;
    const url = data.avatar_url;
    const link = data.html_url;
    if (!savedUsernames.includes(username)) {
      savedUsernames.push(username);
      createUser(username, numOfPublicRepo, url, link);
    }
  } catch (err) {
    console.log(err);
  }
});
