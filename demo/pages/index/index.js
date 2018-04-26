const app = getApp();

Page({
  data: {

  },

  onReady() {
  },

  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart + '/index'
    });
  }
});
