<template>
    <div class="profile-scroll">
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
                            <div class="d-flex align-items-center">
                                <div class="text-uppercase">Cheque</div>
                            </div>
                        </td>
                        <td style="border-top: 1px solid rgba(153, 166, 184, .15);">
                            <div class="text-uppercase text-white ms-auto d-flex" style="justify-content: center;">
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
                        <td class="">
                            <div class="d-flex align-items-center ">
                                <div class="text-uppercase">Cheque</div>
                            </div>
                        </td>
                        <td>
                            <div class="text-uppercase text-white ms-auto"><span class="badge badge-success">
                                    Approved
                                </span>
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

