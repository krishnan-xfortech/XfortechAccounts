<template>
    <div class="">
        <div class="login-top-left">
            <img src="/app-assets/img/login-img/top-left.png" width="550px">
        </div>
        <div class="login-middle">
            <img src="/app-assets/img/login-img/middile.png" width="120px">
        </div>
        <div class="login-top-right">
            <img src="/app-assets/img/login-img/top-right.png" height="350px">
        </div>
        <div class="login-bottom-right">
            <img src="/app-assets/img/login-img/bottom-right.png" width="600px">
        </div>
        <div class="login-bottom-left">
            <img src="/app-assets/img/login-img/bottom-left.png" width="500px">
        </div>
        <div class="row justify-content-center vh-100 login-content">
            <div class="col-3 align-self-center">
                <div class="card">
                    <div class="card-body py-4">
                        <div class="text-center mb-4">
                            <!-- <img src="/app-assets/img/logo.svg" class="login-logo mb-3"> -->
                            <img src="https://xfortech.com/images/logo.png" class="login-logo p-2"
                                style="width: 30%; height: 50%; background: white; border-radius: 15%;" />
                            <p class="m-0 text-uppercase">
                                <span>Version:</span>
                                <span>1.0.0</span>
                            </p>
                            <span class="text-danger text-xs" v-if="error">{{ errorString }}</span>
                        </div>
                        <form class="row">
                            <div class="col-12">
                                <label class="form-label">Email</label>
                                <input v-model="email" type="email" class="form-control" placeholder="Enter Your Mail ID"
                                    :class="{ 'border-danger': v$.email.$error }">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Password</label>
                                <input v-model="password" type="password" class="form-control"
                                    placeholder="Enter Your Password" :class="{ 'border-danger': v$.password.$error }">
                            </div>
                            <div class="col-12 mb-4">
                                <a class="text-pink" href="#">Forgot Password ?</a>
                            </div>
                            <div class="col-12 text-center">
                                <button type="button" class="btn btn-primary w-75" @click="login()">
                                    Login
                                </button>
                            </div>
                            <AuthLoader v-if="loading" />
                            <div class="col-12 text-center text-white">
                                <span>Powered By <a class="text-pink fw-bold text-uppercase" href="https://xfortech.com/"
                                        target="_blank">xfortech</a></span>
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
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import AuthLoader from '../../components/Loaders/AuthLoader.vue';

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    components: {
        AuthLoader
    },
    data() {
        return {
            email: '',
            password: '',
            error: false,
            authStore: useAuthStore(),
            loading: false,
        }
    },
    mounted() {
        if (this.authStore.isLoggedIn == true && this.authStore.usePinLogin == true) {
            this.$router.push('/login-pin')
        }
    },
    methods: {
        async login() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
            this.loading = true;
            this.axios.post('login', { email: this.email, password: this.password }).then((response) => {
                this.loading = false;
                if (response.data.success == true) {
                    this.authStore.user = response.data.data;
                    this.authStore.email = this.email;
                    this.authStore.password = this.password;
                    this.authStore.token = response.data.data.token;
                    this.authStore.pin = response.data.data.login_pin;
                    this.authStore.usePinLogin = true;
                    this.$router.push('/dashboard')
                    return;
                }
                else {
                    this.error = true;
                }
            })
        }
    },
    validations() {
        return {
            email: { required, email },
            password: { required }
        }
    },
    computed:
    {
        errorString() {
            if (this.error == true) {
                return 'Your email or password is incorrect'
            }
        }
    },
    watch: {
        email() {
            this.error = false;
        },
        password() {
            this.error = false;
        }
    }
}
</script>