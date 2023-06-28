<template>
  <div class="main-layout">
    <div class="main-layout-content">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="row">
                    <div class="col-8">
                      <div class="has-icon-left mb-0">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Seach Here"
                        />
                        <div class="form-control-position">
                          <img
                            class="search-icon mb-4"
                            src="app-assets/img/btn-icons/search.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <button
                        @click="$refs.sort_by_ref.showModal()"
                        class="btn btn-secondary btn-sqr"
                        data-bs-toggle="modal"
                        data-bs-target="#sortby"
                      >
                        <img class="btn-icon" src="app-assets/img/btn-icons/adjust.svg" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <h5 class="m-0 text-center text-uppercase">Sales List</h5>
                </div>
                <div class="col-4">
                  <div class="row align-items-center justify-content-end">
                    <div class="col-auto">
                      <router-link
                        to="/edit-sales"
                        type="button"
                        class="btn btn-secondary btn-sqr ms-75"
                      >
                        <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                      </router-link>
                      <button class="btn btn-secondary btn-sqr ms-75">
                        <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                      </button>
                    </div>
                    <div class="col-auto">
                      <router-link
                        to="/add-sales"
                        class="btn btn-primary"
                        href="sales-add.php"
                      >
                        <img
                          class="btn-plus-icon me-2"
                          src="app-assets/img/btn-icons/plus.svg"
                        />
                        <span>Add New Sales</span>
                      </router-link>
                    </div>
                    <div class="col-auto">
                      <router-link to="/" type="button" class="">
                        <img src="app-assets/img/btn-icons/close.svg" class="back-btn" />
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="mb-3">
                <div class="table-responsive main-table-scroll">
                  <table class="table table-sm m-0">
                    <thead>
                      <tr>
                        <th scope="col">Branch</th>
                        <th scope="col">Date</th>
                        <th scope="col">Invoice #</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Balance Due</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td>
                          <small class="text-uppercase">Branch Name</small>
                        </td>
                        <td>16/08/2022</td>
                        <td>10001</td>
                        <td>Nithish Robin</td>
                        <td>
                          <span>$</span>
                          <span class="">15200.00</span>
                        </td>
                        <td>
                          <span>$</span>
                          <span class="">1500.00</span>
                        </td>
                        <td>
                          <small>16/08/2022, 11:30 PM</small>
                        </td>
                        <td>
                          <small>User/Staff Name</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="#modals">
    <SortModal ref="sort_by_ref" />
  </Teleport>
</template>
<script>
import SortModal from "../../components/modals/Sales/SortModal.vue";
export default {
  data() {
    return {};
  },
  components: {
    SortModal,
  },
};
</script>
