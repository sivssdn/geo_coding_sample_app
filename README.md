### Store Locations

 How to start:
-
- Make .env file with credentials as in .env-sample  
- Run `npm install` followed by `npm start`
- Visit `localhost:3000` to see the index page from ejs templating engine

For mongo, the sample geo data (from .kml file) is present in file data.txt inside helpers folder.

Please note:
1. Testing libraries not added as dev dependencies because I want to replicate my entire environment to your PC.
2. In real production, location could be cached and not queries everytime like in this app.

Things I would have done if I had time
-
- Dockerize the app into backend and db containers, so no need for setup
- Searched for a better geocoding API with increased quota 
- Write tests, without this application is incomplete. Haven't got a chance to test app extensively.
- Revisited code to refractor and comment more extensively
- Would have created front-end in React
