/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6716d427d82a3f6cb109b3c0e5165016"],["/about/index.html","6c96c07e281f12b4b001655147599891"],["/archives/2020/09/index.html","6d0ee59d1ffc08d1930a3f69a63a5fe1"],["/archives/2020/09/page/2/index.html","6e70c6fae43fae4a6e6a91d84a0d36ec"],["/archives/2020/09/page/3/index.html","f4b50be8d02863bfa6ab69da60c91293"],["/archives/2020/09/page/4/index.html","5d0dcd263a72e668079751698b0050aa"],["/archives/2020/09/page/5/index.html","fcc53f4202b8e7518534dd2ec4f26cea"],["/archives/2020/index.html","a9fa6478e0474e05ba062bda34b8916a"],["/archives/2020/page/2/index.html","a520be0fb8e8a08231395a5167fd83e1"],["/archives/2020/page/3/index.html","8b7001746d96e83bda5b4b0f8f5c378f"],["/archives/2020/page/4/index.html","755e1cf4e73170cb65c8d161124b3a32"],["/archives/2020/page/5/index.html","97b909f494117086fdac8d4df76f6703"],["/archives/index.html","07a31d8021c780c384306eb0c81a94d4"],["/archives/page/2/index.html","9519703c4a4e14bf5164883933ae9460"],["/archives/page/3/index.html","538bcad8d1585987b2b0958f25aa693e"],["/archives/page/4/index.html","fa6a9f9345144280acebe679d5dc4115"],["/archives/page/5/index.html","63f61bf6864bae2e76a7698e9dde2c12"],["/books/index.html","5c93f036b0e556afaaee44a3d34eabf0"],["/categories/AS-400/index.html","5bb9ae9a2a0746737ddb8bac552acb71"],["/categories/Docker/index.html","83d6f49a9264cfa5350c50b0df8a3856"],["/categories/Java/index.html","9e7686de9537e77c04a222918485a3ea"],["/categories/Linux/index.html","e2f14f494cb5b93fc5c8e4274a22f346"],["/categories/MyBatis/index.html","0fe4edfe86e4eb4ae0344beb4ab01ac4"],["/categories/MySQL/index.html","b7a77b9b3ba03a12de4d9c41603dfd26"],["/categories/Nginx/index.html","684d71664c6393241306485c3163e9f6"],["/categories/RabbitMQ/index.html","ec234fff7e7f1096868a15666af31947"],["/categories/Redis/index.html","d285698e7565d1f5c0ebaee57ea0044f"],["/categories/Spring/index.html","72b802d0ea9f64e11539d60db1db615b"],["/categories/SpringBoot/index.html","b9321a41c1169e0ee7e99637ab3174ce"],["/categories/SpringCloud/index.html","1a455435a807d45c6260bb9872f2bb8a"],["/categories/index.html","26ac02ea89636c4304f9835930779a90"],["/categories/七大设计原则/index.html","77bf6f5850ecf2a7743ad1f40d0b0ed2"],["/categories/其它/index.html","f026713cf6effcdd03f48c3bb6c37853"],["/categories/分布式/index.html","40805a7a40aacae017681fd9a653f1fd"],["/categories/数据结构/index.html","0b2b330383df205b9b56ee133fb91888"],["/categories/算法/index.html","d1a194d083f8a8ff880b70db48a2c1d9"],["/categories/随笔/index.html","f5618b5f8bd7d14d77ec52441d4720e7"],["/categories/项目/index.html","1d07b34d5e348db60b7b74685ef2d3eb"],["/css/font.css","db9d6670a4e480277adffb50dbeb01a8"],["/css/index.css","6974f8a86d042ca9e05a602c7eb2d61f"],["/css/var.css","58bd6fec80f5b02f7ccd4af5aa4aebf6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","00aab4a5e53aced0262f58d21b13083f"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","b6400b4661e957f14c8867dd3347e6ff"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","d8ff83497236d3156c4241a9e4b32365"],["/movies/index.html","77a5c7abd219f2ee5af25de43e097d78"],["/music/index.html","b5ecd78641bc084b8d6fb102af3d3b72"],["/page/2/index.html","42950bb5f2d0341fd1b6d8c5f6cb6139"],["/page/3/index.html","6d106ac8e7d38abe42bf0c63dbe4dfc9"],["/page/4/index.html","692f1dd4f3807e286908c30ca9c47cf4"],["/page/5/index.html","c58a6197ba16c3e06d59afe074f2b51e"],["/posts/13c31df7/index.html","73b6e5ec95ab339ba51ffd39b293f0ba"],["/posts/167fb41b/index.html","bf2022a8ffee118ab4ff0fa06dc17050"],["/posts/168bc69/index.html","3812fa260b98c8f29ff0c8100e9d081a"],["/posts/1dce0fcb/index.html","4f2e652abea332d893ce485601b3e18d"],["/posts/227e8862/index.html","824c8c620d38f595c6eb0c298fad615d"],["/posts/23821d49/index.html","318b19e74ec9b23d90b196a4e246d2e2"],["/posts/26fbc59/index.html","3495675eaa1192f03013a0797f1780d3"],["/posts/350366fd/index.html","1f54d12889f19d20a598a0ba939df0b2"],["/posts/360c21de/index.html","a1496aae713c17236f65d1faa18e1a41"],["/posts/3b607b89/index.html","e4e0116e292027b75df568b1e237a0b7"],["/posts/40339b69/index.html","1e9bb715d0de3e2ec124767ae6be44fb"],["/posts/453a1ac6/index.html","f916e7566186d8c5235279a9e50a1142"],["/posts/4a5705df/index.html","9efbeec68317de5a2acb279ce7d0549f"],["/posts/5a3e9c20/index.html","d9092bd53a7182aa6d4b0e4807698a3c"],["/posts/5bf8d605/index.html","cb6324e4d432884234cbff323bf62d6e"],["/posts/60ccc137/index.html","7eb7c443d879d1629dfe39373b7785d5"],["/posts/63f0196d/index.html","89c4f48799641693438ca0a66595eab0"],["/posts/669168dd/index.html","59f1aa88ff61282602423c778e551833"],["/posts/66c89092/index.html","70e1dc0cd8d1ce1228edaf2e47402d7d"],["/posts/6b0c8c5c/index.html","c38a449d7bc34d1d7e16169381d8a379"],["/posts/6e3a2914/index.html","14487e8b80a15b87c580fb7a7f973517"],["/posts/6e639b06/index.html","4d481a5f15dfc0cd0552e807e4501faf"],["/posts/89080a8e/index.html","dd5d639fd4ef2064ee5d8f67d5f2caa1"],["/posts/ac5283e5/index.html","1c4d6e71bc6d182388b226e37551de65"],["/posts/af9dc3a7/index.html","20cf6e5ba629c18351a163d2374e2f0c"],["/posts/b4d7ce2e/index.html","a3d2ef6e8cab7303c082badf99c0bbda"],["/posts/b5f946b9/index.html","65db4d457178d08ad4540a2d282c5dfe"],["/posts/b63fea97/index.html","4befedf3801c516142743164f485a5a8"],["/posts/bce763e4/index.html","78cd85f77838186a42d6ab5280c21cb9"],["/posts/c2e910d3/index.html","2ef8a0bf3a431efc3294241f546ceac0"],["/posts/c41e9d72/index.html","f08f020c05c0a222fd1598f4cd7fec2f"],["/posts/cdcc4eae/index.html","58ce80f21603e0ba16dee8606a30c79e"],["/posts/d1874913/index.html","f6537ac57ea90aea2fa6b9c4e137e8d3"],["/posts/d5ecab99/index.html","514568e72522f04983f8816b3b1b3564"],["/posts/da496cff/index.html","f5bc2c98f4c2901bb141bb23b1d0030d"],["/posts/dd8469b9/index.html","091829159a94cd51330f35cde778633b"],["/posts/e3ba8d56/index.html","92c76d77eb4956097cda14273bbcd1c4"],["/posts/e3e2e8e/index.html","2ac524778eb9fff7681efef898f86a3a"],["/posts/e911dea2/index.html","133010813652ed7f977eb1f42ceaa902"],["/posts/e92e34b8/index.html","14b15d5614d9999199ce6e7d037d15c0"],["/posts/eebeef7f/index.html","b56e31100dedde50cedf7d61da73ab2e"],["/posts/f5210c15/index.html","0b68779d9190441b257f26c049d86d32"],["/posts/f5f9fa9b/index.html","134b12b1129466bc05b47cbcc6dcb866"],["/posts/f8d13d4c/index.html","57e987b225a1e47a8c886f4aacaf01e8"],["/posts/fea7e8d3/index.html","16dc120ecd322aa604a5541b536c8416"],["/sw-register.js","144a5304e0cbb5fc3d0a0bc86feb62a8"],["/tags/AS-400/index.html","7d8bdaeaa316967caf96c966dd443212"],["/tags/Bean/index.html","55f476330d0c25b91ce34f55aeea1e2f"],["/tags/CAP定理/index.html","8fde8fee2610d3cc602d3f82e89d6650"],["/tags/Docker/index.html","6439112715aeb1edb634ee12932ffc28"],["/tags/Java/index.html","af78f2dc53799bda57a5c2faddb384a6"],["/tags/Java基础/index.html","05621f0ff7707798d546da42df896c50"],["/tags/KMP算法/index.html","42a54d629533ed2e654d4a68329dff35"],["/tags/Linux/index.html","221267fafb15b615ef320dcb7bed4f6a"],["/tags/MyBatis/index.html","2baf6ab3783c7221991c5acc130333fb"],["/tags/MySQL/index.html","28f4f4a8cebbdd795c2e19dacff59913"],["/tags/Nginx/index.html","66bbff056d468357e7975f532aa716d8"],["/tags/RabbitMQ/index.html","af7ffb81ad944bc434091337280db32f"],["/tags/Redis/index.html","1708449e5f2c770a709bdbab464cf5ce"],["/tags/Spring/index.html","df42ccda8ac937688c617603490346c4"],["/tags/SpringBoot/index.html","89012e71f04c9f10a2349a1772ff62e8"],["/tags/SpringCloud/index.html","09332a1573945c5d13d895bf7d3aa093"],["/tags/Vim/index.html","8efef203e1acecc8596e50ae92210471"],["/tags/index.html","8cb265690eb72507df12ac7fc45ac424"],["/tags/seata/index.html","13cd0024ef068dedb62fdd1028d8ded4"],["/tags/七大设计原则/index.html","8d39eb25f61214a96c2fa8237f90381a"],["/tags/中心拓展算法/index.html","79bcbd159ac7deb0a4692a8cd816afaf"],["/tags/事务/index.html","6e3b44d4c6af1aaa23216686daa881a2"],["/tags/二分查找/index.html","b988254c8f6bfaf8f706e34c587fb193"],["/tags/优化/index.html","75f493e45eb214caf0cf9697536a82ff"],["/tags/其它/index.html","2147c3227e14747bd32eaf107384490f"],["/tags/其它学习/index.html","51fb541fd51c057d40ea18d022cb9c44"],["/tags/分布式/index.html","333fc804b8526e25fe3e271e74000be5"],["/tags/动静分离/index.html","b466c5790c217a3455ef39b4929c8b9e"],["/tags/双指针/index.html","b27d6b63e0e912072e636980199f5cd0"],["/tags/反向代理/index.html","9dbb64c0ceffdf30aa339ef1a61f64d6"],["/tags/回文/index.html","5669141bda8cf6a265530e325ff2dc69"],["/tags/基础/index.html","df7cea3706ba6ec773d712d07bd77a96"],["/tags/字符串/index.html","27affdc16e4e5e05d8c8556f9700a346"],["/tags/工具/index.html","082a5a07d97e5d067bfd0f9b306b1be4"],["/tags/幂等性/index.html","537a702da9438b8b8dad3bb3ec82f8a5"],["/tags/微服务/index.html","775b57b00759159f2ed9873f20faffb5"],["/tags/持久化/index.html","bcb93e56716f10fde798bfc288bfc414"],["/tags/排序/index.html","40e03fbe13bfde9befab487da40263ef"],["/tags/数据结构/index.html","cc3eb12aece714d843fc1c2d3916a091"],["/tags/数组/index.html","ad5058cb47bd35f65d141d34f9e94657"],["/tags/整数反转/index.html","38647256fa8676d1e0d137fcd41407b9"],["/tags/时间复杂度/index.html","bfcbdb2be6fa6882210f6ffb6f292a6e"],["/tags/查找/index.html","accb80e995ffeb8f00e87bec17566ef1"],["/tags/空间复杂度/index.html","d3f356020f4c3a09047138e71ce58b3d"],["/tags/算法/index.html","3cf15d9e893b49105f188c773b0790ec"],["/tags/索引/index.html","538fa150f48d31dfd781fe7cf1aa31a6"],["/tags/约瑟夫环/index.html","473837c79d955afc35477694ffb12f5a"],["/tags/缓存穿透/index.html","b3464b006c007455e0ead1a94c997f6b"],["/tags/缓存雪崩/index.html","e993f164a8024c82fc1014efdb28321f"],["/tags/负载均衡/index.html","35b34460d85297c0edfdfcb26ce7b0c5"],["/tags/账号管理/index.html","f3275c6f2879b6fa46ba5bffe736ca62"],["/tags/软件/index.html","b2d7e9d66bada9c303f7bfc6e12f894c"],["/tags/链表/index.html","e44376aae48b7736baea3b77df452b87"],["/tags/锁/index.html","21767822b403e096641908ce4a9e6225"],["/tags/随笔/index.html","c55cf5a09fa61672dd77d16567493c22"],["/tags/集合框架/index.html","baeea000d646b1c9ea4753eae3e34bd9"],["/tags/项目/index.html","0c685b0f470691a5680f4226f85da595"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/npm/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/gh/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
