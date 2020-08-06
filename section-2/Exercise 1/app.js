new Vue({
  el: "#exercise",
  data: {
    name: "Kris",
    age: 41,
    url:
      "https://cdn.newsapi.com.au/image/v1/4958341d4c6eca7d1b7573b33fc6679b?width=1024",
  },
  methods: {
    random: function () {
      return Math.random();
    },
  },
});
