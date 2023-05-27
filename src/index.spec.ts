import Person from "."

it("my name", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("joao")
})
