import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer video={exampleVideoData[0]} /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={exampleVideoData} /></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0], 
      currentList: exampleVideoData      
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.getYoutubeVideos.bind(this);
  }

  getYouTubeVideos(searchTerm) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: searchTerm,
      max: 5
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        currentList: videos
      });
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('incubus');
  }

  handleClick(videoInfo) { 
    //videoInfo = the video that was clicked
    this.setState(state => ({currentVideo: videoInfo}));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleChange={this.getYouTubeVideos.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.currentList} onClick={this.handleClick} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


