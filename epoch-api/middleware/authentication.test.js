var handler = require("./authentication");

// Mock api key
jest.mock("../config", () => ({ API_KEY: "testtoken" }))

describe("middleware/authentication", () => {
  it("rejects requests with the incorrect token", () => {
    const mockStatus = jest.fn(() => ({ send: () => null }))

    handler({
      headers: { 
        authorization: "incorrect key" 
      }
    }, { 
      status: mockStatus 
    }, null)

    expect(mockStatus).toHaveBeenCalledTimes(1)
    expect(mockStatus).toHaveBeenCalledWith(403)
  })

  it("rejects requests with the incorrect token", () => {
    const mockNext = jest.fn(() => null)

    handler({
      headers: { 
        authorization: "testtoken" 
      }
    }, null, mockNext)

    expect(mockNext).toHaveBeenCalledTimes(1)
  })
})