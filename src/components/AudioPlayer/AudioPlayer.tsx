import { AntDesign, Feather } from '@expo/vector-icons';
import { Audio, AVPlaybackStatus } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const AudioPlayer = ({
  soundURI,
  closeAudioPlayer,
}: {
  soundURI: string;
  closeAudioPlayer: () => void;
}) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const stopPlaying = () => {
    closeAudioPlayer();
    sound!.unloadAsync();
  };

  useEffect(() => {
    loadSound();
    () => {
      // unload sound
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [soundURI]);

  const loadSound = async () => {
    if (!soundURI) {
      return;
    }

    const { sound } = await Audio.Sound.createAsync({ uri: soundURI }, {}, onPlaybackStatusUpdate);
    setSound(sound);
  };

  // Audio
  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) {
      return;
    }
    setAudioProgress(status.positionMillis / (status.durationMillis || 1));
    setIsPlaying(status.isPlaying);
    setAudioDuration(status.durationMillis || 0);
  };

  const playPauseSound = async () => {
    if (!sound) {
      return;
    }
    if (audioProgress === 1) {
      await sound.playFromPositionAsync(0);
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getDuration = () => {
    const minutes = Math.floor(audioDuration / (60 * 1000));
    const seconds = Math.floor((audioDuration % (60 * 1000)) / 1000);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.sendAudioContainer}>
      <Pressable onPress={playPauseSound}>
        <Feather name={isPlaying ? 'pause' : 'play'} size={24} color="gray" />
      </Pressable>

      <View style={styles.audiProgressBG}>
        <View style={[styles.audioProgressFG, { left: `${audioProgress * 100 - 3}%` }]} />
      </View>

      <Text>{getDuration()}</Text>

      <Pressable onPress={stopPlaying}>
        <AntDesign name="close" size={24} color="black" style={{ margin: 5 }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sendAudioContainer: {
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    backgroundColor: 'white',
  },

  audiProgressBG: {
    height: 3,
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    margin: 10,
  },
  audioProgressFG: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#3777f0',
    position: 'absolute',
    top: -3,
  },
});

export default AudioPlayer;
