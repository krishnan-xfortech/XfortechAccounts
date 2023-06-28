<template>

    <main class="">
      <router-view />
    </main>

    <div class="modal fade" id="more" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title m-0">More</div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form>
            <div class="modal-body">
              <div class="row">
                <div class="col-6">
                  <a href="more-staffs.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/user.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Staff Management</h6>
                            <p class="mb-0 text-sm">Manage system users.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-service-category.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/service-category.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Service Category</h6>
                            <p class="mb-0 text-sm">Manage service groups.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-expense-head.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/expense-head.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Expense Head</h6>
                            <p class="mb-0 text-sm">Voucher expense heads.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-material-category.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/material-category.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Material Category</h6>
                            <p class="mb-0 text-sm">Manage inventory groups.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-suppliers.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/supplier.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Supplier Management</h6>
                            <p class="mb-0 text-sm">Material providers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-purchase-return.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/purchase-return.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Purchase Return</h6>
                            <p class="mb-0 text-sm">Return damaged materials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-measurement-attributes.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/measurement-attributes.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Meas. Attributes</h6>
                            <p class="mb-0 text-sm">Measurement elements.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-material-unit.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/material-unit.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Material Units</h6>
                            <p class="mb-0 text-sm">Manage item units.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-6">
                  <a href="more-financial-year.php" class="d-block rounded border border-secondary p-2 more-btn">
                    <div class="row align-items-center justify-content-between">
                      <div class="col">
                        <div class="row align-items-start ps-6">
                          <div class="col-auto">
                            <img class="btn-icon" src="app-assets/img/more-icons/calendar.svg">
                          </div>

                          <div class="col">
                            <h6 class="">Financial Year</h6>
                            <p class="mb-0 text-sm">Manage financial year.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>>