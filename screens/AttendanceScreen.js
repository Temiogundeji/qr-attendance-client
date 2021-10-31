import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../shared/global';
import { Text, Button } from '@ui-kitten/components';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { createAttendance } from '../actions/attendances/attendance';

const AttendanceScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [attendanceData, setAttendanceData] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (scanned === true) setAttendanceData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  console.log(attendanceData);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={globalStyles.secondaryBackground}>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={globalStyles.headingText}>
            Scan QR Code to mark your attendance for the class.
          </Text>
        </View>
        <View style={Styles.barCodeContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>

        <View>
          <Button onPress={() => setShowScanner(!showScanner)} style={Styles.buttonStyle}>
            <Text style={[Styles.qrText, globalStyles.normalText]}>Scan QR Code</Text>
          </Button>

          <Button style={Styles.buttonStyle}>
            <Text style={Styles.qrText}>Cancel</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  barCodeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 250,
    width: '100%',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
  },
  barCodeStyles: {
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 40,
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 45,
  },
  menuCards: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '40%',
  },
  menuRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  menuCard: {
    backgroundColor: '#dc780b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '47.5%',
    height: 150,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardText: {
    color: '#ffffff',
    fontFamily: 'arlon-medium',
  },
  qrText: {
    fontFamily: 'arlon-medium',
  },
  buttonStyle: {
    marginBottom: 10,
    fontFamily: 'arlon-medium',
  },
});

export default AttendanceScreen;