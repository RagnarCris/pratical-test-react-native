import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerView: {
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 100
  },
  headerImage: {
    width: 40, 
    height: 40, 
    borderRadius: 100,
    marginLeft: 100
  },
  bookItemImage: {
    height: 160,
    width: 100,
  },
  bookItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  bookItemAuthor: {
    fontSize: 12,
    color: 'light-gray',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingImage: {
    height: 20,
    width: 80,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#800000",
    borderRadius: 5,
  },
});

export default styles;