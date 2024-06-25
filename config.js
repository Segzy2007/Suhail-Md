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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_43_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHZFWmo4VHhROHhPeDB0c2ZmQ0lCdG01c1NLanAwbElOemtJbEVVandwaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY2NzgwMDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4Mzg0QUU0NTVFOTY4QjhDMDQ5NUM2QTdCRDBEOTRFNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNDQ2MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY2NzgwMDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMDkwQ0NDRDE3RkM4QjdFMDZDMjA3REIwMjg2QjhEM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNDQ2MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZHV2dkNQMy1SOGVmQS1HRDJEUE1QUVwiLFxuICBcInBob25lSWRcIjogXCI5YzU0ZGI0Ni05ODIxLTQ1N2MtOTE5Ni01M2Y4NzdhY2U4OTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTc1LFxuICAgICAgMTIsXG4gICAgICAyNDQsXG4gICAgICAxNDIsXG4gICAgICAyMDQsXG4gICAgICAxOTAsXG4gICAgICAxMDQsXG4gICAgICAxMzIsXG4gICAgICA0NCxcbiAgICAgIDIxOCxcbiAgICAgIDEwNyxcbiAgICAgIDE3OSxcbiAgICAgIDk1LFxuICAgICAgMzAsXG4gICAgICAxMyxcbiAgICAgIDIzMixcbiAgICAgIDU3LFxuICAgICAgOTcsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgNjgsXG4gICAgICAyNDMsXG4gICAgICA0NyxcbiAgICAgIDEyNyxcbiAgICAgIDE0NyxcbiAgICAgIDc4LFxuICAgICAgMTgyLFxuICAgICAgMTgxLFxuICAgICAgMTMzLFxuICAgICAgMjMzLFxuICAgICAgMjQ1LFxuICAgICAgMTQwLFxuICAgICAgMTEsXG4gICAgICAyMTksXG4gICAgICA5LFxuICAgICAgMjMsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNLV0xQWUVRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY2NzgwMDY3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBeWFub2tvamkgS2l5b3Rha2FcIixcbiAgICBcImxpZFwiOiBcIjM3OTM3OTk5NzgxOTQ0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZJbnNnQ0VPeTc3TE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmcTY5czJqZFI0di9hdFd1SlNyMkh4OXZIS251NkFjcUI3U2UrZlhCTXgwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZQaWM5YytwMlpqVTk4Q21TSG45czFabkZzcHZsNUhHbUxzR2lsbFRaaTN5dExpaGdHWGhSdzdxWFNnYy9tcG0zeTV5Z3YvYjV5MjFuaGN1M0M5TEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFzb2YxbE05REpqVWhlaVljdFhIK0VmS25vZ3lVTFlZNVBsOWFFQ2R6YXIySEJ5cWRXdGsxQ2F6TXFXaGpNMGdBeHg2eFR3OUMzWjlLa3Bsd2plY0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjY3ODAwNjc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzQ0NjI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmM0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYzQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNaml2ck9UdWpmMjNIY1BJNWdtY290MGZ2ZE15N3plOXpuN1gxOVcyekU4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4ODM1ODQzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NzQxNjcyOTA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
