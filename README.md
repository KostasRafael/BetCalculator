# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


Get the id of a league by name
GET https://v3.football.api-sports.io/leagues?name=premier%20league

GET https://v3.football.api-sports.io/leagues?search=super%20league

GET https://v3.football.api-sports.io/leagues?search=bundesliga

GET https://v3.football.api-sports.io/leagues?search=la%20liga



https://v3.football.api-sports.io/fixtures?league={league_id}&season={season}&status=NS




https://v3.football.api-sports.io/fixtures?team={team_id}&last={number}

team_id
number

prompt

Currently, the Analysis page is static. Additionally, when I click the "Analyze" button next to a fixture, nothing happens. I want the following flow:
When the user clicks the "Analyze" button, they are taken to the analyze page, and this page displays information
about the teams in the fixture that was clicked. 

For this, you will need to fetch the last 1o fixtures of each team. You can achieve this by sending a request to:
https://v3.football.api-sports.io/fixtures?team={team_id}&last={number}
Send one request using the id of the one team as the team_id parameter, and another request using the id of the other team as the team_id parameter. Additionally, use 10 for the number parameter in both requests, to fetch the last 10 matches for each team.

In order to have the team_id available, feel free to implement any solution you want. But please explain to me what you did.