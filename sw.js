/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9d63ba4874bed86a18b42ffd3c70c367"],["/about/index.html","9a09d590119cff90aa9514ad30ce1e41"],["/archives/2020/09/index.html","0445be82b11c16ba1ec4c38a31087e2a"],["/archives/2020/09/page/2/index.html","1b52da9ccce5abf1e6b4ab2bf7821ae8"],["/archives/2020/09/page/3/index.html","6b6b4088513472875b89d3bed26a38bd"],["/archives/2020/09/page/4/index.html","0ed2665d578475fcbea00efa5d5b1107"],["/archives/2020/09/page/5/index.html","aa0203a138226cd281e71588175b41fd"],["/archives/2020/index.html","a627c5e92891985541fcec19eab168ff"],["/archives/2020/page/2/index.html","a312b133753bf6d8e7196ab433f8f99c"],["/archives/2020/page/3/index.html","232a014705a4a38d9a6640681e33ec11"],["/archives/2020/page/4/index.html","78f1b7d8c3c43ea7130b7d5555eff615"],["/archives/2020/page/5/index.html","3756248f5a0d7942902f6debf4688c64"],["/archives/index.html","a68b7fa94531f054a79f21f208faf9d8"],["/archives/page/2/index.html","fcd27f8fa2c4ba70ae7f9eb18a6317a6"],["/archives/page/3/index.html","d5afdd4cadc3b7a761b415a37ee89945"],["/archives/page/4/index.html","fb028fcd574e6ebf9953d828dbf6344d"],["/archives/page/5/index.html","e494df01910a4b0ad8b4ce0034c3816d"],["/books/index.html","89f181be932b4cf604a7cee489fc07d0"],["/categories/AS-400/index.html","207d2f1e83018a48f2cd7b678b577ac3"],["/categories/Docker/index.html","5c6d38cf9de9fb82d173d7b07c1a889e"],["/categories/Java/index.html","582ead636fe145ab4543bd2f72cd9e19"],["/categories/Linux/index.html","39049cebaec49f5561c126eabccd2521"],["/categories/MyBatis/index.html","399ad506330c1d384f7e4bc39266bb39"],["/categories/MySQL/index.html","9573bcf57deb26838af7acac73982c55"],["/categories/Nginx/index.html","bba8073e5341a83416b22ceeec828d70"],["/categories/RabbitMQ/index.html","ce2c7e0a5b9b07c7e62f05427182295c"],["/categories/Redis/index.html","83b2faf64c9fe1cb8d1073675ad2b266"],["/categories/Spring/index.html","65f5600225bf4b0633aab6c6b387fcff"],["/categories/SpringBoot/index.html","9b7b778f8cca2f371fbbd3dcb67c33a4"],["/categories/SpringCloud/index.html","c73c263abf3146b7584227cbfcd7bf8c"],["/categories/index.html","70eae9b1f2f957087120f2ebb2ffd82f"],["/categories/七大设计原则/index.html","fe490f6c5434fd7e7cc1b866b069f57c"],["/categories/其它/index.html","26e5f9c5040a0b551a83fbcb640e4a91"],["/categories/分布式/index.html","93b7eb29c5eba6bb0f5f5c0b5cb2fa88"],["/categories/数据结构/index.html","8e1da7a200d8615da98ff210431f335f"],["/categories/算法/index.html","f5d57f5831397f02ceaf69c95110fd9f"],["/categories/随笔/index.html","f7a25e0447f4062b5cc75ece6a2c0891"],["/categories/项目/index.html","11ba8c11b76ee9dfeea2fd08b6547337"],["/css/font.css","3d6abf49906133b3538b40ef5f8677b7"],["/css/index.css","e534a664ac1f1e2314df52b1f2ea76c5"],["/css/var.css","423e7b5fda3b9c75c1e4b474ee4e6924"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9a24ac205696c23ef6386f4925774de2"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","0f8dbc6acd29a0ccd03d12f0081eab06"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","561acfa0ee4680f401958d1bb050fd46"],["/movies/index.html","332084d361fd5da244e5a1ec25dafbc1"],["/music/index.html","9fddb8f32b3774b34a5f52664a0f7ff4"],["/page/2/index.html","d13a85c65838f66f5fe22148cfd82551"],["/page/3/index.html","4e4a7d9df5acd5a041e3e2bc457387b6"],["/page/4/index.html","d3b0f1d30c8efbad36985feff5a7976d"],["/page/5/index.html","550ab27d7e3ee125b1b71d1606c801bc"],["/posts/13c31df7/index.html","f6a8ea3ce580246d11ed477773be328d"],["/posts/167fb41b/index.html","78a54aca7f4c6b72600263ee1a28ea18"],["/posts/168bc69/index.html","0d6e3760cafbcc5dac746c2f30c87bb7"],["/posts/1dce0fcb/index.html","1216cfcefac4d9ae9220d6eac7351400"],["/posts/227e8862/index.html","e41cdcce6ec89fbbb8d43bed5c679f39"],["/posts/23821d49/index.html","d4f41488c8cfb63dbd8bf0e239a11387"],["/posts/26fbc59/index.html","adb51cfeee358ea1337940bbff65552c"],["/posts/350366fd/index.html","e2efa255a08ab03c661cbb00605636d5"],["/posts/360c21de/index.html","2c09af651ad1d61b1ad6cfdd8093d649"],["/posts/3b607b89/index.html","cb28105c49f38494d648646045900c21"],["/posts/40339b69/index.html","3b1e8309df3fa2a0255a564855424432"],["/posts/453a1ac6/index.html","10aa5f1cbafff2e01e4044647e6accfe"],["/posts/4a5705df/index.html","c2db9b023e4870ba8c8fd738f0b567dc"],["/posts/5a3e9c20/index.html","e2d0a106e97e8c0f9362c1f7e333583b"],["/posts/5bf8d605/index.html","1cc84f44c340ffd10e9ca30dc5730f5b"],["/posts/60ccc137/index.html","d72486432320d9312d51168845d9313c"],["/posts/63f0196d/index.html","547c1d9ad8c22b50a8d6b728919d253a"],["/posts/669168dd/index.html","d894d08585c7aaa0f949aaeb6dcd6228"],["/posts/66c89092/index.html","5892f9e5fa158b77c3c82f174a7d42a6"],["/posts/6b0c8c5c/index.html","7e7c21cbdf9dbd82d03c6abda776ee7a"],["/posts/6b557ec5/index.html","b490653812e9dc95b6e964f8c101a06e"],["/posts/6e3a2914/index.html","866245b6ea019a164406788c429e138b"],["/posts/6e639b06/index.html","5d5777ec9fa4c109b60707d12617069a"],["/posts/89080a8e/index.html","fe9480c4bcc1bbb6f0bb220c2f85132e"],["/posts/a0ae3de1/index.html","929add4e76dfb0ed127c091e0b220f4e"],["/posts/ac5283e5/index.html","74c0cf5bad93036a8080296eee27219b"],["/posts/af9dc3a7/index.html","0463b15267d9c09762ef322f8dfff429"],["/posts/b4d7ce2e/index.html","e00f17bd394f05e232e838f85c256229"],["/posts/b5f946b9/index.html","639706c8564f08817a44254eda0cffc6"],["/posts/b63fea97/index.html","c76c31066346336b64cc2ae94ca5596d"],["/posts/bce763e4/index.html","cfb72537808414e6bdb22bd1d8fe1826"],["/posts/c2e910d3/index.html","8ccb112af1dda04d8ec4998f60e5cbde"],["/posts/c41e9d72/index.html","d8080c56902243c1ac46b258b04fba9a"],["/posts/cdcc4eae/index.html","16d7f1b6063b8633fe0d91097977add1"],["/posts/d1874913/index.html","609324d15d3e2325dc159179caae5b2f"],["/posts/d5ecab99/index.html","cb609382a7efc7fc9f1b7095fc2f1a1c"],["/posts/da496cff/index.html","5a12df8cbb00a726aec975bcec6e005d"],["/posts/dd8469b9/index.html","fc7c640de62f0d42c022cd26ee4cedba"],["/posts/e3ba8d56/index.html","3a1c1c9281a9b86b2ca3c26083c68a6c"],["/posts/e3e2e8e/index.html","5dd4d9c2ea12524c45047819e77de59a"],["/posts/e911dea2/index.html","885b4743c64915082dba9c1618c5675a"],["/posts/e92e34b8/index.html","8be534849a5a6ca01381491db38b3f7f"],["/posts/eebeef7f/index.html","94530abb6a19a0f0898b11922cd1901f"],["/posts/f5210c15/index.html","40944671f32a166d95b0713d224fdbc5"],["/posts/f5f9fa9b/index.html","ad4d7e710ab324297d2581366f06a1a3"],["/posts/f8d13d4c/index.html","9f53906b8c2e2bbd75627cb51eb440e2"],["/posts/fea7e8d3/index.html","5a8e9b051217d458f0e4eb3bcac53d5c"],["/sw-register.js","6189498015da362416b29088f703f3ec"],["/tags/AS-400/index.html","c9cf93fa996ac5536b593d03437c30d9"],["/tags/Bean/index.html","2e3f2cefe4c51be864856229c5db0ccb"],["/tags/CAP定理/index.html","83b01055db68e1c019c6acdfea598ef7"],["/tags/Docker/index.html","8d1010a835652f4d7cd6b83bdc9f867e"],["/tags/Java/index.html","aa42a9f9e4104bf6fb45da879da714a2"],["/tags/Java基础/index.html","5a5652805524028064935909f07b978d"],["/tags/KMP算法/index.html","567196211fbde273bcbb9962c0b9144d"],["/tags/Linux/index.html","2c02ae998aa7124cb781cf31cf8c1b1e"],["/tags/MyBatis/index.html","3638d700a718353407a64126aba70b31"],["/tags/MySQL/index.html","b93a26ae1745e71395c0e31055208041"],["/tags/Nginx/index.html","62808f25cb4690243b1732eb5a919742"],["/tags/RabbitMQ/index.html","1861c9df3009cf838e291ad5fd24e3ac"],["/tags/Redis/index.html","fcda9379c0afe577469f586e01b86301"],["/tags/Spring/index.html","a719b6e25080d5c1bc4c94a23502ec99"],["/tags/SpringBoot/index.html","aa8901678ad9aa8fbaaf0ab5e74b9375"],["/tags/SpringCloud/index.html","af02d10ee3dd11e0c268c0065aa0182b"],["/tags/Vim/index.html","d057d153aa96faa15c841573c033a398"],["/tags/index.html","d39d2246eb8bbe6039a8aa3bdeb8c863"],["/tags/seata/index.html","ba55a6632e678d997d94974d8bf82766"],["/tags/七大设计原则/index.html","182c5701c69bdf7e44f8b4c788b5201f"],["/tags/中心拓展算法/index.html","2166143fd7c59226cb71d499a4e56cfe"],["/tags/事务/index.html","38ddee58aaf077004fbdebfeaf296ec9"],["/tags/二分查找/index.html","c6eb425d654b62ffd5eb87f02376b84f"],["/tags/优化/index.html","ee20cf35ac7f5a11a62e607c3e34dc83"],["/tags/其它/index.html","8b07c5072d8bde565e00775abbe522ce"],["/tags/其它学习/index.html","b61e6425a938d72f2584113c2e9fe5ef"],["/tags/分布式/index.html","5aa7bf3392b5eb54a2f44f46bc6d457d"],["/tags/动静分离/index.html","596b0a80a68827b40d323594ed4945cd"],["/tags/双指针/index.html","60bcea1ada5cbc1eace299252cbd540c"],["/tags/反向代理/index.html","0c31e27da4c5151c415de417452938ba"],["/tags/回文/index.html","689cbe423c278cf9d294fd06e555dad8"],["/tags/基础/index.html","e71b70dc401913e5e0c870fcb71b30d2"],["/tags/字符串/index.html","d49c2524d1b1195bec703a228bf0ab93"],["/tags/工具/index.html","d4b6e31efd31afd1aa2314bb40412642"],["/tags/幂等性/index.html","a75afbad8fb6c6361fa23b74e9ae03ca"],["/tags/微服务/index.html","b5ed35dd6961a3ccd33669cf8fee3fbc"],["/tags/持久化/index.html","ee4eb64de051588e2d0963c35dee764f"],["/tags/排序/index.html","b3c20303c3e4f19ba0a547f3236369a0"],["/tags/数据结构/index.html","aac3161ab72a8ee05cd99040c8b0e8f8"],["/tags/数组/index.html","a615ca3385e86e9f1eed9e6c0a71fcd4"],["/tags/整数反转/index.html","e644071dc1594f2325b679fb6500c02a"],["/tags/时间复杂度/index.html","c90dc6f3eccfb1eb3f35f82caf0f8344"],["/tags/查找/index.html","db4ac9fe372b411733f848b3038a4c2d"],["/tags/空间复杂度/index.html","eb34a08df6a66a5a51f61c649810aee8"],["/tags/算法/index.html","6997dc23fd565493fa7e39d76765c104"],["/tags/索引/index.html","d2f76a6fdda44d6a2c3ff49ba9bdcc35"],["/tags/约瑟夫环/index.html","66862a881d08a05db377ac56babf515e"],["/tags/缓存穿透/index.html","5a57d6f1a0974f3847512affdc90cc17"],["/tags/缓存雪崩/index.html","73049d48433be965a26daf7440325aaa"],["/tags/负载均衡/index.html","497a1ed67e3855e30ecff2051b0d29c1"],["/tags/账号管理/index.html","cc6729249d75cf49ac86a89a73e5bf43"],["/tags/软件/index.html","544600dd7126f5953be4f5ec402c9743"],["/tags/链表/index.html","04e830942e4bb3a7088303335e9bc6bc"],["/tags/锁/index.html","b66533ab4ea2951e1c2db5a9157f9611"],["/tags/随笔/index.html","c810d666deab7e81febe5c6d63cc44aa"],["/tags/集合框架/index.html","af5f4775d57287b5e489d0c687a2d416"],["/tags/项目/index.html","2738107c02f371ede32c9c3277101582"]];
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
