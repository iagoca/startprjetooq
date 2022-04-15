 "use strict";
 const fs = require('fs')
 const cron = require('node-cron')
 const uptime = process.uptime();
 const { exec } = require('child_process')
 const axios = require("axios")
 const Exif = require('../sticker/exif.js');
 const util = require("util");
 const exif = new Exif();
 const moment = require("moment-timezone")
 const speed = require('performance-now');
 const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss | DD/MM')
 const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss | DD/MM')       

  
 const ffmpeg = require('fluent-ffmpeg')
 const {
getContentType, downloadContentFromMessage } = require('@adiwajshing/baileys');
 const { 
  color, 
  runtime,
  fetchJson, 
  getRandom 
 } = require('../function.js')
 const { 
  yta, 
  ytv, 
  searchResult 
 } = require('../scrape/ytdl')
 const {
   ramalan_jodoh, 
   tafsir_mimpi,
   nomer_hoki,
   ramalan_cinta,
   suami_istri,
   ramalan_jodoh_bali,
   arti_nama,
   kecocokan_nama,
   kecocokan_nama_pasangan,
   tanggal_jadian_pernikahan,
   sifat_usaha_bisnis,
   pekerjaan_weton_lahir,
   rejeki_hoki_weton,
   ramalan_nasib,
   cek_potensi_penyakit,
   perhitungan_feng_shui,
   arti_kartu_tarot,
   petung_hari_baik,
   hari_sangar_taliwangke,
   primbon_hari_naas,
   rahasia_naga_hari,
   primbon_arah_rejeki,
   ramalan_peruntungan,
   weton_jawa,
   sifat_karakter_tanggal_lahir,
   potensi_keberuntungan,
   primbon_memancing_ikan,
   masa_subur,
   zodiak,
   shio
  } = require('../scrape/primbon') 
 const { detikNews } = require('../scrape/detik') 
 const { textpro } = require('../scrape/textpro') 
 const { wallpaperaccess } = require('../scrape/wallpaperaccess') 
 const { TiktokDownloader } = require('../scrape/tiktokdl') 
 const Options = require('../settings/options.js')
 const afk = require("../../storage/user/afk.js");
 let _afk = JSON.parse(fs.readFileSync('./storage/user/afk.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let textproo = Options.textpro
 let thumb = fs.readFileSync('./storage/image/thumb.jpg') 
 let OwnerNumber = Options.info.owner 
 module.exports = async (
    sock,
    m,
    store   
    ) => { 
   
   try{            
   const from = m.key.remoteJid
   const prefa = ['/','!','.','*','#','$']
    
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()   
   const budy = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()   
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'	  

    

    
   const chatmessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
   const ordermessage = (m.xtype === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message[m.xtype].caption.startsWith(prefix) ? m.message[m.xtype].caption : (m.xtype == 'videoMessage') && m.message[m.xtype].caption.startsWith(prefix) ? m.message[m.xtype].caption : (m.xtype == 'extendedTextMessage') && m.message[m.xtype].text.startsWith(prefix) ? m.message[m.xtype].text : (m.xtype == 'listResponseMessage') && m.message[m.xtype].singleSelectReply.selectedRowId ? m.message[m.xtype].singleSelectReply.selectedRowId : (m.xtype == 'buttonsResponseMessage') && m.message[m.xtype].selectedButtonId ? m.message[m.xtype].selectedButtonId : ''
   const args = ordermessage.trim().split(/ +/).slice(1)
    
      
   const order = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
     
   const q = args.join(' ')       
   const isCmd = ordermessage.startsWith(prefix)   
   const isGroup = from.endsWith('@g.us') 
   const itulho = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid 
   const isOwner = OwnerNumber.includes(itulho)  
   const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net'    
   const groupMetdata = isGroup ? await sock.groupMetadata(from) : ''
   const groupMembers = isGroup ? groupMetdata.participants : ''
   const groupName = isGroup ? await groupMetdata.subject : ''   
   const groupAdmins = isGroup ? m.getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(m.sender)
   const fromMe = m.key.fromMe
   const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
   owner: ["15874108061@s.whatsapp.net"]
   const random = ('./lib/random')
   const type = Object.keys(m.message)[0]
   const ytb = 'https://youtube.com/channel/UCONoMCw8a2weLcUSHNRwP2g'
   const dono99 = ('./lib/dono.jpg')
   const pushname = m.pushName ? m.pushName : sender[0].split('@')[0]
   const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
   const _antivirtex = JSON.parse(fs.readFileSync('./groups/antivirtex.json'))
   const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
   const antilink = JSON.parse(fs.readFileSync('./groups/antilink.json'));
   const isAntiLink = isGroup ? antilink.includes(from) : false
   const timestamp = speed();
   const latensi = speed() - timestamp
   const keyale = "key-luiz-claudio-ofc"
   const alekey = 'ale652'
   const mmmesagebot = `👋🏻Olá @${sender.split('@')[0]} me chamo NT DRAGON-MD,  sou um bot->(robô) estou aqui para lhe entreter e ajudar em algumas tarefas, para ver meus comandos mande❗ ${prefix}menu ou ${prefix}m ❗. 😁💙\n\n\n[Se divirta com meus comandos !]`
   const path = require("path")
   const { tmpdir } = require("os")
   const Crypto = require("crypto")
   const ff = require('fluent-ffmpeg')
   const premium = JSON.parse(fs.readFileSync('./datab/premium.json'));
   const isPremium = premium.includes(sender)
   premium: '[❗] Ôpa esse comando e apenas para quem comprou o Premium!\nCusta R$5,00\n\n caso tenha interesse fale com o iago!\n\nwa.me/+15874108061'
   const obgavalicao = `Obrigado pela avaliação ${m.pushName} !`


//anti trava 
if (CMD.length > 1000) {
if (m.key.fromMe) return
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
setTimeout( () => {
reply ('「TRAVA?」\n\nVoce enviou um tipo de trava, por isso sera banido do grupo :('.repeat(1))
}, 20)
setTimeout( () => {
reply ('❄️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🔥'.repeat(300))
}, 1000)
console.log(color('\n\n[TRAVA]', 'red'), color('trava indentificada!\n\n', 'yellow'))
setTimeout( () => {
sock.groupParticipantsUpdate(from, [sender], "remove")
}, 1050)
}
//fim do antitrava 

//Início do antilink

const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'}).then((res) => {
resolve(res.data)
}).catch(reject);
});


const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

if(isUrl(CMD) && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
if (m.key.fromMe) return
if (CMD.match(`await sock.groupInviteCode(from)`)) return reply ('Link do grupo ok')
setTimeout( () => {
reply('Link detectado, porém usuário é admin')
}, 20)
}

if(isUrl(CMD) && isAntiLink && isOwner) {
setTimeout( () => {
reply('Opa iago fique a vontade!🤵🏻')
}, 20)
}

if(isUrl(CMD) && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
if (m.key.fromMe) return
setTimeout( () => {
reply('Link detectado, punindo usuário...')
}, 25)
sock.groupParticipantsUpdate(from, [sender], "remove")
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

//fim do antilink com essecao do dono!!

//Algumas function misturadas
             const sendFileFromUrl = async (from, url, caption, m, men) => {
                let mime = '';
                let res = await axios.head(url)
                mime = res.headers['content-type']
                if (mime.split("/")[1] === "gif") {
                    return sock.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                    }
                let type = mime.split("/")[0]+"Message"
                if(mime.split("/")[0] === "image"){
                    return sock.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
                } else if(mime.split("/")[0] === "video"){
                    return sock.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
                } else if(mime.split("/")[0] === "audio"){
                    return sock.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m})
                } else {
                    return sock.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m})
            }
        }
        
    sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })       
     
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), contextInfo: {"mentionedJid": memberr}}) : sock.sendMessage(from, {text: teks.trim(), contextInfo: {"mentionedJid": memberr}}, {quoted: m})
}           

const sendBtext = async (id, text1, desc1, but = [], vr) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
sock.sendMessage(id, buttonMessage, {quoted: m})
}

await sock.sendPresenceUpdate('available', from);
await sock.sendReadReceipt(from, m.key.participant, [m.key.id]);

const sendMess = (hehe, ytb) => {
sock.sendMessage(hehe, {text: ytb})
}

const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

if ((CMD === `bot`)){      
sock.sendMessage(from, {text: `${mmmesagebot}`})
}

if ((CMD === `Bot`)){      
sock.sendMessage(from, {text: `${mmmesagebot}`})
}

//anti ligação//
 const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

sock.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
await sock.sendMessage(callerId, {text: `❗LIGAÇÃO = BLOCK❗\n\n Caso foi sem querer entre em contato com o iago!!!\n\n iago: wa.me/+15874108061`})
await sleep(8000)
await sock.updateBlockStatus(callerId, "block")
}
})

//anti ligação final!//

    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    async function imageToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

if (CMD.includes("adivinha meu celular") || (CMD.includes("Adivinha meu celular") || (CMD.includes("Adivinha Meu celular") || (CMD.includes("Adivinha Meu Celular") || (CMD.includes("bot qual meu celular")))) )){
var adivinha = m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
await sock.sendMessage(from, {text: adivinha}, {quoted: m})
}

if (CMD.includes("nt dragon") || (CMD.includes("NT DRAGON") || (CMD.includes("NT DRAGON-MD") || (CMD.includes("Nt Dragon") || (CMD.includes("Nt Dragon-md")))) )){
if (m.key.fromMe) return
var adivinha = ` Olá ${m.pushName}, mero humano mortal🙃\n\nPara ver meus comandos mande ${prefix}menu 🤟🏼`
await sock.sendMessage(from, {text: adivinha}, {quoted: m})
}

