import { find, isEmpty } from "lodash";
import { authorization } from "../auth";

const BASE_URI = "https://chckr.io/chckr";
//lend
class APIClient {
  /**
   * API Path
   * @type Object
   */

  path = {
    register: "/add_user",
    login: "/user_login",
    changeUserData: "/change_data",
    getUser: "/user_profile"
  };

  token = authorization.getAPIKey();

  prepareRequest({ url, method = "GET", body = null }) {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "text/plain");

    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    });
    const initParam = { method, headers, mode: "cors" };

    if (body) {
      initParam["body"] = JSON.stringify(body);
    }
    console.log(`Request: [${method}] ${url}`);
    return new Request(url, initParam);
  }

  registerUser = async data => {
    const request = this.prepareRequest({
      url: `${BASE_URI}${this.path.register}`,
      method: "POST",
      body: data
    });
    const response = await fetch(request);
    const result = await response.json();
    return result;
  };

  loginUser = async data => {
    const request = this.prepareRequest({
      url: `${BASE_URI}${this.path.login}`,
      method: "POST",
      body: data
    });

    const response = await fetch(request);
    const result = await response.json();
    return result;
  };

  changeUserData = async data => {
    const request = this.prepareRequest({
      url: `${BASE_URI}${this.path.changeUserData}`,
      method: "POST",
      body: { ...data, token: this.token }
    });

    const response = await fetch(request);
    const result = await response.json();
    return result;
  };

  getUser = async data => {
    const request = this.prepareRequest({
      url: `${BASE_URI}${this.path.getUser}`,
      method: "POST",
      body: { ...data, token: this.token }
    });

    const response = await fetch(request);
    const result = await response.json();
    return result;
  };
}
export const apiClient = new APIClient();
