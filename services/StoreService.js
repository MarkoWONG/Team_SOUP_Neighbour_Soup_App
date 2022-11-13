import AsyncStorage from "@react-native-async-storage/async-storage";

const TODOS_CACHE_KEY = "@todos";

export default {
  async getTodos() {
    try {
      const data = await AsyncStorage.getItem(TODOS_CACHE_KEY);
      const cachedTodos = JSON.parse(data) ?? [];
      return cachedTodos;
    } catch (err) {
      console.log("Store get error:", err);
    }
  },

  async saveTodos(todos) {
    try {
      await AsyncStorage.setItem(TODOS_CACHE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.log("Store set error:", err);
    }
  },
};
