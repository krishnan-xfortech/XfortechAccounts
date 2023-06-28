<template>
  <div
    class="modal fade"
    id="addhead"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Add Expense Category</div>
          <button
            type="button"
            class="btn-close"
            @click="hideModal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <label class="form-label">Expense Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Expense Category Name"
                />
              </div>
              <div class="col-lg-12">
                <label class="form-label">Description</label>
                <textarea
                  rows="2"
                  class="form-control"
                  placeholder="Enter Description"
                ></textarea>
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
    this.modal = new Modal(document.getElementById("addhead"));
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
