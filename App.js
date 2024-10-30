import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import clock from './assets/clock.jpg';

export default function ClockApp() {
  const [timeZone, setTimeZone] = useState('America/Maceio');
  const [time, setTime] = useState('');

  const regionNames = {
    'America/Maceio': 'Maceió',
    'America/New_York': 'Nova York',
    'Europe/London': 'Londres',
  };

  useEffect(() => {
    updateClock('America/Maceio');
  }, []);

  function updateClock(selectedTimezone) {
    const currentTime = getFormattedTime(selectedTimezone);
    setTime(currentTime);
    setTimeZone(selectedTimezone);
  }

  function getFormattedTime(selectedTimezone) {
    const date = new Date();
    const options = {
      timeZone: selectedTimezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return new Intl.DateTimeFormat('default', options).format(date);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Relógio Mundial</Text>
      <Image source={clock} style={styles.image} />
      <View style={styles.clockContainer}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.timeZone}>{regionNames[timeZone]}</Text>
      </View>
        <TouchableOpacity onPress={() => updateClock('America/Maceio')} style={styles.button}>
          <Text style={styles.buttonText}>Maceió</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateClock('America/New_York')} style={styles.button}>
          <Text style={styles.buttonText}>Nova York</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateClock('Europe/London')} style={styles.button}>
          <Text style={styles.buttonText}>Londres</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    resizeMode: 'contain',
    width: '80%',
    height: '50%',
  },
  clockContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -80 }, { translateY: -55 }],
    alignItems: 'center',
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  timeZone: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
