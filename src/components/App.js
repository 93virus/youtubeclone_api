import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import { SearchVideos } from "../Api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onKeywordSubmit('trending');
  }, []);

  const onKeywordSubmit = async (keyword) => {
    try {
      const response = await SearchVideos(keyword);
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (err) {
        alert("Error connecting to youtube");
    }
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onKeywordSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videosArray={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );



}


export default App;
