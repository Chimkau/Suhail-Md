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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+260773976808";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_21_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ21aNnpvQXFYMG9leEp4Sk1PV3hNZFRIaFQzZWpmaTlNV09DZXRMVkhodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieTN3MEFDWmtUVi1JbEt5S1NKQ0pjZ1wiLFxuICBcInBob25lSWRcIjogXCI4NGJkYzcwNi05YWNiLTRjNjYtYWFlYS0wNzU0YzhmMjE3N2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMjQ1LFxuICAgICAgMjI5LFxuICAgICAgMTYxLFxuICAgICAgMTkzLFxuICAgICAgMjUsXG4gICAgICAyNDgsXG4gICAgICAyOSxcbiAgICAgIDc5LFxuICAgICAgMCxcbiAgICAgIDIxMyxcbiAgICAgIDE1NixcbiAgICAgIDE5MyxcbiAgICAgIDEwOCxcbiAgICAgIDE4MixcbiAgICAgIDIxMSxcbiAgICAgIDIzMyxcbiAgICAgIDk3LFxuICAgICAgMTQyLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMjQwLFxuICAgICAgMjM4LFxuICAgICAgMjUyLFxuICAgICAgNDgsXG4gICAgICA2LFxuICAgICAgMTYxLFxuICAgICAgMTYxLFxuICAgICAgMjAsXG4gICAgICAxNSxcbiAgICAgIDExNyxcbiAgICAgIDM5LFxuICAgICAgMTY1LFxuICAgICAgMjMyLFxuICAgICAgMjI4LFxuICAgICAgOTUsXG4gICAgICA4MSxcbiAgICAgIDIzLFxuICAgICAgMjA4LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdRNkxFRjJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA3NzM5NzY4MDg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUzNTI4MDk0Mjk4MTcxOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0dSanFNSEVJdVZ6clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFNi9UTW1YUGkybitFMC9yamFSVGZKdnNFeHdSdHk3bWlqNm5RajRRT0ZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpKV0QzRDlveStlYW0xVElRUVNHdTBienhFcUhodkdkVzJtVnROZjhXOFlla0pWaFdxU2xyaUdrOS9EOUVObEZJV3VaS1BxVWQweFNycHN5NDllM0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtyYXlSVlpIbFZmcGxTRmFXU1gvZWpKZDQzL2UzOVJYUXB1YkdtZnFnTytpK016UjgwQjZyd1lIQk8rcUtxWVBBekxzWllwMlBzcFR3L1JIQlY1T0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDc3Mzk3NjgwODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTQ1Mjk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmxIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbEguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCK3UxSTVhVXBYUzkzMm90QUJVRUJRNW55MTlCQzZNc2Z3blorVCtENGZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTI2ODAwOTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NDQ1ODY1MzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʷᵖ✘ɌɆȺⱣɆɌ™♪",
  ownername:process.env.OWNER_NAME|| "INNOCENT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "INNOCENT"  ).toUpperCase(),



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
