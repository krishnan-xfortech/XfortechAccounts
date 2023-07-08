import { defineStore } from 'pinia'

export const useAuthStore = defineStore('userStore', {
    state: () => {
        return {
            user : [],
            email : '',
            password : '',
            token : '',
            pin : '1234',
            usePinLogin : false
        }
    },
    actions : {
       logout()
        {
            this.loggedOut  = true;
        }
    },
    getters:{
        isLoggedIn()
        {
            if(this.user.token == undefined)
            {
                return false;
            }
            else{
                return true;
            }
        }
    },
    persist : true
});