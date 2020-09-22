/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6df694e00b57f9e5e77b8ab830baff85"],["/about/index.html","d4b05f1f64725b405620f1b5d7f668d0"],["/archives/2020/09/index.html","9242407785fa767f0c20344e2d4b8156"],["/archives/2020/09/page/2/index.html","10985acee605524e7b1eedf4b12e89a3"],["/archives/2020/09/page/3/index.html","41189199890acbfd3a50ee7785eba021"],["/archives/2020/09/page/4/index.html","e6066f612c218647059f7b4b92e90b9a"],["/archives/2020/09/page/5/index.html","be35d850ff0ec19edd7cbd1f495c6463"],["/archives/2020/index.html","3d98f6f8eccf1749901d3e086e3afe03"],["/archives/2020/page/2/index.html","a082e26d13ef54dfe5c609ba4c81c535"],["/archives/2020/page/3/index.html","f0e617f5609f255aa5a9429f42c789d4"],["/archives/2020/page/4/index.html","d96684ce48d809649dcb456a70fde8d5"],["/archives/2020/page/5/index.html","c227a812754dc09672c9bfa4b7c47838"],["/archives/index.html","8e0eaf5031f9cad5a1312e224be2f732"],["/archives/page/2/index.html","74379451a3762db1e59dd0a3a4b4f0c0"],["/archives/page/3/index.html","79b07e06ece6ec1fad98f3fc34f260a0"],["/archives/page/4/index.html","8c8d48fc6fedd1dc5ce26691583317e0"],["/archives/page/5/index.html","54387d8fd9fb822fb7518937b681d412"],["/books/index.html","f259475064c0ff96b235938b44a13b29"],["/categories/AS-400/index.html","b7c016036deff7ded23c60d3e08246d8"],["/categories/Docker/index.html","689e179f2eca5357d4a013ab44ccc915"],["/categories/Java/index.html","0eb079fa03f73aad9f980b19550e4733"],["/categories/Linux/index.html","442a0e1b11811add4f58a17baef0bb0b"],["/categories/MyBatis/index.html","88031e5c5dc252fbf42c3774a1dbd56f"],["/categories/MySQL/index.html","dca429443e42d26a48ccd1e54424eadd"],["/categories/Nginx/index.html","41d1329a3e95f68f02fb613828679ce1"],["/categories/RabbitMQ/index.html","567157c4730be96ce3dc81991986cae3"],["/categories/Redis/index.html","01b37404ff5bacd3ad4e658f5b42c0d4"],["/categories/Spring/index.html","546989155be4b3e43ee3ae11fcf64483"],["/categories/SpringBoot/index.html","ec3eb269bc3741545f0649b1fc05def1"],["/categories/SpringCloud/index.html","42fe0a45715cd16abeabe3e60d4e7859"],["/categories/index.html","3f041771c44fb102bbc739147b84dc4e"],["/categories/七大设计原则/index.html","5204345dc6c443da889631720c45332a"],["/categories/其它/index.html","eabc15431eb8e214d1639a7807293685"],["/categories/分布式/index.html","887c12f3735c2e5976373afcd68797af"],["/categories/数据结构/index.html","decb462da87d038346ddbfa80659b4bb"],["/categories/算法/index.html","7f55b0d2276ace4e32f77b070004e0b7"],["/categories/随笔/index.html","79e506e50ddd7f1fef067987826130e3"],["/categories/项目/index.html","cbfb460b2279e8ed8dfc4e38ffa1624c"],["/css/font.css","86d4ade1e5ec7b1624f03c90cace5ac1"],["/css/index.css","f914449381334fc1c8bf0747a7106d42"],["/css/var.css","106def27c478c9e20574b748872edf1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0cb14af7960b6538d89840c143f52243"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","91972d584ee53114f469cdcbbcf286f2"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","dbe15f462d241ae2fc23d24e9e165c0a"],["/movies/index.html","b8a5f1650897677c99afdfa27be782f8"],["/music/index.html","6b7db61b66508d2ec9611fa5c8e2cc0d"],["/page/2/index.html","158c4219e58a43d9e3379e2eca34258d"],["/page/3/index.html","a8b56b080790a7500c03713f9527c457"],["/page/4/index.html","a87eea13f499fe5c213a9b3ca7c5840d"],["/page/5/index.html","7b310039e7508a67d402b0475f02f5d2"],["/posts/13c31df7/index.html","b88af2cc126f8c7005500b466a162581"],["/posts/167fb41b/index.html","ae3a5dfc95e3a6f18365c477eab0350b"],["/posts/168bc69/index.html","41436ca752da92db3adf03983381ee3c"],["/posts/1dce0fcb/index.html","173f8272cb14a4ddf51740abb7c21fa2"],["/posts/227e8862/index.html","f28184281661910c780738dd519d6a55"],["/posts/23821d49/index.html","fbbf25083d7d975d18878a72dd40aa70"],["/posts/26fbc59/index.html","2bf560bf3a8798f352b8242cfdb4f2e8"],["/posts/350366fd/index.html","805e1dafa561abecf371c176e094c290"],["/posts/360c21de/index.html","85fb28c5afbc61d08db4962e7bbd2295"],["/posts/3b607b89/index.html","e235b8fe6a3958fcc6cba70ac09bfafc"],["/posts/40339b69/index.html","b0d282022086dcc9d2245a7b150170f0"],["/posts/453a1ac6/index.html","0419825fcf8c160b644b81e68be31e8e"],["/posts/4a5705df/index.html","1d0cbbf9203f2d0ac6f22ab75d9128be"],["/posts/5a3e9c20/index.html","66b0ac8e8b54bb952eede8dae165ccbe"],["/posts/5bf8d605/index.html","6033c81c0830bb8ddef5d02df9cc9187"],["/posts/60ccc137/index.html","879d98c45e3364b00c645443ae0ecab0"],["/posts/63f0196d/index.html","b701a4c17b38e2bcb833b9e9abc28b75"],["/posts/669168dd/index.html","fa58b3bfa7abaa8f1a2211f00c904e76"],["/posts/66c89092/index.html","7ee7a6c10ed7b4a381c2ec6a5ce80dfb"],["/posts/6b0c8c5c/index.html","196289211fc780f2f56511ec57bddc83"],["/posts/6e3a2914/index.html","ceac4f533f1d0781f99b3241db3a282e"],["/posts/6e639b06/index.html","c80065212b0d39b67fe126d088f6ac40"],["/posts/89080a8e/index.html","60e76880b936b092778a8f1df8415d5a"],["/posts/a0ae3de1/index.html","f80a817336591110c28cfbdc7292790c"],["/posts/ac5283e5/index.html","bba0dd37ef6b4098acffbd579aabe1f3"],["/posts/af9dc3a7/index.html","462def9c1b4fd5370ab547520c1f9a2f"],["/posts/b4d7ce2e/index.html","92a88ca1415d10cccfcaf036107ff4f0"],["/posts/b5f946b9/index.html","21c0a7cbf0278453ee5815f4b8cc7173"],["/posts/b63fea97/index.html","a9d69a374e33ee4e3edfee77b8e887bf"],["/posts/bce763e4/index.html","19612f105c6a42717dc7343a7cdd2efa"],["/posts/c2e910d3/index.html","cb8b5fd3a360fa30e1f46430fcccd717"],["/posts/c41e9d72/index.html","4fce35d9d9134b70b77926888875bdd8"],["/posts/cdcc4eae/index.html","873a22ff9f242c0b9dfbac67f273657d"],["/posts/d1874913/index.html","d47fb0f3686749d8cd4bacb38fc42f51"],["/posts/d5ecab99/index.html","c2dcc5d18bdd49a559637433a5511b67"],["/posts/da496cff/index.html","96c52d5edbefd84f87a44c90266477b1"],["/posts/dd8469b9/index.html","cf5873183c8e15e29fe3dae8bc5e14e0"],["/posts/e3ba8d56/index.html","57f0ad39f1787c61a175ef0c424b20c7"],["/posts/e3e2e8e/index.html","da686b3e7cea8a20133641d3ff69f25a"],["/posts/e911dea2/index.html","3d00a9a75556b12939af0c1e32d906d6"],["/posts/e92e34b8/index.html","a15132bacd66612e6d54a342d05f8ad1"],["/posts/eebeef7f/index.html","51259528c57f517bd7d368cdd39b59c3"],["/posts/f5210c15/index.html","86662c3a70bfb30f59e9c7232437ce07"],["/posts/f5f9fa9b/index.html","f62d737976a6fef56348e2b9b6f9ba37"],["/posts/f8d13d4c/index.html","0d820f88ea2012e741f810e5323d6813"],["/posts/fea7e8d3/index.html","3cf698a720487f2922c7451a055b5454"],["/sw-register.js","b17cdb7f95274b5c8a76a0750c038bb9"],["/tags/AS-400/index.html","94d5b6b1ab2f2e171da9be12776d7846"],["/tags/Bean/index.html","a229190072ae3df2a7c8470bfd6c8122"],["/tags/CAP定理/index.html","7e2f2d481f350ae6d63cdd15bee8fdb5"],["/tags/Docker/index.html","9c13c0833f70efb3e38823c1d27277db"],["/tags/Java/index.html","43858fa50b4c9604769d94c6fca94f22"],["/tags/Java基础/index.html","89b638b6ea2285423555f9c0760dcaaa"],["/tags/KMP算法/index.html","1fb7d23c6c20a8bca7aaf227c606d63a"],["/tags/Linux/index.html","2a1f3f291f68409175398b5a6759f151"],["/tags/MyBatis/index.html","3f0357b7627de33edde0e0995b85f881"],["/tags/MySQL/index.html","13bfa54b5fabac28c908fdcc37bfbb13"],["/tags/Nginx/index.html","8c2a6fcf53219d2831f6782f1c39bc66"],["/tags/RabbitMQ/index.html","3301dd279efba2a1e03490da10bb6b54"],["/tags/Redis/index.html","36d0077fe75b4b41306c641b5cdd2df6"],["/tags/Spring/index.html","4deebcd4ba42c18fd328b7cc8b845fab"],["/tags/SpringBoot/index.html","e8f90e975dd4b9d7fe5bfacacf2e7489"],["/tags/SpringCloud/index.html","0c92d0ec847631a0557a7defc6a319ce"],["/tags/Vim/index.html","ab8c00bb8b84b5e9d90000bef1db4075"],["/tags/index.html","df8a20cf96819efaaeea6b0a550a7685"],["/tags/seata/index.html","4546d1fc69d92c8321d03c2dd4f00d2f"],["/tags/七大设计原则/index.html","001220119490f9687c465c577c99ef90"],["/tags/中心拓展算法/index.html","213f581535687a9783103bab9ee00a72"],["/tags/事务/index.html","67203498521cb9ff42a148559d2c4917"],["/tags/二分查找/index.html","5adb006021f3d385d5e2ef64719b9d72"],["/tags/优化/index.html","8af3bb18c917698509b240ff7f0634da"],["/tags/其它/index.html","4382471134b6a3c8c635fe3eb6f82c57"],["/tags/其它学习/index.html","54bf712eed71cfaaa8aa82c0a09ef887"],["/tags/分布式/index.html","f1dd4f95fb835a72d94ca6fa3d4b2ce0"],["/tags/动静分离/index.html","fe6d40b0ecfbe15c569d4583b6db1af9"],["/tags/双指针/index.html","69d4cfaf33944b26832956dc5a7bb15e"],["/tags/反向代理/index.html","5441cbeb845478c6ca46caa43f94ba58"],["/tags/回文/index.html","fd64e16d5ffb583e63d21afefbf6817c"],["/tags/基础/index.html","13ed2ae45e05a86da15daf5eb240acb3"],["/tags/字符串/index.html","861d5694216dbf812f74b48072443e6c"],["/tags/工具/index.html","ad6ea5883234f01ca5e9302fd9c4a267"],["/tags/幂等性/index.html","10386c44626bb26990bb90677c0fc3cf"],["/tags/微服务/index.html","37344729a2d8ced019d8be8fcdd1e8c9"],["/tags/持久化/index.html","d9719dba45655f2061097d946ef88e4a"],["/tags/排序/index.html","b6c5de20aaab080a3935af0e1d26ea11"],["/tags/数据结构/index.html","547d8af9da01f5da458d815801cfc48c"],["/tags/数组/index.html","36ec17c45e4693d3f793128da380c0f7"],["/tags/整数反转/index.html","29994df61cc131264bc1e48bfd0fa8b0"],["/tags/时间复杂度/index.html","350738930f5f480cb015f910c24c8efc"],["/tags/查找/index.html","58e347ae1ce9847f2722f32d210fd83d"],["/tags/空间复杂度/index.html","db7f15bd50c212ed13fc5a78ef2de9bc"],["/tags/算法/index.html","6e419115e51cc39d935c7ecb5de5e754"],["/tags/索引/index.html","8142ec1e2e6bcd50d14a94a56ed9ff18"],["/tags/约瑟夫环/index.html","48cfa8b7e5770771ac82fa14e403d743"],["/tags/缓存穿透/index.html","172f16e916061843472634a6443d0fcf"],["/tags/缓存雪崩/index.html","c7d331b09c5446b107375925a5627d10"],["/tags/负载均衡/index.html","89e833d08d32dcadbdf9b6017253e912"],["/tags/账号管理/index.html","ba25af770532d7433f0c2a101afbfb3e"],["/tags/软件/index.html","e085df66e924bff4b4ed2fa990711b39"],["/tags/链表/index.html","c0e5b50d669e0e0570550a16a5335176"],["/tags/锁/index.html","34e97f0736f3a9e4847d39b47228304c"],["/tags/随笔/index.html","decf0f23c05c6aaaeca4f57b9e21030e"],["/tags/集合框架/index.html","3b5062e8849b3db5d4d70b23be7f2b58"],["/tags/项目/index.html","10797afedb63e1c702436af3c18111e5"]];
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
