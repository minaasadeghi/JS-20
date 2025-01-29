/*
   what is the difference between an asynchronous function and a synchronous function?
*/

// ! Answer
// Difference Between Asynchronous and Synchronous Functions

// Synchronous Function:
// Execution Flow: Synchronous functions are executed sequentially, meaning one task must finish before the next starts.
// Blocking: Each operation blocks the next one, so if a function takes time (like fetching data), it will block other code from executing until it completes.

// Asynchronous Function:
// Execution Flow: Asynchronous functions allow tasks to run in the background while the program continues with other tasks. They do not block the execution of subsequent code.
// Non-blocking: The asynchronous task can run while other code is executed, using mechanisms like promises or callbacks to handle the result once the task is done.
