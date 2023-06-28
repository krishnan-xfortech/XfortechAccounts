<template>
  <div
    class="modal fade"
    id="sortby"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Sort By</div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="row align-items-center">
                  <div class="col-3">
                    <div class="text-secondary">
                      <span>Branch</span>
                    </div>
                  </div>
                  <div class="col-9">
                    <select class="form-select">
                      <option>All Branches</option>
                      <option>Branch 1</option>
                      <option>Branch 2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row align-items-center">
                  <div class="col-3">
                    <div class="text-secondary">
                      <span>Staff</span>
                    </div>
                  </div>
                  <div class="col-9">
                    <select class="form-select">
                      <option>All Staffs</option>
                      <option>Staff 1</option>
                      <option>Staff 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-text" data-bs-dismiss="modal">
              Dismiss
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
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
      tax: "",
    };
  },
  mounted() {
    this.modal = new Modal(document.getElementById("sortby"));
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
