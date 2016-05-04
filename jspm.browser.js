SystemJS.config({
  baseURL: "/",
  paths: {
    "*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "grade.io/": "src/"
  }
});