if (isOwner) {
prema = `Criador🤭`
} else {
var prema = 'Usuario😐'
}

//fim das misturadas

//auto sticker de foto !   
   if (m.xtype == 'imageMessage') {
   if (m.key.fromMe) return
    var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
    let ran = '666.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${ran} -o ./${ran}`, async (error) => {
      console.log('⏐ Enviando figurinha automática!\n⏐')
       sock.sendMessage(
          from, 
          { 
         sticker: fs.readFileSync(`./${ran}`) 
         })
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)
	 
    } 
    
//fim do auto sticker
   
   
   function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }


   
    let LETT = 1;    
    let MenuList = `• ${Options.info.botName}\n\n`    
    MenuList += ` 👋🏻 Ôpa ${m.pushName} ${m.sayingtime + m.timoji}\n`
    MenuList += ` ⏳ Data/Hora: ${time}\n`
    MenuList += ` 👤 STATUS: ${prema}\n`
    MenuList += ` 🔹 Verção: ${Options.info.version}\n`
    MenuList += ` 💠 Tipo: Baileys-md\n\n`
    MenuList += `• MENU COMPLETO\n\n`
    MenuList += `${LETT++}. ${prefix}menu\n`
    MenuList += `${LETT++}. ${prefix}tempativo\n\n`
    MenuList += `⬇️DOWNLOAD\n`
    MenuList += `${LETT++}. ${prefix}play texto\n`
    MenuList += `${LETT++}. ${prefix}tiktokvideo link\n`
    MenuList += `${LETT++}. ${prefix}tiktokaudio link\n`
    MenuList += `${LETT++}. ${prefix}youtubemp4 link\n`
    MenuList += `${LETT++}. ${prefix}youtubemp3 link\n\n`
    MenuList += `🖨️FIGURINHAS\n`
    MenuList += `${LETT++}. ${prefix}sticker\n`
    MenuList += `${LETT++}. ${prefix}stiker\n`
    MenuList += `${LETT++}. ${prefix}s\n`
    MenuList += `${LETT++}. ${prefix}stickergif\n`
    MenuList += `${LETT++}. ${prefix}sgif\n`
    MenuList += `${LETT++}. ${prefix}stikergif\n`
    MenuList += `${LETT++}. ${prefix}attp\n`
    MenuList += `${LETT++}. ${prefix}figualeatoria\n`
    MenuList += `${LETT++}. ${prefix}stikgif\n\n`
    MenuList += `🎮JOGOS\n`
    MenuList += `${LETT++}. ${prefix}pau\n`
    MenuList += `${LETT++}. ${prefix}casal\n`
    MenuList += `${LETT++}. ${prefix}shipo\n`
    MenuList += `${LETT++}. ${prefix}dogolpe\n`
    MenuList += `${LETT++}. ${prefix}preto\n`
    MenuList += `${LETT++}. ${prefix}gay\n`
    MenuList += `${LETT++}. ${prefix}feio\n`
    MenuList += `${LETT++}. ${prefix}lixo\n`
    MenuList += `${LETT++}. ${prefix}burro\n`
    MenuList += `${LETT++}. ${prefix}gordo\n`
    MenuList += `${LETT++}. ${prefix}pobre\n`
    MenuList += `${LETT++}. ${prefix}corno\n`
    MenuList += `${LETT++}. ${prefix}corno1 @\n`
    MenuList += `${LETT++}. ${prefix}bonito\n`
    MenuList += `${LETT++}. ${prefix}macaco\n`
    MenuList += `${LETT++}. ${prefix}gostoso\n`
    MenuList += `${LETT++}. ${prefix}qrcode\n`
    MenuList += `${LETT++}. ${prefix}nick\n`
    MenuList += `${LETT++}. ${prefix}nickff\n`
    MenuList += `${LETT++}. ${prefix}bct\n`
    MenuList += `${LETT++}. ${prefix}rankbct\n`
    MenuList += `${LETT++}. ${prefix}rankpau\n`
    MenuList += `${LETT++}. ${prefix}correio\n`    
    MenuList += `${LETT++}. ${prefix}gerarcpf\n`
    MenuList += `${LETT++}. ${prefix}mechame\n\n`
    MenuList += `🏢CONFIGURAÇÕES DE GRUPO\n`
    MenuList += `${LETT++}. ${prefix}add\n`
    MenuList += `${LETT++}. ${prefix}delete\n`
    MenuList += `${LETT++}. ${prefix}apaga\n\n`
    MenuList += `${LETT++}. ${prefix}link\n`
    MenuList += `${LETT++}. ${prefix}gp\n`
    MenuList += `${LETT++}. ${prefix}bcadm\n`
    MenuList += `${LETT++}. ${prefix}marcar\n`
    MenuList += `${LETT++}. ${prefix}antilink\n`    
    MenuList += `${LETT++}. ${prefix}antitrava\n`
    MenuList += `${LETT++}. ${prefix}reviver\n`
    MenuList += `${LETT++}. ${prefix}kick\n`
    MenuList += `${LETT++}. ${prefix}promote\n`
    MenuList += `${LETT++}. ${prefix}demote\n\n`
    MenuList += `🏞️RPG\n` 
    MenuList += `${LETT++}. ${prefix}caça\n`
    MenuList += `${LETT++}. ${prefix}pescar\n`
    MenuList += `${LETT++}. ${prefix}Minerar\n`
    MenuList += `${LETT++}. ${prefix}curar\n\n`
    MenuList += `🖼️️️FOTO\n` 
    MenuList += `${LETT++}. ${prefix}metadinha\n`
    MenuList += `${LETT++}. ${prefix}placaloli\n`
    MenuList += `${LETT++}. ${prefix}anal\n`
    MenuList += `${LETT++}. ${prefix}boobs\n`
    MenuList += `${LETT++}. ${prefix}cumsluts\n`
    MenuList += `${LETT++}. ${prefix}classic\n`
    MenuList += `${LETT++}. ${prefix}bj\n`
    MenuList += `${LETT++}. ${prefix}kuni\n`
    MenuList += `${LETT++}. ${prefix}pussy\n`
    MenuList += `${LETT++}. ${prefix}lesbian\n`
    MenuList += `${LETT++}. ${prefix}sci_fi text\n`
    MenuList += `${LETT++}. ${prefix}hentai\n`
    MenuList += `${LETT++}. ${prefix}hentaigif\n`
    MenuList += `${LETT++}. ${prefix}wallpaperaccess\n`
    MenuList += `${LETT++}. ${prefix}blackpink\n`
    MenuList += `${LETT++}. ${prefix}lightglow\n`
    MenuList += `${LETT++}. ${prefix}glass\n`
    MenuList += `${LETT++}. ${prefix}hoorror_blood\n`
    MenuList += `${LETT++}. ${prefix}sand\n`
    MenuList += `${LETT++}. ${prefix}sketch\n`
    MenuList += `${LETT++}. ${prefix}magma\n`
    MenuList += `${LETT++}. ${prefix}batman\n`
    MenuList += `${LETT++}. ${prefix}demon\n`
    MenuList += `${LETT++}. ${prefix}sci_fi\n`
    MenuList += `${LETT++}. ${prefix}ice\n`
    MenuList += `${LETT++}. ${prefix}sea_metal\n`
    MenuList += `${LETT++}. ${prefix}skeleton\n`
    MenuList += `${LETT++}. ${prefix}transformer\n`
    MenuList += `${LETT++}. ${prefix}warning\n`
    MenuList += `${LETT++}. ${prefix}denim\n`
    MenuList += `${LETT++}. ${prefix}waifu\n`
    MenuList += `${LETT++}. ${prefix}neko\n`    
    MenuList += `${LETT++}. ${prefix}awoo\n`
    MenuList += `${LETT++}. ${prefix}megumin\n`
    MenuList += `${LETT++}. ${prefix}shinobu\n\n`
    MenuList += `🤵🏻MENU DO IAGO\n` 
    MenuList += `${LETT++}. ${prefix}08\n`
    MenuList += `${LETT++}. ${prefix}07\n`
    MenuList += `${LETT++}. ${prefix}addprem\n`
    MenuList += `${LETT++}. ${prefix}dellprem\n`
    MenuList += `${LETT++}. ${prefix}block\n`
    MenuList += `${LETT++}. ${prefix}unblock\n`
    MenuList += `${LETT++}. ${prefix}kick2\n`
    MenuList += `${LETT++}. ${prefix}reviver\n`
    MenuList += `${LETT++}. ${prefix}add\n`
    MenuList += `${LETT++}. ${prefix}tempban\n`
    MenuList += `${LETT++}. ${prefix}Sair\n\n`
    MenuList += `👑PREMIUM\n` 
    MenuList += `${LETT++}. ${prefix}infinito limit (numero)\n\n`
    MenuList += `ℹ️INFO\n` 
    MenuList += `${LETT++}. ${prefix}owner\n`
    MenuList += `${LETT++}. ${prefix}limituser\n`
    MenuList += `${LETT++}. ${prefix}grupos\n`
    MenuList += `${LETT++}. ${prefix}tempoativo\n` 
    MenuList += `${LETT++}. ${prefix}ping\n`       
    MenuList += `${LETT++}. ${prefix}perfil\n`
    MenuList += `${LETT++}. ${prefix}off texto\n`
    MenuList += `${LETT++}. ${prefix}leaderboard\n\n`
    MenuList += `🛒TROCA E COMPRA 🛒\n` 
    MenuList += `${LETT++}. ${prefix}troca peixe/elefante/ovelha/ferro etc.. quantos\n`
    MenuList += `${LETT++}. ${prefix}compra pocao/limit/isca quantos\n\n\n\n`
    MenuList += ` 👋🏻 Olá ${m.pushName} Alguma ideia pro bot ? use .sugestao e seu texto na frente e estarei analisando , se for possivel sera adicionado em breve!\n`
 
     
   //Participant Mention
   const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
   mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : []    
   const reply = async (teks) => {

   sock.sendMessage(from, 
        { text: teks, mentions: [m.sender] },
        { quoted : m })  
    }      
 
   let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `Thunder-Multi`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}               
    
   
   
   //function Afk
   const isAfkOn = afk.checkAfkUser(m.sender, _afk)    
     
   if (isGroup) {	
    for (let x of mentionUser) {
    if (afk.checkAfkUser(x, _afk) && !isCmd) {
    const getId = afk.getAfkId(x, _afk)
    const getReason = afk.getAfkReason(getId, _afk)
    const sejak = afk.getAfkSejak(getId, _afk) 
    const cptl = `「 OFF MODE 」\n\n🤧Essa pessoa esta off por favor não pertube  : ${getReason}\nDesde : ${sejak}`
    if (m.key.fromMe){ return }
    reply(cptl)
    }
   }
   
   if (afk.checkAfkUser(m.sender, _afk) && !isCmd) {
    const pep = `*@${m.sender.split("@")[0]} Voutou do off!\n\nNo decorrer : ${clockString(new Date - afk.getAfkTime(m.sender, _afk))}`
    reply(pep)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./storage/user/afk.json', JSON.stringify(_afk))
    } 
   }
   
   //function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('../../storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('../../storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('../../storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('../../storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('../../storage/user/buruan.js')
   let DarahAwal =  Options.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isPeixe = getIkan(m.sender)
   const isGalinha = getAyam(m.sender)
   const isCoelho = getKelinci(m.sender)
   const isOvelha = getDomba(m.sender)
   const isVaca = getSapi(m.sender)
   const isElefante = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isFerro = getBesi(m.sender)
   const isOuro = getEmas(m.sender)
   const isEsmeralda = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']     
   cron.schedule('0 0 * * *', () => {
     const reset = []
     _darahOrg = reset
     console.log('Darah di reset')
     fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
     console.log('Sucesso!')
     }, 
     {
      scheduled: true,
      timezone: 'America/Sao_Paulo'
     }
   )  
      
      
      if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`)) {
       
        sock.sendMessage(from, 
        { text: 'Waalaikumsalam' }, 
        { quoted : m })  

       }    
    if (chatmessage.includes(`kontol`) || chatmessage.includes(`Kontol`)){
       sock.sendMessage(from, 
        { text: '🗿' }, 
        { quoted : m })  

       } 
       
    if (chatmessage.startsWith("> ") && isOwner) {
	   console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
		const ev = (val) => {
        var pekok = JSON.stringify(val, null, 2)
        var nyir = util.format(pekok)
        if (pekok === undefined) {
        nyir = util.format(val)
}
        return reply(nyir)
}
        try {
        reply(util.format(eval(`;(async () => { ${chatmessage.slice(2)} })()`)))
        } catch (e) {
        reply(util.format(e))
        }
	    } 
	   else 
	    if (chatmessage.startsWith("$ ") && isOwner) {
        console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEC\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
        exec(chatmessage.slice(2), (err, stdout) => {
	    if (err) return reply(`${err}`)
	    if (stdout) reply(`${stdout}`)
	    })
        } 
        else 
        if (chatmessage.startsWith("=> ") && isOwner) {
	    console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
	    try {
	    let vul =  eval(chatmessage.slice(2))
	    if (typeof vul !== 'string') vul = require("util").inspect(vul)
		reply(`${vul}`)
        } catch (err) {
		reply(`${err}`)
	   }
     }  
if (!isGroup && !m.key.fromMe && isCmd) console.log( '⏐⠀╭❑➤──━── ', color('💠️𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐕💠️','white'), '──━──➤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 :','purple'),color(order,'cyan'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'), color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➤──━── ⊱⊰ ──━──➤\n⏐`)
if (!isGroup && !m.key.fromMe && !isCmd) console.log( '⏐⠀╭❑➤──━── ', color('❄️𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐕❄️','white'), '◅⏤⏤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑇𝐼𝑃𝑂 :','purple'),color('Mensagem','green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'), color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➤──━── ⊱⊰ ──━──➤\n⏐`)	
if (isCmd && !m.key.fromMe && isGroup) console.log( '⏐⠀╭❑➤──━── ', color('💠𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎💠','white'), '◅⏤⏤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝐺𝑅𝑈𝑃𝑂 :','purple'), color(groupName,'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 :','purple'),color(order,'cyan'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'),color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➤──━── ⊱⊰ ──━──➤\n⏐`)	
if (!isCmd && !m.key.fromMe && isGroup) console.log( '⏐⠀╭❑➤──━──', color('❄️𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎❄️','white'), '◅⏤⏤','\n⏐','⏐','\n⏐','⏐',color('❱ 𝐺𝑅𝑈𝑃𝑂 :','purple'), color(groupName,'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝐼𝐶𝐾 :','purple'),color(m.pushName,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 =','red'),color(latensi.toFixed(4),'red'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑁𝑈𝑀𝐸𝑅𝑂 :','purple'),color(sender.split('@')[0],'green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐿𝐼𝑀𝐼𝑇𝐸 :','purple'),color(getLimit(m.sender) ? getLimit(m.sender):'❗','white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑆𝑇𝐴𝑇𝑈𝑆 :','purple'),color(prema,'white'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝑇𝐼𝑃𝑂 :','purple'),color('Mensagem ','green'),'\n⏐','⏐','\n⏐','⏐',color('❱ 𝐻𝑂𝑅𝐴𝑅𝐼𝑂 :','purple'),color(hr,'blue'),'\n⏐','⏐','\n⏐',`╰❑➤──━── ⊱⊰ ──━──➤\n⏐`)


 switch (order) {
   case 'reviver': case 'add':{
   if (!isGroup) return reply('Somente em grupo')
   if (!isOwner) return reply('❗Comando privado pro Iago pelo risco do bot levar ban no numero❗')
   if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
   if (args[1]){
    let number = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    sock.groupParticipantsUpdate(from, [number], "add")
   } 
  else 
   {
    sock.groupParticipantsUpdate(from, mentionUser, "add")
   }
   }
  break
  case 'kick':{
   if (!isGroup) return reply('Somente em grupo')
   if (!isGroupAdmins) return reply('Você não e adm não tem minha permissão ')
   if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
   reply('‼️Removendo o corno(a)‼️')
   console.log(mentionUser)
   setTimeout( () => {
   sock.groupParticipantsUpdate(from, mentionUser, "remove")
    }, 2500)
   }
  break
  case 'kick2':{
   if (!isGroup) return reply('Somente em grupo')
   if (!isOwner) return reply ('💠Somente o iago !💠')
   if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
   reply('‼️Removendo o corno(a)‼️')
   console.log(mentionUser)
   setTimeout( () => {
   sock.groupParticipantsUpdate(from, mentionUser, "remove")
    }, 2500)
   }
  break
  case 'limituser':
{      
   let txt = `「 LIMITE DOS USUÁRIOS 」\n\n`
     for (let i of _limit){
     txt += `➸ ID : @${i.id.split("@")[0]}\n➸ Limit : ${i.limit}\n\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 Os melhores 」\n\n`
     for (let i of _buruan){
     txt += `➸ ID : ${i.id}\n`
     txt += `🐟Peixe : ${i.ikan}\n`
     txt += `🐔Galinha : ${i.ayam}\n`
     txt += `🐇Coelho : ${i.kelinci}\n`
     txt += `🐑Ovelha : ${i.domba}\n`
     txt += `🐄Vaca : ${i.sapi}\n`
     txt += `🐘Elefante : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'minerar':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply('Você está exausto!, tente curar usando pocao') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,5,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ RESULTADO DA MINERAÇÃO ]\nFerro : ${besinya}\nOuro : ${emasnya}\nEsmeralda : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Minerar⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Iniciando mineraca💎`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi

            

case 'antitrava':
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
if (args.length < 1) return reply('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: antitrava on');
if (args[0] === 'on') {
if (isAntiVirtex) return reply("O antitrava já está ativado.");
_antivirtex.push(from)
fs.writeFileSync('./groups/antivirtex.json', JSON.stringify(_antivirtex))
sock.sendMessage(from, {text: `foi ativado`, quoted: m});
} else if (args[0] === 'off') {
let position = _antivirtex.indexOf(_antivirtex.find((x) => x === from))
if (position === -1) return reply(`${order} não estava ativo antes`)
_antivirtex.splice(position, 1)
fs.writeFileSync('./groups/antivirtex.json', JSON.stringify(_antivirtex))
sock.sendMessage(from, {text: `foi desativado`, quoted: m});
} 
break

case 'antilink':
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
if (args.length < 1) return reply('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: antilink on');
if (args[0] === 'on') {
if (isAntiLink) return reply("O antilink já está ativado.");
antilink.push(from)
fs.writeFileSync('./groups/antilink.json', JSON.stringify(antilink))
sock.sendMessage(from, {text: `foi ativado`, quoted: m});
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return reply(`${order} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./groups/antilink.json', JSON.stringify(antilink))
sock.sendMessage(from, {text: `foi desativado`, quoted: m});
} 
break



case 'correio':
var txt = chatmessage.slice(9)
var txtt = args.join(" ")
var txt1 = txt.split("/")[0];
var txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("@")) return reply('So o número sem @ pfvr')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Eae cade o pix de 50 que tu ta me devendo?`)
reply('Se você fez tudo certo, logo será entregue!, não pego número fake! ')
var bla = 
`╭┄━┄━┄━┄━┄━┄━┄━┄━┄╮
┞┧ 📧📧📧📧📧📧📧📧📧📧
┞┧
┞┧👤Correio de ${pushname}. 
┞┧
┞┧
┞┧📞Renviar: ${sender.split('@')[0]} 
┞┧
┞┧
┞┧🔗Link: wa.me/${sender.split('@')[0]} 
┞┧
┞┧
┞┧
┞┧
┞┧💬: ${txt2}
┞┧
┞┧
┞┧📧📧📧📧📧📧📧📧📧📧
╰┄━┄━┄━┄━┄━┄━┄━┄━┄╮`
sock.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break
 case 'compra': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Mau beli apa?\n*Berikut listnya*\n> pocao\n> umpan\n> limit')
 var anu = args[1]
  if (args[0] === 'pocao'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Ex: ${prefix + order} pocao 2\n 1 igual = 100`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Compra feita ✔️\nRestante de dinheiro : ${getMonay(m.sender)}\nSuas poções: ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'isca'){
  let noh = 500 * anu
 if (!args[1]) return reply(`Ex : ${prefix + order} umpan 2\n 1 igual = 50`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Compra feita ✔️\nRestante de dinheiro : ${getMonay(m.sender)}\nSuas riscas: ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 50000 * anu
 if (!args[1]) return reply(`Ex : ${prefix + order} limit 2\n\n 1 custa = 50000 dinheiro`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Compra feita ✔️\nRestante de dinheiro : ${getMonay(m.sender)}\nSeu limit : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Formato incorreto!") }
 }
 break
 case 'troca': case 'jual':{//BY LORD RIFZA
 if (!q) return  reply(`O que você quer trocar??\nA lista das caças/minério que vc pode troca\n> Peixe\n> Galinha\n> Coelho\n> Ovelha\n> Vaca\n> Elefante\n> Ferro\n> Ouro\n> Esmeralda`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'peixe'){
 if (isPeixe < anu) return reply('Seus peixe não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} peixe 2\n 1 peixe = 150 `)
 kurangIkan(m.sender, anu)
 let monaynya = 150 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nPeixes : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'galinha'){
 if (isGalinha < anu) return reply('Seu frango não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} galinha 2\n 1 galinha = 250`)
 kurangAyam(m.sender, anu)
 let monaynya = 250 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nGalinhas : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'coelho'){
 if (isCoelho < anu) return reply('Seus coelho não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} coelho 2\n 1 coelho = 300`)
 kurangKelinci(m.sender, anu)
 let monaynya = 300 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nCoelhos : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ovelha'){
 if (isOvelha < anu) return reply('Você não tem ovelhas suficientes para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} ovelha 2\n 1 ovelha = 500`)
 kurangDomba(m.sender, anu)
 let monaynya = 500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nOvelhas : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'vaca'){
 if (isVaca < anu) return reply('Suas vaca não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} vaca 2\n 1 vaca = 100`)
 kurangSapi(m.sender, anu)
 let monaynya = 0 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nVaca : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elefante'){
 if (isElefante < anu) return reply('Seus elefante não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} elefante 2\n 1 elefante = 150`)
 kurangSapi(m.sender, anu)
 let monaynya = 0 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nElefante : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ferro'){
 if (isFerro < anu) return reply('Seus ferro não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} ferro 2\n 1 ferro = 150`)
 kurangBesi(m.sender, anu)
 let monaynya = 2050* anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nFerros : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ouro'){
 if (isOuro < anu) return reply('Seus ouro não é suficiente para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} ouro 2\n 1 ouro = 500`)
 kurangEmas(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nOuros : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'esmeralda'){
 if (isEsmeralda < anu) return reply('Você não tem esmeraldas suficientes para esta transação')
 if (!args[1]) return reply(`Ex: ${prefix + order} esmeralda 2\n 1 esmeralda = 100`)
 kurangEmerald(m.sender, anu)
 let monaynya = 9000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Compra feita ✔️\nDinheiro atual: ${getMonay(m.sender)}\nEsmeraldas : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Formato incorreto!") }

 }
 break

 case 'curar':{
 if (!isCekDarah < 1) return reply('Você só pode curar quando seu sangue 0')
 if (isCekDarah > 100) return reply('Seu sangue está cheio')
 if (isPotion < 1) return reply('Você não tem uma poção, tente comprá-la desta forma #buy pocao quantos') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Funcionou, seu sangue está cheio')
 }
 break
 case 'caça':{
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Seu sangue esta acabando, tente curar usando poções') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Perfurado por um espinho durante a caça","Escorregou em uma ravina durante a caça","Agarrado por um animal selvagem","Sem cuidado","Fica enredado em raízes","Cai durante a caça"]
   let location = ["Selva","Floresta amazônica","Floresta tropical","Padro","Floresta africana","Montanhas"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Selva') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Floresta amazônica') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Floresta tropical') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padro') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Floresta africana') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Montanhas') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `[ CAÇA ]\n`
     teksehmazeh += `🐟PEIXE : ${ikanmu}\n`
     teksehmazeh += `🐔GALINHA : ${ayam}\n`
     teksehmazeh += `🐇COELHO : ${kelinci}\n`
     teksehmazeh += `🐑CABRA : ${domba}\n`
     teksehmazeh += `🐄VACA : ${sapi}\n`
     teksehmazeh += `🐘ELEFANTE : ${gajah}\n\n`
     teksehmazeh += `[ INFO ]\n`
     teksehmazeh += `Local : ${lokasinya}\n`
     teksehmazeh += `Ferido : ${lukanya}, sangue - 10\n`
     teksehmazeh += `Sangue restante : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: ' Caça mais uma vez 🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} foi caça em: ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 case 'owner': case 'dono': {
   for (let x of Options.info.owner) {
   sock.sendContact(from, x.split('@s.whatsapp.net')[0], Options.info.ownerName, m)
	}			    
   }
  break
  case 'artinama':{
  if (!q) return reply('Namanya siapa?')
  let namalu = await arti_nama(q)
  let teksnya = `[ *NAMA* : ${namalu.message.nama} ]\n*Arti* : ${namalu.message.arti}`
  reply(teksnya)
  console.log(namalu)
  }
  break
  
  case 'perfil': case 'profile':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
  let teksehmazeh = `[ 👩🏻‍💼INFO USER👨🏻‍💼 ]\n\n`
     teksehmazeh += `❤️Seu sangue : ${getDarah(m.sender)}\n`
     teksehmazeh += `◻️️Ferros : ${getBesi(m.sender)}\n`
     teksehmazeh += `🌟Ouros : ${getEmas(m.sender)}\n`
     teksehmazeh += `💎Esmeraldas : ${getEmerald(m.sender)}\n`
     teksehmazeh += `⏺️Limite : ${getLimit(m.sender)}\n`
     teksehmazeh += `🧪Sua poção : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `[ 🐺RESULTADO DA CAÇA🐺 ]\n`
     teksehmazeh += `🐟Peixe : ${getIkan(m.sender)}\n`
     teksehmazeh += `🐔Galinha : ${getAyam(m.sender)}\n`
     teksehmazeh += `🐇Coelho : ${getKelinci(m.sender)}\n`
     teksehmazeh += `🐑Ovelha : ${getDomba(m.sender)}\n`
     teksehmazeh += `🐄Vaca : ${getSapi(m.sender)}\n`
     teksehmazeh += `🐘Elefante : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `${Options.info.botName}`
  
  reply(teksehmazeh)
  }
  break
case 'sair': {
                if (!isOwner) return reply ('💠Somente o iago !💠')
                reply ('Vo meter o pé eu que não quero treta com meu dono 👋🏻')
                setTimeout( () => {
                sock.groupLeave(from)
                }, 1100)
            }
            break

  case 'pescar':{
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Suas iscas acabaram compre mais !')
  reply("1 isca usada")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Pegou : ${ikannya}\n> Número de Peixes : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'PESCAR🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} iniciando sua pesca🎣️`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  

  case 'vida':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 10)
  reply('success✔️')
  }
  break
  case 'menu2':{  
   let button = [{
     index: 1, 
      urlButton: {
       displayText: '💻𝑆𝐼𝑇𝐸 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁💻', 
       url: 'https://sousathiagocandido.wixsite.com/ntdragonbot-1'
       } 
     }
    ]
      m.templateButon5IMG(from, MenuList, Options.info.botName, thumb, button, m)
   }
   break
   case 'm':
   case 'menu':
   kurangLimit(m.sender, 0)
   let buttons = [{
          index: 1, 
      urlButton: {
       displayText: '💻𝑆𝐼𝑇𝐸 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁💻', 
       url: 'https://sousathiagocandido.wixsite.com/ntdragonbot-1'
       } 
     }
    ]
    await m.sendButton(
    from, 
    MenuList,
    Options.info.botName,
    buttons,
    thumb, 
    await m.createMsg(
     from, 
     {
     video: {
      url: './storage/video/menu1.mp4', 
      caption: "Not detected"
      }, 
      gifPlayback: true
     }
     )
    )
    setTimeout( () => {
    const sections = [
    {
	title: "𝑂𝑝𝑐𝑜𝑒𝑠 ✅",
	rows: [
      {
	    title: "🔷𝐴𝑉𝐴𝐿𝐼𝐴𝑅 𝑂 𝐵𝑂𝑇🔷", 
	    rowId: ".avaliar"
	   },	 	
	   {
	    title: "🤵🏻𝐶𝑅𝐼𝐴𝐷𝑂𝑅/𝐷𝑂𝑁𝑂🤵🏻", 
	    rowId: ".dono"
	   },	 
	   {
	    title: "📷𝐼𝑁𝑆𝑇𝐴𝐺𝑅𝐴𝑀 𝐷𝑂 𝐼𝐴𝐺𝑂📷", 
	    rowId: ".Insta"
	   },	    
	   {
	    title: "📽️𝐶𝐴𝑁𝐴𝐿 𝑌𝑂𝑈𝑇𝑈𝐵𝐸📽️", 
	    rowId: ".yt"
	   },	 
	   {
	    title: "💬𝑊𝐴.𝑀𝐸 𝐷𝑂 𝐼𝐴𝐺𝑂💬", 
	    rowId: ".wameiago"
	   },	 
	   {
	    title: "💸️𝐷𝑂𝐴𝑅 𝑃𝐼𝑋💸", 
	    rowId: ".doar"
	   },	 
     ]
    }    
    ]

  const listMessage = {
   text: "⬇️",
   footer: "⬇️",
   title: "𝐴𝑙𝑔𝑢𝑚𝑎𝑠 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑜𝑒𝑠",
   buttonText: "𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚𝑎 𝑜𝑝𝑐𝑎𝑜 𝑎𝑏𝑖𝑎𝑥𝑜",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }, 50)  
   break
   case 'tes':{
     m.reply(from, 'hallo', { quoted : m } )
   }
   break
   case 'temp':{
   const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: '𝑆𝐼𝑇𝐸 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁', 
       url: 'https://sousathiagocandido.wixsite.com/ntdragonbot-1'
      } },
     {
     index: 2, 
     callButton: {
      displayText: '𝐶𝑅𝐼𝐴𝐷𝑂𝑅', 
       phoneNumber: '15874108061'
      } },
     {
     index: 3, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#donk'
       } },
    { 
     index: 4, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
       } },
     {
     index: 5, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
     ],
    }
   const sendm =  sock.sendMessage(
    from, 
    templateMessage
    )
   }
  break  
  case 'tempativo':{
    const templateMessage = {
    text: "TEMPO ATIVADO",
    footer: `${runtime(process.uptime())}`,
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: '𝑆𝐼𝑇𝐸 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁', 
       url: 'https://sousathiagocandido.wixsite.com/ntdragonbot-1'
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  
  case '08':
if (!isOwner) return reply ('💠Somente o iago !💠')
if (!isBotGroupAdmins) return reply ('Desculpe mestre mais não sou adm!🤧')
//kkk = (`owner + "@s.whatsapp.net"`);
await sock.groupParticipantsUpdate(from, [`15874108061@s.whatsapp.net`], 'promote')
await reply (`✓ claro, vc tem todo o direito de ser adm, mestre ｡◕‿◕｡`)
break

case '07':
if (!isOwner) return reply ('💠Somente o iago !💠')
if (!isBotGroupAdmins) return reply ('Desculpe mestre mais não sou adm!🤧')
//kkk = (`owner + "@s.whatsapp.net"`);
await sock.groupParticipantsUpdate(from, [`15874108061@s.whatsapp.net`], 'demote')
await reply (`✓ como quiser. Tirando seu adm mestre , desculpe-me.`)
break
  
  case 'tqto':{
    const templateMessage = {
    text: `}---------[✨THANKS TO✨]---------{\n\n➢ Iago\n\n}---------[✨CRIADOR✨]---------{`,
    footer: Options.info.botName,
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'My Instagram', 
       url: Options.info.igowner
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  case 'opções':{
  // send a list message!
   const sections = [
    {
	title: "𝑂𝑝𝑐𝑜𝑒𝑠 ✅",
	rows: [
	   {
	    title: "🤵🏻𝐶𝑅𝐼𝐴𝐷𝑂𝑅/𝐷𝑂𝑁𝑂🤵🏻", 
	    rowId: ".dono"
	   },	 
	   {
	    title: "📷𝐼𝑁𝑆𝑇𝐴𝐺𝑅𝐴𝑀 𝐷𝑂 𝐼𝐴𝐺𝑂📷", 
	    rowId: ".Insta"
	   },	    
	   {
	    title: "📽️𝐶𝐴𝑁𝐴𝐿 𝑌𝑂𝑈𝑇𝑈𝐵𝐸📽️", 
	    rowId: ".yt"
	   },	 
	   {
	    title: "💬𝑊𝐴.𝑀𝐸 𝐷𝑂 𝐼𝐴𝐺𝑂💬", 
	    rowId: ".wameiago"
	   },	 
     ]
    }    
    ]

  const listMessage = {
   text: "⬇️",
   footer: "⬇️",
   title: "𝐴𝑙𝑔𝑢𝑚𝑎𝑠 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑜𝑒𝑠",
   buttonText: "𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚𝑎 𝑜𝑝𝑐𝑎𝑜 𝑎𝑏𝑖𝑎𝑥𝑜",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break

 case 'block': {
		if (!isOwner) return ('Ox fimosinha ?')
		let users = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sock.updateBlockStatus(users, 'block')
		reply('Usuarios bloqueado!')
	}
	break
        case 'unblock': {
		if (!isOwner) return ('Ox fimosinha ?')
		let users = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await sock.updateBlockStatus(users, 'unblock')
		reply('Prontinho desbloqueado!')
	}
	break

  case 'wameiago':
  reply('Não seja um random porra🙄\n\n https://wa.me/15874108061')
  break

  case 'yt': 
let porr = `${dono99}`
    sock.sendMessage(from, { image: { url : porr }, caption: `🥰Aqui está, se inscreva e deixe um comentário que vou estar dando coração ❤️ 😀\n\n${Options.info.ytowner}`}, { quoted: m } )
    break


  case 'insta': 
  let link = `${dono99}`
    sock.sendMessage(from, { image: { url : link }, caption: `🥰Aqui está, segue lá 😀\n\n${Options.info.igowner}`}, { quoted: m } )
    break

  case 'listsection2':{
  // send a list message!
   const sections = [
    {
	title: "Section 1",
	rows: [
	    {
	     title: "Option 1", 
    	 rowId: "option1"
	    },
	    {
	     title: "Option 2", 
	     rowId: "option2", 
	     description: "This is a description"
	    }
     ]
    },
    {
	title: "Section 2",
	rows: [
	    {
	     title: "Option 3", 
	     rowId: "option3"
	     },
	    {
	     title: "Option 4", 
	     rowId: "option4", 
	     description: "This is a description V2"
	    }
       ]
     },
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
      from, 
      listMessage
    )

  }
  break

case 'gerarcpf':
   if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  let cp1 = `${Math.floor(Math.random() * 300) + 600}`
let cp2 = `${Math.floor(Math.random() * 300) + 600}`
let cp3 = `${Math.floor(Math.random() * 300) + 600}`
let cp4 = `${Math.floor(Math.random() * 30) + 60}`
let cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await sock.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: m})
break
  
  case 'detiknews': case 'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: `#reply ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: Options.info.botName,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }
    )  
   }
  break


  case 'reply':{
  let textz = q || 'undefined'
  m.reply(from, textz, { quoted : m } )
  }
  break

  case 'play': case 'lagu': case 'musik':{
   if (args.length < 1) return m.reply(from, 'lagu apa?', { quoted : m } )
   const _0x387283=_0x56d3;(function(_0x5d04b3,_0x3e9123){const _0x5bc831=_0x56d3,_0x4a38fc=_0x5d04b3();while(!![]){try{const _0x5a3aee=-parseInt(_0x5bc831(0x17e))/0x1+parseInt(_0x5bc831(0x173))/0x2*(parseInt(_0x5bc831(0x162))/0x3)+-parseInt(_0x5bc831(0x161))/0x4+-parseInt(_0x5bc831(0x17a))/0x5+-parseInt(_0x5bc831(0x164))/0x6*(parseInt(_0x5bc831(0x17c))/0x7)+-parseInt(_0x5bc831(0x178))/0x8*(-parseInt(_0x5bc831(0x176))/0x9)+parseInt(_0x5bc831(0x16f))/0xa;if(_0x5a3aee===_0x3e9123)break;else _0x4a38fc['push'](_0x4a38fc['shift']());}catch(_0x2665dd){_0x4a38fc['push'](_0x4a38fc['shift']());}}}(_0x4567,0x1d65c));const fresh=await searchResult(args[_0x387283(0x160)]('\x20'));console['log'](fresh);let sections=[];for(let i=0x0;i<fresh[_0x387283(0x16c)];i++){const list={'title':i+0x1+'.\x20'+fresh[i]['title'],'rows':[{'title':_0x387283(0x16d),'rowId':_0x387283(0x166)+fresh[i][_0x387283(0x171)],'description':_0x387283(0x17b)+fresh[i][_0x387283(0x172)]+_0x387283(0x15f)+fresh[i][_0x387283(0x169)]+_0x387283(0x175)+fresh[i][_0x387283(0x165)][_0x387283(0x168)]+_0x387283(0x16a)+(fresh[i][_0x387283(0x170)]?'YouTube\x20musica':'YouTube')+_0x387283(0x16e)+fresh[i]['id']},{'title':'[\x20🎥Vidio️🎥\x20]\x20MP4','rowId':_0x387283(0x17d)+fresh[i][_0x387283(0x171)],'description':_0x387283(0x17b)+fresh[i][_0x387283(0x172)]+_0x387283(0x15f)+fresh[i][_0x387283(0x169)]+_0x387283(0x175)+fresh[i][_0x387283(0x165)]['label']+_0x387283(0x16a)+(fresh[i][_0x387283(0x170)]?_0x387283(0x177):_0x387283(0x16b))+_0x387283(0x16e)+fresh[i]['id']}]};sections[_0x387283(0x15e)](list);}function _0x56d3(_0x57fdc1,_0x3a0842){const _0x4567c9=_0x4567();return _0x56d3=function(_0x56d37a,_0x19e14a){_0x56d37a=_0x56d37a-0x15e;let _0x2b10cf=_0x4567c9[_0x56d37a];return _0x2b10cf;},_0x56d3(_0x57fdc1,_0x3a0842);}function _0x4567(){const _0x115320=['\x0a\x0aℹ️Id\x20:\x20','2636910gSEcJs','isYtMusic','url','artist','134WGkGaw','Escolha\x20abaixo\x20qual\x20tipo\x20de\x20midia\x20mp3/mp4✔️','\x0a\x0a📊Duração\x20:\x20','1463121BUtxtd','YouTube\x20musica','8SnOoTk','sendMessage','160360LnsPvJ','👤Artista\x20:\x20','161819JLJtSW','#youtubemp4\x20','79352CwJCfr','push','\x0a\x0a💽Nome\x20:\x20','join','846280WMzPjT','3873VfCiIN','botName','18wodwzE','duration','#youtubemp3\x20','[\x20YouTube\x20pesquisa de\x20musica🔎\x20]','label','album','\x0a\x0a🔎Procura em\x20:\x20','YouTube','length','[\x20🎵Música🎵\x20]\x20MP3'];_0x4567=function(){return _0x115320;};return _0x4567();}const sendm=sock[_0x387283(0x179)](from,{'text':_0x387283(0x174),'footer':Options['info'][_0x387283(0x163)],'title':_0x387283(0x167),'buttonText':'Clique\x20e\x20escolha\x20entre os\x20resultados➡️','sections':sections});
  }
  break
case 'mechame':
sock.sendMessage(sender, {text: 'oi'})
reply (`Mensagem enviada no PV`)
break  
case  'hentai': {
if (isGroup) reply('⚙️Aguarde enviando no seu privado') 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
var tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
sock.sendMessage(sender, {image: { url: tk.url}, quoted: m, thumbnail:null})
}
break

case 'statusbio':
if (args.length < 1) return reply ('cade a porra do texto!')
sock.setStatus(`${q}`)
break

case 'pau':
var terandom = Math.floor(Math.random() * 35)
const tamanho = terandom
if (tamanho < 13 ) {var pp = 'só a fimose'} else if (tamanho == 13 ) {var pp = 'passou da média😳'} else if (tamanho == 14 ) {var pp = 'passou da média😳'} else if (tamanho == 15 ) {var pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {var pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {var pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {var pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {var pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {var pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {var pp = 'vai procurar petróleo com isso?'
}
var hasil = `Seu pau @${sender.split('@')[0]}  tem ${terandom}cm\n\n${pp}`
reply(hasil)
break


  case 'youtubemp3':{
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)  
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Esse esta com erro tente usar outro !`, { quoted : m })
   }
  }
  break

  case 'youtubemp4':{
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { video: { url: dl_link }, caption: "Este é o resultado\nEspero que esteja satisfeito com nosso serviço😊" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Acesso negado por favor tente outro `, { quoted : m })
   }
  }
  break
  
  
  /*  
  case 'p':
   sock.sendMessage(
     from, 
     { 
      image: { 
       url: "https://img.utdstc.com/icon/3e9/711/3e9711e51ca1450b414c8a6e653e69525cefab1d3f3e7c4c5d5767383aa51242" 
       } 
      }, 
     { quoted: m }
    )
  break 
  */
  
  case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': case 'stikergif': case 'stikgif':{			   			   
  try{
   if (m.isQuotedImage) {
    var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
   
    let ran = '666.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${ran} -o ./${ran}`, async (error) => {
      sock.sendMessage(
          from, 
          { 
         sticker: fs.readFileSync(`./${ran}`) 
         })
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)
	 
    } 
    
   else 
   
  if (m.isQuotedVideo) {
   var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
   var buffer = Buffer.from([])
   for await(const chunk of stream) {
	  buffer = Buffer.concat([buffer, chunk])
	 }
   var rand2 = '777.webp'
	fs.writeFileSync(`./${rand2}`, buffer)
     ffmpeg(`./${rand2}`)
	 .on("error", console.error)
	 .on("end", () => {
	 exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
	 sock.sendMessage(
	  from, 
	    { 
	     sticker: fs.readFileSync(`./${rand2}`) 
	     }, 
	    { 
	     quoted: m 
        })
    	fs.unlinkSync(`./${rand2}`)
	  })
	})
   .addOutputOptions([
     "-vcodec", 
     "libwebp", 
     "-vf", 
     "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
    ])
   .toFormat('webp')
   .save(`${rand2}`)
   
    } 
    
   else 
   
    {
    
         { 
         quoted : m 
         } 
      }
     } catch (e){ 
     sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
    }
   }
  break

  case 'promote':{
  // title & participant
  console.log(mentionUser)
		await sock.groupParticipantsUpdate(
		 from, 
		 mentionUser, 
		 "promote"
		 )
	   .catch((err) => m.reply(from, err, {quoted : m }))
	  }
  break
  case 'demote':{
  // title & participant
  console.log(mentionUser)
   sock.groupParticipantsUpdate(
	 	  from, 
		  mentionUser, 
		  "demote"
		 )
		 .catch((err) => m.reply(from, err, {quoted : m })
	  )
	}
  break
case 'attp':
if (args.length < 1) return reply(`Exemplo: ${prefix + order} iago`)
reply ('Hum ok')
anu = (`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ordermessage.slice(5))}`)
await sock.sendMessage(from, {sticker: {url: anu}, quoted: m})  
break
  case 'sound1':{
   sock.sendMessage(
   from, 
   { 
    audio: {
     url : `https://k.top4top.io/m_2279djqoy1.mp3`
    }, 
    mimetype: 'audio/mp4', 
    ptt: true
    }, 
    {
    quoted: m
   }
   )
  }
  break
  case 'waifu': case 'megumin':
case 'shinobu':
case 'awoo': case 'neko':{
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
  try{
   let za = await fetchJson(`https://waifu.pics/api/sfw/${order}`)
            
  
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'PROXIMA'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: za.url },
      caption: "Resultado",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   } catch { reply("erro ") }
 }
 break

case 'nickff': 
var anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=Alphabott`)
var anu1 = `Aqui está: \n\n${anu.result}\n`
reply(anu1)
break

case 'corno1': {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém pra ver o nível do chifre')
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
anu = Math.floor(Math.random() * 101)
if (anu > 50) {
var teks = `Após medir o @${mentioned[0].split('@')[0]} \n\nSUA PORCENTAGEM E DE : ${anu}% TU E UM BAITA CORNO EM SLK🐂`
} else {
var teks = `Após medir o @${mentioned[0].split('@')[0]} \n\nSUA PORCENTAGEM E DE : ${anu}% SUA VEZ DE SER CORNO CHEGARA RLX😴!!`
}
mentions(teks, mentioned, true)
}
break

  case 'apaga': case 'delete': case 'del': case 'd':{
      if (!m.quoted) return  m.reply(from, 'Reply pesanya!', { quoted : m })
       if (!m.quoted.isBaileys) return  m.reply(from, 'Fitur ini hanya berlaku menghapus pesan bot yang di kirim oleh saya!', { quoted : m })
          sock.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         }
      break
  
  case 'wallpaperaccess':{
  if (args.length < 1) return m.reply(from, 'Oque você procura?', { quoted : m } )
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
  try{
  const aku_biji = await wallpaperaccess(q)
  let jsonData = aku_biji
  let kamu_telor = Math.floor(Math.random() * jsonData.length);
  let anunya = jsonData[kamu_telor];
 
  console.log(anunya.link)
  let buttons = [
      {
       buttonId: `#wallpaperaccess ${q}`, 
       buttonText: {
        displayText: 'PROXIMO'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: anunya.link },
      caption: "O resultado foi esse pra sua pesquisa!",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
    } catch (e) { e = String(e)
      m.reply(from, 'Tidak ditemukan!', { quoted : m } )
   }
  }
  break 
  case 'hoorror_blood':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.hoorror_blood}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break 
   case 'sand':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.sand}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'magma':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.magma}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'blackpink':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.blackpink}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sketch':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.sketch}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'glass':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.glass}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'lightglow':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.lightglow}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sci_fi':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
      if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
      kurangLimit(m.sender, 1)
      reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
      let link = `${textproo.sci_fi}`
      let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
  
}
  break
  case 'ice':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.ice}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'demon':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.gdemon}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'batman':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.batman}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sea_metal':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.sea_metal}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'skeleton':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.skeleton}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'warning':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.warning}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'transformer':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.transformer}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'denim':{
    if (args.length < 1) return m.reply(from, 'texto?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
     let link = `${textproo.denim}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
case 'magma':
case 'devil':
case 'graffiti':
case 'skeleton':
case 'blackpink':
case 'cloud':
case 'blood':
case 'firework':
case 'lava':
case 'toxic':
case 'thunder':
case 'neon':
case 'greenneon':
case 'glitter':
case 'glow':
case 'galaxy':           
if (!q) return reply (`Ex: ${prefix + order} iago gado`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
     kurangLimit(m.sender, 1)
     reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
getBuffer(`https://api.zekais.com/textpro/${order}?text=${q}&apikey=tLEU8JhX`).then((gambar) => {
sock.sendMessage(from, { image: gambar, caption: `🥰Prontinho, não esqueça de passar no Instagram do meu criador😀\n\n${Options.info.igowner}`}, { quoted: m } )

})                    
break
  case 'tiktokaudio':{
  if (!q) return reply('Link?')
  if (!q.includes('tiktok')) return reply('Somente link de tiktok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`) 
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktokvideo':{
  if (!q) return reply('Link?')
  if (!q.includes('tiktok')) return reply('Link somente do tik tok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
  reply(`Você usou 1 limite ಥ‿ಥ\nRestante de limite : ${getLimit(m.sender)}`)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { video: { url: musim_duren_v }, caption: "Este é o resultado\nEspero que esteja satisfeito com nosso serviço😊" }, { quoted: m })
   }
  break
  case 'off':{
  let date = + new Date
  const alasan = q ? q : 'Contexto....?'
  afk.addAfkUser(m.sender, date, alasan, time, _afk)
  reply(`@${m.sender.split("@")[0]} agora sendo off\nContexto : ${alasan}`)
  }
  break

case 'link': {
if (!isGroup) return reply('Somente em grupo')
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Se ta lgd que não sou adm né? ')
reply(`Link: https://chat.whatsapp.com/${await sock.groupInviteCode(from)}`)
}
break

         case 'emojimix': {
	        if (!q) return reply(`Example : ${prefix + order} 😅+🤔`)
		let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await sock.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break

case 'marcar': {
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
if (!isBotGroupAdmins) return reply('Sou adm nao amg');
let teks = `══✪〘 👥 Atenção! 〙✪══
 
 ➲ Mensagem: ${q ? q : 'Nada não'}\n\n`
                for (let mem of groupMembers) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                sock.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
                }
                break
case 'hentaigif':
if (isGroup) reply('⚙️Aguarde enviando no seu privado') 
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
var links = fs.readFileSync('./lib/subaru-1.json');
var jsonData = JSON.parse(links);
var randIndex = [Math.floor(Math.random() * (jsonData.length))]
var randKey = jsonData[randIndex];
var hasil = await getBuffer(randKey.result)
sock.sendMessage(sender, {video: hasil}, {mimetype: 'gif/video'}, {quoted: m, thumbnail:null})
break

case 'nick': 
  if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
  kurangLimit(m.sender, 1)
if (!q) return reply ('Ex: nick NT DRAGON')
var send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${q}`)
var teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️


🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
 
      👾EXTRAS👾
   
   
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
    © 𝑁𝑇 𝐷𝑅𝐴𝐺𝑂𝑁-𝑀𝐷
 `
sock.sendMessage(from, {text: teks}, {quoted: m})
break

case 'sugestão':
case 'sugestao':
const sugestao = CMD.slice(9)
if (args.length <= 1) return reply (`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return sock.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: m})
var sug = `💠[ Sugestões ]💠\n📞: wa.me/${sender.split("@s.whatsapp.net")[0]}\n\n\n💭: ${sugestao}`
await sock.sendMessage(`15874108061@s.whatsapp.net`, {text: sug}, {quoted: m})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

case 'placaloli':
if (!q) return reply('Cade o texto ?')
reply ('Aguarde..')
var lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendFileFromUrl(from, lod.message)
break 
 
case 'qrcode':
if (!q) return sock.sendMessage(from, {text: 'Digite um texto/url que deseja criar um código qr'}, {quoted: m})
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`)
sock.sendMessage(from, {image: bufferr}, {quoted: m})
break
 
case 'hora':
reply (`𝐻𝑜𝑟𝑎𝑟𝑖𝑜 𝑑𝑒 𝐵𝑟𝑎𝑠𝑖𝑙𝑖𝑎: ${time}`)
break

case 'grupos': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ Lista de grupos em que o NT DRAGON-MD exerce suas funções\n\nTotal: ${anu.length} Group\n\n\n`
                 for (let i of anu) {
                     let metadata = await sock.groupMetadata(i)
                     teks += `❗────────────────────────❗\n\n⬡ Nome: ${metadata.subject}\n⬡ ID: ${metadata.id}\n⬡ Data criança: ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Membros: ${metadata.participants.length}\n\n✅────────────────────────✅\n⬇️\n⬇\n️`
                 }
                 sock.sendTextWithMentions(from, teks, m)
             }
             break

case 'clear': {
if (!isGroup) return reply('Somente em grupos amg');
if (!isGroupAdmins) return reply('Sai dai fimose você não e adm');
reply ('❄️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🔥');
}
break

  case 'avaliar':{
  // send a list message!
   const sections = [
    {
	title: `✅De sua avaliação ${pushname}✅`,
	rows: [
	   {
	    title: "★☆☆☆☆", 
	    rowId: ".1pessimo"
	   },	 
	   {
	    title: "★★☆☆☆", 
	    rowId: ".1ruim"
	   },	    
	   {
	    title: "★★★☆☆️", 
	    rowId: ".1bom"
	   },	 
	   {
	    title: "★★★★☆", 
	    rowId: ".1muintobom"
	   },	 
	   {
	    title: "★★★★★", 
	    rowId: ".1perfeito"
	   },	 	   
     ]
    }    
    ]

  const listMessage = {
   text: "🔷",
   footer: "🔷️",
   title: `✅De sua avaliação ${pushname}✅`,
   buttonText: "AVALIAR",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break


case '1pessimo':
reply (`😣 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var tsexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★☆☆☆☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: tsexto}, {quoted: m})
break

