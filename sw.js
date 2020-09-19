/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7c6304e09b3c4b61a407f1fc4a3cf6fd"],["/about/index.html","bb8291d2ac97a510cd4a674f9a386ffc"],["/archives/2020/09/index.html","a6194aaef61e4d579da1f295fb97a1c2"],["/archives/2020/09/page/2/index.html","93b6cd6b52b738fc9f31cb699e54ff29"],["/archives/2020/09/page/3/index.html","bf5260851df240f94d0c696ac858bab4"],["/archives/2020/09/page/4/index.html","2728e577760d6b085c1650773a13dfb8"],["/archives/2020/09/page/5/index.html","e164d1da3e659a7a9c617141d8c82957"],["/archives/2020/index.html","a2537e06e849a3982c1737a3bdc55e41"],["/archives/2020/page/2/index.html","f061c2e8a94b07c044a2b1ce6800c134"],["/archives/2020/page/3/index.html","152fb334327e4cdd538dd8be25b0d36a"],["/archives/2020/page/4/index.html","64cec2d36aac9ce701f5a51e611e9f7f"],["/archives/2020/page/5/index.html","f2d8e4959c0b8bcf9eb99765e16ac522"],["/archives/index.html","563e63fc22c084f58e7c410c5475f776"],["/archives/page/2/index.html","9633c3ea7dfcbb2b64b89b306d60ed74"],["/archives/page/3/index.html","f23061192ecf54a7d08efb36639d4c45"],["/archives/page/4/index.html","0dbd6cc961409c955602fe548217b93d"],["/archives/page/5/index.html","d0625bf248764c7efb739a546893d469"],["/books/index.html","bcea303d6f138b1593da07f6857299bc"],["/categories/Docker/index.html","c898c1a4b6144d9d1e850e7dfbbae142"],["/categories/Java/index.html","9a23ddc0de798055726dcda2df58e633"],["/categories/Linux/index.html","5d56d100ee6b877c4ffcb5df8a39664f"],["/categories/MyBatis/index.html","cd548de7cec36707ba35963188cb036c"],["/categories/MySQL/index.html","d0292b35e6bfd425f562c739b5e2138a"],["/categories/Nginx/index.html","86ab1df5a02f1da7027fea01f877f5b3"],["/categories/RabbitMQ/index.html","61544505a17cb3345f4aec78f34ae3d8"],["/categories/Redis/index.html","72cbcfd9e6e1b7c93a6b83cff487cefc"],["/categories/Spring/index.html","95fd4e6e2fa695a6d0ac723d7029fbe3"],["/categories/SpringBoot/index.html","d5e5b9c48109412d236e1feb2bb090ae"],["/categories/SpringCloud/index.html","8fe67a63543200665e3ce572d1b8c03f"],["/categories/index.html","97163f8d0c4c02772e51f9c9dc5a2567"],["/categories/其它/index.html","3d9b2c71221b6949d11b1e957359e57a"],["/categories/分布式/index.html","400b501b1be06b97381512fb166a0f9c"],["/categories/数据结构/index.html","45f16fd231338b214a1f2f7a49c8bfb3"],["/categories/算法/index.html","d21b07091889d357bf8bc35185aa4c84"],["/categories/随笔/index.html","8a04f9f5e6b748b8a2f84a2d2282dc61"],["/categories/项目/index.html","a4e86dffc5a31406e244baa9e1ebbe48"],["/css/font.css","24845256f5220d98909e891c02f55bac"],["/css/index.css","8afd3683215d23ec8e26e4eca8461458"],["/css/var.css","6b665043232c8da2e296260869480b06"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","64802b810996357a89b4729482a474ef"],["/img/favicon.png","0eba2344c31f80c14ca1fd9e7efa6e7b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","60058d1be3b01ef7bf981d461af91b84"],["/js/main.js","5407ca7669d5f42863e0421d78104b42"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","13f1be3218605c412b550ca687c389dc"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","ff2d34c041fd5147a319451359e46ce2"],["/movies/index.html","6a4193ba7a2302812e2caf80b3973e3b"],["/music/index.html","d6a206cdde9f1fbd30c70267fc44f56e"],["/page/2/index.html","c7d8e1cfc6f6e674cb7c1ea899deb3cd"],["/page/3/index.html","2b827f4f5544e59336750d433f5b3ef5"],["/page/4/index.html","168166954bd57c7632098ef14c0ba936"],["/page/5/index.html","c7ddbd14b0cb38c44a32a2a9ced8b5dc"],["/posts/13c31df7/index.html","6d7bcf34601950002ab567ee7409a434"],["/posts/168bc69/index.html","4f3b08b8a3460d4ca5ebf4a2c1619c95"],["/posts/1dce0fcb/index.html","ae7c425e67951ece2a78edf85aba8c1e"],["/posts/227e8862/index.html","8a160595285b612ab8eb9cdf03d49bfb"],["/posts/23821d49/index.html","fec038b39121494df4249f2e40ef71f4"],["/posts/26fbc59/index.html","c14ee35c49155d0cc02113c20c9b0f20"],["/posts/350366fd/index.html","2c6e4911071701a84d493f59e6ed4b6a"],["/posts/360c21de/index.html","557af25dcb995e598cae5254a6e74e93"],["/posts/3b607b89/index.html","c5ffbdb1a622d1a56e32db89a7d14d3a"],["/posts/40339b69/index.html","44354d68879d01714701c56414b4bbea"],["/posts/453a1ac6/index.html","a6449c0d81692449afd6455c7ebd9626"],["/posts/4a5705df/index.html","4e372cf0a7e57b45a44eb3ef8117188b"],["/posts/5a3e9c20/index.html","0eb419d984967fc22a2db37ca6508404"],["/posts/5bf8d605/index.html","18a2eeef36a17a9a1200d3fcee4eac05"],["/posts/63f0196d/index.html","9e1d0e069b0e59e271d031c22dbc7700"],["/posts/669168dd/index.html","890283d6ab00ccbd2e99bd66a3525fce"],["/posts/66c89092/index.html","69f1be10a90f71030a17a12903064e07"],["/posts/6b0c8c5c/index.html","6804d8731fd991e79470818701ecc302"],["/posts/6e3a2914/index.html","417e9537c779fb53c0ae82683d20b005"],["/posts/89080a8e/index.html","a37ffcbdb3617c652b6db9d460f2f8f0"],["/posts/ac5283e5/index.html","05e8b126c1b7c575d9eb27d2b22bb63f"],["/posts/af9dc3a7/index.html","62c1278de078feaf92f31115ab9433dc"],["/posts/b4d7ce2e/index.html","7ab474bd7ecbe6d9a61d43df3caf61b1"],["/posts/b5f946b9/index.html","c467ebf20bb1f146cc568b0152b6925b"],["/posts/b63fea97/index.html","8d69bb5b357b1dade6e513bb4a03398b"],["/posts/bce763e4/index.html","fa66517304d66e5354c0b24362a43ecb"],["/posts/c2e910d3/index.html","dc558af1d434d612c03d9d668652b39e"],["/posts/c41e9d72/index.html","407d2d16ffeeb813fdfa3a3cb5e9ae3d"],["/posts/cdcc4eae/index.html","2e46997c078e26e81b950ece3460242f"],["/posts/d1874913/index.html","a65eeffb0eca0aed1ae54b3df467afba"],["/posts/d5ecab99/index.html","2fab9d067015e0ab769b5383fb6c546b"],["/posts/da496cff/index.html","cde380a9c8f11165d4c66a6be010b4d0"],["/posts/dd8469b9/index.html","ca08d066c9983a5ac13cf0cb2e984465"],["/posts/e3ba8d56/index.html","e2e802766bc1569e0aaa6415b7321675"],["/posts/e3e2e8e/index.html","b0a21422ac0da9b928117770bb06889c"],["/posts/e911dea2/index.html","8574b16b7bff65f007342132eeec80ff"],["/posts/eebeef7f/index.html","f854cd0ec9c224ee7749f7ba1548b5ba"],["/posts/f5210c15/index.html","f94d48a946fcf2c727dc89ef2cd3bac3"],["/posts/f5f9fa9b/index.html","63b5bc2765ad9e171469dedd4d0dae10"],["/posts/f8d13d4c/index.html","34f3cc4d5630238dda8d983d92b40e45"],["/posts/fea7e8d3/index.html","5b584db78251621ccdfd78948383c839"],["/sw-register.js","ab5b4898c9a536d9bff6b92ec33e0fbd"],["/tags/Bean/index.html","91fd4248c785be50634d4a09351b080c"],["/tags/CAP定理/index.html","72d9ec062a6254504b0d3e491468318c"],["/tags/Docker/index.html","d74f47a781a338165fc2ec1d95f81ab7"],["/tags/Java/index.html","7150abfbc54ebc0a2ac57e4d844592c2"],["/tags/Java基础/index.html","7a736a192977168967e96f983fa32378"],["/tags/KMP算法/index.html","fbc5df2b6a5fafc15284046b1997b7dc"],["/tags/Linux/index.html","3de833328558611901d424ac9741f636"],["/tags/MyBatis/index.html","d11ab57e6e81238c61676d97669c3f0e"],["/tags/MySQL/index.html","6d18d3036d86ca5c1256bcc4b7c15cf7"],["/tags/Nginx/index.html","c8543ea2a3beab3f0a315261e985c845"],["/tags/RabbitMQ/index.html","e5154ab5730ea253f3c3d40a51e49df5"],["/tags/Redis/index.html","8d53e7ab9eb25dea800fe4a9f566b5ca"],["/tags/Spring/index.html","37a4cad1dcf422afa3034412514e82fd"],["/tags/SpringBoot/index.html","2ee46c5092a2229785413ad1acd056cc"],["/tags/SpringCloud/index.html","d2dd13d7b43cc2b1e9fb2467fb3f6f42"],["/tags/Vim/index.html","be08ff693a10591a13bb009348429a8c"],["/tags/index.html","deca58608d09d601ed1341715981becb"],["/tags/seata/index.html","5b2189257d422edb4dbcc10b463ee549"],["/tags/中心拓展算法/index.html","2c3463165bf0b05b6b26eedfc12609e1"],["/tags/事务/index.html","8d8723db1386c0fdd467655af0574590"],["/tags/二分查找/index.html","ed3725f2834e6b81f6de0e8ff1a84cd5"],["/tags/优化/index.html","d4bec622ee1557042336a596cd85d071"],["/tags/其它/index.html","07f3738825974546c749d109802377cc"],["/tags/其它学习/index.html","4a452aa2991753d40344ab4c7bd062cb"],["/tags/分布式/index.html","43e3a734f03c105a31b4cba5f371069e"],["/tags/动静分离/index.html","bf43c5e0198835fd470c3c7abd51d936"],["/tags/双指针/index.html","1adba1a7d080611e734cf0b40d026406"],["/tags/反向代理/index.html","ef1899b0545551189b2d7d67ca28755c"],["/tags/回文/index.html","4155ce661bc911595a0c11d527d305f2"],["/tags/基础/index.html","d284b7e5de3c87f278741867667780cf"],["/tags/字符串/index.html","bb73ba1a3e63650cbed10def8e1a6911"],["/tags/工具/index.html","cebea15b3768def94a8ef5933f3867bb"],["/tags/幂等性/index.html","a3f083f51a97876f2b881c3c1e91e492"],["/tags/微服务/index.html","18e893e5f50fd8ada512b0c0b5e51743"],["/tags/持久化/index.html","b389d690ee94b1f47d6f42af4ea0579a"],["/tags/排序/index.html","2a4cbdd5da191cb90745b791739d358c"],["/tags/数据结构/index.html","9818d28ceb0ed9f5c776bd949847305f"],["/tags/数组/index.html","7ba8195ec1c15eb5e7f657fa99c2105d"],["/tags/整数反转/index.html","9681efb18feeeb08bd4394e5f1d29a53"],["/tags/时间复杂度/index.html","2c374dfe3e8d85e380d13ee8bcf92887"],["/tags/查找/index.html","47f6bbce04be8e92a932cdf18b039974"],["/tags/空间复杂度/index.html","f93a4cbd4feb54f5b554023389b905ff"],["/tags/算法/index.html","bf3e2f2e39da45497185f0f5e8a36349"],["/tags/索引/index.html","6caf5643fa16e6811e81f355f91078a5"],["/tags/约瑟夫环/index.html","fb233361bdc03b81bff28c2c0204c1a4"],["/tags/缓存穿透/index.html","3a16ed4c2eb7fb8c16054e07e8e7639f"],["/tags/缓存雪崩/index.html","99d870d632344fd7e6e64a24a8de61bc"],["/tags/负载均衡/index.html","ff4cd294d82cc4cee63f061849db967c"],["/tags/账号管理/index.html","c3c867da78166af4bf355633bcbf22b4"],["/tags/软件/index.html","5e36ea497961198bf9a725b9885c666b"],["/tags/链表/index.html","1f1076d9d9e9f4f9174453c80596ce33"],["/tags/锁/index.html","d5e3303a84e54a90cc0e1f374986ba4a"],["/tags/随笔/index.html","eff414cd54fc64a6b399617e87939d30"],["/tags/集合框架/index.html","910b64eb2f4e38923a2f9f715a37c0d9"],["/tags/项目/index.html","1c8cb1e21d0a46ac65bb61c1c0634327"]];
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
