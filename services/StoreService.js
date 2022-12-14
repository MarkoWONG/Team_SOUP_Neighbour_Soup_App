import AsyncStorage from "@react-native-async-storage/async-storage";

const listings_CACHE_KEY = "@listings";
const groups_CACHE_KEY = "@groups";

export default {
  async getlistings() {
    try {
      const data = await AsyncStorage.getItem(listings_CACHE_KEY);
      const cachedlistings = JSON.parse(data) ?? [];
      return cachedlistings;
    } catch (err) {
      console.log("Store get error:", err);
    }
  },

  async savelistings(listings) {
    try {
      await AsyncStorage.setItem(listings_CACHE_KEY, JSON.stringify(listings));
    } catch (err) {
      console.log("Store set error:", err);
    }
  },

  async deletelistings() {
    try {
      await AsyncStorage.removeItem(listings_CACHE_KEY);
    } catch (err) {
      console.log("Store set error:", err);
    }
  },
  async getGroups() {
    try {
      const data = await AsyncStorage.getItem(groups_CACHE_KEY);
      const cachedlistings = JSON.parse(data) ?? [];
      return cachedlistings;
    } catch (err) {
      console.log("Store get error:", err);
    }
  },

  async saveGroups(listings) {
    try {
      await AsyncStorage.setItem(groups_CACHE_KEY, JSON.stringify(listings));
    } catch (err) {
      console.log("Store set error:", err);
    }
  },

  async deleteGroups() {
    try {
      await AsyncStorage.removeItem(groups_CACHE_KEY);
    } catch (err) {
      console.log("Store set error:", err);
    }
  },

  async clear() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log("Store set error:", err);
    }
  },
};
