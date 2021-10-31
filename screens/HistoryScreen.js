import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, FlatList, StatusBar } from 'react-native';
import { images } from '../shared/global';
import { globalStyles } from '../shared/global';
import { Card, Text } from '@ui-kitten/components';
import AppHeader from '../components/AppHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HistoryScreen = ({ navigation }) => {
  const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      class: 'First Item',
      date: '1st October, 2020',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      class: 'Second Item',
      date: '1st October, 2020',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571en29d72',
      class: 'Third Item',
      date: '1st October, 2020',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      class: 'Fourth Item',
      date: '1st October, 2020',
    },
  ];

  const Item = ({ title }) => (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={globalStyles.container}>
      <View style={Styles.secondaryBackground}>
        <View style={Styles.header}>
          <Text style={globalStyles.headingText}>Your attendance history is here!</Text>
        </View>
        <View>
          <SafeAreaView style={Styles.historyContainer}>
            <FlatList data={Data} renderItem={renderItem} keyExtractor={(item) => item.id} />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  historyContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HistoryScreen;
