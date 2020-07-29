// ? Builds the selenium webdriver for us
const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setProfile("./SeleniumTest");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://google.com");






// ? below is for auto saving file types the file is a excel sheet
// ? go to inspect to specify application/< type >
// options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
// options.setPreference("browser.download.folderList", 2);
// ? set file types separate with a comma after the x-csv
// options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

// const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

// driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");