//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94769089430";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dXUm5XWFdXbUlKTFpZRFNZT0Q0Rk9id1I5emRCWXhHcnZVYWVCdHozZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFZnN2hYRVVUczlJOHdTL1M3UU42eHArclNjNW1KUVl0Z25IYXFyWVFEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SDNDY0VRTHR0bUJuempuMEVIeXAvZzNLcmlqaFZNenV6Smd6cGpUTTNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnaGdIYTJzVmp2UDJOZEtlMmQ2WVY2OVV0TmM3NXZKWXRxV1cvcSt6ZW0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LdnZJVk1xdVNmVWdrOVNVWW50cWhua2dwbktLSXJYUEFldzlaeVltWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik03dVhVbDcwUjhQWU5ZZUU2eUF4S3dueU1OOGRoQVpiZTFyRC8wMlZuVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUIwdEMvR3Z5RkFwK1c2alBFeDlLQ0RMU2IzZ3VGa1dDUzhFa3dGOEowST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHpJSHdJWmFoMTA3S2RLQ3Ztb29wcGs2UHB3eC9aNllFVTNnL3hyeEtDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CdUlDem13NkYwUW9TZ1Z4NFJvdGd0T1FuZExsQTIzZGVkZE1HcnNwOHI3Vld4ZGRFY2NBUkMwdDRnMTlNYy8ydlVBd05HS3E4MVhKY1JCN1ZtRWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiI3aEZpaVNHNWhUSW5CS2tOYzhMcnJ5SkgvOUt0SDlKQ2tWVW9ISTM4SktBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzY5MDg5NDMwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY2MDM3MzVCNzFBRjFDMjVEMDNGNzc2RkNDMzYyRDdCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNzQ0MTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllwbmE5OElUU1dlbjZackRDSDA1WHciLCJwaG9uZUlkIjoiYTllZjRmMGItMTM2NC00MzNlLWI4MjYtNGZjOGE5NzA2ZjMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGNFRJcmQyMkRGWGJTZ0ppYW5UN2FuUW55Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXem5NMUZjVWNiWjZGbHl5OEVheGV5Y0IwZTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlI5WjJBMzUiLCJtZSI6eyJpZCI6Ijk0NzY5MDg5NDMwOjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWFV4WElRNGFTZnRRWVlCaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzajRINERwWmFUb3QyM0swRDNKZWNkeDloU2lRdlAweVJFbUVwWlZXUXg4PSIsImFjY291bnRTaWduYXR1cmUiOiJnYi9HMXBPelRKMk8yeVZadVZuUWxkdDZaeVVOYndzMlMyR0QydUo3TjZsVTJzU2k4OGhUZmFHRjM1N2NVVCtuQmYzOEdmMkJFSHg2Q2N2ckloMCtCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0E5RXdySEw1L0VvTzZJdW9PY2NrdXZlODFweFZyZ011Zkd0TDhWZFNnNjVYZkQ2Vk52cHAzS015THJXL2NhZDlnRDlmRnN5b2o5blNBZGcvajJnaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2OTA4OTQzMDo1NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiSStCK0E2V1drNkxkdHl0QTl5WG5IY2ZZVW9rTHo5TWtSSmhLV1ZWa01mIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjc0NDEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVhOSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "KING_BINU-V2",
  ownername: process.env.OWNER_NAME || "< │ ᴹᴿ 𝗕 𝗜 𝗡 𝗨 🐰 💙 "",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
