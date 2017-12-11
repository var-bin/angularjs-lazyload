// blog.service.js

class BlogService {
  constructor($http) {
    this.$http = $http;
    this.API_URL = "https://api.github.com";
  }

  getData() {
    const REPOS = "users/var-bin/repos";
    const URL = `${this.API_URL}/${REPOS}`;

    return this.$http.get(URL)
      .then((response) => response.data);
  }
}

BlogService.$inject = ["$http"];

export { BlogService };
