<template>
  <div
    class="modal fade"
    id="addexpense"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Add Expense</div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body normal-modal">
            <div class="row">
              <div class="col-lg-12">
                <div class="row align-items-center mb-3">
                  <div class="col-3">Date</div>
                  <div class="col-6">
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Expense Category</div>
                  <div class="col-6">
                    <select class="form-select">
                      <option>Select a Category</option>
                      <option>Petrol</option>
                      <option>Food</option>
                    </select>
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Amount</div>
                  <div class="col-6">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Amount"
                    />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Payment Mode</div>
                  <div class="col-6">
                    <select class="form-select">
                      <option>Select a Payment</option>
                      <option>Cash</option>
                      <option>Card</option>
                      <option>Cheque</option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Tax Include ?</div>
                  <div class="col-auto">
                    <div class="d-flex align-items-center">
                      <div class="form-check mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="discounttype"
                          id="amount"
                          value="1"
                          v-model="tax"
                        />
                        <label class="form-check-label" for="amount">Yes </label>
                      </div>
                      <div class="form-check mb-0 ms-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="discounttype"
                          id="percentage"
                          value="0"
                          v-model="tax"
                        />
                        <label class="form-check-label" for="percentage">No </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 ms-1" v-if="tax == 1">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Tax Amount"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-text">Save & New</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      modal: null,
      tax: 0,
    };
  },
  mounted() {
    this.modal = new Modal(document.getElementById("addexpense"));
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>
