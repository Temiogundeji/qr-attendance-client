import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, SafeAreaView, Image, FlatList, StatusBar } from 'react-native';
import { globalStyles } from '../shared/global';
import { Text } from '@ui-kitten/components';
import HistoryItem from '../components/HistoryItem';
import { getMyAttendances } from '../actions/attendances/attendance';


const HistoryScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const myAttendances = useSelector((state) => state.attendances);
  const [attendances, setAttendances] = useState([]);

  const renderItem = ({ item }) => <HistoryItem history={item} />;

  useEffect(() => {
    if (user) {
      console.log(user.id);
      dispatch(getMyAttendances(user.id));
    }
  }, []);

  useEffect(() => {
    if (myAttendances && myAttendances.length > 0) {
      setAttendances(myAttendances);
    }
  }, [myAttendances]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={attendances} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});

export default HistoryScreen;
