const  { isEmptyPayload, isInValidEmail } = require('./validator')

test('valid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "hiking"
    }

    const result =  isInValidEmail(testPayload)
    expect(result).toBe(false)
})

test('invalid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "hiking"
    }

    const result =  isInValidEmail(testPayload)
    expect(result).toBe(true)
})

test('empty payload', function() {
    const testPayload = {}

    const result =  isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test('non-empty payload', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "hiking"
    }

    const result =  isEmptyPayload(testPayload)
    expect(result).toBe(false)
})