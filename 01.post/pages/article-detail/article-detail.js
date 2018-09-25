// pages/article-detail/article-detail.js
var { articles } = require('../../data/db.js');
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  onLoad:function(options){
    var articleId=options.articleId;
    this.data.articleId=articleId;
    var article=articles[articleId];
    this.setData(article);
    
    // 设置收藏状态
    /*
    {
      "0":false,
      "1":true
    }
    */
    var articleCollection = wx.getStorageSync('article_collection');
    var currentIsCollected = false;
    if (articleCollection) {
      currentIsCollected = articleCollection[articleId];
    } else {
      var data = {};
      data[articleId] = false;
      wx.setStorageSync('article_collection', data);
    }
    this.setData({
      currentIsCollected: currentIsCollected
    })
  },
  tapCollection:function(){
    var articleCollection = wx.getStorageSync('article_collection');
   
    var currentIsCollected = articleCollection[this.data.articleId];

    articleCollection[this.data.articleId] = !currentIsCollected;
    wx.setStorageSync('article_collection', articleCollection);

    this.setData({
      currentIsCollected: !currentIsCollected
    })

  },
  tapShare:function(){
    var itemList=['分享到微信','分享到微博','分享到QQ'];
    wx.showActionSheet({
      itemList:itemList
    })
  }
})
