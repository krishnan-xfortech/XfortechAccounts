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
                        </div>
                        <form class="row">
                            <div class="col-12">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Enter Your Mail ID">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="Enter Your Password">
                            </div>
                            <div class="col-12 mb-4">
                                <a class="text-pink" href="#">Forgot Password ?</a>
                            </div>
                            <div class="col-12 text-center">
                                <button type="button" class="btn btn-primary w-75" @click="login()">
                                    Login
                                </button>
                            </div>
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
export default {
    data() {
        return {

        }
    },
    methods: {
        login() {
            this.$router.push('/dashboard');
        }
    }
}
</script>