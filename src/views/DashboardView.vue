<template>
  <div class="">
    <div class="page-top-left">
      <img src="app-assets/img/page-bg/top-left.png" width="550px" />
    </div>
    <div class="page-top-right">
      <img src="app-assets/img/page-bg/top-right.png" height="350px" />
    </div>
    <div class="page-bottom-right">
      <img src="app-assets/img/page-bg/bottom-right.png" width="600px" />
    </div>
    <div class="page-bottom-left">
      <img src="app-assets/img/page-bg/bottom-left.png" width="500px" />
    </div>
  </div>
  <div class="main-layout">
    <div class="main-layout-content">
      <div class="row">
        <div class="col-lg-12">
          <div class="logo-height">
            <div class="row align-items-start justify-content-between mt-1">
              <div class="col-4"></div>
              <div class="col-4">
                <div class="text-center">
                  <img src="https://xfortech.com/images/logo.png" class="mb-3" style="width: 30%; height: 50%" />
                  <p class="m-0 text-uppercase">
                    <span>Version:</span>
                    <span>1.0.0</span>
                  </p>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex justify-content-end">
                  <a href="" type="button" @click="logout()" class="p-2">
                    <img src="/app-assets/svg/logout.svg" style="width: 30px; height: 30px;" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="margin-top: 8%">
          <div class="col-2">
            <router-link to="/add-sales" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/printer.png" style="width: 30px" />
                <h6 class="text-uppercase">Sales/POS</h6>
                <p class="m-0">Create new sales</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/sales-list" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/list.png" style="width: 30px" />
                <h6 class="text-uppercase">Sales List</h6>
                <p class="m-0">View sales/orders</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/customers" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="/app-assets/img/home-icons/users.png" style="width: 30px" />
                <h6 class="text-uppercase">Customers</h6>
                <p class="m-0">Manage Customer details</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/employee" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/user.png" style="width: 30px" />
                <h6 class="text-uppercase">Employees</h6>
                <p class="m-0">Manage employees</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/salary-payout" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/dollar.png" style="width: 30px" />
                <h6 class="text-uppercase">Salary Payout</h6>
                <p class="m-0">Employee payments</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/expense-category" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="/app-assets/img/more-icons/expense-head.svg" style="width: 30px" />
                <h6 class="text-uppercase">Expense Category</h6>
                <p class="m-0">Manage expense catgeory</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/expenses" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/expense.png" style="width: 30px" />
                <h6 class="text-uppercase">Expense</h6>
                <p class="m-0">Manage expense</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/financial-year" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="/app-assets/img/more-icons/calendar.svg" style="width: 30px" />
                <h6 class="text-uppercase">Financial Year</h6>
                <p class="m-0">Manage financial year</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/banking-view" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="/app-assets/img/home-icons/monitor.png" style="width: 30px" />
                <h6 class="text-uppercase">Banking</h6>
                <p class="m-0">Manage banking details</p>
              </div>
            </router-link>
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
    logout() {
      this.authStore.loggedOut = true;
      this.$router.push('/login-pin')
    }
  }
}
</script>