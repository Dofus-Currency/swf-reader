import main from '../src/main'

describe(':: main()', () => {
  it("It should return Let's R0CK", () => {
    expect(main()).toEqual("Let's R0CK !")
  })
})