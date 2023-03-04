const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "env": {
      baseUrl: "https://web-staging.rakamin.com/",
      checkoutUrl: "https://web-staging.rakamin.com/checkout",
      thankyouUrl: "https://web-staging.rakamin.com/thank-you-page/virtual-internship-experience", 
      email1: "testscenario1@gmail.com",
      password1: "scenario1",
      email2: "testscenario2@gmail.com",
      password2: "scenario2",
      phoneNumber: "62812345678"
    }
  },
});
