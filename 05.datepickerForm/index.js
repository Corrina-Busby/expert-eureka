const {Builder, By,} = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function datepickerForm() {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

datepickerForm();