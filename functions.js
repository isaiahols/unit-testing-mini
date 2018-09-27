module.exports = {
    returnTwo: () => 2,
    greeting: (name="person") => {
        return typeof name === "string" ? `Hello, ${name}!` : `Oops, you need to pass in a string`;
    },
}