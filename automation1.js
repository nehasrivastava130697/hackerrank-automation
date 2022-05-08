//Requiring puppeteer package and saving it in a variable called pup
let pup = require("puppeteer");
 let gpage;

 //using launch function of puppeteer to launch a browser (this function returns a promise)
 pup
.launch({headless:false})//returns a promise
//this then attaches a function to above promise of opening a browser
.then(function(browser){
    //in this function we get a browser object in the argument 
    //using that object we are opening a new page by calling newPage method on that object.(this again gives us a promise. All puppeteer functions/methods gives us apromise.)
    return browser.newPage();
})
//This then attaches a function to the promise of opening a new page
.then(function(page)
{//inside this function we get a page object in the argument 
    //we are saving that object globally in a variable called gPage
    gpage = page;
    //calling goto function on page to go to github/topics(gives a promise)
    return page.goto("https://github.com/topics");
})
//Attaches a function to promise of opening that it will take a screen shot and save it with the name of ss.png
.then(function(){
    return gpage.screenshot({path:"ss.png"});

})
.catch(function (err)
{
    console.log(err);
});