case '1ruim':
reply (`😐 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var kptexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★☆☆☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: kptexto}, {quoted: m})
break

case '1bom':
reply (`☺ obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var kkktexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★★☆☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: kkktexto}, {quoted: m})
break

case '1muintobom':
reply (`😀 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var xxxtexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★★★☆
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: xxxtexto}, {quoted: m})
break

case '1perfeito':
reply (`😍 obrigado pela avaliação`)
var suporte = `15874108061@s.whatsapp.net`;
var llltexto = `
╔═══〘❄️ Avaliação ❄️〙═══
║De: ${pushname} 
║
║Número wa.me//${sender.split("@")[0]}
║
║Grupo: ${groupName ? groupName: '🔷PV🔷'}
║
║
║═════════════︎
║Nota: ★★★★★
╚═════════════︎
`
var obgavalicaoo = `Obrigado pela avaliação ${m.pushName}`
sock.sendMessage(sender, {text: obgavalicaoo}, {quoted: m})
sock.sendMessage(suporte, {text: llltexto}, {quoted: m})
break
 
case 'rankbct':
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
kurangLimit(m.sender, 0)
var membr = []
const pauzz1 = groupMembers
const pauzz2 = groupMembers
const pauzz3 = groupMembers
const pauzz4 = groupMembers
const pauzz5 = groupMembers
const pauss1 = pauzz1[Math.floor(Math.random() * pauzz1.length)]
const pauss2 = pauzz2[Math.floor(Math.random() * pauzz2.length)]
const pauss3 = pauzz3[Math.floor(Math.random() * pauzz3.length)]
const pauss4 = pauzz4[Math.floor(Math.random() * pauzz4.length)]
const pauss5 = pauzz5[Math.floor(Math.random() * pauzz5.length)]
var pcpauu1 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu2 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu3 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu4 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
var pcpauu5 = ["Pequenininha", `Media`, `Gigantesca cabe 10 pau`, `Labios grandes😋`, `Grelinho de diamante`, `Rosinha`, `Apertadinha`, `Melzinho doce`, `Gigantesco`, `Gigantesca "cabe o pau do hulk ai"`, `Fica de fora da calcinha`]
const pcc1 = pcpauu1[Math.floor(Math.random() * pcpauu1.length)]
const pcc2 = pcpauu2[Math.floor(Math.random() * pcpauu2.length)]
const pcc3 = pcpauu3[Math.floor(Math.random() * pcpauu3.length)]
const pcc4 = pcpauu4[Math.floor(Math.random() * pcpauu4.length)]
const pcc5 = pcpauu5[Math.floor(Math.random() * pcpauu5.length)]
var pdr = `Essas são as bucetas🍑😋 do grupo: \n${groupName}\n\n@${pauss1.id.split('@')[0]}\n${pcc1}\n\n@${pauss2.id.split('@')[0]}\n${pcc2}\n\n@${pauss3.id.split('@')[0]}\n${pcc3}\n\n@${pauss4.id.split('@')[0]}\n${pcc4}\n\n@${pauss5.id.split('@')[0]}\n${pcc5}\n\n\n 💠iago domina bb😘`
membr.push(pauss1.id)
membr.push(pauss2.id)
membr.push(pauss3.id)
membr.push(pauss4.id)
membr.push(pauss5.id)
mentions(pdr, membr, true)
break

case 'rankpau':
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
kurangLimit(m.sender, 0)
var membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
var pdr = `Esses são os caras com o menor e maior pau do Grupo🍆:\n\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n\n@${paus2.id.split('@')[0]}\n${pc2}\n\n@${paus3.id.split('@')[0]}\n${pc3}\n\n@${paus4.id.split('@')[0]}\n${pc4}\n\n@${paus5.id.split('@')[0]}\n${pc5}\n\n 💠iago domina bb😘`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break


case 'preto':
case 'gay':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
if (!isGroup) return reply('Somente em grupos!');
kurangLimit(m.sender, 0)
var membr = []
const pauzz61 = groupMembers
const pauss61 = pauzz61[Math.floor(Math.random() * pauzz61.length)]
var teks = `O ${order} do grupo é: @${pauss61.id.split('@')[0]}\n`
membr.push(pauss61.id)
mentions(teks, membr, true)
break
 
case 'ping':
  sendBtext(from,`𝑂𝑙𝑎 𝑚𝑖𝑛ℎ𝑎 𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑𝑒 𝑑𝑒 𝑟𝑒𝑠𝑝𝑜𝑠𝑡𝑎 𝑒 𝑑𝑒: ${latensi.toFixed(4)}💬`,`𝐍𝐓 𝐃𝐑𝐀𝐆𝐎𝐍`,
  [
              {              
                buttonId: `.ping`,
                buttonText: {
                  displayText:  `⚡𝐴𝑡𝑢𝑎𝑙𝑖𝑧𝑎𝑟⚡`,
                },
                type: 1,
              },
            ]);
  break 
  
  case 'dogolpe':
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
if (args.length < 1) return await sock.sendMessage(from, {text: 'coloca um nome'}, {quoted: m})
var pkt = CMD.slice(9)
var iago91 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const iago92 = iago91[Math.floor(Math.random() * iago91.length)]
var jpr = `GOLPISTA ENCONTRADO👉🏻\n\n*GOLPISTA : *${args[0]}\nPORCENTAGEM DO GOLPE : ${iago92}😂\n\n\nEle(a) gosta de ferir sentimentos 😢`
reply (jpr)
break

case 'shipo':
var teks = args.join(" ")
if(teks.length < 10) return reply ('Marque uma pessoa do grupo para encontrar o par dela')
var membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
var jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]} && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
var membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
var jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break
 
case 'pussy':
case 'lesbian':
case 'kuni':
case 'cumsluts':
case 'classic':
case 'boobs':
case 'bj':
case 'anal':
if (isGroup) reply('⚙️Aguarde enviando no seu privado') 
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
if (isLimit < 1) return reply("Seu limite acabou, por favor compre desta forma .compra limit quantos\n\nCaso queria limit infinito mande .infinito")
kurangLimit(m.sender, 1)
var kon = await getBuffer(`https://hardianto.xyz/api/anime/random?nsfw=${order}&apikey=hardianto`)
sock.sendMessage(sender, {image: kon}, {quoted : m, thumbnail:null})                  
break 

case 'figualeatoria':
reply (`Acalme seu coração já estou enviando🤙`)
var anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
sock.sendMessage(from, {sticker: anu}, {quoted: m })
break
 
case 'metadinha':
reply('💠Aguarde......💠(Aconselho usar de 10 em 10 minutos)')
var get = await fetchJson(`https://api.zacros.my.id/randomimg/ppcouple`) 
var male = await getBuffer(`${get.male}`) 
sock.sendMessage(from, {image: male}, {quoted: m});;
var female = await getBuffer(`${get.female}`) 
setTimeout( () => {
sock.sendMessage(from, {image: female}, {quoted: m})
}, 1100)
break
 
case 'tempban':
if (!isOwner) return reply ('💠Somente o iago !💠')
if(!isGroup) return reply ('Só pode ser utilizado este comando, em grupo.')
if (!isBotGroupAdmins) return reply('Desculpa iago sou adm não 🥺');
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("*selecionar:*\nsegundos\nminuto\nhora")}
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return;
if (m.message.extendedTextMessage.contextInfo.participant === undefined) {
var entah = m.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.sayo> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
sock.groupParticipantsUpdate(from, M_exe, "remove")
} else {
sock.groupParticipantsUpdate(from, [exe1[0]], "remove")
}
} else {
var exe1 = m.message.extendedTextMessage.contextInfo.participant
sock.groupParticipantsUpdate(from, [exe1], "remove")
}
reply(`[❗] tempo de ban: ${args[0]} ${args[1]}`)
setTimeout( () => {
var exe1 = m.message.extendedTextMessage.contextInfo.participant
sock.groupParticipantsUpdate(from, [exe1], "add")	
}, timer)
break					

