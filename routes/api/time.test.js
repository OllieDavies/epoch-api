const MockDate = require('mockdate');
const { matchers } = require('jest-json-schema');
const { handleRoot } = require("./time").handlers

expect.extend(matchers);

describe("api/time", () => {
  describe("/", () => {
    it("returns the correct epoch", () => {
      MockDate.set("02/20/2020")

      let result = null;
      handleRoot(null, { send: (response) => result = response })

      expect(result).toEqual({ epoch: 1582156800 })
      
      MockDate.reset()
    })


    it("returns the correct schema", () => {
      const schema = {
        properties: {
          epoch: {
            description: "The current server time, in epoch seconds, at time of processing the request.",
            type: "number"
          },
        },
        required: ["epoch"],
        type: "object"
      }

      let result = null;
      handleRoot(null, { send: (response) => result = response })

      expect(result).toMatchSchema(schema)

    })
  })
})