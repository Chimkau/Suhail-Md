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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+260961334427";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_45_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWThDc3Q5RUZzbllzM0s4bU81TzJLMFZRaVpkM3pyYkxxMEtpdjExUnJ6TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwial9wYkdBeUNUWFNGOVpwNlZVZ2ZtUVwiLFxuICBcInBob25lSWRcIjogXCJmMGQwOWQ5OC04YzJkLTRhNDAtOGFiNC1mOGFmMzdkYTFjYTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMTk4LFxuICAgICAgMjAsXG4gICAgICAxMTEsXG4gICAgICAyMTIsXG4gICAgICAxMjcsXG4gICAgICAxMzAsXG4gICAgICAyMjEsXG4gICAgICA5MixcbiAgICAgIDIxOCxcbiAgICAgIDEwMCxcbiAgICAgIDEyMyxcbiAgICAgIDE5NixcbiAgICAgIDI0OSxcbiAgICAgIDYsXG4gICAgICA0NyxcbiAgICAgIDE1NCxcbiAgICAgIDIxNSxcbiAgICAgIDEzMyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDE3OCxcbiAgICAgIDg2LFxuICAgICAgODcsXG4gICAgICAxMDYsXG4gICAgICAxNjUsXG4gICAgICAxMzIsXG4gICAgICAyMzUsXG4gICAgICAxMjgsXG4gICAgICAxOTgsXG4gICAgICAyNTAsXG4gICAgICAxODQsXG4gICAgICAxNjAsXG4gICAgICAyMjAsXG4gICAgICAyNDUsXG4gICAgICA1OSxcbiAgICAgIDIzOSxcbiAgICAgIDI0MSxcbiAgICAgIDQyLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDJBTTk2TTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk2MTMzNDQyNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzAzMDcyNTAzNDIwNTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppUmpxTUhFT3IrdmJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTYvVE1tWFBpMm4rRTAvcmphUlRmSnZzRXh3UnR5N21pajZuUWo0UU9Gcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtNmtSQjdjcVB6SnBEQTA4QkZRNTFvVy9sZkM0WTFTdWtzQUIrTkk4M29TYk5nNm1vU0NmdjJKTDZFeUc1MWZLZHVUbTZhNkdFWkdlVUk2VFNySTZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaQXBOM2VkUWRCemQySDRPeG8xK0NlN3RNT0ZFektUN0N3STdjVCtHVERLdXdnN1NrQlRqSjVzN0p5YVh1UFN0VEI4SnkxblU0NWU5anRSamR2di9EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NjEzMzQ0Mjc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY4MDMwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJYOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlg4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRFAxUnBSNitaTThWMCtUbkMzeklBWDNvSUIrdkt3cDkvcnF5Ryt1dnkxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTUyNjgwMDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2Nzk3MTg4MTRcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
