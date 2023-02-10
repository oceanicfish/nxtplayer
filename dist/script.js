
const streams = [
  {
    url: 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/4577dca5f8a44756875ab5cc913cd1f1/index.mpd',
  },
  {
    url: 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/91d37b0389de47e0b5266736d3633077/index.mpd',
  },
  {
    url: 'https://livesim.dashif.org/livesim/scte35_2/testpic_2s/Manifest.mpd',
  },
  {
    url: 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/2fc23947945841b9b1be9768f9c13e75/index.mpd',
    drm: {
      widevine: {
        priority: 0,
        url: 'https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true',
        customData: 'ewogICAgInVzZXJJZCI6ICJhd3MtZWxlbWVudGFsOjpzcGVrZS10ZXN0aW5nIiwKICAgICJzZXNzaW9uSWQiOiAiZWxlbWVudGFsLXJlZnN0cmVhbSIsCiAgICAibWVyY2hhbnQiOiAiYXdzLWVsZW1lbnRhbCIKfQo=',
        customDataHeaderKey: 'x-dt-custom-data'
      }
    }
  },
  {
    url: 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams//6e16c26536564c2f9dbc5f725a820cff/index.mpd',
    drm: {
      widevine: {
        priority: 0,
        url: 'https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true',
        customData: 'ewogICAgInVzZXJJZCI6ICJhd3MtZWxlbWVudGFsOjpzcGVrZS10ZXN0aW5nIiwKICAgICJzZXNzaW9uSWQiOiAiZWxlbWVudGFsLXJlZnN0cmVhbSIsCiAgICAibWVyY2hhbnQiOiAiYXdzLWVsZW1lbnRhbCIKfQo=',
        customDataHeaderKey: 'x-dt-custom-data'
      }
    }
  },
  {
    url: 'https://9d75bf9c8df341e9a5739514aef339de.mediatailor.ap-northeast-1.amazonaws.com/v1/dash/3df51148bec679d3f9cb66b34261d39d1f5608ae/POC-AD-INSERT/aa8288df63184b94aaa439dd144b55a3/index.mpd',
    drm: {
      widevine: {
        priority: 0,
        url: 'https://plala.drmkeyserver.com/widevine_license',
        customData: 'jNkL5VPv1k+0K4kdOZjE2AAAAAAAAAAAAAAAAAAAAAAPg/KbYtTwuNKKZ+unGxoZf4YqKH0C6lHtbIsXB84NcWtKOuTIgKOAboSI5WTCxNCkGS/c7rux6rfhsJMwBhAV/JRrM48QihkK8orJlm/4lVBCsdiC8DzD4LUzPYEFMfesYIDS4U06Q3eQ5mO6tY6bYx5YL7g8uIzbCmQc8lbPZYctf788p+plkG61ppDRmRo2VKFP4nGwsEe16/UXV3E5RvYNweDsCxYCF7hm4etDgbaQTjTGJqXWW+9WIu3jz6XDxkXz5zrZu/e/XaEeoRE/nUvjDiTbaUHTWW0VtAL/d49OHe42KHMsqpl9FPhLl2oZv8q+tpxknVoNEK6zmBILxCBQp+A9jILVzV/2dHpvyjp+ee0jxqyJb0rT7TG94GZL8l2LdpQD1r3IjxE9j32SfIyMcSsVnu0SkrhcxahWkb+I5f5LsPP6Q4PgMBupdx71qPZYK94CcY8rI07ZVX+3CIapkJjcQmNcxameQw+Mz+/HzpOBT5W9z0Z7Hv+/fkkz9DgnH9PbWHH+iyGnzu0VdZ6oOGK5oVMWEdlW1LIJXbngc8T34Kna2EKWjP6yzYSyqsq4Y24+FYtvBi/ftwvAiQBwz6FxcBtBE2XE1pX1JA=='
      }
    }
  },
  {
    url: 'https://a00c7d94e5c745dfab1c94b884502dcf.mediatailor.ap-northeast-1.amazonaws.com/v1/dash/3df51148bec679d3f9cb66b34261d39d1f5608ae/POC-NEWMOVIE-02-Tailer/9ad0399fd25c46d781729973b9a98357/index.mpd',
    drm: {
      widevine: {
        priority: 0,
        url: 'https://plala.drmkeyserver.com/widevine_license',
        customData: 'jNkL5VPv1k+0K4kdOZjE2AAAAAAAAAAAAAAAAAAAAAAPg/KbYtTwuNKKZ+unGxoZf4YqKH0C6lHtbIsXB84NcWtKOuTIgKOAboSI5WTCxNCkGS/c7rux6rfhsJMwBhAV/JRrM48QihkK8orJlm/4lVBCsdiC8DzD4LUzPYEFMfesYIDS4U06Q3eQ5mO6tY6bYx5YL7g8uIzbCmQc8lbPZYctf788p+plkG61ppDRmRrYi2ODbT63cVqUjoQAytH/1b1gT7E2+wtv3TIhOw7v1VCzWW2KbUEGFIr5Ft0I4TUrINnzHnkneHsg7o6fi2suAKzxqWBvcNiyBKozIRzHUC6wAY9fr/tyH75SwMGwH/Eu/TK3ILQL4eNNBUj4HqjsF0W/r9d717cOCypZVCgWz+UoGIDWFlEci3W7w9as9bUo6t7kDZfYZ91lfHBUImEUNgnARO2JfLxWH7IwxbTPSi0ielJbtGaJ5U3aLCB0hyZYstFT9oPkqdkhV3w3YPhpsS6K600nrp7lXJSIm8kE6JnI+c9qXPSW4n2KZH8CO9dELEEOsAyIj9HtFmzLzMgDLJbAF3UOYhQUH/E8/Z+U3SSgSH+lM5OPhybMz1piPFONG+mtfzpNsAGE+DHvyDZXavsELEWgf9dh/KWimbe7Fw=='
      }
    }
  },
  {
    url: 'https://a00c7d94e5c745dfab1c94b884502dcf.mediatailor.ap-northeast-1.amazonaws.com/v1/dash/3df51148bec679d3f9cb66b34261d39d1f5608ae/POC-NEWMOVIE-02-Tailer/9ad0399fd25c46d781729973b9a98357/index.mpd',
    drm: {
      widevine: {
        priority: 0,
        url: 'https://plala.drmkeyserver.com/playready_license',
        customData: 'jNkL5VPv1k+0K4kdOZjE2AAAAAAAAAAAAAAAAAAAAAAPg/KbYtTwuNKKZ+unGxoZf4YqKH0C6lHtbIsXB84NcWtKOuTIgKOAboSI5WTCxNCkGS/c7rux6rfhsJMwBhAV/JRrM48QihkK8orJlm/4lVBCsdiC8DzD4LUzPYEFMfesYIDS4U06Q3eQ5mO6tY6bYx5YL7g8uIzbCmQc8lbPZYctf788p+plkG61ppDRmRrYi2ODbT63cVqUjoQAytH/1b1gT7E2+wtv3TIhOw7v1VCzWW2KbUEGFIr5Ft0I4TUrINnzHnkneHsg7o6fi2suAKzxqWBvcNiyBKozIRzHUC6wAY9fr/tyH75SwMGwH/Eu/TK3ILQL4eNNBUj4HqjsF0W/r9d717cOCypZVCgWz+UoGIDWFlEci3W7w9as9bUo6t7kDZfYZ91lfHBUImEUNgnARO2JfLxWH7IwxbTPSi0ielJbtGaJ5U3aLCB0hyZYstFT9oPkqdkhV3w3YPhpsS6K600nrp7lXJSIm8kE6JnI+c9qXPSW4n2KZH8CO9dELEEOsAyIj9HtFmzLzMgDLJbAF3UOYhQUH/E8/Z+U3SSgSH+lM5OPhybMz1piPFONG+mtfzpNsAGE+DHvyDZXavsELEWgf9dh/KWimbe7Fw=='
      }
    }
  }
  // https://ad391cc0d55b44c6a86d232548adc225.mediatailor.us-east-1.amazonaws.com/v1/master/d02fedbbc5a68596164208dd24e9b48aa60dadc7/singssai/master.m3u8
];

var player;

function play(index) {
  options = {
    video: window.document.getElementById('video'),
    url: streams[index].url,
    drm: streams[index].drm
  }
  player = new NXPlayer(options);
  player.play();

  video.volume = 0.01;

  setInterval(() => {
    window.document.getElementById('player_current_time').innerHTML = window.document.getElementById('video').currentTime.toFixed(3);
  }, 10);
}
