import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoListEntry from './VideoListEntry.js';
//^ an array of objects
/*
kind:
etag:
id: {kind: , videoId: }
snippet: {publishedAt: , channelId: , title: , description: , thumbnails: {}, channelTitle: , liveBroadCastContent: }
*/
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} onClick={props.onClick}/>    
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;





