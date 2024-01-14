class Auth {
  static status = false;
  constructor() {}
  static setStatus(status: boolean) {
    this.status = status;
  }
  static getStatus() {
    return this.status;
  }
}

export default Auth;
