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

// ? How to wait for tasks to finish - open yahoo and then google 
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

// ? Builds the selenium webdriver for us
// const { Builder } = require("selenium-webdriver");
// const firefox = require("selenium-webdriver/firefox");
// const options = new firefox.Options();

// options.setProfile("./SeleniumTest");

// const driver = new Builder()
//     .forBrowser("firefox")
//     .setFirefoxOptions(options)
//     .build();

// driver.get("http://google.com");

// ? Open browser and google and webpage
// const { Builder, By, Key, util } = require("selenium-webdriver");
// async function example() {
    // ? build the firefox browser, open google 
    // let driver = await new Builder().forBrowser("firefox").build();
    // await driver.get("http://google.com");
    // ?find name "q" = question sendKeys = search word is Selenium hit RETURN 
//     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
// }
// example();

// ? below is for auto saving file types the file is an excel sheet
// ? go to inspect to specify application/< type >
// const { Builder } = require("selenium-webdriver");
// const firefox = require("selenium-webdriver/firefox");
// const options = new firefox.Options();
// options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
// options.setPreference("browser.download.folderList", 2);
// ? set file types separate with a comma after the x-csv
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

// const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

// driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");