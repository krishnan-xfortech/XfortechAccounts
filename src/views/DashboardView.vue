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
                  <a href="" type="button" class="">
                    <img src="app-assets/img/building.jpg" class="company-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="margin-top: 10%">
          <div class="col-2">
            <a href="sales-add.php" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/printer.png" width="30px" />
                <h6 class="text-uppercase">Sales/POS</h6>
                <p class="m-0">Create new sales</p>
              </div>
            </a>
          </div>
          <div class="col-2">
            <a href="sales-list.php" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/list.png" width="30px" />
                <h6 class="text-uppercase">Sales List</h6>
                <p class="m-0">View sales/orders</p>
              </div>
            </a>
          </div>
          <div class="col-2">
            <router-link to="/employee" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/users.png" style="width: 30px" />
                <h6 class="text-uppercase">Employees</h6>
                <p class="m-0">Manage employees</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <a href="cash-receipt.php" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/dollar.png" width="30px" />
                <h6 class="text-uppercase">Cash Receipt</h6>
                <p class="m-0">Customer payments</p>
              </div>
            </a>
          </div>
          <div class="col-2">
            <router-link to="/expenses" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/materials.png" width="30px" />
                <h6 class="text-uppercase">Expense</h6>
                <p class="m-0">Manage expense</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <router-link to="/expense-category" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="/app-assets/img/home-icons/materials.png" style="width: 30px" />
                <h6 class="text-uppercase">Expense Category</h6>
                <p class="m-0">Manage expense catgeory</p>
              </div>
            </router-link>
          </div>
          <div class="col-2">
            <a href="purchase.php" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/purchase.png" width="30px" />
                <h6 class="text-uppercase">Purchase</h6>
                <p class="m-0">Bills & suppliers</p>
              </div>
            </a>
          </div>
          <div class="col-2">
            <a href="branches.php" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/branch.png" width="30px" />
                <h6 class="text-uppercase">Branches</h6>
                <p class="m-0">Manage branches</p>
              </div>
            </a>
          </div>
          <div class="col-2">
            <a href="settings.php" type="button" class="card home-card">
              <div class="card-body">
                <img class="mb-5" src="app-assets/img/home-icons/settings.png" width="30px" />
                <h6 class="text-uppercase">Settings</h6>
                <p class="m-0">Configure system</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
