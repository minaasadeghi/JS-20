/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");

// ! Answer


async function fetchUserData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    createCards(users);
  } 
  catch (error) {
    console.error("Error fetching data:", error);
  }
}

function createCards(users) {
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerText = `Name: ${user.name}\nCompany: ${user.company.name}`;

    article.appendChild(card);
  });
}

fetchUserData();
