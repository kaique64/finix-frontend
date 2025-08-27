module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  testEnvironment: "jsdom",
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], 
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};
