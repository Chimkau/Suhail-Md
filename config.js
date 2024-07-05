const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB||;
global.gurl  =process.env.GURL  || ;
global.website=process.env.GURL || " ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+260974151845";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_41_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICAzMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlFOMXBCa2MyVXVhSHRFSFFRQ0Q0ZzY3bjBtM3IwVTd1eHBEa1g4ckpNRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmFWY05pS2RTSG1jdWR5bGxjV2djZ1wiLFxuICBcInBob25lSWRcIjogXCIxYWE4OWVjYi0zZTQ5LTRmNGEtYWRlYy04YmRmNGJlOTgyYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTQ0LFxuICAgICAgMTMyLFxuICAgICAgMjMyLFxuICAgICAgMjUxLFxuICAgICAgMjM0LFxuICAgICAgOTksXG4gICAgICA3OSxcbiAgICAgIDE1NyxcbiAgICAgIDgxLFxuICAgICAgOTgsXG4gICAgICAxNDYsXG4gICAgICA4OSxcbiAgICAgIDIsXG4gICAgICAyMTksXG4gICAgICAxNTAsXG4gICAgICAyMCxcbiAgICAgIDI1LFxuICAgICAgMTM1LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMjI5LFxuICAgICAgMTEwLFxuICAgICAgNTgsXG4gICAgICA0OCxcbiAgICAgIDkxLFxuICAgICAgNzAsXG4gICAgICA5NixcbiAgICAgIDc5LFxuICAgICAgMTI5LFxuICAgICAgNDAsXG4gICAgICAxODYsXG4gICAgICA0LFxuICAgICAgNSxcbiAgICAgIDEyMCxcbiAgICAgIDEwNSxcbiAgICAgIDE0MyxcbiAgICAgIDQyLFxuICAgICAgMTMzLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNYRjVBR1lTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA5NzQxNTE4NDU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODcxODQwNzgwNDEyNTU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU1JqcU1IRU9iUW9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkU2L1RNbVhQaTJuK0UwL3JqYVJUZkp2c0V4d1J0eTdtaWo2blFqNFFPRnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia1A5RVkzTHBmNHNDSkkweEF5L0JoYmtJMndrd1QwOENJNytVNTdTNkdxMXBYWFUyNzJHU2ttWXpOb2E1VmNCSlppS1NWcjVybGNHYzlKTVN6d3J0REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjg2cWlmUElCM3ovSUlld092UFBCMnN2K2dPdlUxZjc0TTVXWkNiOEM3emFHcXcrcVErVis2dDd6eWRQb3NJdnV0R2N3NXVoKzhudFNieUE3S3dWamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTc0MTUxODQ1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMTU2NTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʷᵖ✘ɌɆȺⱣɆɌ™♪",
  ownername:process.env.OWNER_NAME|| "CHI-MAKU",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "REAPER"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
