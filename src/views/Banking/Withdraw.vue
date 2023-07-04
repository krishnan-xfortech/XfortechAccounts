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
                        <th style="width: 15%;">Date</th>
                        <th style="width: 20%;">Receipt #</th>
                        <th style="width: 20%;">Deposit Amount</th>
                        <th style="width: 20%;">Payment Mode</th>
                        <th style="width: 40%;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>16/08/2022</td>
                        <td>10001</td>
                        <td>
                            <span>1200.00</span>
                            <span>AED</span>
                        </td>
                        <td>
                            <div class="text-uppercase">Bank Transfer</div>
                        </td>
                        <td style="border-top: 1px solid rgba(153, 166, 184, .15);">
                            <div class="text-uppercase text-white ms-auto">
                                <span class="badge badge-secondary" style="margin-right: 60px;">issued</span>
                                <a type="button" class="badge badge-success">
                                    <img class="status-icon1" src="app-assets/img/btn-icons/check.svg">
                                </a>
                                <a type="button" class="badge badge-danger ms-75">
                                    <img class="status-icon2 " src="app-assets/img/btn-icons/close.svg">
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>16/08/2022</td>
                        <td>10001</td>
                        <td>
                            <span>1200.00</span>
                            <span>AED</span>
                        </td>
                        <td>
                            <div class="d-flex align-items-center ">
                                <div class="text-uppercase">Cheque</div>
                            </div>
                        </td>
                        <td>
                            <div class="text-uppercase ms-auto">
                                <span class="badge badge-success">Approved</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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