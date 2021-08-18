import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useAudioPlayer } from 'react-use-audio-player';

import { Pause, Play } from '../icons';
import { AudioProgress } from './AudioProgress';
import { PlayList } from './PlayList';

export const AudioPlayer = () => {
  const data = useStaticQuery(graphql`
    {
      allMusicJson {
        nodes {
          youtube
          title
          spotify
          audio {
            publicURL
          }
        }
      }
    }
  `);
  const { togglePlayPause, playing, load } = useAudioPlayer();

  const [currentSong, setCurrentSong] = React.useState('');

  const initializePlayer = () => {
    setCurrentSong(data.allMusicJson.nodes[0].audio.publicURL);
    load({
      src: data.allMusicJson.nodes[0].audio.publicURL,
      autoplay: !playing,
      html5: true,
      format: ['mp3'],
      onend: () => {
        const index =
          data.allMusicJson.nodes.findIndex(
            (el) =>
              el.audio.publicURL === data.allMusicJson.nodes[0].audio.publicURL
          ) + 1;
        const autoplay = (i, list) => {
          setCurrentSong(list[i].audio.publicURL);
          load({
            src: list[i].audio.publicURL,
            autoplay: true,
            html5: true,
            onend: function () {
              if (i + 1 == list.length) {
                autoplay(0, list);
              } else {
                autoplay(i + 1, list);
              }
            },
          });
        };
        autoplay(index, data.allMusicJson.nodes);
      },
    });
  };

  return (
    <>
      <div className="flex items-center mt-16">
        <button
          onClick={() => {
            currentSong.length > 0 ? togglePlayPause() : initializePlayer();
          }}
          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray hover:opacity-70 transition-opacity"
        >
          {playing ? (
            <Pause className="w-14 sm:w-20 h-w-14 sm:h-20" />
          ) : (
            <Play className="w-14 sm:w-20 h-w-14 sm:h-20" />
          )}
        </button>
        <AudioProgress />
      </div>
      <PlayList
        playlistData={data}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </>
  );
};
