videopreview.js
===============
[![Bower version](https://badge.fury.io/bo/videopreview.png)](http://badge.fury.io/bo/videopreview)
[![Build Status](https://travis-ci.org/vs4vijay/videopreview.js.svg?branch=master)](https://travis-ci.org/vs4vijay/videopreview.js)
[![Github Release](http://img.shields.io/github/release/vs4vijay/videopreview.svg)](https://travis-ci.org/vs4vijay/videopreview.js)
[![Github Tag](http://img.shields.io/github/tag/vs4vijay/videopreview.svg)](https://travis-ci.org/vs4vijay/videopreview.js)
[![Downloads](http://img.shields.io/vs4vijay/dm/videopreview.svg)](https://travis-ci.org/vs4vijay/videopreview.js)
[![Version](http://img.shields.io/vs4vijay/v/videopreview.svg)](https://travis-ci.org/vs4vijay/videopreview.js)

A Library for Video Preview from YouTube, Vimeo etc.

This repo is also for distribution on `bower`. The source for this module is in the
[main VideoPreview repo](https://github.com/videopreview/videopreview.js).

## Requirements

* [node](http://nodejs.org) 
* [bower](https://github.com/bower/bower) 

## Installation

Install with `bower`:

```shell
bower install videopreview
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/videopreview/videopreview.js"></script>
```
## Documentation

Get YouTube thumbnails from url
```
VideoPreview.getYoutubeThumbnail(url);
```

Get Vimeo thumbnails from url
```
VideoPreview.getVimeoThumbnail(url);
```

Get Thumbnails(YouTube,Vimeo) from url
```
VideoPreview.getThumbnailUrl(url);
```

Get Embedable video(YouTube,Vimeo) link from url
```
VideoPreview.getEmbedLink(url);
```

## Example

```
VideoPreview.getThumbnailUrl(url).then(function(data) {
  $scope.videoThumbnailLink = data;
});
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/vs4vijay/videopreview.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

