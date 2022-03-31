const app = require("./app")
const appVersion = process.env.npm_package_version
const appName= process.env.npm_package_name
const PORT = 3000

app.listen(PORT, () => {
    console.log(`${appName} ${appVersion} is running on port ${PORT}`)
})