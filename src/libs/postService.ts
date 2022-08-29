class PostService {
  BASE_URL = "http://localhost:3000";
  POST_URL = `${this.BASE_URL}/api/post`;

  async fetchPosts() {
    return fetch(`${this.POST_URL}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => data.data);
  }

  async fetchPost(id: string | string[] | undefined) {
    return fetch(`${this.POST_URL}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => data.data);
  }
}

export default new PostService();
