<template>
  <div class="modal fade" id="addBank" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Add Bank details</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body normal-modal">
            <div class="row">
              <div class="col-lg-12">
                <div class="row align-items-center mb-3">
                  <div class="col-3">Bank name</div>
                  <div class="col-6">
                    <input type="text" class="form-control" placeholder="Enter Bank Name" />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">IFSC Code</div>
                  <div class="col-6">
                    <input type="text" class="form-control" placeholder="Enter IFSC code" />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Account Number</div>
                  <div class="col-6">
                    <input type="text" class="form-control" placeholder="Enter acocunt number" />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Opening Balance</div>
                  <div class="col-6">
                    <input type="number" class="form-control" placeholder="Enter Amount" />
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-3">Description</div>
                  <div class="col-6">
                    <textarea rows="4" class="form-control" placeholder="Enter Description"></textarea>
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
    };
  },
  mounted() {
    this.modal = new Modal(document.getElementById("addBank"));
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
