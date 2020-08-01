// ? 6th Example
// TODO using elements on the page 
const { Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function simpleRegistration() {
        try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
            await driver.findElement(By.name("email")).sendKeys("example@email.com");
            await driver.findElement(By.id("password")).sendKeys("12345");
            await driver.findElement(By.name("submit")).click();
        } catch (error) {
            console.log(error)
        }
}
simpleRegistration();

// ? 5th Example 
// TODO create a Proxy in firefox
// const { Builder } = require("selenium-webdriver");
// const firefox = require("selenium-webdriver/firefox");
// const proxy = require("selenium-webdriver/proxy");
// const options = new firefox.Options();
// options.setProfile("./SeleniumTest");
// const proxyServer = "place proxy ip address here from free proxy ip website";

// const driver = new Builder()
//     .forBrowser("firefox")
//     .setFirefoxOptions(options)
//     .setProxy(proxy.manual({
//         http: proxyServer,
//         https: proxyServer
//     }))
//     .Build();

// driver.get("https://whatismyipaddress.com/")
    
// ? 2nd and 6th Example
// TODO Use elements on a page and async await => Promise 
// const { Builder } = require("selenium-webdriver");
// const driver = new Builder()
//     .forBrowser("firefox")
//     .build();

// async function openWebsites() {
//     try {
//         await driver.get("http://yahoo.com");
//         await driver.get("http://google.com");
//     } catch (error) {
//         console.log(error);
//     }
// }
// openWebsites();

// ? 4th Example
// TODO set custom firefox profile 
// TODO Build the selenium webdriver for us
// const { Builder } = require("selenium-webdriver");
// const firefox = require("selenium-webdriver/firefox");
// const options = new firefox.Options();

// options.setProfile("./SeleniumTest");

// const driver = new Builder()
//     .forBrowser("firefox")
//     .setFirefoxOptions(options)
//     .build();

// driver.get("http://google.com");

// ? 1st example
// TODO Open browser, and google webpage
// const { Builder, By, Key, util } = require("selenium-webdriver");
// async function example() {
    // ? build the firefox browser, open google 
    // let driver = await new Builder().forBrowser("firefox").build();
    // await driver.get("http://google.com");
    // ?find name "q" = is question on the google page sendKeys = search word is Selenium hit ENTER or RETURN 
//     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
// }
// example();

// ? 3rd Example
// TODO below is for auto saving file types the file is an excel sheet
// TODO go to inspect to specify application/< type >
// const { Builder } = require("selenium-webdriver");
// const firefox = require("selenium-webdriver/firefox");
// const options = new firefox.Options();

// options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
// options.setPreference("browser.download.folderList", 2);
// ? set file types separate with a comma after the x-csv. x-csv is a content type
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

// const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

// driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");