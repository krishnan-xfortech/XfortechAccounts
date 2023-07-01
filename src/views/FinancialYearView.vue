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
                                    </div>
                                </div>
                                <div class="col-4">
                                    <h5 class="m-0 text-center text-uppercase">Financial Year</h5>
                                </div>
                                <div class="col-4">
                                    <div class="row align-items-center justify-content-end">
                                        <div class="col-auto">
                                            <a type="button" class="btn btn-secondary btn-sqr ms-75" @click="$refs.edit_financial_year_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg">
                                            </a>
                                            <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.delete_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg">
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <a class="btn btn-primary" @click="$refs.add_financial_year_ref.showModal()">
                                                <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg">
                                                <span>Add New Financial Year</span>
                                            </a>
                                        </div>
                                        <div class="col-auto">
                                            <router-link :to="{name: 'dashboard'}" type="button" class="">
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
                                                <th scope="col">#</th>
                                                <th scope="col">Year Prefix</th>
                                                <th scope="col">Start Date</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="">
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    <span class="text-uppercase">INV</span>
                                                </td>
                                                <td>
                                                    01/04/2023
                                                </td>
                                                <td>
                                                    31/03/2024
                                                </td>
                                                <td>
                                                    <span class="badge badge-success">Active</span>
                                                </td>
                                                <td>
                                                    <small>16/08/2022, 11:30 PM</small>
                                                </td>
                                            </tr>
                                            <tr class="">
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    <span class="text-uppercase">INV</span>
                                                </td>
                                                <td>
                                                    01/04/2023
                                                </td>
                                                <td>
                                                    31/03/2024
                                                </td>
                                                <td>
                                                    <span class="badge badge-danger">Inactive</span>
                                                </td>
                                                <td>
                                                    <small>16/08/2022, 11:30 PM</small>
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
        <AddFinancialYearModal ref="add_financial_year_ref" />
        <EditFinancialYearModal ref="edit_financial_year_ref" />
        <DeleteConfirmModal ref="delete_ref" />
    </Teleport>
</template>

<script>
import AddFinancialYearModal from '../components/modals/FinancialYear/AddFinancialYearModal.vue';
import EditFinancialYearModal from '../components/modals/FinancialYear/EditFinancialYearModal.vue';
import DeleteConfirmModal from '../components/modals/Delete/DeleteConfirmModal.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        AddFinancialYearModal,
        EditFinancialYearModal,
        DeleteConfirmModal

    }
}
</script>