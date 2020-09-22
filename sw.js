/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5e417de6437d0f9fda49ca7281ac6a3d"],["/about/index.html","0f745b5366711dd71d0f079fb42150e7"],["/archives/2020/09/index.html","8f79bcc079f442b6fe0495c34c9b4d5e"],["/archives/2020/09/page/2/index.html","cb05fba52b56e1f25eefc8ae9df06e79"],["/archives/2020/09/page/3/index.html","1e76f362d44e5c09aa0921dd51166e39"],["/archives/2020/09/page/4/index.html","d35109ca37aef331deb0c5ee64df30c7"],["/archives/2020/09/page/5/index.html","f4b40a6d9a893b75ca6575ec2e80fd24"],["/archives/2020/index.html","001b1188ea770bb2085621969463437a"],["/archives/2020/page/2/index.html","c71fb4cda48afffa6e808d5e2deb8027"],["/archives/2020/page/3/index.html","9d2cbbb461f560499bf96721d42bafea"],["/archives/2020/page/4/index.html","8ba88f85c547ed45a825658cae8c0577"],["/archives/2020/page/5/index.html","990d4ddcab022d4cbfaaa7754b727161"],["/archives/index.html","a86ea79b8235ad11c11f0f41a11f430f"],["/archives/page/2/index.html","6d50343e3eed423e4222b482abee8a41"],["/archives/page/3/index.html","96a6c945ef3889fbc20901b3dfca262b"],["/archives/page/4/index.html","6e3217abbfab2b08aee977976978031a"],["/archives/page/5/index.html","07927c1f2e03cc554d7857ae308ec201"],["/books/index.html","90944869c6d2f89daf8f6cc0f3e9c074"],["/categories/AS-400/index.html","4d86754bc47bedc04028fc8eafd75211"],["/categories/Docker/index.html","95c465dbaf240e75936b8d136780e4a2"],["/categories/Java/index.html","624a3d0c6394ffb79457b27a415c0c11"],["/categories/Linux/index.html","945b63fa94e8a6d9b5ea2c6e4774c1be"],["/categories/MyBatis/index.html","4de82cf6c15fae9e2af8b4d95d4d48b7"],["/categories/MySQL/index.html","304f744295de86b136f116d6ce26b863"],["/categories/Nginx/index.html","278f7aeb792b03af352009f17193dc27"],["/categories/RabbitMQ/index.html","fee958b63101070046aef6b6902a7b9a"],["/categories/Redis/index.html","67e50cb50327019cbba124b2146df200"],["/categories/Spring/index.html","d79cee6e2d22efb34abf3d68ee740f18"],["/categories/SpringBoot/index.html","6343161b31f686576dacb76f4d160a03"],["/categories/SpringCloud/index.html","d2dc52cb71c7204a82dc4a3d7b6eaef7"],["/categories/index.html","0e04a422c6384c4f3e8094fd9d4e23f5"],["/categories/七大设计原则/index.html","88a126f698f276daa260ff080828acbd"],["/categories/其它/index.html","ec3a53edf52514e48852e58e8382eb55"],["/categories/分布式/index.html","fcfae323abe49982ecbb825beeec5d36"],["/categories/数据结构/index.html","5e1f20ce565f4a13309eb2d7c8793c77"],["/categories/算法/index.html","ba04e3d33cf656de3a5829d7eb406845"],["/categories/随笔/index.html","07832d5485ccf625e9d54c54508dd113"],["/categories/项目/index.html","075097b5241bac47402b1270613f1d77"],["/css/font.css","087b8a73e6d26ca62085192a64948834"],["/css/index.css","6eb8016ced658c72d09e86f8dc80055b"],["/css/var.css","ee4789d4e71fd52e3b5dbdb4c2e9f978"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","64fce11a96dc8819532a033d1b653fbe"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","7d856aad13be0d1dbbf96be33458291b"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","7d339957ef7246cea32d1d9cc201bb11"],["/movies/index.html","7c0ae22b1c1767a33b2fde02cd2dd71f"],["/music/index.html","93a7106c05117a73a521d2ea4ef35fb0"],["/page/2/index.html","f27bc1d9ce9d6fb128ed9b5761a0972f"],["/page/3/index.html","a37bae661ea310881b5cd6e318133492"],["/page/4/index.html","59a762bcd3e56fe82b1e56a21cadb22f"],["/page/5/index.html","9a234174c1cd6cedf7565dea6607d2cd"],["/posts/13c31df7/index.html","b88af2cc126f8c7005500b466a162581"],["/posts/167fb41b/index.html","19509d419b37b3b4afe9cd976a8b95fa"],["/posts/168bc69/index.html","41436ca752da92db3adf03983381ee3c"],["/posts/1dce0fcb/index.html","173f8272cb14a4ddf51740abb7c21fa2"],["/posts/227e8862/index.html","f28184281661910c780738dd519d6a55"],["/posts/23821d49/index.html","fbbf25083d7d975d18878a72dd40aa70"],["/posts/26fbc59/index.html","2bf560bf3a8798f352b8242cfdb4f2e8"],["/posts/350366fd/index.html","805e1dafa561abecf371c176e094c290"],["/posts/360c21de/index.html","85fb28c5afbc61d08db4962e7bbd2295"],["/posts/3b607b89/index.html","e235b8fe6a3958fcc6cba70ac09bfafc"],["/posts/40339b69/index.html","b0d282022086dcc9d2245a7b150170f0"],["/posts/453a1ac6/index.html","0419825fcf8c160b644b81e68be31e8e"],["/posts/4a5705df/index.html","1d0cbbf9203f2d0ac6f22ab75d9128be"],["/posts/5a3e9c20/index.html","66b0ac8e8b54bb952eede8dae165ccbe"],["/posts/5bf8d605/index.html","6033c81c0830bb8ddef5d02df9cc9187"],["/posts/60ccc137/index.html","879d98c45e3364b00c645443ae0ecab0"],["/posts/63f0196d/index.html","b701a4c17b38e2bcb833b9e9abc28b75"],["/posts/669168dd/index.html","fa58b3bfa7abaa8f1a2211f00c904e76"],["/posts/66c89092/index.html","7ee7a6c10ed7b4a381c2ec6a5ce80dfb"],["/posts/6b0c8c5c/index.html","ee4be202fc4301a9c718011d11c03a9a"],["/posts/6e3a2914/index.html","ceac4f533f1d0781f99b3241db3a282e"],["/posts/6e639b06/index.html","029090e3859956197f4343243ecbd11e"],["/posts/89080a8e/index.html","60e76880b936b092778a8f1df8415d5a"],["/posts/a0ae3de1/index.html","f96df52994bd1f193f2b8bbbcef83244"],["/posts/ac5283e5/index.html","bba0dd37ef6b4098acffbd579aabe1f3"],["/posts/af9dc3a7/index.html","462def9c1b4fd5370ab547520c1f9a2f"],["/posts/b4d7ce2e/index.html","92a88ca1415d10cccfcaf036107ff4f0"],["/posts/b5f946b9/index.html","658f9958fa0a37d3605d07a4a3b318c4"],["/posts/b63fea97/index.html","a9d69a374e33ee4e3edfee77b8e887bf"],["/posts/bce763e4/index.html","19612f105c6a42717dc7343a7cdd2efa"],["/posts/c2e910d3/index.html","cb8b5fd3a360fa30e1f46430fcccd717"],["/posts/c41e9d72/index.html","4fce35d9d9134b70b77926888875bdd8"],["/posts/cdcc4eae/index.html","873a22ff9f242c0b9dfbac67f273657d"],["/posts/d1874913/index.html","d47fb0f3686749d8cd4bacb38fc42f51"],["/posts/d5ecab99/index.html","c2dcc5d18bdd49a559637433a5511b67"],["/posts/da496cff/index.html","96c52d5edbefd84f87a44c90266477b1"],["/posts/dd8469b9/index.html","cf5873183c8e15e29fe3dae8bc5e14e0"],["/posts/e3ba8d56/index.html","57f0ad39f1787c61a175ef0c424b20c7"],["/posts/e3e2e8e/index.html","da686b3e7cea8a20133641d3ff69f25a"],["/posts/e911dea2/index.html","e54ea12edd05d7fd6a15c5b63468c49e"],["/posts/e92e34b8/index.html","a15132bacd66612e6d54a342d05f8ad1"],["/posts/eebeef7f/index.html","51259528c57f517bd7d368cdd39b59c3"],["/posts/f5210c15/index.html","86662c3a70bfb30f59e9c7232437ce07"],["/posts/f5f9fa9b/index.html","f62d737976a6fef56348e2b9b6f9ba37"],["/posts/f8d13d4c/index.html","0d820f88ea2012e741f810e5323d6813"],["/posts/fea7e8d3/index.html","3cf698a720487f2922c7451a055b5454"],["/sw-register.js","af2771c4910bcd6d59c92e288724a265"],["/tags/AS-400/index.html","eb35e0bd60f4a800183a3304b4eb7ab1"],["/tags/Bean/index.html","bf1168de35b076b80524a6a37514d847"],["/tags/CAP定理/index.html","d3c948239fd55f7f2a9cd3d583cc994f"],["/tags/Docker/index.html","c7a59d1fd06564dbfc88f014e984d421"],["/tags/Java/index.html","1ecc1fc8f7457c75367b07b2f994422d"],["/tags/Java基础/index.html","3fc4db559ea9bdf39c05e90ec276fa0a"],["/tags/KMP算法/index.html","96992456962f4a6dbb8febe6ae2cfb1b"],["/tags/Linux/index.html","a3dc5fbed2e2ffdddf4a74db54709992"],["/tags/MyBatis/index.html","2c9b4dd01ce41075577e46020cd51ca2"],["/tags/MySQL/index.html","23b44c9d4e6c5e970c4f7ed4561fcd02"],["/tags/Nginx/index.html","b3772de2262e916d4f94f598cfbf71c4"],["/tags/RabbitMQ/index.html","44f767b0be2f1094b6d37ef520bf26ba"],["/tags/Redis/index.html","1fa9702354704f3dcf2a134316aed1e7"],["/tags/Spring/index.html","1a9409698d02e8a938cafde8cf42e62f"],["/tags/SpringBoot/index.html","d4fc67130966a253827db692d9bb995a"],["/tags/SpringCloud/index.html","e051b880a7345a61ec7a888b5cdfba01"],["/tags/Vim/index.html","467b0406aee30f5ae04f1f0fbb5fe897"],["/tags/index.html","89b1c024cb977519216d97a0b068c0cd"],["/tags/seata/index.html","aaf2952df6bddc0c72c677478ca130d3"],["/tags/七大设计原则/index.html","2a8297e9073b9d6bebcecc76de5340e1"],["/tags/中心拓展算法/index.html","ff2cb76bb0338b5b3300d63dcdb8f7f9"],["/tags/事务/index.html","d30920d9da50b4695e6189c72867eaab"],["/tags/二分查找/index.html","1f851f853b6af1484de317d9b96a0ab8"],["/tags/优化/index.html","f72185803843f9a94736768e2fc91f6b"],["/tags/其它/index.html","f9299886b4a0abc0ba6a73fbc8049f84"],["/tags/其它学习/index.html","b43efb277fe83e22d18d102f680dc997"],["/tags/分布式/index.html","2fb1df0d74b9a8f348e2f56930d78f31"],["/tags/动静分离/index.html","1ea5c676712b7b5bd36e622a6cded18a"],["/tags/双指针/index.html","a35790269d63cb46c62e73c4728d5dc5"],["/tags/反向代理/index.html","7517ea66382c128e4b55bc827f1d5aa2"],["/tags/回文/index.html","9f4aa0dcc4d927dd8a50d3580e633eb3"],["/tags/基础/index.html","f9b00bb098e3eb88ea9445d35506be40"],["/tags/字符串/index.html","f8d98f8fba26d519f609580fb9db6d70"],["/tags/工具/index.html","a277b0d0503d5411b455ff0d518be6d7"],["/tags/幂等性/index.html","4bd3c965a3d6beb545efb4204b4e31d6"],["/tags/微服务/index.html","fa2d2ecbcd8f0d9090396966d077b1ab"],["/tags/持久化/index.html","b0629f47e3385b242dac58f35fc5248a"],["/tags/排序/index.html","50e4f4e3aa6cbe27e0905b3f403ddca8"],["/tags/数据结构/index.html","4dd6be545e2a24dc5c76eedcc8eabc27"],["/tags/数组/index.html","b80716a888b173d02e12eaa16c6214f8"],["/tags/整数反转/index.html","61b831bc008821e31c100c937c955c40"],["/tags/时间复杂度/index.html","abea0c28f2bd8f049fc5ccc6423f7554"],["/tags/查找/index.html","d556f6b98454bc494039d7a247cd9467"],["/tags/空间复杂度/index.html","c4c138903c17ccc4ee2d2bf7fa203ab2"],["/tags/算法/index.html","65f67fa883c74fcd6a945eafb5e7c662"],["/tags/索引/index.html","8e6448efbbc109ecf342477e54376483"],["/tags/约瑟夫环/index.html","6724c43d7c700ae400e5c64d60347581"],["/tags/缓存穿透/index.html","70ffcf87c364a109bc5c1ae964e79dff"],["/tags/缓存雪崩/index.html","2d847afa9b408737fa8171e82a1c48a8"],["/tags/负载均衡/index.html","3eb2038ee40ca92f9ec65928b4c473a7"],["/tags/账号管理/index.html","ac165a1f697faa2c418405695e34efe8"],["/tags/软件/index.html","04313345f8ae082b6730a0395f0826e8"],["/tags/链表/index.html","e80a9dc238c72f88b598162eebec8c2e"],["/tags/锁/index.html","124730531577c1a066d4842c2c97aa32"],["/tags/随笔/index.html","2f63e570fb5214a15563dafe83814b4d"],["/tags/集合框架/index.html","c288db73fbc4f37779c28d7806067fb7"],["/tags/项目/index.html","ed53596ff4e2c1ec2a2423a010cfd33f"]];
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
