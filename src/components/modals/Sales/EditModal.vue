<template>
  <div
    class="modal fade"
    id="selectservice"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close mt-1"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body normal-modal p-0">
            <div class="table-responsive">
              <table class="table table-borderless table-sm m-0">
                <thead>
                  <tr>
                    <th style="width: 35%" scope="col">Service Name</th>
                    <th style="width: 20%" scope="col">Rate</th>
                    <th style="width: 20%" scope="col">QTY</th>
                    <th style="width: 20%" scope="col">Total</th>
                    <th style="width: 5%" scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td>Shirt Full Sleeve Casual</td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Amount"
                        value="1200.00"
                      />
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a type="button" class="btn-minus"> - </a>
                        <p class="m-0 px-3">01</p>
                        <a type="button" class="btn-plus"> + </a>
                      </div>
                    </td>
                    <td>
                      <div class="">
                        <span>$</span>
                        <span>1250.00</span>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row p-3">
              <div class="col-lg-12">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <label class="form-check-label" for="addmaterial">
                      <span class="">Add Material ?</span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="addmaterial"
                        checked
                      />
                      <label class="form-check-label" for="addmaterial">
                        <span class="ms-10">&nbsp;</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive material-table-scroll">
              <table class="table table-bordered table-sm m-0">
                <thead>
                  <tr>
                    <th style="width: 35%" scope="col">Material Name</th>
                    <th style="width: 20%" scope="col">Rate</th>
                    <th style="width: 20%" scope="col">QTY</th>
                    <th style="width: 20%" scope="col">Total</th>
                    <th style="width: 5%" scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td>
                      <input
                        type="text"
                        class="form-control border-none px-0"
                        placeholder="Select Material"
                        value="Material Name"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control border-none px-0"
                        placeholder="Enter Amount"
                        value="1200.00"
                      />
                    </td>
                    <td>
                      <div class="d-flex align-items-end">
                        <input
                          style="width: 80px"
                          type="number"
                          class="form-control border-none px-0"
                          placeholder="Enter QTY"
                          value="2.5"
                        />
                        <div class="ms-2 text-uppercase small text-secondary">Mtr</div>
                      </div>
                    </td>
                    <td>
                      <div class="">
                        <span>$</span>
                        <span>1250.00</span>
                      </div>
                    </td>
                    <td>
                      <a href="" type="button">
                        <img class="x-icon" src="app-assets/img/btn-icons/x.svg" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
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
    this.modal = new Modal(document.getElementById("selectservice"));
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
