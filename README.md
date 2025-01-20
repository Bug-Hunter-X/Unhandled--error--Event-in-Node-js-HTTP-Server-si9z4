# Unhandled 'error' Event in Node.js HTTP Server

This repository demonstrates a common error in Node.js where the 'error' event on an HTTP server is not handled, leading to unexpected crashes.  The solution shows how to properly handle this event to prevent crashes and log errors effectively.

## Bug

The provided `bug.js` demonstrates an HTTP server that does not handle the 'error' event.  Attempting to access a non-existent port or experiencing network issues will lead to the server crashing silently, without helpful error logs.

## Solution

The `bugSolution.js` shows the solution. The server now listens for the 'error' event.  When an error occurs, the error details are logged to the console, and the server gracefully shuts down. This prevents unexpected crashes and provides valuable debugging information.