case 'fechar': {
if (!isGroup) return reply(mess.group());
if (!isGroupAdmins) return reply(mess.admin());
if (!isBotGroupAdmins) return reply(mess.fromAdmin());
await sock.groupSettingUpdate(from, 'announcement')
} 
break

case 'abrir': {
if (!isGroup) return reply(mess.group());
if (!isGroupAdmins) return reply(mess.admin());
if (!isBotGroupAdmins) return reply(mess.fromAdmin());
sock.groupSettingUpdate(from, 'not_announcement')
}
break

case 'gp':
  sendBtext(from,`Escolha Abaixo Oque Você Deseja Fazer`,`𝐍𝐓 𝐃𝐑𝐀𝐆𝐎𝐍`,
  [
              {              
                buttonId: `.abrir`,
                buttonText: {
                  displayText:  `ᎪᏴᎡᏆᎡ ᏀᎡႮᏢϴ🔓`,
                },
                type: 1,
              },
              {              
                buttonId: `.fechar`,
                buttonText: {
                  displayText:  `ҒᎬᏟᎻᎪᎡ ᏀᎡႮᏢϴ🔒`,
                },
                type: 1
              },
            ]);
  break

case 'bct':
case 'buceta':
var irandom = Math.floor(Math.random() * 35) 
const fundura = irandom
if (fundura < 13 ) {var pp = 'Eita aguenta muinto rsrs'} else if (fundura == 13 ) {var pp = 'Homens que tem 15cm comemoram😳'} else if (fundura == 14 ) {var pp = 'Sera muinta siririca 🤔'} else if (fundura == 15 ) {var pp = 'minha fia ta enfiando o que ai ???'} else if (fundura == 16 ) {var pp = 'cauma moça e mt siririca'} else if (fundura == 17 ) {var pp = 'Tu e um poço mizara ?'} else if (fundura == 18 ) {var pp = 'Tu e um poço mizera ?'} else if (fundura == 19 ) {var pp = 'parabens negoes nao te machuca mais'} else if (fundura == 20 ) {var pp = 'Ta mais grande do que de casada em pqp'} else if (fundura == 21 ) {var pp = 'Voce e casada moça?'} else if (fundura == 22 ) {var pp = 'O buraco mais fundo que ja teve no planeta terra '} else if (fundura == 23 ) {var pp = 'O buraco mais fundo que ja teve no planeta Terra'} else if (fundura == 24 ) {var pp = 'Cabe 4 pau ai sem fazer força '} else if (fundura > 25 ) {var pp = 'Sem palavras'}
let hhhasil = `Sua bu😳eta @${sender.split('@')[0]} tem ${irandom}cm de profundidade\n\n${pp}`
reply(hhhasil)
break

