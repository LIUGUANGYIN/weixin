var { articles }=require('../../data/db.js');
Page({
  data:{

  },
  onLoad: function (options) {
    this.setData({
      articles:articles
    })

  },
  tap:function(event){
    var articleId = event.currentTarget.dataset.articleId
    wx.redirectTo({
      url: '../article-detail/article-detail?articleId='+articleId
    }) 
  }

})
