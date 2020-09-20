/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d58e5d97f0a76985976f6e1a0f7067d1"],["/about/index.html","99a3335ee925e9fe3ba711d2b1ddf6ab"],["/archives/2020/09/index.html","2db72bcf702ec053ca5067e49604a2df"],["/archives/2020/09/page/2/index.html","b9895b6d2ab709da09a345c71973ecd4"],["/archives/2020/09/page/3/index.html","02101f3eef28957b310756440f75698a"],["/archives/2020/09/page/4/index.html","7999893637e44102041b411715169c8a"],["/archives/2020/09/page/5/index.html","5451a1a4ad2cc17951891f5afc0973eb"],["/archives/2020/index.html","15ea3996c0dbc0b9f33e7280177b14b9"],["/archives/2020/page/2/index.html","edc1216a70203817fd503cd1ef10cc0d"],["/archives/2020/page/3/index.html","8f256ae45a22f254e451a990b8bcb3dd"],["/archives/2020/page/4/index.html","5d49e7e2af97760d700dc9b01f1400ec"],["/archives/2020/page/5/index.html","19adc32070463e9efe797cd82361873f"],["/archives/index.html","3f628834aa058e253101ba25cbba2a6b"],["/archives/page/2/index.html","cc615046507df2ac472ad1079c0ca167"],["/archives/page/3/index.html","c1166c6a88715ce59f7bf3739be15923"],["/archives/page/4/index.html","6156e876d27b5feea3379d6e77746eb5"],["/archives/page/5/index.html","d17d14e3a3c8f11236f209585b8d79de"],["/books/index.html","50509ef41c5fd5d3ef0de442a1342ba9"],["/categories/AS-400/index.html","815d0e219e54c06136a1305d7278063d"],["/categories/Docker/index.html","48e5fd916f98970f4505214baba6e94a"],["/categories/Java/index.html","db21cd966514e61be7ffa3a18d65e2f1"],["/categories/Linux/index.html","f5b12986b093bddf8c0fe3a4bc4847d1"],["/categories/MyBatis/index.html","5aa910aaa9a2231fb013573a4b06b835"],["/categories/MySQL/index.html","ae4a151cb7f57a5da783e40792ad6ae3"],["/categories/Nginx/index.html","7da6a5b03cfa3db3da02666641ddf0ff"],["/categories/RabbitMQ/index.html","4049ebc4af6f5c16740611c876d878fa"],["/categories/Redis/index.html","8c9d4187066ddc30f95555735aaefc0b"],["/categories/Spring/index.html","67c44fe334614fc9039a8e4f29e1b6bb"],["/categories/SpringBoot/index.html","7d5ec174fb78bf60427e259fc29bf427"],["/categories/SpringCloud/index.html","69a0f71c6356abb3c66b85f497739213"],["/categories/index.html","a0cf9bdc32937b89a4daed2623ffbf36"],["/categories/其它/index.html","46c9a59d59c04800f35f8bd3e714b7a6"],["/categories/分布式/index.html","b379b1c20d2a092a97d02b777e25641b"],["/categories/数据结构/index.html","1c607e50b3ef06b1f89328929d25e766"],["/categories/算法/index.html","02f334efe38694e3e74ef9d0ea97f863"],["/categories/随笔/index.html","a42c392753d5f5d90e43158b59b3c6c8"],["/categories/项目/index.html","477582131d893fb2e73f0bb60adb77a8"],["/css/font.css","3a70c9926feb18943618a1e4ad8ccd7c"],["/css/index.css","8f74df16a23602bb78607eeb385dc799"],["/css/var.css","3c1d9d8a1314fc785646440e227f749f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cc2d945071de3ad3626685021a968dcf"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","8e37df9ef6f93cab109331b299acdb43"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","7f289e2d713f9f45e1612d7f779ffa4b"],["/movies/index.html","4f06ecbc48b9e426e3b877f045cc5d6d"],["/music/index.html","3d73dc7ebc92c0fcc28560f5cd5352b3"],["/page/2/index.html","c8c95e05be7a54ac0b612c6ab5b89458"],["/page/3/index.html","ba8412aacd246a7ea26d2c30f1936718"],["/page/4/index.html","e50dce519b97816294c3bc67aa6b4fb4"],["/page/5/index.html","a190a7711d0257f11a862c3fac989f08"],["/posts/13c31df7/index.html","b2d27e8e68e4e27a6a0caf3e8b627944"],["/posts/167fb41b/index.html","a2818718b81c146f40f3e542e0b90954"],["/posts/168bc69/index.html","eefa9e7abf8ec20e9cf13bf3a6ebb3eb"],["/posts/1dce0fcb/index.html","113b7543e9fde9b3b29e677893396ffc"],["/posts/227e8862/index.html","0915cade1d0e48164daadbbcf7ce0770"],["/posts/23821d49/index.html","b06dfd3075fdf4e95fd885483e8053d1"],["/posts/26fbc59/index.html","a4b0992f33bacf91038ebba7dfa16a30"],["/posts/350366fd/index.html","22a954a6c4153ded897ff5c5865ae412"],["/posts/360c21de/index.html","61a4c745ed85af50c735a829d4879eb9"],["/posts/3b607b89/index.html","23d5ad6ebb33c5ba0468500ff5d483d4"],["/posts/40339b69/index.html","0699fae9cc809278526ada75617514a6"],["/posts/453a1ac6/index.html","384f7c2a6b7a6e94cc2cbe9bb1e4c31e"],["/posts/4a5705df/index.html","97d5fb21617e174fdb1e4e0500477d47"],["/posts/5a3e9c20/index.html","5be3596df3eed7654c4149ef819c44ef"],["/posts/5bf8d605/index.html","f527f5d42b291eb9d0aa9d5268eb9c3d"],["/posts/60ccc137/index.html","8990f260e6e823afec822b7e415815ea"],["/posts/63f0196d/index.html","4ccc544914fde390bf852fc1f64ac2ed"],["/posts/669168dd/index.html","2ee1c763aef278317a46f50db71fb297"],["/posts/66c89092/index.html","ee029f9011f42eacd9f257d88f9e8ddf"],["/posts/6b0c8c5c/index.html","5657ed025929452a2035c10cb5243a47"],["/posts/6e3a2914/index.html","23d83c1cc3a0f30bf7043bfb450a0865"],["/posts/89080a8e/index.html","13d1125281404fe6cb0b8f4c148de958"],["/posts/ac5283e5/index.html","8dafc01c351ac7973d47fa17c88e8adb"],["/posts/af9dc3a7/index.html","4fcb34e1580fee1b99e2ce2e8a06410f"],["/posts/b4d7ce2e/index.html","613174fb7323330856bad8b99046d983"],["/posts/b5f946b9/index.html","d3433cf98f75ca42797116684784b0f5"],["/posts/b63fea97/index.html","72b658dc6f4cc7ecf04a21614c42e86c"],["/posts/bce763e4/index.html","6903f40a8ccfff756ab539f4bc4c01cc"],["/posts/c2e910d3/index.html","634808321134e275c2f0ede67cb4ca67"],["/posts/c41e9d72/index.html","f22207f17dc8806b1b7855bafb715253"],["/posts/cdcc4eae/index.html","63111a4c73148b10faf8fef669fce2da"],["/posts/d1874913/index.html","b7544ee3df6e2f2c34f505e28bf078aa"],["/posts/d5ecab99/index.html","119af7b042dd6f434a73414fcfcc903f"],["/posts/da496cff/index.html","0aae67d9fc4f99227168f9589d1200f9"],["/posts/dd8469b9/index.html","9d9cfb1637ead8f1e3a43380ec5a1e3f"],["/posts/e3ba8d56/index.html","aca4b013ccee8b215e8e754512fd057f"],["/posts/e3e2e8e/index.html","911cf2f26d9de4c21d6df6aa2fd18816"],["/posts/e911dea2/index.html","88245a05c5ceab8f5668f9348bc3aa6a"],["/posts/eebeef7f/index.html","2c7bfc0c2a684f7e9980873a07eea9ba"],["/posts/f5210c15/index.html","820350246ae8972a507e836364f98439"],["/posts/f5f9fa9b/index.html","5db0c2939817e97dd12456f184cf8961"],["/posts/f8d13d4c/index.html","ff42a48c90f88055cc99db39298647c4"],["/posts/fea7e8d3/index.html","55994953f732915698f757741f89a345"],["/sw-register.js","7a90a83f50f1a0a01da1b61d44139ddc"],["/tags/AS-400/index.html","1982b1ce5ee81bb7c5a55a889fc592e4"],["/tags/Bean/index.html","19dec084acee3ab2d8765f2f320b8da4"],["/tags/CAP定理/index.html","b9625d8f1f0be3499cdf2c550640f622"],["/tags/Docker/index.html","dbdbe0894799e8f367b0b7eedd09f225"],["/tags/Java/index.html","6c7049e5323dbf8114e8253b74b6507a"],["/tags/Java基础/index.html","5630c8591404ba2608212b07cab16bd9"],["/tags/KMP算法/index.html","0b0ca57d9fdd63fecb3ee8faa1859e3a"],["/tags/Linux/index.html","318219aeac33e9dd0a616d95a621e16d"],["/tags/MyBatis/index.html","6524b3863cf6460eeb51dfe6b4cf7c03"],["/tags/MySQL/index.html","b2de7e0a64a4daadc09398c39d18f98a"],["/tags/Nginx/index.html","966be2f2bf3a046a716ac6b2fdc6fa09"],["/tags/RabbitMQ/index.html","8bd5149558359b2d4cd36081cbcda95e"],["/tags/Redis/index.html","167efef8ca72fc14e0126417e5be0443"],["/tags/Spring/index.html","0f2dc1216d32c0edf61ac427749bbd78"],["/tags/SpringBoot/index.html","d6f7cf9bc2aefef74ed1ce4f99f52fce"],["/tags/SpringCloud/index.html","2f8cdba3b2b9ac04b95656dfff5f14ef"],["/tags/Vim/index.html","9fbf011e0ddec30f2cd9ecf9049753f5"],["/tags/index.html","8017da602cab27ded26764f1929d5be4"],["/tags/seata/index.html","80befbeb13cde0332ab96295f505a8f5"],["/tags/中心拓展算法/index.html","6c00695322790c5ddf69b1382d498eb4"],["/tags/事务/index.html","926216c2629fa9e79029dc9fb2f10466"],["/tags/二分查找/index.html","5ebb9194645e82dbd167ec76b7f17ead"],["/tags/优化/index.html","b315b6f47079f30a135c77e33d05ea8b"],["/tags/其它/index.html","c40a775cbdc8c80756d8d6fbc848243e"],["/tags/其它学习/index.html","413c1acf99c4d3e44b8f884a3101c015"],["/tags/分布式/index.html","25dc32fb111d7475c1c629fbbc9f3a21"],["/tags/动静分离/index.html","30bf6916e7c6282dbc93d8902c171401"],["/tags/双指针/index.html","2820adb82969e401be655cf0b8fb2e90"],["/tags/反向代理/index.html","6d4a7a5d40f95d7a46dff16786c59fae"],["/tags/回文/index.html","4d1702c69f990c3fe55359e5bd88fe17"],["/tags/基础/index.html","5be2653bd839c186113966a3a29a43ae"],["/tags/字符串/index.html","32d8b1ac8467d27470af4514a3453ca9"],["/tags/工具/index.html","7ba13e3ba57bddb1c599ba21e3a8a9bc"],["/tags/幂等性/index.html","d808c6f1ec4a742719b774069b104ad2"],["/tags/微服务/index.html","18aee6dc966216b1fff6c824d49eb71b"],["/tags/持久化/index.html","f5a3754183521766a8f9ee5e016aa5eb"],["/tags/排序/index.html","3dff1ec1e2e7edc6a64adf4021b1cf98"],["/tags/数据结构/index.html","4ed58bb57a72a513d5ff0877418df863"],["/tags/数组/index.html","9700630a2aedc70f99088e2bfcd7e5ff"],["/tags/整数反转/index.html","4906cd25d9df3c8e93d5669efb56cf1d"],["/tags/时间复杂度/index.html","0178bbd1cf16d131a7ecb96c97e5be8b"],["/tags/查找/index.html","bb3233b0aaa788c15d007c9f378e87db"],["/tags/空间复杂度/index.html","5b75773be3694660450af96f02bb5f93"],["/tags/算法/index.html","4e4f12d5791f2ad88e1dec7fa0008ce0"],["/tags/索引/index.html","49ebd3b8636c998287ef08643bceebad"],["/tags/约瑟夫环/index.html","b894b3c0b4e61bf50c5f087b8721f83a"],["/tags/缓存穿透/index.html","f22b3ff57b0e2e6e1f55a8c54ffbb538"],["/tags/缓存雪崩/index.html","d2528ac7254898fedd1c6d10202959cf"],["/tags/负载均衡/index.html","c35a0b7a715e5a8723661763af398481"],["/tags/账号管理/index.html","fab85b5ac1dafee20d17826483e161b8"],["/tags/软件/index.html","9157dd7d262451f34f7ff1c8caba03c7"],["/tags/链表/index.html","da7f53929821ea7a604738cd41a3b430"],["/tags/锁/index.html","63277ecb24396ad48ce832196af42fff"],["/tags/随笔/index.html","3c05ee7ea1d7b3acf1f73f5a9cfed279"],["/tags/集合框架/index.html","3facc60b092d3a463f88c03419ba7e50"],["/tags/项目/index.html","1a950dbe633614bf1bb553bb4ed9d1d3"]];
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
