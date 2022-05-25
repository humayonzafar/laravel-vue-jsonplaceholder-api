module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleNameMapper:{
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
}
