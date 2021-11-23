import { localStore } from "./storage";

const API_KEY = "API_KEY";
const USER_KEY = "USER_KEY";

class Authorization {
  /**
   * Browser storage
   */
  storage;

  /**
   *
   * @param storage
   */
  constructor(storage) {
    this.storage = storage;
  }

  /**
   * Login user to app
   * @param user
   * @param apiKey
   */
  login({ userId, apiKey }) {
    this.storage.setData(API_KEY, apiKey);
    this.storage.setData(USER_KEY, userId);
  }

  /**
   * Logout user from app
   */
  logout() {
    try {
      this.storage.removeData(API_KEY);
      this.storage.removeData(USER_KEY);
    } catch (error) {
      console.error(error);
    }
  }

  getAPIKey() {
    return this.storage.getData(API_KEY);
  }

  getUserId() {
    return this.storage.getData(USER_KEY);
  }
}

export const authorization = new Authorization(localStore);
