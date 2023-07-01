<template>
  <div class="main-layout">
    <div class="main-layout-content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="row">
                    <div class="col-8">
                      <div class="has-icon-left mb-0">
                        <input type="text" class="form-control" placeholder="Seach Here" />
                        <div class="form-control-position">
                          <img class="search-icon mb-4" src="app-assets/img/btn-icons/search.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <h5 class="m-0 text-center text-uppercase">Expense</h5>
                </div>
                <div class="col-4">
                  <div class="row align-items-center justify-content-end">
                    <div class="col-auto">
                      <a type="button" class="btn btn-secondary btn-sqr ms-75"
                        @click="$refs.expense_edit_ref.showModal()">
                        <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                      </a>
                      <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.delete_ref.showModal()">
                        <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                      </button>
                    </div>
                    <div class="col-auto">
                      <a class="btn btn-primary" @click="$refs.expense_add_ref.showModal()">
                        <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                        <span>Add New Expense</span>
                      </a>
                    </div>
                    <div class="col-auto">
                      <router-link :to="{ name: 'dashboard' }" type="button" class="">
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
                        <th scope="col">Date</th>
                        <th scope="col">Expense Category Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Tax Included ?</th>
                        <th scope="col">Payment Mode</th>
                        <th scope="col">Bank Account</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td>16/08/2022</td>
                        <td>Petrol</td>
                        <td>$ 1200</td>
                        <td><span class="badge badge-pink">No</span></td>
                        <td>Cash</td>
                        <td>ESAF Bank</td>
                      </tr>
                      <tr class="">
                        <td>20/08/2022</td>
                        <td>Food</td>
                        <td>$ 1000</td>
                        <td><span class="badge badge-success">Yes</span></td>
                        <td>Card</td>
                        <td>ESAF Bank</td>
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
    <ExpenseAddModal ref="expense_add_ref" />
    <ExpenseEditModal ref="expense_edit_ref" />
    <DeleteConfirmModal ref="delete_ref" />
  </Teleport>
</template>

<script>
import ExpenseAddModal from "../../components/modals/Expense/ExpenseAddModal.vue";
import ExpenseEditModal from "../../components/modals/Expense/ExpenseEditModal.vue";
import DeleteConfirmModal from '../../components/modals/Delete/DeleteConfirmModal.vue';
export default {
  data() {
    return {};
  },
  components: {
    ExpenseAddModal,
    ExpenseEditModal,
    DeleteConfirmModal
  },
};
</script>