case 'bcadm':  
if (!isOwner) return reply('❗Comando privado pro Iago pelo risco do bot levar ban no numero❗')
if (!isGroupAdmins) return reply('Fimosinha usando comando de adm ?')
if (args.length < 1) return reply('texto.......')
var fgp = await groupMembers
var nomor = m.participant
for (let _ of fgp) {
sendMess(_.id, `╭────────────────────╮
┞┧「🔷TRANSMISSÃO DO ADM🔷」
┞┧
┞┧
┞┧ 👤Nome: ${pushname}
┞┧ 
┞┧ 👥Grupo: ${groupName}
┞┧ 
┞┧ 📞Número: wa.me/${(sender.split('@')[0])}
┞┧ 
┞┧
┞┧
╰────────────────────╯

╭────────────────────╮ 
 🗣️:${CMD.slice(6)} 
╰────────────────────╯`)
}
reply('Grupo de transmissão bem-sucedido') 
break

await store.chats.all().map(v => v.id)

case 'bcall':  
if (!isOwner) return reply('Somente o iago!')
if (args.length < 1) return reply('texto.......')
var fgp = await store.chats.all().map(v => v.id)
for (let _ of fgp) {
let txt88 = `

╭────TRANSMISSÃO DO IAGO──── 
 ${CMD.slice(6)} 
╰────────────────────`
sock.sendMessage(_, {text: `${txt88}`, quoted: m})
}
reply('Transmissão bem-sucedido') 
break 
 
