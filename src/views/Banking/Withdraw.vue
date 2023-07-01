<template>
    <div class="profile-scroll">
        <!-- <div class="row align-items-center">
            <div class="col-4">
            </div>
            <div class="col-4">
                <h5 class="m-0 text-center text-uppercase">Withdraw Details</h5>
            </div>
            <div class="col-4">
                <div class="row align-items-center justify-content-end">
                    <div class="col-auto">
                        <a type="button" class="btn btn-secondary btn-sqr ms-75" @click="$refs.withdraw_edit_ref.showModal()">
                            <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                        </a>
                        <button class="btn btn-secondary btn-sqr ms-75">
                            <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                        </button>
                    </div>
                    <div class="col-auto">
                        <a class="btn btn-primary" @click="$refs.withdraw_add_ref.showModal()">
                            <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                            <span>Add New Withdraw</span>
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
                        <th>Withdrawn Amount</th>
                        <th>Payment Mode</th>
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
                </tbody>
            </table>
        </div>
    </div>
    <Teleport to="#modals">
        <WithdrawAddModal ref="withdraw_add_ref" />
        <WithdrawEditModal ref="withdraw_edit_ref" />
    </Teleport>
</template>

<script>
import WithdrawAddModal from '../../components/modals/Banking/Withdraw/WithdrawAddModal.vue';
import WithdrawEditModal from '../../components/modals/Banking/Withdraw/WithdrawEditModal.vue';

export default {
    components: {
        WithdrawAddModal, WithdrawEditModal
    }
}
</script>