import { describe, test, expect } from "@jest/globals"

describe("#Routes test suite", () => {
  describe("#setSocketInstance", () => {
    test.todo("setSocket should store io instance")
  })

  describe("#handler", () => {

    test.todo('given an inexistent route it should choose default route')
    test.todo('it should set any request with CORS enabled')
    test.todo('given method OPTIONS it should choose options route')
    test.todo('given method POST it should choose post route')
    test.todo('given method GET it should choose get route')
  })
})