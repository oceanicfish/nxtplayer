// const video = window.document.getElementById('video');
options = {
  /******* Multi-Period Live (AWS) *****/
  url: 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/4577dca5f8a44756875ab5cc913cd1f1/index.mpd'

  /******* Multi-Period Live (AWS) *****/

  // url: 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/2fc23947945841b9b1be9768f9c13e75/index.mpd',
  // drm: {
  //   widevine: {
  //     priority: 0,
  //     url: 'https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true',
  //     customData: 'ewogICAgInVzZXJJZCI6ICJhd3MtZWxlbWVudGFsOjpzcGVrZS10ZXN0aW5nIiwKICAgICJzZXNzaW9uSWQiOiAiZWxlbWVudGFsLXJlZnN0cmVhbSIsCiAgICAibWVyY2hhbnQiOiAiYXdzLWVsZW1lbnRhbCIKfQo='
  //   }
  // }

  /** HSC Content */

  // url: 'https://9d75bf9c8df341e9a5739514aef339de.mediatailor.ap-northeast-1.amazonaws.com/v1/dash/3df51148bec679d3f9cb66b34261d39d1f5608ae/POC-AD-INSERT/aa8288df63184b94aaa439dd144b55a3/index.mpd',
  // drm: {
  //   widevine: {
  //     priority: 0,
  //     url: 'https://eval.drmkeyserver.com/widevine_license',
  //     customData: 'jNkL5VPv1k+0K4kdOZjE2MZkBVQeWc5Llk6jOlACFm3I6TsjNs6N+1OqlkV+N5nK97scalTE3Fy32pM5HgHDZ7FViBN423s9IzdqmVOKU2OwgQiglSOSOLzqCYGVYWX5k37cbaxSCNjENeE2ZDU2XGOPiml9dekgVp+cFY/ufcNRsqEttRpc6lhVJFFW3a/xtvUNrsM7VWrNnA/SFPEPqjIa9PlieA/E1C64JgzJbg1AQYl/qWpAjzY7q2VJznKFXOjpakvzUDVNVTGxzm6zl6zBguz1jOiOPALdu3mVUqt9X9m3EkMUVH5db12AxeEk9QK1Fdgt5K8gl7ONqug89qZHAUbFX0PlsqLo0I64AsoA9Ag1YL0UuRceVvXCsL2ACjTPuV/AHaWccQgoB6wAN04e93dbUsw5LmxrjZKeY6MEsvMc5L5Zj0y3/jAeuMw//hqQo1WqtyShyFwSsFk7WhrkSwKK2aPg7yf8n5rmvirIkaX/ed6xc/jvIvPWyUN8Yx7cErJ+N9u5qnW2u81oWXATUlKL0A15zUB9/42uXuT7RQ6xQp4Ef0O6qZQBnVYm5imYIaNR+UfSNwibN2FUYjReYK2dkOXa42asgolhoGEBFy5/LVSd9LDVo+zqPtty'
  //   }
  // }
}
var player = new NXPlayer(options);
player.play();