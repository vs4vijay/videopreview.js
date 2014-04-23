'use strict';

angular.module('videopreview')
  .service('VideoPreview', [ '$interpolate', '$http', '$q', function ($interpolate, $http, $q) {
	  //http://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
	  var YOUTUBE_THUMBNAIL_SKELTON = "http://img.youtube.com/vi/{{ytId}}/1.jpg";
	  var VIMEO_API_URL = "http://vimeo.com/api/oembed.json?url=";
	  var VIMEO_API_URL_SKELTON = "http://vimeo.com/api/v2/video/{{vimeoId}}.json?callback=showThumb"
	  var vimeoThumbnailUrl = '';
	  
	  var videoPreview = {
			  
			 getYoutubeThumbnail: function(url) {
                var deferred = $q.defer();
			    var ytRegEx = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
			    var match = url.match(ytRegEx);
			    if (match && match[7].length==11) {
			    	var ytId = match[7];
			    	console.log("[+] Got Youtube video Id : " + ytId);
			    	var ytThumbnailUrl = $interpolate(YOUTUBE_THUMBNAIL_SKELTON)({ytId: ytId});
			    	deferred.resolve(ytThumbnailUrl);
			    } else {
			    	deferred.resolve('');
			    }
			    return deferred.promise;
			  },
			  
			  getVimeoThumbnail: function(url) {
                  var deferred = $q.defer();
				  var vimeoUrl = VIMEO_API_URL + url;
				  $http.get(vimeoUrl).success(function(data) {
					  vimeoThumbnailUrl = data.thumbnail_url;
					  console.log("[+] Got Vimeo thumbnail : " + vimeoThumbnailUrl);
					  deferred.resolve(vimeoThumbnailUrl);
					  //return vimeoThumbnailUrl;
				  }).error(function(error) {
					  deferred.resolve('');
				  });
				  return deferred.promise;
			  },
			  
			  getThumbnailUrl: function(url) {
				  if(url != undefined && url != null) {
					  if(url.indexOf("youtube.com") != -1) {
						  return this.getYoutubeThumbnail(url);
					  } else if(url.indexOf("vimeo.com") != -1) {
						  return this.getVimeoThumbnail(url);
					  }
				  }
			  },
			  
			  getEmbedLink: function(url) {
				  var embedUrl = url;
				  if(url != null && url.indexOf("youtube.com") != -1) {
					  embedUrl = url.replace(/(?:https:\/\/)?(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '//www.youtube.com/embed/$1');
				  } else if(url != null && url.indexOf("vimeo.com") != -1) {
					  embedUrl = url.replace(/\D+/, "//player.vimeo.com/video/");
				  };
				  return embedUrl;
			  }
			  
	  };
	  
	  return videoPreview;

  }]);