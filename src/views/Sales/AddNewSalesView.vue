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
                  <h5 class="text-center text-uppercase">Sales Invoice</h5>
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
                      <button
                        @click="$refs.customer_add_ref.showModal()"
                        class="btn btn-primary btn-sqr ms-75"
                        data-bs-toggle="modal"
                        data-bs-target="#addcustomer"
                      >
                        <img class="btn-icon2" src="app-assets/img/btn-icons/users.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="row">
                <div class="col-12">
                  <div class="table-responsive sales-add-scroll sales-add-table">
                    <table class="table sales-table table-bordered table-sm m-0">
                      <thead>
                        <tr>
                          <th style="width: 5%" scope="col">#</th>
                          <th style="width: 55%" scope="col">Service Name</th>
                          <th style="width: 15%" scope="col">Qty</th>
                          <th style="width: 25%" scope="col">Total</th>
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
                            <input
                              type="number"
                              class="form-control border-none px-0"
                              placeholder="Enter QTY"
                            />
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
                                @click="$refs.edit_ref.showModal()"
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
                            @click="$refs.payment_ref.showModal()"
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
  <Teleport to="#modals">
    <PaymentModal ref="payment_ref" />
    <AddCustomerModal ref="customer_add_ref" />
    <EditModal ref="edit_ref" />
  </Teleport>
</template>
<script>
import PaymentModal from "../../components/modals/Sales/PaymentModal.vue";
import AddCustomerModal from "../../components/modals/Sales/AddCustomerModal.vue";
import EditModal from "../../components/modals/Sales/EditModal.vue";
export default {
  data() {
    return {};
  },
  components: {
    PaymentModal,
    AddCustomerModal,
    EditModal,
  },
};
</script>
