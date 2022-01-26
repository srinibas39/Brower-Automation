const puppeteer=require("puppeteer");

console.log("Before");
let tab;
let BrowserLaunchPromise=puppeteer.launch({headless:false,slowMo:true,defaultViewport:null,args:["--start-maximised"]}) //Chromium will Open

BrowserLaunchPromise.then((browser)=>{
    // console.log("Browser Launched");
   const tabsArrPromise=browser.pages();//returns all the current opened pages in an array.
    tabsArrPromise.then((browserPages)=>{
         tab=browserPages[0];
         let gotoPromise=tab.goto("https://www.google.com");
         return gotoPromise;
    }).then(()=>{
        console.log("Reached google from HomePage");
        let WFSpromise=tab.waitForSelector(".gLFyf.gsfi",{visible:true});
        return WFSpromise;
    }).then(()=>{
       let typePromise= tab.type(".gLFyf.gsfi","pepcoding");
       return typePromise;
    }).then(()=>{
        let enterPromise=tab.keyboard.press("Enter");
        return enterPromise;
    }).then(()=>{
        let WFSpromiseClick=tab.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
        return WFSpromiseClick;
    }).then(()=>{
          let clickPromise=tab.click("h3.LC20lb.MBeuO.DKV0Md");
          return clickPromise;
    }).then(()=>{
       console.log("Browser Automated");
    })
}).catch((error)=>{
    console.log(error);
})

console.log("After");

