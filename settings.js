require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPycy1reYflrWAQAAIAHAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xqtVxUlKpTNchN8OAdb1PzECFgFENMgoJd*vsU2qdPP8z0nOEp5LL32mutvb8DkmOORqgC+ndAGb5CgeqlqCgCOhgUSYIYaIIYCgh0YDsXbz+SCC16Fu*GbqM3mSiloklkxWRvuOO0gdr4EE9l4w08moAW+wxHvwk4bkguKh10PN8oL69BMPKwE3TM8QWdnKuiRd41c2UzK2X+Bh51RIgZJqlND+iMGMxGqJpCzL4GPx11lTx2KzUOaY85K3vnBAdjIh8Ts8xWSmXMQvWo8tMmjL4G*95Y0kVrMlWcBsmtIAjU3S00jq34PTLYOV77Yn*yq*xkbOwXfI5TgmIvRkRgUX2Z94uHHbJkE**mZu+8GHZDPmDleeEHfUYLssillrn3Z7Rxun0NuG3lypjJ+36LuGyuzMqy7UGnbHnb07jvrO9Rfh0aVr6wPnh*AZ+yD6+c*g*vI4eMNjl177cB9E1hXryJjRTFL5bYe2+rKXbDDK8LqUtmX4NPveu9M7C0oYmRv2JoEdodDWZqvyT9oRtah61vIeIc9pX0CR+Kgv0OZe9mipOsSvTixaXE*M7JHM575i1ct0*d9zVWGo2qlLWpU3YaBE3nl6DqsWUUFnPp0DHNUbqR5HbJtfF6Th1VnWgeyrHx9qzohCovBrr8aAKGUswFgwLnpN5TlSaA8XWBIobEk11wN4wd80a+1xloKbpZbOi+B9FVTpcztCLzzdHmR1ttIDcP3kATUJZHiHMUDzEXOasCxDlMEQf6n381AUGleOn2zCY3QYIZFyEpaJbD+EPUj0MYRXlBxKIikVkvEAO69LmNhMAk5TWNBYEsOuArMg9QcKAnMOPoZ4GIoRjoghXoZ9OaeVzz7ljz7UALBqAJzk89cAx0oHRVTet2+52+1Nbl9h*8260OCyn9RpAATUBgfRuE44ExHtsWaILs+VCWVanb12RZUzVJ69Zv64PHT8x1ihgJiDMOdGCONhKe5pbtrVXa81zXiFLDTA3wWeOHV15izEK3vLbiKEtXveFhwmdbzZWrw47ugndqzZaypxXZyQsCw3v7hyBAB51u39u1qWO6UO2ZOHFXfGEIsia3PRrsi0AM09kRzqPedTw9ob4qwhBbK3SWSl*T9kPJQD3FKNAZdxIbiYa43*DSrI3VBDG64gj9mmwwgK17Q+ByK4ZJ92Jx6gZrQu*bfLxIpGg0jaxVb+*L7JJoh2BRHjhu4cNmO74j5kvR9OTgROr4u+U0C1epvTlu11c8e7n42UXZj+mFnwar1at*E4yew+CHSv+p5gt4bTrp0fwlxo*x8i8tOgidAd+31I2*dZJBe8lsd1KKKF*D9dLsziS7v5hodGdalmGCx+OvJqAZFEnOzkAH*LyHoAlYXtQW9kiS*yaTaYSenb7KziAXxmdbLPEZcQHPFOiy1u53NUnrK69bU5bTIeSHmgG3bZyL2uOVQelCQPHRZcCov6kSg8ffUEsBAhQDFAAACAgA*JzLWt5h+WtYBAAAgAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgAQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'ex382',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
