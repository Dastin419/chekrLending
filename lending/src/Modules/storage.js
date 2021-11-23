/**
 * Browser localStorega
 */
class LocalStorage {
  /**
   * Storage system (window.localStorage)
   */
  storage = window.localStorage;

  /**
   * Set data
   *
   * @param key
   * @param value
   */
  setData(key, value) {
    try {
      // Stringify objects
      const str =
        typeof value === "object" ? JSON.stringify(value) : value.toString();
      this.getStorage().setItem(key, str);
    } catch (e) {
      console.error("Unable to stringify value", e, key, value);
    }
  }

  /**
   * Get data
   *
   * @param key
   * @returns null|string
   */
  getData(key) {
    try {
      let value = this.getStorage().getItem(key);
      // Value found is a serialized object
      if (
        typeof value === "string" &&
        value.match(/^({.+})|(\[.+\])$/g) !== null
      ) {
        value = JSON.parse(value);
      }

      return value;
    } catch (e) {
      console.log({ e });
      console.error(
        `BrowserStorageLocal is unable to parse [key:'${key}']: ${e.message}`
      );
    }
  }

  /**
   * Remove data
   *
   * @param key
   */
  removeData(key) {
    try {
      this.getStorage().removeItem(key);
    } catch (e) {
      console.error(
        `BrowserStorageLocal is unable to removeItem ['${key}'] from storage`
      );
    }
  }

  /**
   * Returns the storage system or throws an exception if the storage is not defined
   */
  getStorage() {
    if (!this.storage) throw new Error("Storage not defined in BrowserStorage");
    return this.storage;
  }
}

export const localStore = new LocalStorage();
