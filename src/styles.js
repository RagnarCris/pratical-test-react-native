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
  }
});

export default styles;