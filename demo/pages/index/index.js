const app = getApp();

Page({
  data: {

  },

  onReady() {
  },

  open: function (e) {debugger
    wx.navigateTo({
      url: '../' + e.target.dataset.chart + '/index'
    });
  }
});
