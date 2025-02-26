import { test, expect} from "@playwright/test"
import { title } from "process";
test.describe('Home', () => { 

    test (" Title of the Home Page", async({page})=>{
        //Open the URL
        await page.goto("https://practice.sdetunicorns.com/");

        //Verify the Title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")

    })

    test("About Page", async({page})=>{

        await page.goto("https://practice.sdetunicorns.com/about/")
        await expect(page).toHaveTitle("About – Practice E-Commerce Site")

        //print the title on console
        console.log("Title of the Page is : " + await page.title())
    })
     
    test("Use of CSS Selector and Verify URL", async({page})=>{
        await page.goto("https://practice.sdetunicorns.com/")

        //click on Get STarted
        await page.locator('#get-started').click()

        //Verify URL
        await expect(page).
        toHaveURL("https://practice.sdetunicorns.com/#get-started")

        // Verified Code

        //print the URL
        console.log("The URL of the Page is : "+await page.url())
    
    })


    test("Use of Text Locator", async({page})=>{
        await page.goto("https://practice.sdetunicorns.com/")

        //find the Text (Element)
        const headingText = await page.locator('text = Think different. Make different.')

        //assert the text is visible
        await expect(headingText).toBeVisible()

        //print headingText
        console.log("Heading is : "+ await headingText.textContent())
    })
})
