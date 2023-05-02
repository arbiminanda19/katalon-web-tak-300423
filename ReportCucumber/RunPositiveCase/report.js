$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@HighPriority"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User successfully login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003cemail\u003e as email",
  "keyword": "When "
});
formatter.step({
  "name": "user input \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user verify login result",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "test30Apr1@gmail.com",
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User successfully login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HighPriority"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input test30Apr1@gmail.com as email",
  "keyword": "When "
});
formatter.match({
  "location": "login.input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.I_check_for_the_value_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify login result",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verify_login_result()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Products.feature");
formatter.feature({
  "name": "Product",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LowPriority"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User successfully access product page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003cemail\u003e as email",
  "keyword": "When "
});
formatter.step({
  "name": "user input \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user click products button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "test30Apr1@gmail.com",
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User successfully access product page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LowPriority"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input test30Apr1@gmail.com as email",
  "keyword": "When "
});
formatter.match({
  "location": "login.input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password as password",
  "keyword": "And "
});
formatter.match({
  "location": "login.I_check_for_the_value_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click products button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});