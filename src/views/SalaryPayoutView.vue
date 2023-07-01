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
                                                    <img class="search-icon mb-4" src="app-assets/img/btn-icons/search.svg">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="col-auto">
                                            <button class="btn btn-secondary btn-sqr" data-bs-toggle="modal"
                                                data-bs-target="#sortby">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/adjust.svg">
                                            </button>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="col-4">
                                    <h5 class="m-0 text-center text-uppercase">Salary Payouts</h5>
                                </div>
                                <div class="col-4">
                                    <div class="row align-items-center justify-content-end">
                                        <div class="col-auto">
                                            <a class="btn btn-secondary btn-sqr"
                                                @click="$refs.view_salary_payout_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/eye.svg">
                                            </a>
                                            <a type="button" class="btn btn-secondary btn-sqr ms-75"
                                                @click="$refs.edit_salary_payout_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg">
                                            </a>
                                            <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.delete_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg">
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn btn-primary" @click="$refs.add_salary_payout_ref.showModal()">
                                                <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg">
                                                <span>Add New Receipt</span>
                                            </a>
                                        </div>
                                        <div class="col-auto">
                                            <router-link :to="{ name: 'dashboard' }" type="button" class="">
                                                <img src="app-assets/img/btn-icons/close.svg" class="back-btn">
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
                                                <th scope="col">Receipt #</th>
                                                <th scope="col">Employee</th>
                                                <th scope="col">Paid Amount</th>
                                                <th scope="col">Towards</th>
                                                <th scope="col">Payment Method</th>
                                                <th scope="col">Payment Status</th>
                                                <th scope="col">Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="" v-for="i in 5">
                                                <td>16/08/2022</td>
                                                <td>10001</td>
                                                <td>Nithish Robin</td>
                                                <td><span>$</span><span>15200.00</span></td>
                                                <td><span class="badge badge-pink">Salary</span></td>
                                                <td><span class="text-uppercase">Cash</span></td>
                                                <td><span class="badge badge-success">Fully Paid</span></td>
                                                <td><small>16/08/2022, 11:30 PM</small></td>
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
        <AddSalaryPayoutModal ref="add_salary_payout_ref" />
        <EditSalaryPayoutModal ref="edit_salary_payout_ref" />
        <ViewSalaryPayoutModal ref="view_salary_payout_ref" />
        <DeleteConfirmModal ref="delete_ref" />
    </Teleport>
</template>

<script>
import EditSalaryPayoutModal from '../components/modals/SalaryPayout/EditSalaryPayoutModal.vue';
import AddSalaryPayoutModal from '../components/modals/SalaryPayout/AddSalaryPayoutModal.vue';
import ViewSalaryPayoutModal from '../components/modals/SalaryPayout/ViewSalaryPayoutModal.vue';
import DeleteConfirmModal from '../components/modals/Delete/DeleteConfirmModal.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        AddSalaryPayoutModal,
        EditSalaryPayoutModal,
        ViewSalaryPayoutModal,
        DeleteConfirmModal

    }
}
</script>