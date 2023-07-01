<template>
  <div
    class="modal fade"
    id="payment"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Invoice Payment</div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body" style="min-height: 210px">
            <div class="row g-18 justify-content-center">
              <div class="col-12">
                <div class="row align-items-center justify-content-end">
                  <div class="col-4">
                    <div class="text-secondary">
                      <span>To Pay</span>
                    </div>
                  </div>
                  <div class="col-8">
                    <input
                      type="number"
                      disabled
                      class="form-control border-none"
                      value="15000.00"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center justify-content-end">
                  <div class="col-4">
                    <div class="text-secondary">
                      <span>Method</span>
                    </div>
                  </div>
                  <div class="col-8">
                    <select class="form-select" v-model="payment_method">
                      <option value="1">Cash</option>
                      <option value="2">Card</option>
                      <option value="3">Cheque</option>
                      <option value="4">UPI</option>
                      <option value="5">Bank Transfer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-12" v-if="payment_method==3">
                <div class="row align-items-center justify-content-end">
                  <div class="col-4">
                    <div class="text-secondary">
                      <span>Cheque Due Date</span>
                    </div>
                  </div>
                  <div class="col-8">
                    <input type="date" class="form-control"/>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center justify-content-end">
                  <div class="col-4">
                    <div class="text-secondary">
                      <span>Reference</span>
                    </div>
                  </div>
                  <div class="col-8">
                    <input type="text" class="form-control" placeholder="Enter Details" />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center justify-content-end">
                  <div class="col-4">
                    <div class="text-secondary">
                      <span>Recieved</span>
                    </div>
                  </div>
                  <div class="col-8">
                    <input
                      type="number"
                      required
                      class="form-control"
                      placeholder="Enter Amount"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center justify-content-end">
                  <div class="col-4">
                    <div class="text-secondary">
                      <span>Balalnce</span>
                    </div>
                  </div>
                  <div class="col-8">
                    <input
                      type="number"
                      disabled
                      class="form-control border-none"
                      value="1000.00"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-text" data-bs-dismiss="modal">
              Auto Settle
            </button>
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
      payment_method: 1,
    };
  },
  mounted() {
    this.modal = new Modal(document.getElementById("payment"));
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
