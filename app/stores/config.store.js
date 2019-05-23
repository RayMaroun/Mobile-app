export default class ConfigStore{
    constructor(){
        this.splashTime = 1000
        this.splashImg = require('../../images/login.jpg')
        this.loginBG = require('../../images/splash.jpg')
    }
    get SplashImg(){
        return this.splashImg
    }
    get SplashTime(){
        return this.splashTime
    }
    get LoginBG(){
        return this.loginBG
    }
}