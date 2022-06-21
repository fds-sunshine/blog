'use strict';

module.exports = (hexo) => {
    const isZh = hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1;
    if (isZh) {
        hexo.log.info(`
------------------------------------------------
|                                              |
|     ________  __            _        __      |
|    |_   __  |[  |          (_)      |  ]     |
|      | |_ \\_| | | __   _   __   .--.| |      |
|      |  _|    | |[  | | | [  |/ /'\`\\' |      |
|     _| |_     | | | \\_/ |, | || \\__/  |      |
|    |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                              |
|             松松大魔王棒棒哒 !            |
|    文档: https://www.fangdesong.com    |
|                                              |
------------------------------------------------
`);
    } else {
        hexo.log.info(`
------------------------------------------------
|                                              |
|     ________  __            _        __      |
|    |_   __  |[  |          (_)      |  ]     |
|      | |_ \\_| | | __   _   __   .--.| |      |
|      |  _|    | |[  | | | [  |/ /'\`\\' |      |
|     _| |_     | | | \\_/ |, | || \\__/  |      |
|    |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                              |
|       Thank you for using Fluid theme !      |
|   Docs: https://www.fangdesong.com   |
|                                              |
------------------------------------------------
`);
    }

};