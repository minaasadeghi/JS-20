// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */

const apiUrl = "https://mockapi.io/your-endpoint-url/users";

async function addUsers(usersArray) {
    try {
        for (const user of usersArray) {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                throw new Error(`Failed: ${response.status}`);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

addUsers(users);


//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
const signupApiUrl = "https://mockapi.io/your-endpoint-url/users";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const phone = document.getElementById("phone").value;
    const newUser = { firstName, lastName, phone };
    try {
        const response = await fetch(signupApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            alert("Signup successful!");
        } else {
            throw new Error(`Failed: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred.");
    }
});

