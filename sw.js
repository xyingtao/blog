/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d4882a7e5a44cd17aa63b82a9cea98b0"],["/about/index.html","730a365f3d08522d6a606aa4d55e1986"],["/archives/2020/09/index.html","60c5252bc064ed5246fe530cb2fe8d10"],["/archives/2020/09/page/2/index.html","30530eb48148eeda0f5a7c49321ecf24"],["/archives/2020/09/page/3/index.html","79830db70bff96c09f7d0b8feb10d6c1"],["/archives/2020/09/page/4/index.html","561795818d4ef556579901e4fc669dc3"],["/archives/2020/09/page/5/index.html","c38625e6d9f633738023b97f27959d89"],["/archives/2020/index.html","c09233a61399ab5c33e909f2461e6f17"],["/archives/2020/page/2/index.html","2bb16e8fb5cca9ecc4e73047aa6ad599"],["/archives/2020/page/3/index.html","31ebe825512c28ffc073f652e0dbcb5f"],["/archives/2020/page/4/index.html","88b7a20ae1755de795bfb1fa6cc0ab0e"],["/archives/2020/page/5/index.html","86978cea5b5c17bb2fb2f37a2c0d7ffa"],["/archives/index.html","1a16880e195486e39c92196e8b535174"],["/archives/page/2/index.html","f8718a1eb3ed3c131e1a6f7a8ae708ac"],["/archives/page/3/index.html","f732d6cc76f7151222da6484b4aab11f"],["/archives/page/4/index.html","7904a5ae87738c624eaca7498e6180aa"],["/archives/page/5/index.html","8c0dc0135e02378eefb070c3ecd9417f"],["/books/index.html","bda70b6b985eb243eec2fbc2757e9dfa"],["/categories/AS-400/index.html","43f1709c3abe8ff02bc89562b32619a9"],["/categories/Docker/index.html","67f269df72a74d4364e9a447a2da8345"],["/categories/Java/index.html","2fc00a2cf8c1f7461079f28a0b9be535"],["/categories/Linux/index.html","32e308fe9955ffc85ba66831546092b8"],["/categories/MyBatis/index.html","488034043501814be6f8ba04cffe670b"],["/categories/MySQL/index.html","c8e6e0f23555cb39a7987ac19b4d820f"],["/categories/Nginx/index.html","b7717d583b49ba48a7631a97d056b42f"],["/categories/RabbitMQ/index.html","9455f9aecbd9b80739c1484b9de4278b"],["/categories/Redis/index.html","aa2bb1869a8f8a67ed6c615638028b0c"],["/categories/Spring/index.html","781acf103fd1c1d75e99ee49e4e5949f"],["/categories/SpringBoot/index.html","9b722373358e86020f680eb141028ae3"],["/categories/SpringCloud/index.html","9647aa4f511fdcacbf110f070e54cb42"],["/categories/index.html","0996588f6c1d0d9785fbc55e7206628a"],["/categories/其它/index.html","7d37b12f33a47c8ad91d1f227de5b279"],["/categories/分布式/index.html","77db443729f361e046b6c44e0416dcde"],["/categories/数据结构/index.html","0f66bb23b2b407dbe40cd3d343697a82"],["/categories/算法/index.html","aa1fd849e9dae3460196af1198760d21"],["/categories/随笔/index.html","18744a6e9c097bd10bd8b09b05353d9d"],["/categories/项目/index.html","854daf6f1e3b373474ab17a3ebf5b594"],["/css/font.css","1477f9a443aeee857349b31be69debdf"],["/css/index.css","2cad20be512cb3bedf6213464696f52e"],["/css/var.css","7418f5658715970dce1bf3ab81c9f739"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9aad5560e80e6c6d79b2ac1145519ef2"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","07442315ffbe17d5e8b70cfdc13ea1fb"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","12786230c921d777ac1105c93b5822ed"],["/movies/index.html","0e45c963123b9b83ce60bfc43099a6d2"],["/music/index.html","8cef66a884a3d70a7e1d5b130536de0f"],["/page/2/index.html","b96e10f0a07fddd1bc89525666926904"],["/page/3/index.html","75ea73587cb6b79ff0b43de9dd189938"],["/page/4/index.html","7913c300136585435436a568b3e22831"],["/page/5/index.html","925353d5ec79cd7498dec8acf7ad13f5"],["/posts/13c31df7/index.html","f2277dcfe7dbbc413b84c2672c297e2e"],["/posts/167fb41b/index.html","c0fc7988846c61318bf285a37e634db4"],["/posts/168bc69/index.html","1d0907c63671f80f536c79b44b46a2cb"],["/posts/1dce0fcb/index.html","70f16195865e96737d3d54cc818389ee"],["/posts/227e8862/index.html","a94a9a8f85cb529fc0aaf115dfdce9e2"],["/posts/23821d49/index.html","30287eb655438379d2edb0d7c75c09b2"],["/posts/26fbc59/index.html","9dfd28620b7ff63dd139b91ea07b8e23"],["/posts/350366fd/index.html","6f178fee03cd2082a184651523731f87"],["/posts/360c21de/index.html","60b6d53ecfe7773775d876de248bd342"],["/posts/3b607b89/index.html","0fe6edf650090f5003978f0da6854ce3"],["/posts/40339b69/index.html","aa21e8fb90b8e82ab520541a8c203a77"],["/posts/453a1ac6/index.html","82e14c71d001767abcee910b53d7800d"],["/posts/4a5705df/index.html","b33eea15b1a1e68f2906108f9425f67d"],["/posts/5a3e9c20/index.html","db7459c903a3c7137971b68ba4a21f9e"],["/posts/5bf8d605/index.html","ea2439aa1d42276fa9de315de2710907"],["/posts/63f0196d/index.html","c08affa72477af99304bba514ef98c53"],["/posts/669168dd/index.html","31aee6bd41eab43440e7541c47d39a46"],["/posts/66c89092/index.html","dc7d0fc5e003fdffff100fdf66f04304"],["/posts/6b0c8c5c/index.html","d8eb9b7b4eecb4fca666f7e5feda66ab"],["/posts/6e3a2914/index.html","950db2e522ca4c3bcd5cf3690f781e3b"],["/posts/89080a8e/index.html","a5bc1876617174afbc3540bb826a5985"],["/posts/ac5283e5/index.html","85360cd9335a3fc0a5509f91648c087a"],["/posts/af9dc3a7/index.html","fef7de20c98692cac29f0f275146eb18"],["/posts/b4d7ce2e/index.html","93ec9013f4bc523f17530b3757c68dbf"],["/posts/b5f946b9/index.html","60992270869620527229e751b3e7b035"],["/posts/b63fea97/index.html","b98b37e2689c065b148d554928c317ea"],["/posts/bce763e4/index.html","642bba766411a898e4bb0cb6e7836dcc"],["/posts/c2e910d3/index.html","7c3884d19a5984fd0a1430394f92ffaa"],["/posts/c41e9d72/index.html","57186ba39faedef1c5eebf30366703cb"],["/posts/cdcc4eae/index.html","d2765bd37dfb8db7650dfc0a34df9b63"],["/posts/d1874913/index.html","5d2f614524435f8656d0774077d9917f"],["/posts/d5ecab99/index.html","71e7e13f4f782e29d7ef895fbd96372d"],["/posts/da496cff/index.html","18eaa84ab620bdb7a1809e9c0b0b5120"],["/posts/dd8469b9/index.html","ac82f32235aea9ee8d093e965ad09f83"],["/posts/e3ba8d56/index.html","5605671a4f0e6cebafee4348f2876200"],["/posts/e3e2e8e/index.html","2666bc728e97a0c6b03bf084cb3b321a"],["/posts/e911dea2/index.html","2149fa8a6c9e55e46875ca4029028959"],["/posts/eebeef7f/index.html","c1457dff91982aa11b3881556a02b26a"],["/posts/f5210c15/index.html","bc41d014334b091c28adff36741dc21d"],["/posts/f5f9fa9b/index.html","683b4824c91049c26eb7e5b18175188c"],["/posts/f8d13d4c/index.html","d506ddae951d23ab9975a8992fd31650"],["/posts/fea7e8d3/index.html","bdd8137524212ca9f37ef9bd853e78ac"],["/sw-register.js","88c849b872f6b8beeff64dc1649bc2e8"],["/tags/AS-400/index.html","6433fd9d0596fc6b42436cdd19dbc558"],["/tags/Bean/index.html","61418039e5d81b68c3743b787f108418"],["/tags/CAP定理/index.html","1c9b97a8f83c81296211d6415b59d833"],["/tags/Docker/index.html","782762a2babc4dc716290c7558554d38"],["/tags/Java/index.html","3eb4256208823cce34f919cf918b1400"],["/tags/Java基础/index.html","684ebc1c6ec4502f23ebd7353bce9cdd"],["/tags/KMP算法/index.html","68f981e56d9958578cb98e17293b112d"],["/tags/Linux/index.html","b34bae068f6d7a9cac148e29b94f3b3b"],["/tags/MyBatis/index.html","703c42036aaeb8350538696e0d3dabd5"],["/tags/MySQL/index.html","a75d7d7fbd6fa3bb1ee6ff5cc5f14ed8"],["/tags/Nginx/index.html","fcd92864edd701fbeb71f057e2de4e7b"],["/tags/RabbitMQ/index.html","042fc1b1b03b9ee70a8ef6af7fce53a6"],["/tags/Redis/index.html","47b1b4576048fd98f6e3581e9edc239b"],["/tags/Spring/index.html","3de228a1e53ed8cb7272ceb7828bcd95"],["/tags/SpringBoot/index.html","0931a52a040fe8f6edcbe49af55fbc8a"],["/tags/SpringCloud/index.html","abe16e63db69411dd25455a499b82285"],["/tags/Vim/index.html","733f903740c20adb7e7ce8744eae0bdb"],["/tags/index.html","b4075954172bbbe96a7778e6831b0705"],["/tags/seata/index.html","2b59d56eee106f74af4d96cfe06538ee"],["/tags/中心拓展算法/index.html","e44323f048861ab75b7d561d0c4341dd"],["/tags/事务/index.html","10921cd22ceb19c79395052162c5639e"],["/tags/二分查找/index.html","086fa92cfd7871ce64330566c28bcc42"],["/tags/优化/index.html","c1cb0d3d2b6707e4a8cf6d6d76b25c05"],["/tags/其它/index.html","cc49c4f9e4c631d10ff79f0e3dd5ade4"],["/tags/其它学习/index.html","4f075b5aafd066a2915b0bed3bb28e03"],["/tags/分布式/index.html","b134bae607324661c902d33a28177a8e"],["/tags/动静分离/index.html","bc6f878daf016f70a6fd8f839c2762a5"],["/tags/双指针/index.html","04be27f9caba50baf291d9b838afd77e"],["/tags/反向代理/index.html","9ffb6685f9f20d544d57d0dce3900555"],["/tags/回文/index.html","de2d1ecc2ea44009547294cc9bfac76c"],["/tags/基础/index.html","ae7118ec6b07d95562231f27a276f969"],["/tags/字符串/index.html","dcafd8520a1bd4ee5e97def0dd58764a"],["/tags/工具/index.html","199fbe157720d9e49c958f8647e78f95"],["/tags/幂等性/index.html","b398a52cce55ab06fa62b82cb51394f0"],["/tags/微服务/index.html","dd4caddc90fade61d97d41d46cb72f24"],["/tags/持久化/index.html","c6e34bc641fbaea28e2c18ba8a905c06"],["/tags/排序/index.html","9177065c551fa4405f70ed95a41c30a1"],["/tags/数据结构/index.html","dcc35cc6fa147f65cdc2c7409302f762"],["/tags/数组/index.html","8c3d79c51e4b24d6b8547150c9df5b4d"],["/tags/整数反转/index.html","29e7cef79c8734e0c4d48e86df425f06"],["/tags/时间复杂度/index.html","68477c88922e392586c1a767f4d2fc19"],["/tags/查找/index.html","9a1f1efb50b9bcab14174e90a83b8268"],["/tags/空间复杂度/index.html","6165312f40a2edcff3b7787c432ce1c0"],["/tags/算法/index.html","9a9c448165518e84c13f36dd56406a8e"],["/tags/索引/index.html","478be384cb52920ce110a33ad3257265"],["/tags/约瑟夫环/index.html","caa3fd325d8d7f13c064326e4db48626"],["/tags/缓存穿透/index.html","124f5c8f3f7e22e0758825fd75675e7c"],["/tags/缓存雪崩/index.html","6a733ad3bfa01831378a2976bf54e2f0"],["/tags/负载均衡/index.html","3d37684a6be32064d77364affacee661"],["/tags/账号管理/index.html","f4f3375277fbc32dad295b4a1d9119a4"],["/tags/软件/index.html","5d57ed905a04c8cf5a1b7cc2ff653faf"],["/tags/链表/index.html","70c7760ee0e148e2d0e91c64045b975c"],["/tags/锁/index.html","03abbfaa80a49ec5616d63f27b2ff173"],["/tags/随笔/index.html","3a4f46a2ca6b86c232d0b1861b8f363a"],["/tags/集合框架/index.html","af81191d4e3f2d0f1b49713d445f9249"],["/tags/项目/index.html","018e3c7e7732421e8c8f653e4677af19"]];
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
