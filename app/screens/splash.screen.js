import React, {Component} from 'react';
import {ImageBackground, View} from 'react-native';
import { inject} from 'mobx-react';

@inject("stores")
export default class SplashScreen extends Component {
    constructor(props){
super(props)
    }
    componentDidMount() {
        const {stores, navigation } = this.props;
        setTimeout(() => {
          navigation.navigate("Login")
        }, stores.config.SplashTime)
      }
    render(){
        const {stores} = this.props
        return (
            <View style={{flex:1}}>
            <ImageBackground style={{flex:1,width: '100%',height:'100%'}} source={stores.config.SplashImg}/>

            </View>
        )
    }
}