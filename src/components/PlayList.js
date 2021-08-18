import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useAudioPlayer } from 'react-use-audio-player';

import { Pause, Play, Spotify, Youtube } from '../icons';

export const PlayList = () => {
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

  const { load, playing, pause } = useAudioPlayer();
  const [currentSong, setCurrentSong] = React.useState('');

  return (
    <ul className="mt-4">
      {data.allMusicJson.nodes.map((node) => {
        return (
          <li
            key={node.audio.publicURL}
            className={`flex items-center border-b-2 border-gray border-opacity-10 py-4 ${
              node.audio.publicURL === currentSong
                ? 'opacity-100'
                : 'opacity-70'
            }`}
          >
            {playing && currentSong === node.audio.publicURL ? (
              <button
                onClick={() => {
                  pause();
                }}
                className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray hover:opacity-70 transition-opacity"
              >
                <Pause className="w-8 sm:w-10 h-8 sm:h-10" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentSong(node.audio.publicURL);
                  load({
                    src: node.audio.publicURL,
                    autoplay: !playing,
                    html5: true,
                    format: ['mp3'],
                    onend: () => {
                      const index =
                        data.allMusicJson.nodes.findIndex(
                          (el) => el.audio.publicURL === node.audio.publicURL
                        ) + 1;
                      const autoplay = (i, list) => {
                        setCurrentSong(list[i].audio.publicURL);
                        load({
                          src: list[i].audio.publicURL,
                          autoplay: !playing,
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
                }}
                className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray hover:opacity-70 transition-opacity"
              >
                <Play className="w-8 sm:w-10 h-8 sm:h-10" />
              </button>
            )}
            <div className="ml-4 flex-1 flex">
              <p className="text-base">{node.title}</p>
              <div className="flex ml-auto">
                <a
                  href={node.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Spotify className="w-5 sm:w-6 h-5 sm:h-6 hover:opacity-70 transition-opacity" />
                </a>
                <a
                  href={node.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 sm:w-6 h-5 sm:h-6 ml-4 hover:opacity-70 transition-opacity" />
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
