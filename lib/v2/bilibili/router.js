module.exports = (router) => {
    router.get('/app/:id?', require('./app'));
    router.get('/audio/:id', require('./audio'));
    router.get('/bangumi/:seasonid', require('./bangumi')); // 弃用
    router.get('/bangumi/media/:mediaid', require('./bangumi'));
    router.get('/fav/:uid/:fid/:disableEmbed?', require('./fav'));
    router.get('/followings/article/:uid', require('./followings_article'));
    router.get('/followings/dynamic/:uid/:routeParams?', require('./followings_dynamic'));
    router.get('/followings/video/:uid/:disableEmbed?', require('./followings_video'));
    router.get('/link/news/:product', require('./linkNews'));
    router.get('/hot-search', require('./hotSearch'));
    router.get('/live/area/:areaID/:order', require('./liveArea'));
    router.get('/live/room/:roomID', require('./liveRoom'));
    router.get('/live/search/:key/:order', require('./liveSearch'));
    router.get('/mall/new/:category?', require('./mallNew'));
    router.get('/mall/ip/:id', require('./mallIP'));
    router.get('/manga/update/:comicid', require('./manga_update'));
    router.get('/manga/followings/:uid/:limits?', require('./manga_followings'));
    router.get('/partion/:tid/:disableEmbed?', require('./partion'));
    router.get('/partion/ranking/:tid/:days?/:disableEmbed?', require('./partion-ranking'));
    router.get('/platform/:area?/:p_type?/:uid?', require('./platform'));
    router.get('/popular/all', require('./popular'));
    router.get('/ranking/:rid?/:day?/:arc_type?/:disableEmbed?', require('./ranking'));
    router.get('/readlist/:listid', require('./readlist'));
    router.get('/user/article/:uid', require('./article'));
    router.get('/user/bangumi/:uid/:type?', require('./user_bangumi'));
    router.get('/user/channel/:uid/:sid/:disableEmbed?', require('./userChannel'));
    router.get('/user/coin/:uid/:disableEmbed?', require('./coin'));
    router.get('/user/collection/:uid/:sid/:disableEmbed?', require('./userCollection'));
    router.get('/user/dynamic/:uid/:routeParams?', require('./dynamic'));
    router.get('/user/fav/:uid/:disableEmbed?', require('./userFav'));
    router.get('/user/followers/:uid/:loginUid', require('./followers'));
    router.get('/user/followings/:uid/:loginUid', require('./followings'));
    router.get('/user/video/:uid/:disableEmbed?', require('./video'));
    router.get('/user/video-all/:uid/:disableEmbed?', require('./video-all'));
    router.get('/video/danmaku/:bvid/:pid?', require('./danmaku'));
    router.get('/video/page/:bvid/:disableEmbed?', require('./page'));
    router.get('/video/reply/:bvid', require('./reply'));
    router.get('/vsearch/:kw/:order?/:disableEmbed?/:tid?', require('./vsearch'));
    router.get('/watchlater/:uid/:disableEmbed?', require('./watchlater'));
    router.get('/weekly/:disableEmbed?', require('./weekly_recommend'));
};
