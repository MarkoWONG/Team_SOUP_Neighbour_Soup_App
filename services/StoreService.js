import AsyncStorage from "@react-native-async-storage/async-storage";

const listings_CACHE_KEY = "@listings";

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
};
