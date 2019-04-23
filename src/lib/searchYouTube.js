var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET', //send it through get method
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      console.log(data);
      callback(data.items);
    },
    error: function(xhr) {
      console.log('ajax request not passed');
    }
  });
};

export default searchYouTube;
