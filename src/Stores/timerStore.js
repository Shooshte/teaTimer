import {observable, action, computed} from 'mobx'

export default class TimerStore {
    @observable count = 300
    @observable started = false
    @observable message = 'THIS IS FROM THE STORE'

    @action setCount(seconds) {
        this.count = seconds;
    }

    @computed get TimeString() {
        let seconds = this.count % 60
        let minutes = Math.floor(seconds / 60)
        if(seconds < 10) {
            seconds = '0' + seconds
        }
        if(minutes < 10) {
            minutes = '0' + minutes
        }
        return minutes + ':' + seconds
    }

}




