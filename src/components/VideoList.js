import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {

    render() {
        const {videosArray, onVideoSelect} = this.props;
        const mappedArray = videosArray.map((video) => <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>);
        return(
            <div className="ui relaxed divided list">{mappedArray}</div>
        );
    }
}

export default VideoList;