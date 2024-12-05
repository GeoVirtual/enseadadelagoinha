(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init()","hash": "cb270af7b578eb8dfdcd45b98071ae1f840c8eaf6ebcc8ce50c1b95baa7dfc8e", "definitions": [{"toolTipFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"progressLeft":"33%","toolTipShadowBlurRadius":1,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundOpacity":1,"left":0,"playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Main Viewer"},"progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","subtitlesTop":0,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarHeadShadowOpacity":0.7,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"subtitlesGap":0,"playbackBarHeadShadowBlurRadius":1.5,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarLeft":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","progressBottom":10,"toolTipShadowColor":"#333138","playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressHeight":2,"progressBorderSize":0,"subtitlesBackgroundColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"toolTipBorderRadius":1,"progressBarBorderRadius":2,"progressRight":"33%","playbackBarHeadBorderRadius":0,"id":"MainViewer_mobile","toolTipTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","toolTipPaddingLeft":3,"subtitlesBottom":50,"progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","progressOpacity":0.7,"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionTime":2000,"vrThumbstickRotationStep":20,"playbackBarBackgroundColor":["#FFFFFF"],"top":0,"playbackBarHeight":10,"bottom":"0%","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowOpacity":1,"toolTipPaddingRight":3,"minWidth":50,"surfaceReticleColor":"#FFFFFF","minHeight":25,"progressBarBackgroundColorRatios":[0],"class":"ViewerArea","progressBarBorderColor":"#000000","toolTipTextShadowBlurRadius":1,"progressBorderRadius":2,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","width":"100%","subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarHeadWidth":6,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","playbackBarRight":0},{"data":{"name":"Implanta\u00e7\u00e3o"},"horizontalAlign":"center","backgroundOpacity":0.3,"backgroundColor":[],"id":"IconButton_491F46E7_5CCA_2EC0_419A_A94739FE23E0_mobile","iconURL":"skin/IconButton_491F46E7_5CCA_2EC0_419A_A94739FE23E0.png","backgroundColorRatios":[],"verticalAlign":"middle","minHeight":1,"minWidth":1,"width":184.26,"class":"IconButton","height":36.11,"transparencyActive":true,"propagateClick":false,"click":"this.setOverlaysVisibility([this.overlay_49BB8BA2_5CBA_2740_417B_AFECED1E10B5], 'toggle', 0)"},{"hfovMax":130,"label":trans('panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0.label'),"hfovMin":"120%","id":"panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0","data":{"label":"DJI_0385"},"class":"Panorama","hfov":360,"overlays":["this.overlay_49BB8BA2_5CBA_2740_417B_AFECED1E10B5"],"vfov":180,"thumbnailUrl":"media/panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_t.jpg","frames":[{"cube":{"levels":[{"colCount":36,"rowCount":6,"width":18432,"url":"media/panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","height":3072},{"colCount":18,"rowCount":3,"width":9216,"url":"media/panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","height":1536},{"colCount":12,"rowCount":2,"width":6144,"url":"media/panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"colCount":6,"rowCount":1,"width":3072,"url":"media/panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_t.jpg"}]},{"width":4961,"class":"Photo","height":1935,"image":{"levels":[{"url":"media/album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_0.label'),"data":{"label":"Planta"},"thumbnailUrl":"media/album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_0_t.png","duration":5000,"id":"album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_0"},{"id":"Image_4F3124B2_5CFA_6140_41BC_AAC770616AFA_mobile","data":{"name":"Logo Geo"},"horizontalAlign":"center","backgroundOpacity":0,"right":"6.3%","verticalAlign":"middle","url":trans('Image_4F3124B2_5CFA_6140_41BC_AAC770616AFA_mobile.url'),"top":"2.3%","bottom":"91.46%","minWidth":1,"minHeight":1,"width":87.18,"class":"Image","propagateClick":false,"scaleMode":"fit_inside"},{"id":"Container_4E7097A6_5CDE_2F41_41D2_FD096473122D_mobile","left":0,"horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"Container468"},"right":0,"scrollBarColor":"#000000","verticalAlign":"bottom","layout":"horizontal","scrollBarWidth":5,"bottom":14.5,"minWidth":0,"minHeight":0,"class":"Container","height":52,"scrollBarMargin":1,"propagateClick":false,"children":["this.IconButton_4F61047B_5CCA_21C7_41CF_DF0EDEFBC098_mobile","this.IconButton_491F46E7_5CCA_2EC0_419A_A94739FE23E0_mobile","this.IconButton_4E16E8DC_5CCA_22C0_41CA_FACC4F9A2463_mobile"],"gap":5},{"class":"PhotoAlbumPlayer","id":"MainViewer_mobilePhotoAlbumPlayer","viewerArea":"this.MainViewer_mobile"},{"width":4961,"class":"Photo","height":1935,"image":{"levels":[{"url":"media/album_49C95672_5CC6_21C0_41C0_3204173717A6_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_49C95672_5CC6_21C0_41C0_3204173717A6_0.label'),"data":{"label":"Planta"},"thumbnailUrl":"media/album_49C95672_5CC6_21C0_41C0_3204173717A6_0_t.png","duration":5000,"id":"album_49C95672_5CC6_21C0_41C0_3204173717A6_0"},{"initialPosition":{"pitch":-3.14,"class":"PanoramaCameraPosition","yaw":-53.48},"class":"PanoramaCamera","initialSequence":"this.sequence_56669706_5CBE_2F40_41CF_A02FE33A51B1","enterPointingToHorizon":true,"id":"panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_camera"},{"class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","id":"MainViewer_mobilePanoramaPlayer","touchControlMode":"drag_rotation","buttonZoomIn":"this.IconButton_4E16E8DC_5CCA_22C0_41CA_FACC4F9A2463_mobile","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"buttonZoomOut":"this.IconButton_4F61047B_5CCA_21C7_41CF_DF0EDEFBC098_mobile","viewerArea":"this.MainViewer_mobile"},{"id":"Image_4FC4A048_5CFA_61C0_41D1_AD515AD132BD_mobile","left":"4.56%","horizontalAlign":"center","backgroundOpacity":0,"data":{"name":"Logo Enseada de Lagoinha"},"verticalAlign":"middle","url":trans('Image_4FC4A048_5CFA_61C0_41D1_AD515AD132BD_mobile.url'),"top":"0.53%","minHeight":1,"minWidth":1,"width":"34.25%","class":"Image","propagateClick":false,"scaleMode":"fit_inside","height":"8.125%"},{"class":"PhotoAlbum","data":{"label":"\u00c1lbum de Fotos Planta"},"label":trans('album_49C95672_5CC6_21C0_41C0_3204173717A6.label'),"thumbnailUrl":"media/album_49C95672_5CC6_21C0_41C0_3204173717A6_t.png","playList":"this.album_49C95672_5CC6_21C0_41C0_3204173717A6_AlbumPlayList","id":"album_49C95672_5CC6_21C0_41C0_3204173717A6"},{"rollOverIconURL":"skin/IconButton_4E16E8DC_5CCA_22C0_41CA_FACC4F9A2463_rollover.png","id":"IconButton_4E16E8DC_5CCA_22C0_41CA_FACC4F9A2463_mobile","data":{"name":"+ Zoom"},"horizontalAlign":"center","backgroundOpacity":0,"iconURL":"skin/IconButton_4E16E8DC_5CCA_22C0_41CA_FACC4F9A2463.png","verticalAlign":"middle","pressedIconURL":"skin/IconButton_4E16E8DC_5CCA_22C0_41CA_FACC4F9A2463_pressed.png","minHeight":0,"minWidth":0,"width":37.81,"class":"IconButton","height":37.95,"transparencyActive":true,"propagateClick":false},{"width":4961,"class":"Photo","height":1935,"image":{"levels":[{"url":"media/album_5103D5B0_5CC6_2340_41A8_67AF071E1064_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_5103D5B0_5CC6_2340_41A8_67AF071E1064_0.label'),"data":{"label":"Planta"},"thumbnailUrl":"media/album_5103D5B0_5CC6_2340_41A8_67AF071E1064_0_t.png","duration":5000,"id":"album_5103D5B0_5CC6_2340_41A8_67AF071E1064_0"},{"class":"PhotoAlbum","data":{"label":"\u00c1lbum de Fotos Planta"},"label":trans('album_4F36D452_5CC6_21C0_41B3_E7937B252C6D.label'),"thumbnailUrl":"media/album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_t.png","playList":"this.album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_AlbumPlayList","id":"album_4F36D452_5CC6_21C0_41B3_E7937B252C6D"},{"width":4961,"class":"Photo","height":1935,"image":{"levels":[{"url":"media/album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"label":trans('album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_0.label'),"data":{"label":"Planta"},"thumbnailUrl":"media/album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_0_t.png","duration":5000,"id":"album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_0"},{"class":"PhotoAlbum","data":{"label":"\u00c1lbum de Fotos Planta"},"label":trans('album_5103D5B0_5CC6_2340_41A8_67AF071E1064.label'),"thumbnailUrl":"media/album_5103D5B0_5CC6_2340_41A8_67AF071E1064_t.png","playList":"this.album_5103D5B0_5CC6_2340_41A8_67AF071E1064_AlbumPlayList","id":"album_5103D5B0_5CC6_2340_41A8_67AF071E1064"},{"class":"PhotoAlbum","data":{"label":"\u00c1lbum de Fotos Planta"},"label":trans('album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D.label'),"thumbnailUrl":"media/album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_t.png","playList":"this.album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_AlbumPlayList","id":"album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D"},{"rollOverIconURL":"skin/IconButton_4F61047B_5CCA_21C7_41CF_DF0EDEFBC098_rollover.png","id":"IconButton_4F61047B_5CCA_21C7_41CF_DF0EDEFBC098_mobile","data":{"name":"- Zoom"},"horizontalAlign":"center","backgroundOpacity":0,"iconURL":"skin/IconButton_4F61047B_5CCA_21C7_41CF_DF0EDEFBC098.png","verticalAlign":"middle","pressedIconURL":"skin/IconButton_4F61047B_5CCA_21C7_41CF_DF0EDEFBC098_pressed.png","minHeight":0,"minWidth":0,"width":38.11,"class":"IconButton","height":38.06,"transparencyActive":true,"propagateClick":false},{"items":[{"camera":"this.panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0_camera","class":"PanoramaPlayListItem","media":"this.panorama_56006EAB_5CBE_2140_41CB_9D39DF9D6ED0","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PhotoAlbumPlayListItem","media":"this.album_5103D5B0_5CC6_2340_41A8_67AF071E1064","player":"this.MainViewer_mobilePhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PhotoAlbumPlayListItem","media":"this.album_4F36D452_5CC6_21C0_41B3_E7937B252C6D","player":"this.MainViewer_mobilePhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PhotoAlbumPlayListItem","media":"this.album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D","player":"this.MainViewer_mobilePhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PhotoAlbumPlayListItem","media":"this.album_49C95672_5CC6_21C0_41C0_3204173717A6","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePhotoAlbumPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}],"class":"PlayList","id":"mainPlayList"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Planta"},"items":[{"data":{"label":"Planta"},"class":"QuadHotspotPanoramaOverlayImage","vertices":[{"pitch":-6.37,"class":"PanoramaPoint","yaw":-37.2},{"pitch":-14.76,"class":"PanoramaPoint","yaw":85.39},{"pitch":-16.01,"class":"PanoramaPoint","yaw":169.76},{"pitch":-7.04,"class":"PanoramaPoint","yaw":-64.64}],"image":"this.res_483D6638_5D46_2141_41CC_656842409177","distance":50}],"enabled":false,"useHandCursor":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_49BA2BA3_5CBA_2740_41D4_7802F76A43AC"],"id":"overlay_49BB8BA2_5CBA_2740_417B_AFECED1E10B5"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_56669706_5CBE_2F40_41CF_A02FE33A51B1"},{"items":[{"camera":{"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"},"targetPosition":{"y":0.47,"x":0.69,"class":"PhotoCameraPosition","zoomFactor":1.1},"duration":5000},"class":"PhotoPlayListItem","media":"this.album_49C95672_5CC6_21C0_41C0_3204173717A6_0"}],"class":"PhotoPlayList","id":"album_49C95672_5CC6_21C0_41C0_3204173717A6_AlbumPlayList"},{"items":[{"camera":{"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"},"targetPosition":{"y":0.69,"x":0.67,"class":"PhotoCameraPosition","zoomFactor":1.1},"duration":5000},"class":"PhotoPlayListItem","media":"this.album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_0"}],"class":"PhotoPlayList","id":"album_4F36D452_5CC6_21C0_41B3_E7937B252C6D_AlbumPlayList"},{"items":[{"camera":{"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"},"targetPosition":{"y":0.5,"x":0.54,"class":"PhotoCameraPosition","zoomFactor":1.1},"duration":5000},"class":"PhotoPlayListItem","media":"this.album_5103D5B0_5CC6_2340_41A8_67AF071E1064_0"}],"class":"PhotoPlayList","id":"album_5103D5B0_5CC6_2340_41A8_67AF071E1064_AlbumPlayList"},{"items":[{"camera":{"scaleMode":"fit_outside","class":"MovementPhotoCamera","initialPosition":{"class":"PhotoCameraPosition"},"targetPosition":{"y":0.6,"x":0.7,"class":"PhotoCameraPosition","zoomFactor":1.1},"duration":5000},"class":"PhotoPlayListItem","media":"this.album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_0"}],"class":"PhotoPlayList","id":"album_4F0C428F_5CC9_E140_41A0_1FE997E2B95D_AlbumPlayList"},{"class":"ImageResource","id":"res_483D6638_5D46_2141_41CC_656842409177","levels":[{"width":4961,"url":"media/res_483D6638_5D46_2141_41CC_656842409177_0.png","class":"ImageResourceLevel","height":1935}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_49BA2BA3_5CBA_2740_41D4_7802F76A43AC"}],"data":{"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"volume":1},"name":"Player466","history":{}},"watermark":false,"backgroundColor":["#000000"],"left":541.65,"id":"rootPlayer","backgroundColorRatios":[0],"scrollBarColor":"#000000","layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"width":"100%","class":"Player","scripts":{"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"enableVR":TDV.Tour.Script.enableVR,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setLocale":TDV.Tour.Script.setLocale,"openLink":TDV.Tour.Script.openLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlays":TDV.Tour.Script.getOverlays,"isPanorama":TDV.Tour.Script.isPanorama,"clone":TDV.Tour.Script.clone,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setValue":TDV.Tour.Script.setValue,"showPopupImage":TDV.Tour.Script.showPopupImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPixels":TDV.Tour.Script.getPixels,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"mixObject":TDV.Tour.Script.mixObject,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizStart":TDV.Tour.Script.quizStart,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizFinish":TDV.Tour.Script.quizFinish,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"init":TDV.Tour.Script.init,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initAnalytics":TDV.Tour.Script.initAnalytics,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMapLocation":TDV.Tour.Script.setMapLocation,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"createTween":TDV.Tour.Script.createTween,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"toggleVR":TDV.Tour.Script.toggleVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"startMeasurement":TDV.Tour.Script.startMeasurement,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"translate":TDV.Tour.Script.translate,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard},"scrollBarMargin":2,"propagateClick":false,"gap":10,"height":"100%","children":["this.MainViewer_mobile","this.Container_4E7097A6_5CDE_2F41_41D2_FD096473122D_mobile","this.Image_4FC4A048_5CFA_61C0_41D1_AD515AD132BD_mobile","this.Image_4F3124B2_5CFA_6140_41BC_AAC770616AFA_mobile"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Wed Dec 4 2024