<template>
  <div class="main-layout">
    <div class="main-layout-content">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-start justify-content-between">
                <div class="col-4">
                  <div class="row align-items-center mb-3">
                    <div class="col-auto">
                      <img
                        src="app-assets/img/home-icons/customer.png"
                        class="sale-icon"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Select Customer"
                        value="Nithish Robin - +91 9876543210"
                      />
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            src="app-assets/img/home-icons/number.png"
                            class="sale-icon"
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            disabled
                            class="form-control"
                            value="10001"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            src="app-assets/img/home-icons/date.png"
                            class="sale-icon"
                          />
                        </div>
                        <div class="col">
                          <input type="date" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <h5 class="text-center text-uppercase">Edit Sales Invoice</h5>
                </div>
                <div class="col-4">
                  <div class="row align-items-center justify-content-end mb-3">
                    <div class="col-auto">
                      <router-link to="/sales-list" type="button" class="">
                        <img
                          src="app-assets/img/btn-icons/close.svg"
                          class="back-btn mb-3"
                        />
                      </router-link>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-end">
                    <div class="col-auto">
                      <a
                        class="btn btn-primary btn-sqr"
                        data-bs-toggle="modal"
                        data-bs-target="#addservice"
                      >
                        <img
                          class="btn-icon2"
                          src="app-assets/img/btn-icons/services.svg"
                        />
                      </a>
                      <button
                        class="btn btn-primary btn-sqr ms-75"
                        data-bs-toggle="modal"
                        data-bs-target="#addcustomer"
                      >
                        <img class="btn-icon2" src="app-assets/img/btn-icons/users.svg" />
                      </button>
                      <button class="btn btn-primary btn-sqr ms-75">
                        <img
                          class="btn-icon2"
                          src="app-assets/img/btn-icons/shortcut.svg"
                          data-bs-toggle="modal"
                          data-bs-target="#shortcuts"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="row">
                <div class="col-7">
                  <div class="row">
                    <div class="col-3">
                      <div class="sales-add-scroll sales-add-category">
                        <ul class="mt-3">
                          <li>
                            <a href="" class="active" type="button">
                              <span>All Services</span>
                              <span class="ms-2">(30)</span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="" type="button">
                              <span>Shirts</span>
                              <span class="ms-2">(10)</span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="" type="button">
                              <span>Trousers</span>
                              <span class="ms-2">(04)</span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="" type="button">
                              <span>Churidhar</span>
                              <span class="ms-2">(10)</span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="" type="button">
                              <span>Wedding Suit</span>
                              <span class="ms-2">(03)</span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="" type="button">
                              <span>Curtain</span>
                              <span class="ms-2">(0)</span>
                            </a>
                          </li>
                          <li>
                            <a href="" class="" type="button">
                              <span>Pardha</span>
                              <span class="ms-2">(06)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-9">
                      <div class="sales-add-scroll">
                        <div class="row mt-50">
                          <div class="col-3">
                            <a
                              class="sales-add-service"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#selectservice"
                            >
                              <div class="gradient"></div>
                              <img src="app-assets/img/sample-img.jpg" class="" />
                              <div class="text">
                                <h6 class="text-sm">Half Sleeve Shirt</h6>
                                <h6 class="m-0">
                                  <span>$</span>
                                  <span>1250.00</span>
                                </h6>
                              </div>
                            </a>
                          </div>
                          <div class="col-3">
                            <a
                              class="sales-add-service"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#selectservice"
                            >
                              <div class="gradient"></div>
                              <img src="app-assets/img/sample-service2.jpg" class="" />
                              <div class="text">
                                <h6 class="text-sm">Half Sleeve Shirt</h6>
                                <h6 class="m-0">
                                  <span>$</span>
                                  <span>1250.00</span>
                                </h6>
                              </div>
                            </a>
                          </div>
                          <div class="col-3">
                            <a
                              class="sales-add-service"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#selectservice"
                            >
                              <div class="gradient"></div>
                              <img src="app-assets/img/sample-img.jpg" class="" />
                              <div class="text">
                                <h6 class="text-sm">Half Sleeve Shirt</h6>
                                <h6 class="m-0">
                                  <span>$</span>
                                  <span>1250.00</span>
                                </h6>
                              </div>
                            </a>
                          </div>
                          <div class="col-3">
                            <a
                              class="sales-add-service"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#selectservice"
                            >
                              <div class="gradient"></div>
                              <img src="app-assets/img/sample-img.jpg" class="" />
                              <div class="text">
                                <h6 class="text-sm">Half Sleeve Shirt</h6>
                                <h6 class="m-0">
                                  <span>$</span>
                                  <span>1250.00</span>
                                </h6>
                              </div>
                            </a>
                          </div>
                          <div class="col-3">
                            <a
                              class="sales-add-service"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#selectservice"
                            >
                              <div class="gradient"></div>
                              <img src="app-assets/img/sample-img.jpg" class="" />
                              <div class="text">
                                <h6 class="text-sm">Half Sleeve Shirt</h6>
                                <h6 class="m-0">
                                  <span>$</span>
                                  <span>1250.00</span>
                                </h6>
                              </div>
                            </a>
                          </div>
                          <div class="col-3">
                            <a
                              class="sales-add-service"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#selectservice"
                            >
                              <div class="gradient"></div>
                              <img src="app-assets/img/sample-service.jpg" class="" />
                              <div class="text">
                                <h6 class="text-sm">Half Sleeve Shirt</h6>
                                <h6 class="m-0">
                                  <span>$</span>
                                  <span>1250.00</span>
                                </h6>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="table-responsive sales-add-scroll sales-add-table">
                    <table class="table sales-table table-bordered table-sm m-0">
                      <thead>
                        <tr>
                          <th style="width: 5%" scope="col">#</th>
                          <th style="width: 55%" scope="col">Service Name</th>
                          <th style="width: 25%" scope="col">Total</th>
                          <th style="width: 5%" scope="col"></th>
                          <th style="width: 10%" scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="">
                          <td>1</td>
                          <td>
                            <div class="">
                              <div class="main-heading">Shirt Full Sleeve Casual</div>
                              <div class="subheading">
                                <span>Material 1</span> -
                                <span class="ps-1">3.5</span>
                                <span>MTRS</span>
                              </div>
                              <div class="subheading">
                                <span>Material 2</span> -
                                <span class="ps-1">6.5</span>
                                <span>MTRS</span>
                              </div>
                              <div class="subheading">
                                <span>Material 3</span> -
                                <span class="ps-1">10</span>
                                <span>NOS</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="">
                              <span>$</span>
                              <span>125000.00</span>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#measurements"
                              >
                                <img
                                  class="btn-icon2"
                                  src="app-assets/img/btn-icons/measurements.svg"
                                />
                              </a>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#selectservice"
                              >
                                <img
                                  class="x-icon"
                                  src="app-assets/img/btn-icons/edit2.svg"
                                  style="opacity: 0.5"
                                />
                              </a>
                              <a type="button" class="ms-3">
                                <img
                                  class="x-icon"
                                  src="app-assets/img/btn-icons/x.svg"
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row align-items-top justify-content-between">
                <div class="col-4">
                  <div class="row">
                    <div class="col-12">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <div class="d-flex align-items-center">
                            <div class="form-check mb-0">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="discounttype"
                                id="amount"
                                checked
                              />
                              <label class="form-check-label" for="amount">
                                $ Discount
                              </label>
                            </div>
                            <div class="form-check mb-0 ms-3">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="discounttype"
                                id="percentage"
                              />
                              <label class="form-check-label" for="percentage">
                                % Discount
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Discount"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <textarea
                        rows="3"
                        class="form-control"
                        placeholder="Enter Notes/Remarks"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="m-0">Taxable Amount</div>
                    </div>
                    <div class="col-auto">
                      <div class="m-0 text-white">
                        <span>$</span>
                        <span>12055.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="m-0">Tax Amount</div>
                    </div>
                    <div class="col-auto">
                      <div class="m-0 text-white">
                        <span>$</span>
                        <span>12055.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="row align-items-center mb-1">
                    <div class="col">
                      <div class="m-0">Grand Total</div>
                    </div>
                    <div class="col-auto">
                      <div class="m-0 text-white">
                        <span>$</span>
                        <span>12055.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-1">
                    <div class="col">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <label class="form-check-label" for="roundoff">
                            Round Off
                          </label>
                        </div>
                        <div class="col">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="roundoff"
                            />
                            <label class="form-check-label" for="roundoff"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="m-0 text-white">
                        <span>+</span>
                        <span>00.45</span>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mb-3">
                    <div class="col">
                      <div class="m-0">Net Payable</div>
                    </div>
                    <div class="col-auto">
                      <div class="m-0 text-white">
                        <span>$</span>
                        <span>12055.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-6">
                      <div class="row align-items-center">
                        <div class="col-6">
                          <a
                            type="button"
                            class="btn btn-secondary w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#payment"
                          >
                            Pay
                          </a>
                        </div>
                        <div class="col-6">
                          <a type="button" class="btn btn-secondary w-100"> Save </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <button type="submit" class="btn btn-primary w-100">
                        Save & Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
