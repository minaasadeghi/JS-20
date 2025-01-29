//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

const apiUrl = "https://mockapi.io/your-endpoint-url/users/1";

const updatedUser = {
    firstName: "Lufy",
    lastName: "Monkey. D",
    phone: "(945) 635-3854",
};

async function updateUser() {
    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("User updated:", data);
        } else {
            throw new Error(`Failed to update user: ${response.status}`);
        }
    } 
    catch (error) {
        console.error("Error updating user:", error);
    }
}

updateUser();


//*To be continue...