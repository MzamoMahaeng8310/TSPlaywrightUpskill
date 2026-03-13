import { test, expect } from '../../Helpers/fixtures/appFixtures'
import { CreateBookingRequest, CreateBookingResponse, UpdateBookingRequest, GetBookingByIdResponse } from '../../Helpers/api/bookingModels'
import testData from '../../test-data/qa/testdata.json'
test.describe.serial('API CRUD Base Suite', () => {
   let bookingID: number
   test.beforeEach(async ({ api }) => {
      await api.authenticate(testData.endPoint.username, testData.endPoint.password)
   })

   test('Create a booking', async ({ api }) => {

      const bookingRequest: CreateBookingRequest = testData.BookingData
      const response = await api.createBooking(bookingRequest)

      expect(response.status()).toBe(200)

      const body: CreateBookingResponse = await response.json()
      bookingID = body.bookingid
      console.log(`This is the booking id ${bookingID}`)
      console.log("The booking body", body)

      expect(body.booking.firstname).toBe(bookingRequest.firstname)
      expect(body.booking.lastname).toBe(bookingRequest.lastname)
        })


   test('Get Booking by ID', async ({ api }) => {
      const response = await api.getBooking(bookingID)
      expect(response.status()).toBe(200)

      const body: GetBookingByIdResponse = await response.json()
      console.log('THe Get By ID response body', body)
      expect(body.firstname).toBe(testData.BookingData.firstname)
      expect(body.lastname).toBe(testData.BookingData.lastname)
      expect(body.bookingdates.checkin).toBe(testData.BookingData.bookingdates.checkin)
   })
  
   test('Update Booking', async ({ api }) => {

      const updateBookingRequest: UpdateBookingRequest = testData.UpdateBookingData
      const response = await api.updateBooking(bookingID, updateBookingRequest)

      expect(response.status()).toBe(200)
      const body :GetBookingByIdResponse = await response.json()
      console.log("The updated responsibly is", body)
      expect(body.firstname).toBe(testData.UpdateBookingData.firstname)
      expect(body.lastname).toBe(testData.UpdateBookingData.lastname)
      expect(body.bookingdates.checkin).toBe(testData.UpdateBookingData.bookingdates.checkin)

   });

   test('Delete The Booking', async ({ api }) => {
      const response = await api.deleteBooking(bookingID)
      expect(response.status()).toBe(201)
   });

})

//      docker compose up -d

