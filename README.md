<h1>CO2 Footprint Calculator</h1>

A questionnaire that calculates the user’s carbon emission output based on their lifestyle habits, compares their score against a database of other app users, and offers solutions on how to improve their score.

Technologies Used

<i>React, MongoDB, SurveyJS, Highcharts</i>

The questionnaire is built using the <i>SurveyJS</i> library. Each answer in the questionnaire has a numerical value that contributes to a ‘final score’. The total value is also broken down into three sub-totals: Transport, Food, and Travel. A dynamic graph from the <i>Highcharts</i> React library is used to display data from the API (built with <i>MongoDB</i>). 

Installing and running the app

In both the ‘client’ and ‘server’ directories, enter:

	npm install

To seed the database, navigate to ‘server/db’ and enter:
	
	mongo < user_seeds.js

In ‘server’ enter:

	npm run server:dev

And in ‘client’, run:
	
	npm start

In your browser, use http://localport:3000 to use the app. (For the API, use http://localport:9000/api/users)  
