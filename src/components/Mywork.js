import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player';
import YouTube from 'react-youtube';

import { Pause, Play, Spotify, Youtube, ChevronDown } from '../icons';
import { AudioProgress } from './AudioProgress';

const GlobalPlayer = () => {
  const { togglePlayPause, playing, ready } = useAudioPlayer();

  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          togglePlayPause();
        }}
        disabled={!ready}
      >
        {playing ? (
          <Pause className="w-20 h-20" />
        ) : (
          <Play className="w-20 h-20" />
        )}
      </button>
      <AudioProgress />
    </div>
  );
};

export const Mywork = () => {
  // TODO Add youtube and spotify links maybe use JSON instead of source file
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "music" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const [currentSong, setCurrentSong] = React.useState('');

  const { load, playing, pause } = useAudioPlayer();

  return (
    <section className="mx-auto px-4 my-32 max-w-8xl">
      <div className="text-center">
        <h2 className="text-7xl">My work</h2>
        <h3 className="text-2xl opacity-60 tracking-widest mt-6">
          Listen to my music
        </h3>
      </div>
      <div className="max-w-2xl mx-auto">
        <GlobalPlayer />
        <ul className="divide-y divide-gray-700">
          {data.allFile.edges.map((edge) => {
            return (
              <li key={edge.node.publicURL} className="py-4 flex items-center">
                {playing && currentSong === edge.node.publicURL ? (
                  <button
                    onClick={() => {
                      pause();
                    }}
                  >
                    <Pause className="w-10 h-10" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setCurrentSong(edge.node.publicURL);
                      load({
                        src: edge.node.publicURL,
                        autoplay: !playing,
                        html5: true,
                        onend: () => {
                          const index =
                            data.allFile.edges.findIndex(
                              (el) => el.node.publicURL === edge.node.publicURL
                            ) + 1;
                          const autoplay = (i, list) => {
                            setCurrentSong(list[i].node.publicURL);
                            load({
                              src: list[i].node.publicURL,
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
                          autoplay(index, data.allFile.edges);
                        },
                      });
                    }}
                  >
                    <Play className="w-10 h-10" />
                  </button>
                )}
                <div className="ml-4 flex-1 flex">
                  <p className="text-base">{edge.node.name}</p>
                  <div className="flex ml-auto">
                    <Spotify className="w-6 h-6" />
                    <Youtube className="w-6 h-6" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-2xl opacity-60 tracking-widest mt-6">
          My music featuring in
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-x-56 items-center mx-auto px-4 my-32 max-w-8xl">
        <div>
          <h3 className="text-4xl max-w-sm">Blade Runner Mock-up Score</h3>
          <p className="font-sans text-lg opacity-80 mt-16">
            Collaborated with a YouTuber for an original scoring inspired by the
            Blade Runner Movies and sound. The project was well received and
            appreciated by the public.
          </p>
        </div>
        <div>
          <YouTube
            videoId="O4etinsAy34"
            opts={{
              width: '556',
              playerVars: {
                // Can change to 1 after first video played and slider is present
                autoplay: 0,
              },
            }}
            className="border-2 gradient-border yt-iframe-placeholder"

            // If slider present
            // onEnd={(e) => {
            //   setVideoId('N65exofq3O4');
            // }}
          />
        </div>
      </div>
    </section>
  );
};
