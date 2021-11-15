import { find, isEmpty } from "lodash";

const BASE_URI = "https://127.0.0.1:9090/chckr";

class APIClient {
  /**
   * API Path
   * @type Object
   */

  path = {
    register: "/add_user/",
    login: "/user_login/",
    changeUserData: "/change_data"
  };

  registerUser = async data => {
    console.log({ data });
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
    console.log({ data });
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
    console.log({ data });
    const request = this.prepareRequest({
      url: `${BASE_URI}${this.path.changeUserData}`,
      method: "POST",
      body: data
    });

    const response = await fetch(request);
    const result = await response.json();
    return result;
  };

  prepareRequest({ url, method = "GET", body = null }) {
    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    });
    const initParam = { method, headers };
    if (body) {
      initParam["body"] = JSON.stringify(body);
    }
    console.log(`Request: [${method}] ${url}`);
    return new Request(url, initParam);
  }
}
export const apiClient = new APIClient();
