import { assert } from "chai";
import WheaterbitAPI from "../pages/wheater.api";
import * as data from "../data/whetaer.data";

describe('Jojonomic API Automation Skill Test Wheater', () => {
    it('Should be able to get current wheater data based on Lat and Lon', async () => {
        const response = await WheaterbitAPI.get_current_wheater(data.VALID_PARAMS);
        let jsonData = response.data
        console.log(jsonData.data[0].state_code)

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ['count', 'data'])
        assert.equal(jsonData.data[0].state_code, 'NY')
    });
});

describe('Jojonomic API Automation Skill Test Forecast', () => {
    it('Should be able to get current forecast based on postal code and hours', async () => {
        const response = await WheaterbitAPI.get_forecast_wheater(data.VALID_PARAMS_FORECAST);
        let jsonData = response.data
        console.log(jsonData.data[0].timestamp_utc);
        console.log(jsonData.data[0].weather);

        assert.equal(response.status, 200);
    });
});