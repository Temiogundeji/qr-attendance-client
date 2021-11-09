import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

const HistoryItem = ({ history }) => {
  return (
    <View style={Styles.item}>
      <View>
        <Text style={Styles.week}>Week {history.Class.Week.weekNumber}</Text>
      </View>
      <View style={Styles.attrContainer}>
        <Text style={Styles.course}>{history.Class.Course.courseTitle}</Text>
      </View>
      <View style={Styles.attrContainer}>
        <Text style={Styles.date}>{moment(history.createdAt).format('MMMM d, YYYY')}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#dc780b',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  week: {
    fontFamily: 'arlon-medium',
    fontSize: 14,
    color: '#18615B',
  },
  course: {
    fontFamily: 'arlon-medium',
    fontSize: 14,
    color: '#18615B',
  },
  date: {
    fontFamily: 'arlon-medium',
    fontSize: 14,
    color: '#18615B',
  },
  attrContainer: {
    width: 100,
  },
});
export default HistoryItem;
