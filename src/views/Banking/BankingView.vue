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
                  <h5 class="m-0 text-center text-uppercase">Banking</h5>
                </div>
                <div class="col-4">
                  <div class="row align-items-center justify-content-end">
                    <div class="col-auto">
                      <router-link to="/banking-view-more" class="btn btn-secondary btn-sqr">
                        <img class="btn-icon" src="app-assets/img/btn-icons/eye.svg">
                      </router-link>
                      <a type="button" class="btn btn-secondary btn-sqr ms-75" @click="$refs.edit_bank_ref.showModal()">
                        <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                      </a>
                      <button class="btn btn-secondary btn-sqr ms-75">
                        <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                      </button>
                    </div>
                    <div class="col-auto">
                      <a class="btn btn-primary" @click="$refs.add_bank_ref.showModal()">
                        <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                        <span>Add New Bank</span>
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
                        <th scope="col">#</th>
                        <th scope="col">Bank</th>
                        <th scope="col">Account Balance</th>
                        <th scope="col">Total Deposit(₹)</th>
                        <th scope="col">Total Withdraw(₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td>1</td>
                        <td>ESAF Bank</td>
                        <td>₹ 20000</td>
                        <td>₹ 120000</td>
                        <td>₹ 100000</td>
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
    <BankingAddModal ref="add_bank_ref" />
    <BankingEditModal ref="edit_bank_ref" />
  </Teleport>
</template>

<script>
import BankingAddModal from '../../components/modals/Banking/BankingAddModal.vue';
import BankingEditModal from '../../components/modals/Banking/BankingEditModal.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    BankingAddModal,
    BankingEditModal
  }
}
</script>