case 'infinito':
if (!isPremium) return reply('[❗] Ôpa esse comando e apenas para quem comprou o Premium!\nCusta R$5,00\n\n caso tenha interesse fale com o iago!\n\nwa.me/+15874108061')
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Coloque limit na frente de infinito!')
 var anu = args[1]
 
  if (args[0] === 'limit'){
  let noh = 0 * anu
 if (!args[1]) return reply(`Ex : ${prefix + order} limit 2`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
 }
break
	
 
case 'addprem': 
if (!isOwner) return reply('Somente meu dono!')
if (!isGroup) return reply('Iago somente em grupo 😢')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return 
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
var pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/premium.json', JSON.stringify(premium))
var susp = `@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso `
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
if (!isOwner) return reply('Somente meu dono!')
if (!isGroup) return reply('Iago somente em grupo 😢')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return 
var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
var pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = CMD.slice(12)
let positio = premium.indexOf(dellprem)
premium.splice(positio, 1)
fs.writeFileSync('./datab/premium.json', JSON.stringify(premium))
var susp = `@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium `
mentions(`${susp}`, mentioned, true)   
break

case 'doar': {
reply ('🔱 Olá faça uma doação e contribua com que o bot permanessa ativo🔱\n\n\n 🍃Qualquer valor e bem vindo nao existe quantia baixa!🍃\n\n\n 🧾Chave E-mail 🧾')
setTimeout( () => {
reply ('iago.ntdragon.pix@gmail.com')
}, 1110)
}
break


  default:
   
  } } catch(e) { e = String(e) 
  if (e.includes("rate-overlimit")) {return}
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
   console.log(color(e, 'cyan')) 
  } }
  
  const LordThunder = require.resolve(__filename)
  fs.watchFile(LordThunder, () => {
  fs.unwatchFile(LordThunder)
  console.log(color(`Modificado! >`, 'cyan'), color(`${__filename}`, 'red'))
  delete require.cache[LordThunder]
  require(LordThunder)
  } )