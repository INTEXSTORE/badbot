const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	dappa: 'https://api.dapuhy.ga',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.dapuhy.ga': 'DappaAnjing',
}

// Apikeyweb
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey
global.APIKeys = {
	'https://zenzapi.xyz': 'f42913c519',
}


// Other
global.fortex = 'Intexstore-Bot'
global.instagram = 'https://instagra.com/intexstore25'
global.youtube = 'https://youtube.com/channel/UCG887zXkJ7TYMwPAULTMolQ'
global.owner = ['6285894148101','6285894148101','6281318054482,]
global.packname = 'Intexstore-Bot'
global.author = 'Intexstore-Bot \n\n\n \n \n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'rionnnn'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync('./lib/Rion.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
