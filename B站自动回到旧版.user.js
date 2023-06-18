// ==UserScript==
// @name         B站自动回到旧版
// @namespace    http://new.longz7z8.com.cn
// @version      0.66
// @description  很简单的小脚本，自动让B站界面回到旧版（18年版）
// @author       Han121010, ChatGPT（辅助）
// @match        *://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    document.cookie = "i-wanna-go-back=2; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "go_old_video=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "nostalgia_conf=2; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "go-back-dyn=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "i-wanna-go-channel-back=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
})();

//本脚本由Github上的longz7z8制作！