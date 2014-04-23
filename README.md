videopreview.js
===============
[![Bower version](https://badge.fury.io/bo/videopreview.png)](http://badge.fury.io/bo/videopreview)

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
