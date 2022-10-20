export default {
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
};

console.log("Server running on port 3000");
