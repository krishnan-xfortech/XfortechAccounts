<template>
    <div class="">
        <div class="login-top-left">
            <img src="app-assets/img/login-img/top-left.png" width="550px">
        </div>
        <div class="login-middle">
            <img src="app-assets/img/login-img/middile.png" width="120px">
        </div>
        <div class="login-top-right">
            <img src="app-assets/img/login-img/top-right.png" height="350px">
        </div>
        <div class="login-bottom-right">
            <img src="app-assets/img/login-img/bottom-right.png" width="600px">
        </div>
        <div class="login-bottom-left">
            <img src="app-assets/img/login-img/bottom-left.png" width="500px">
        </div>
        <div class="row justify-content-center vh-100 login-content">
            <div class="col-3 align-self-center col-md-4">
                <div class="card">
                    <div class="card-body py-4">
                        <div class="text-center mb-4">
                            <img src="app-assets/img/logo.svg" class="login-logo mb-3">
                            <p class="m-0 text-uppercase">
                                <span>Version:</span>
                                <span>1.0.0</span>
                            </p>
                        </div>
                        <form class="row">
                            <div class="col-12 text-center py-3">
                                <input type="number" class="pin-digit-input" maxlength="1" tabindex="1" v-model="first"
                                    ref="first" @input="handleNextField" data-id="first" @keypress="preventMultiple" />

                                <input type="number" class="pin-digit-input" maxlength="1" tabindex="2" v-model="second"
                                    ref="second" @input="handleNextField" data-id="second" @keypress="preventMultiple" />

                                <input type="number" class="pin-digit-input" maxlength="1" tabindex="3" v-model="third"
                                    ref="third" @input="handleNextField" data-id="third" @keypress="preventMultiple" />

                                <input type="number" class="pin-digit-input" maxlength="1" tabindex="4" v-model="fourth"
                                    ref="fourth" @input="handleNextField" data-id="fourth" @keypress="preventMultiple" />
                            </div>
                            <div class="text-xs text-center" v-if="error">
                                <span class="text-danger">Incorrect PIN </span>
                                <span>Login with email by clicking </span> <router-link to="/login"
                                    class="text-pink">here</router-link>
                            </div>
                            <AuthLoader v-if="loading" />

                            <div class="col-12 text-center text-white">
                                <span>Powered By <a class="text-pink fw-bold" href="https://invoxi.in/"
                                        target="_blank">INVOXI</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useAuthStore } from '../../stores/authStore';
import AuthLoader from '../../components/Loaders/AuthLoader.vue';

export default {
    data() {
        return {
            first: '',
            second: '',
            third: '',
            fourth: '',
            authStore: useAuthStore(),
            error: false,
            loading: false
        }
    },
    methods: {
        preventMultiple(e) {
            if (e.target.value.length == 1) {
                // e.preventDefault();
                // e.stopPropagation();
                // return;
            }
        },
        handleNextField(e) {
            if (e.target.dataset.id == 'first') {
                this.$refs.second.focus();
                this.$refs.second.select();
            }
            if (e.target.dataset.id == 'second') {
                this.$refs.third.focus();
                this.$refs.third.select();
            }
            if (e.target.dataset.id == 'third') {
                this.$refs.fourth.focus();
                this.$refs.fourth.select();
            }
            if (e.target.dataset.id == 'fourth') {
                this.checkLogin();
            }
        },
        async checkLogin() {
            this.loading = true;
            if (this.authStore.pin != (this.first.toString() + this.second.toString() + this.third.toString() + this.fourth.toString())) {
                this.loading = false;
                this.error = true;
                return;
            }
            this.axios.post('login', { email: this.authStore.email, password: this.authStore.password }).then((response) => {
                this.loading = false;
                if (response.data.success == true) {
                    this.authStore.user = response.data.data;
                    this.authStore.token = response.data.data.token;
                    this.authStore.loggedOut = false;
                    this.$router.push('/dashboard')
                    return;
                }
                else {
                    this.error = true;
                }
            })
        }
    },
    beforeRouteLeave(to, from) {
        if (to.name == 'login') {
            console.log('logging out')
            this.authStore.usePinLogin = false;
        }
    },
    watch:
    {
        first(value) {

        }
    },
    components: {
        AuthLoader
    }
}

</script>