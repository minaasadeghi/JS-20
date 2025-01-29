/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer

async function fetchUserData() {
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users = await response.json();
      console.log("Fetched users:", users);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchUserData();
  
