<template>
  <div class="modal fade" id="editwithdraw" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Edit Withdraw</div>
          <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body normal-modal">
            <div class="row justify-content-between align-items-start">
              <div class="col-6">
                <div class="row align-items-center mb-3">
                  <div class="col-4">
                    <label>Bank Name</label>
                  </div>
                  <div class="col-8">
                    <Select class="form-select">
                      <option>ESAF Bank</option>
                      <option>Bank 1</option>
                      <option>Bank 2</option>
                    </Select>
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-4">
                    <label>Amount Withdrawn</label>
                  </div>
                  <div class="col-8">
                    <input type="number" class="form-control" placeholder="Enter Amount" value="1000">
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-4">
                    <label>Method</label>
                  </div>
                  <div class="col-8">
                    <select class="form-select">
                      <option disabled>Select Payment Method</option>
                      <option>Cash</option>
                      <option>Card</option>
                      <option>Cheque</option>
                      <option>UPI</option>
                      <option>Bank Transfer</option>
                      <option>Bank Note</option>
                    </select>
                  </div>
                </div>
                <div class="row align-items-center mb-5">
                  <div class="col-4">

                  </div>
                  <div class="col-8">
                    <input type="text" class="form-control" placeholder="Enter Reference">
                  </div>
                </div>
                <div class="row align-items-center mb-3">
                  <div class="col-4">
                    <label>Attachment</label>
                  </div>
                  <div class="col-8">
                    <div class="">
                      <input class="d-none" type="file" id="upload" />
                      <label class="align-items-center" for="upload">
                        <div class="d-flex align-items-center attachment-label">
                          <span class=" me-2">
                            <img class="attach-icon" src="app-assets/img/btn-icons/attach.svg">
                          </span>
                          <span><u>Add Attachment</u></span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row align-items-start">
                  <div class="col-4">
                    <label>Notes/Remarks</label>
                  </div>
                  <div class="col-8">
                    <textarea rows="3" class="form-control" placeholder="Enter Notes/Remarks"></textarea>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="row align-items-center mb-3">
                  <div class="col-4">
                    <label>Receipt #</label>
                  </div>
                  <div class="col-8">
                    <input type="text" disabled class="form-control border-none" value="10001">
                  </div>
                </div>
                <div class="row align-items-center mb-0">
                  <div class="col-4">
                    <label>Date</label>
                  </div>
                  <div class="col-8">
                    <input type="date" class="form-control">
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
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      modal: null
    }
  },
  mounted() {
    this.modal = new Modal(document.getElementById('editwithdraw'));
  },
  methods: {
    showModal() {
      this.modal.show()
    },
    hideModal() {
      this.modal.hide()
    }
  }
}
</script>