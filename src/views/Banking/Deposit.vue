<template>
    <div class="profile-scroll">
        <!-- <div class="row align-items-center">
            <div class="col-4">
            </div>
            <div class="col-4">
                <h5 class="m-0 text-center text-uppercase">Deposit Details</h5>
            </div>
            <div class="col-4">
                <div class="row align-items-center justify-content-end">
                    <div class="col-auto">
                        <a type="button" class="btn btn-secondary btn-sqr ms-75" @click="$refs.deposit_edit_ref.showModal()">
                            <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                        </a>
                        <button class="btn btn-secondary btn-sqr ms-75">
                            <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                        </button>
                    </div>
                    <div class="col-auto">
                        <a class="btn btn-primary" @click="$refs.deposit_add_ref.showModal()">
                            <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                            <span>Add New Deposit</span>
                        </a>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="table-responsive mt-2">
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Receipt #</th>
                        <th>Deposit Amount</th>
                        <th>Payment Mode</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            16/08/2022
                        </td>
                        <td>
                            10001
                        </td>
                        <td>
                            <span>1200.00</span>
                            <span>AED</span>
                        </td>
                        <td>
                            <div class="text-uppercase">BAnk Transfer</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            16/08/2022
                        </td>
                        <td>
                            10001
                        </td>
                        <td>
                            <span>1200.00</span>
                            <span>AED</span>
                        </td>
                        <td>
                            <div class="d-flex align-items-center ">
                            <div class="text-uppercase">Cheque</div>
                            <div class="text-uppercase text-white ms-auto"><span class="badge badge-secondary">
                                issued
                            </span>
                        </div>
                        </div>
                        </td>
                        <td style="border-top: 1px solid rgba(153, 166, 184, .15);">
                            <div class="d-flex align-items-center ">
                            <a type="button" class="badge badge-success">
                                <img class="status-icon1" src="app-assets/img/btn-icons/check.svg">
                            </a>
                            <a type="button" class="badge badge-danger ms-75">
                                <img class="status-icon2 " src="app-assets/img/btn-icons/close.svg">
                            </a>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <Teleport to="#modals">
        <DepositAddModal ref="deposit_add_ref" />
        <DepositEditModal ref="deposit_edit_ref" />
    </Teleport>
</template>

<script>
import DepositAddModal from '../../components/modals/Banking/Deposit/DepositAddModal.vue';
import DepositEditModal from '../../components/modals/Banking/Deposit/DepositEditModal.vue';

export default {
    components: {
        DepositAddModal, DepositEditModal
    }
}
</script>

