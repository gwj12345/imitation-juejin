/**
 * api 管理
 * @date 23/02/11
 * @author gwj
 */

import request from "./request";
const link = 'http://win.gwj1314.cn:1337'
export default {
    // 返回baseurl
    link,
    // 获取顶部tab类别
    getTopbar(){
        return request({
            url: "/topbars",
            method: "get",
        });
    },
    // 获取广告
    getAds(){
        return request({
            url: `/advertises/?populate=*`,
            method: "get",
        });
    },
    // 获取作者榜
    getRank(){
        return request({
            url: `/rank/?populate=*`,
            method: "get",
        });
    },
    // 获取所有作者以及他所发的文章
    getAuthorsPaper(){
        return request({
            url: `/authors/?populate=*`,
            method: "get",
        });
    },
    // 获取所有分类以及分类下的文章
    getCategoriesPaper(){
        return request({
            url: `/categories/?populate=*`,
            method: "get",
        });
    },
    // 获取文章分类bar
    getCategoriesBar(){
        return request({
            url: `/categories`,
            method: "get",
        });
    },
    // 获取所有文章（含标签）
    getAllPaper(){
        return request({
            url: `/article-infos/?populate=*`,
            method: "get",
        });
    }, 
};



