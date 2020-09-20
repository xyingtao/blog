/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","92bbdd25bd34097b5b7e51e484aef33d"],["/about/index.html","79e7b7cfde7271fe4ca1ba62ed2556ac"],["/archives/2020/09/index.html","9a588bebbdbcf9985bb5dba3bf3f32b5"],["/archives/2020/09/page/2/index.html","c70235af3c76fdea2bdba4939b92b5b6"],["/archives/2020/09/page/3/index.html","4b4725cc13eb8704b12d6d3d55a30e4a"],["/archives/2020/09/page/4/index.html","f674e6bcb24f01cf5d51bd7e7697f144"],["/archives/2020/09/page/5/index.html","36c532da1f634d06668e1217bf5a9d90"],["/archives/2020/index.html","c5a43e3bf31030b74ad9176b53f4baca"],["/archives/2020/page/2/index.html","4edece01efa3642b73e14b6d79cc5eb7"],["/archives/2020/page/3/index.html","c4e60003cf52cdaa8da09867c1d8e09c"],["/archives/2020/page/4/index.html","0e93b11cdd50f8b63c31841e3898c5e4"],["/archives/2020/page/5/index.html","5f8be1af0ca3d31983f7c0004a524cf1"],["/archives/index.html","be7bd36448f0b154996edb21bbb16e2f"],["/archives/page/2/index.html","4584415024ae39c232359573d07a8557"],["/archives/page/3/index.html","04aa027296ccf8f8b869b2fd27cd44cf"],["/archives/page/4/index.html","cf27c9b7825aad3a45b03cc5d2d4835f"],["/archives/page/5/index.html","18d62e5be7328cf1a78de2491b383131"],["/books/index.html","7bfaf4df6f3202fa55266c6aaa4cfc68"],["/categories/AS-400/index.html","09de80b73aeabe0c566bde0f3ab87595"],["/categories/Docker/index.html","4d8f4466bbdd57de22cd293c4102182d"],["/categories/Java/index.html","6034a53f4992927e5e6a445ce21d6bf7"],["/categories/Linux/index.html","c11936d4606c790f0fc84d6bba686a6a"],["/categories/MyBatis/index.html","9f04d711483ec2a4352bee00fd6b2983"],["/categories/MySQL/index.html","99c1cda0a22e30d60a12f848ec200c54"],["/categories/Nginx/index.html","96628df5e625ab5fa015727677d5cfdb"],["/categories/RabbitMQ/index.html","a74009d802ea7bb6044b028fc4165a35"],["/categories/Redis/index.html","5c6fe4ab092df76d071ef0b60762f046"],["/categories/Spring/index.html","2f90e47a3c2ea411bc996dc5c3b66cf8"],["/categories/SpringBoot/index.html","1ce1c86e923f7e69cc02132bfc973288"],["/categories/SpringCloud/index.html","d3bdee48270545bbc58f965f8832c474"],["/categories/index.html","d9481768f1385b0e6bbaf36709da284c"],["/categories/其它/index.html","95351751981cdf04d7ced4aeae609893"],["/categories/分布式/index.html","1c61cbc8b4b0d885fa25138c926e205d"],["/categories/数据结构/index.html","cc056453b7e4c3f41959a36c319af687"],["/categories/算法/index.html","57f84123d44eed8c15766529d6c7d54c"],["/categories/随笔/index.html","c54911e09430364001a7643663a123bc"],["/categories/项目/index.html","328d80e7438157d31758c8c9ebd20666"],["/css/font.css","fe238c75b4a6f0cac4d38a85b6eb8c3c"],["/css/index.css","3e0f2610dc282f2ac7c9fc577b2f5bb5"],["/css/var.css","19d60c71586ac3bfbdd3c4ce4f5f4da0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","53abd8de72d5b616faac2e2bf2b2e229"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","6face93bc19a3dc38bda8ed9e2039fc8"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","8244f7932ec02f32e9bc56aab51ad4cf"],["/movies/index.html","9cbd604221fa26c27fa34664d2160923"],["/music/index.html","b119806e99d600aaf3a00c5daa95c435"],["/page/2/index.html","be1dbaa14d13e2e3a7ff2788bfa413df"],["/page/3/index.html","4289fdcb880d2686afb2df4350c10bb9"],["/page/4/index.html","1f35b1ef176cc398c194039db621fb21"],["/page/5/index.html","644d6570e8659891438386574167b805"],["/posts/13c31df7/index.html","b2d27e8e68e4e27a6a0caf3e8b627944"],["/posts/167fb41b/index.html","292b585334ee371be6c7b7395e9401fb"],["/posts/168bc69/index.html","7b920875e29b961e96052edc1be352b2"],["/posts/1dce0fcb/index.html","113b7543e9fde9b3b29e677893396ffc"],["/posts/227e8862/index.html","0915cade1d0e48164daadbbcf7ce0770"],["/posts/23821d49/index.html","b06dfd3075fdf4e95fd885483e8053d1"],["/posts/26fbc59/index.html","a4b0992f33bacf91038ebba7dfa16a30"],["/posts/350366fd/index.html","22a954a6c4153ded897ff5c5865ae412"],["/posts/360c21de/index.html","61a4c745ed85af50c735a829d4879eb9"],["/posts/3b607b89/index.html","23d5ad6ebb33c5ba0468500ff5d483d4"],["/posts/40339b69/index.html","0699fae9cc809278526ada75617514a6"],["/posts/453a1ac6/index.html","59a0551a2af621f5ef0780ad64639035"],["/posts/4a5705df/index.html","59d2abe02e1b72d46465a4e74c02b097"],["/posts/5a3e9c20/index.html","3dab88d9c7da4144b62f63b45a7c0e6f"],["/posts/5bf8d605/index.html","231cf2edc21e5864260e79313773e079"],["/posts/60ccc137/index.html","d70ac41c767281e1e6b8f21a2067aa7d"],["/posts/63f0196d/index.html","1a00b80da0591806c1b4db0dcbfc5dae"],["/posts/669168dd/index.html","2ee1c763aef278317a46f50db71fb297"],["/posts/66c89092/index.html","ee029f9011f42eacd9f257d88f9e8ddf"],["/posts/6b0c8c5c/index.html","5657ed025929452a2035c10cb5243a47"],["/posts/6e3a2914/index.html","23d83c1cc3a0f30bf7043bfb450a0865"],["/posts/89080a8e/index.html","13d1125281404fe6cb0b8f4c148de958"],["/posts/ac5283e5/index.html","8dafc01c351ac7973d47fa17c88e8adb"],["/posts/af9dc3a7/index.html","4fcb34e1580fee1b99e2ce2e8a06410f"],["/posts/b4d7ce2e/index.html","3d4e09d482f64b34c101e5525929028c"],["/posts/b5f946b9/index.html","08d3bca261647ddd6b81532d07f2b8c6"],["/posts/b63fea97/index.html","72b658dc6f4cc7ecf04a21614c42e86c"],["/posts/bce763e4/index.html","5488eb0f81e4ad46ad9b81fd16e31c38"],["/posts/c2e910d3/index.html","634808321134e275c2f0ede67cb4ca67"],["/posts/c41e9d72/index.html","f22207f17dc8806b1b7855bafb715253"],["/posts/cdcc4eae/index.html","86e25ae0f23b1aeacec7381a7ee1c4b0"],["/posts/d1874913/index.html","9cbd41ab535b6fea5148272374834581"],["/posts/d5ecab99/index.html","119af7b042dd6f434a73414fcfcc903f"],["/posts/da496cff/index.html","0aae67d9fc4f99227168f9589d1200f9"],["/posts/dd8469b9/index.html","9d9cfb1637ead8f1e3a43380ec5a1e3f"],["/posts/e3ba8d56/index.html","aca4b013ccee8b215e8e754512fd057f"],["/posts/e3e2e8e/index.html","a2b5173440703dcdaeb60287f66c38e3"],["/posts/e911dea2/index.html","88245a05c5ceab8f5668f9348bc3aa6a"],["/posts/eebeef7f/index.html","9cc5b10a04f230ea354a6a75d1feea0c"],["/posts/f5210c15/index.html","639cf6e2614533d0a76b9c2bd599a570"],["/posts/f5f9fa9b/index.html","5db0c2939817e97dd12456f184cf8961"],["/posts/f8d13d4c/index.html","8a302215b05c078e05c24b9c09a05817"],["/posts/fea7e8d3/index.html","55994953f732915698f757741f89a345"],["/sw-register.js","4b3f8eb2211a318aa04365560360e9a6"],["/tags/AS-400/index.html","a5f6f393be73f370974e5e9c2fcc3524"],["/tags/Bean/index.html","c901d0e4ec36375d15dea037d9293b44"],["/tags/CAP定理/index.html","d6f9b436f241abfb2df0fd5af49d67f3"],["/tags/Docker/index.html","89d9e8295dd36be349c7e6d3f401e15a"],["/tags/Java/index.html","0b0a10dec78fac786841570ab6ad0976"],["/tags/Java基础/index.html","de20de3a26f81ac6d417d7bd26a54a7b"],["/tags/KMP算法/index.html","f2e844c337166de74eb9f5c581d85950"],["/tags/Linux/index.html","7667dfe38b4ddcc40d71312962a6ca09"],["/tags/MyBatis/index.html","acaf6cac75575d264c7729dc3664eca8"],["/tags/MySQL/index.html","bc0b44f8f60c01f69d60e4b24c5e3249"],["/tags/Nginx/index.html","9355b52a3b9f078157c8334beae684d1"],["/tags/RabbitMQ/index.html","81f5ec86f45cc91105155df0b0a48058"],["/tags/Redis/index.html","cf4cddf020a9601d63f7cf5199f5c3a7"],["/tags/Spring/index.html","76930d4123625a33fde51eec04a62426"],["/tags/SpringBoot/index.html","5c4cd3e8b621d8cee6d40025aae5e8b6"],["/tags/SpringCloud/index.html","4daca7a35eb13bef7f39bf37723fbdb8"],["/tags/Vim/index.html","ae7f6ec839fe9022ec277ff09d3db5fa"],["/tags/index.html","88dbc9baf49e3d9e3fb5ee73d851db6b"],["/tags/seata/index.html","fdd36b1ddf49149b44f14ad743c0ea99"],["/tags/中心拓展算法/index.html","fdf1d155f225d084dd761cbccb18f6c4"],["/tags/事务/index.html","0acb790a1fa52410dd392963cf54f1be"],["/tags/二分查找/index.html","b0cb8dfa6ab3268d61e1768decb5ac9c"],["/tags/优化/index.html","55a3ce81aea302b2c5d50d68c7be9300"],["/tags/其它/index.html","03463dd79edf07ee4087de90d69f97cb"],["/tags/其它学习/index.html","5b83920fd07c816d64e1015afcfc52ef"],["/tags/分布式/index.html","3ca2b9ae91c7e616925625cd2b2fae94"],["/tags/动静分离/index.html","e0e7fa65561875de156b39b1f7e22fe5"],["/tags/双指针/index.html","59babd5833a7aea55970135a403f18ea"],["/tags/反向代理/index.html","fde1d5e17b907e3c54d9d7bda3c900a5"],["/tags/回文/index.html","1529d98250365bbcd5cd72f2b5e13c85"],["/tags/基础/index.html","19ac0f1a1a418b7773243cdf245bc017"],["/tags/字符串/index.html","abb686d3ed1678f1dbd440ceb6a6ff24"],["/tags/工具/index.html","61b3eccf1253fab1c3643a216d896e28"],["/tags/幂等性/index.html","19b293c0f0e0a73f8240087b552adbf9"],["/tags/微服务/index.html","e23e101d2b4e99f2f457aac6882f9f48"],["/tags/持久化/index.html","76c834db4648c20df6ccc0648294bb87"],["/tags/排序/index.html","62280bd813a6b3ca700ea35ae879d6a5"],["/tags/数据结构/index.html","c6d9e4473ecbef9d5837ae835cc67518"],["/tags/数组/index.html","8b439b6912574788ddeaf40815c4fb8d"],["/tags/整数反转/index.html","f5fcbd482df30fea654bd6cb0156cb36"],["/tags/时间复杂度/index.html","33ae499005af19495901774bc53b8cce"],["/tags/查找/index.html","7c4b6039d07e039ca509044481891b28"],["/tags/空间复杂度/index.html","7734a586bb5b0dd4a047548982f11644"],["/tags/算法/index.html","7f92ac2630ca9f8d767b09afbf187648"],["/tags/索引/index.html","98f231c67a8771f1d387d8dc17f73706"],["/tags/约瑟夫环/index.html","ff9f5042a49603eb4cf2b068f23dfbd0"],["/tags/缓存穿透/index.html","1483acf96953b6e655b14d8f7497649e"],["/tags/缓存雪崩/index.html","7ce18abf76b9432df17b2703be861932"],["/tags/负载均衡/index.html","96c62b7fbbcb14204046d7fc77dff809"],["/tags/账号管理/index.html","0f6c13924a7afc1285af2a69d310acd8"],["/tags/软件/index.html","be764f13098a4c889e0dd23fe539dfa9"],["/tags/链表/index.html","2dd5bbbf9e292d6dcc762be6c8284a5a"],["/tags/锁/index.html","40b19c7eba5752b2b744aedf2d5f4195"],["/tags/随笔/index.html","e4ce322bb6ce10c162e8e7c4468f7370"],["/tags/集合框架/index.html","735632a11361117457798ca2c5fad9b5"],["/tags/项目/index.html","e368c8afbf12b78b46ffbf3088647306"]];
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
