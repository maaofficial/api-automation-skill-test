### API Automation Weatherbit

This repository contains scripts to execute API Automation in website weatherbit. This Automation using mocha and chai and all code is written in Javascript.

API Automation Test File : tests/scenarios/wheater.test.js

### Overview
There are two API Automation Test in website Weatherbit.
1. First test is to GET /current?lat={lat}&lon={lon} for values {lat} as 40.730610 and {lon} as -73.935242 .It should parse the response and get the value of the /data/state_code

2. Second test is to GET /forecast/3hourly?postal_code={postal_code}. It should parse the response and get the value of the { timestamp_utc, weather} for all the data entries

### Dependencies
- Mocha
- Chai
- Axios
- Dotenv
- Mochawesome

### How to Installation and Run
1. Register new account to get the API token key at website -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repository with url like command below:
   ```sh
   git clone https://github.com/maaofficial/api-automation-skill-test.git
   ```
3. Go to Project Directory

4. Install Yarn Dependencies
   ```sh
   yarn add mocha chai axios dotenv mochawesome
   ```
5. Add file `.env` and Enter BASE_URL and API Token
   ```
   "BASE_URL": "website weatherbit.io/v2.0"
   "KEY": "your_api_token"
   ```
6. To run this Automation Test write this command below in terminal
   ```sh
   yarn run mocha:test
   ```
  
### How to Run in Github Action
1. Commit the new changes
2. Push
3. Go to Github Action Tab
4. Examine the result
