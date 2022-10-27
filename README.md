### GETTING STARTED
API Automation using mocha and chai.

API Automation Test File : tests/scenarios/wheater.test.js

### Installation
1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/maaofficial/api-automation-skill-test.git
   ```
3. go to project directory

4. Install Yarn Dependencies
   ```sh
   yarn add mocha chai axios dotenv mochawesome
   ```
5. Add file `.env` and Enter BASE_URL and API Token
   ```
    "BASE_URL": "website weatherbit.io/v2.0"
    "KEY": "your_api_token"
   ```

### How to run
Run Specific Api test File

  ```sh
  yarn run mocha:test
  ```


### How to Trigger CI (Github Action)
1. Commit Changes
2. Push to repository
3. Check Github Action Tab
