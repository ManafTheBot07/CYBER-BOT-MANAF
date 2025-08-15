
module.exports.config = {
 name: "info",
 version: "1.2.6",
 hasPermssion: 0,
 credits: "Shaon Ahmed",
 description: "🥰আসসালামু আলাইকুম 🥰",
 commandCategory: "For users",
 hide:true,
 usages: "",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
 const { configPath } = global.client;
 const { ADMINBOT } = global.config;
 const { NDH } = global.config;
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
 delete require.cache[require.resolve(configPath)];
 var config = require(configPath);
 const listAdmin = ADMINBOT || config.ADMINBOT || [];
 const PREFIX = config.PREFIX;
 const namebot = config.BOTNAME;
 const { commands } = global.client;
 const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
 const dateNow = Date.now();
 const time = process.uptime(),
 hours = Math.floor(time / (60 * 60)),
 minutes = Math.floor((time % (60 * 60)) / 60),
 seconds = Math.floor(time % 60);

 var link = [
  "https://i.imgur.com/GELDDyr.jpeg"
 ];

 var i = 1;
 var msg = [];
 const moment = require("moment-timezone");
 for (const idAdmin of listAdmin) {
  if (parseInt(idAdmin)) {
   const name = await Users.getNameUser(idAdmin);
   msg.push(`${i++}/ ${name} - ${idAdmin}`);
  }
 }

 var callback = () => 
 api.sendMessage({
  body: `🍀----আসসালামু আলাইকুম----🍀

┏━━•❅•••❈•••❈•••❅•━━┓

「 ${namebot} 」

┗━━•❅•••❈•••❈•••❅•━━┛ 
______________________________

↓↓_𝗥𝗢𝗕𝗢𝗧 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢_↓↓

» 𝗣𝗿𝗲𝗳𝗶𝘅 𝘀𝘆𝘀𝘁𝗲𝗺: ${PREFIX}
» 𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗼𝘅: ${prefix}
» 𝗧𝗼𝘁𝗮𝗹 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: ${commands.size}
» 𝗣𝗶𝗻𝗴: ${Date.now() - dateNow}ms
______________________________

↓↓_𝗥𝗢𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢_↓↓

𝗡𝗔𝗠𝗘 : SH MANAF SIKDER
𝗢𝘄𝗻𝗲𝗿 𝗜𝗱 𝗹𝗶𝗻𝗸: ☞ https://www.facebook.com/profile.php?id=100086680581286
𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽: 01613760390
______________________________

----↓↓𝙍𝙤𝙗𝙤𝙩 𝙖𝙘𝙩𝙞𝙫𝙚 𝙩𝙞𝙢𝙚↓↓----
 ${hours} : ${minutes} : ${seconds} second(s)
______________________________

» 𝗧𝗢𝗧𝗔𝗟 𝗨𝗦𝗘𝗥𝗦: ${global.data.allUserID.length}
» 𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣: ${global.data.allThreadID.length}

Thanks for using 𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️
--------------------------------------------------`,
  attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"),
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));

 return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
 .pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg"))
 .on("close", () => callback()); 
}
