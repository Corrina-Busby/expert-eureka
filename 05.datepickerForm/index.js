const {Builder, By,} = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function datepickerForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await (await driver).findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Sep 2, 2020");
        await (await driver).findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Aug 3, 2020 - Oct 1, 2020");
        await driver.findElement(By.id("submit")).click();

    } catch (error) {
        console.log(error)
    }
}

datepickerForm();