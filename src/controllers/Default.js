const DBControllers = require('../db/controllers');

module.exports = class Controller {
  get email() {
    return this.cookies['user-email'];
  }
  get slug() {
    return this.cookies['user-slug'];
  }
  get user() {
    return {
      id: this.slug,
      email: this.email,
      slug: this.slug
    };
  }
  get role() {
    const cookieUserRole = this.cookies['user-email'];
    if (cookieUserRole) {
      return cookieUserRole.split(',');
    }
    return this.user && this.user.role;
  }
  get token() {
    return this.req.headers.authorization;
  }
  constructor(client, request) {
    // Check if Controller for HTTP or not
    this.db = this.name ? DBControllers[this.name] : null;
    this.controllers = DBControllers;
    if (client.headers && !client.readyState) {
      this.req = client;
      this.query = client.query;
      this.body = client.body;
      this.cookies = client.cookies;
      this.res = request;
    } else {
      this.on = client.on.bind(client);
      this.once = client.once.bind(client);
      this.off = client.off.bind(client);
      this.emit = client.emit.bind(client);
      this.client = client;
      this.req = request;
      this.query = client.query;
      this.body = client.body;
      this.cookies = request.cookies;
      this.clients = client.onlineClientsMap;
    }
  }
  init() {
    // Initialization
  }
};
