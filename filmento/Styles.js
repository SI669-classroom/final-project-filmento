import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },  
  headerContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32, 
    padding: 10
  },
  SwitchContainer:{
    flex: 0.15,
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    alignItems: 'center'
  },
  SwitchItem: {
    padding: 20,
    flexDirection:'row',
    alignItems: 'center'
  },
  SwitchContainerText: {
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:5
  },
  bodyContainer: {
    flex: 0.65,
    width: '100%',
    justifyContent: 'flex-start',
  },
  bodyListItem: {
    flex: 1,
    // margin: 10,
    flexDirection: 'row',
    width: '100%',
  },
  bodyListItemLeft: {
    flex: 0.5,
    padding: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  bodyListItemRight: {
    flex: 0.2,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyListItemDate: {
    fontSize: 12
  },
  bodyListItemText: {
    fontSize: 18,
    width: '80%'
  },
  bodyListItemLabelGroup:{
    // marginLeft: 70,
    flex: 0.3,
    margin: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  bodyListItemLabel:{
    backgroundColor: 'lightblue',
    margin: 5,
    padding: 8,
    flex:0.5
  },
  bodyListItemLabelText:{
    fontSize: 12,
    color:'black'
  },
  detailsBodyContainer: {
    flex: 0.6,
    padding: 20, 
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  detailListItemLeft: {
    flex: 0.7,
    // margin: 5,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  detailListItemRight: {
    flex: 0.3,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  detailsInputContainer: {
    flex: 0.5,
    width: '100%'
  },
  detailsLabelsContainer: {
    flex: 0.5
  },
  labelSelectContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  labelSelectCheckBoxContainer: {
    padding: 1,
    margin: 1
  },
  labelSelectText: {
    fontSize: 16
  },
  mediumButtonContainer: {
    flex: 0.5,
    margin: 3,
  },
  mediumButtonTitle: {
    fontSize: 14
  },
  largeInput: {
    borderWidth: 1,
    borderColor: 'black',
    height: '95%'
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
  },
  buttonGroupContainer:{
    flexDirection: 'column',
    flex: 0.8,
    width: '90%',
    borderColor: '#4189D6'
  },
  buttonGroupStyle:{
    borderColor: '#4189D6',
    borderWidth: 1,
    height: 30,
    elevation: 0

  },
  buttonGroupText:{
    color: '#4189D6',
    fontSize: 12
  },
  buttonGroupSelected:{
    backgroundColor:'#4189D6'
  },
  buttonGroupSelectedText:{
    color: 'white',
    fontSize: 12
  }
});