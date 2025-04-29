const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_01_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFLdVlDaGU0RXB4NlVUZSs3aU9ydC9sL3FwWGxoZUdKOGpNWkpoSUJGUU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxoVlFuVldDUVMtNjZnLUdPRG5jaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjA0NWQ4MmYtNDQ3Yy00NzJhLThmNjgtZDY5MzA4NWFkMzAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDQ2LFxuICAgICAgMTYsXG4gICAgICAzNyxcbiAgICAgIDI2LFxuICAgICAgMzksXG4gICAgICAxNDUsXG4gICAgICA4NyxcbiAgICAgIDIwNCxcbiAgICAgIDk5LFxuICAgICAgMTYsXG4gICAgICAyOSxcbiAgICAgIDIzMCxcbiAgICAgIDExMSxcbiAgICAgIDE3OCxcbiAgICAgIDM0LFxuICAgICAgNyxcbiAgICAgIDE1OCxcbiAgICAgIDIzOSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDEyMSxcbiAgICAgIDQzLFxuICAgICAgMjI3LFxuICAgICAgNzgsXG4gICAgICAxNjYsXG4gICAgICAyNTEsXG4gICAgICA5NCxcbiAgICAgIDg4LFxuICAgICAgODIsXG4gICAgICAxMjIsXG4gICAgICAyMzUsXG4gICAgICAyNCxcbiAgICAgIDE3OSxcbiAgICAgIDQ1LFxuICAgICAgNDUsXG4gICAgICAxMDQsXG4gICAgICAyNDMsXG4gICAgICAxODEsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBOFdMS1hBWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTA3NTg5NjQ4OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjA0Njg1MzkwMDc4OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BENWpYa1F0WmpGd0FZWUJ5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWFGWVlpLzBVK3ZMNWZSR1JnaURsc3FTMlBZN1VlT0lJR0FOc280TklYcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuZ1Y4TGxJL25LTkdPaEViUHRFdVlUeTM3NnF1QnhTcWYzUG8rRXJLVFp2M2gwVVR3WHY5YXJrMVFleHIrK2FoZ3BoZGVxaWdycWdtbmR4a21jSUdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCd1ptTm1pYzd0VmlvZUtDZXhxRVBWRGJVUXl6ZHYwSzY0ckpNVzlBVm9zSlpSTzlRc3I1UGUzN1dsVEkvVCswRFNQMThaMm02QllRdFRYdXZLVWFndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDc1ODk2NDg6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTk2NDA4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJhdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmF1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUDdUbi9OZm5IcndWWm9oMTNkWVpJQUo2VWdiSERnSkdMZXJudUF2VjZXQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTM5ODM5ODQsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDU5NjQwMjEwOTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
