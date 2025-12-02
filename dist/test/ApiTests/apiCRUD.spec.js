"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appFixtures_1 = require("../../Helpers/fixtures/appFixtures");
const testdata_json_1 = __importDefault(require("../../test-data/qa/testdata.json"));
appFixtures_1.test.describe.serial('API CRUD Base Suite', () => {
    let bookingID;
    appFixtures_1.test.beforeEach(async ({ api }) => {
        await api.authenticate(testdata_json_1.default.endPoint.username, testdata_json_1.default.endPoint.password);
    });
    (0, appFixtures_1.test)('Create a booking', async ({ api }) => {
        const response = await api.createBooking(testdata_json_1.default.BookindData);
        console.log(response);
        (0, appFixtures_1.expect)(response.status).toBe(200);
        const body = await response.json();
        bookingID = body.bookingid;
        (0, appFixtures_1.expect)(body.booking.firstname).toBe(testdata_json_1.default.BookindData.firstname);
    });
});
//      docker compose up -d
