//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
const apiUrl = "https://mockapi.io/your-endpoint-url/users";

const familyIds = [1, 2, 3]; 
async function deleteFamilyMembers(ids) {
    try {
        for (const id of ids) {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                console.log(`Deleted user with ID: ${id}`);
            } else {
                throw new Error(`Failed to delete user with ID ${id}: ${response.status}`);
            }
        }
    } catch (error) {
        console.error("Error deleting family members:", error);
    }
}

deleteFamilyMembers(familyIds);


//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
async function deleteEvenIds() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.status}`);
        }

        const users = await response.json();
        const evenIdUsers = users.filter(user => user.id % 2 === 0);

        for (const user of evenIdUsers) {
            const deleteResponse = await fetch(`${apiUrl}/${user.id}`, {
                method: "DELETE",
            });
            if (deleteResponse.ok) {
                console.log(`Deleted user with ID: ${user.id}`);
            } else {
                throw new Error(`Failed to delete user with ID ${user.id}: ${deleteResponse.status}`);
            }
        }
    } catch (error) {
        console.error("Error deleting employees with even IDs:", error);
    }
}

deleteEvenIds();


//*End of story :)

