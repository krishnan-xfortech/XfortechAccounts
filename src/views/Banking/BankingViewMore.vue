<template>
    <div class="main-layout">
        <div class="main-layout-content">
            <section>
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h4 class="m-0 text-uppercase">Banking Details</h4>
                            </div>
                            <!-- <div class="col-auto">
                                <router-link :to="{ name: 'dashboard' }" type="button" class="">
                                    <img src="app-assets/img/btn-icons/close.svg" class="back-btn" />
                                </router-link>
                            </div> -->
                            <div class="col-4" v-if="$route.name == 'banking-view-deposit'">
                                <div class="row align-items-center justify-content-end">
                                    <div class="col-auto">
                                        <a type="button" class="btn btn-secondary btn-sqr ms-75"
                                            @click="$refs.deposit_edit_ref.showModal()">
                                            <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                                        </a>
                                        <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.delete_ref.showModal()">
                                            <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <a class="btn btn-primary" @click="$refs.deposit_add_ref.showModal()">
                                            <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                                            <span>Add New Deposit</span>
                                        </a>
                                    </div>
                                    <div class="col-auto">
                                        <router-link :to="{ name: 'banking-view' }" type="button" class="">
                                          <img src="app-assets/img/btn-icons/close.svg" class="back-btn" />
                                        </router-link>
                                      </div>
                                </div>
                            </div>
                            <div class="col-4" v-if="$route.name == 'banking-view-withdraw'">
                                <div class="row align-items-center justify-content-end">
                                    <div class="col-auto">
                                        <a type="button" class="btn btn-secondary btn-sqr ms-75"
                                            @click="$refs.withdraw_edit_ref.showModal()">
                                            <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                                        </a>
                                        <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.delete_ref.showModal()">
                                            <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <a class="btn btn-primary" @click="$refs.withdraw_add_ref.showModal()">
                                            <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                                            <span>Add New Withdraw</span>
                                        </a>
                                    </div>
                                    <div class="col-auto">
                                        <router-link :to="{ name: 'banking-view' }" type="button" class="">
                                          <img src="app-assets/img/btn-icons/close.svg" class="back-btn" />
                                        </router-link>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row align-items-start justify-content-between g-0">
                            <div class="col-3">
                                <div class="settings-scroll p-2" style="border-right: 1px solid rgba(153, 166, 184, .15);">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="avatar bg-light-purple rounded p-1">
                                            <span class="avatar-content">
                                                <i data-feather="user" class="font-large-2"></i>
                                            </span>
                                        </div>
                                        <div class="ms-1 mt-50">
                                            <h5 class="fw-bold">ESAF Bank</h5>
                                            <p class="m-0">
                                                <span>IFSC: </span>
                                                <span class="text-uppercase">123456ffgui</span>
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="text-uppercase mb-0 px-3">Contact Details</h6>
                                    <hr class="my-50 mb-1" />
                                    <div class="px-3 d-flex" style="gap: 10px; flex-direction: column;">
                                        <div class="row mb-75 align-items-center">
                                            <div class="col-4">Phone :</div>
                                            <div class="col-8 fw-bold">
                                                <span>+971</span>
                                                <span>9876543210</span>
                                            </div>
                                        </div>
                                        <div class="row mb-75 align-items-center">
                                            <div class="col-4">Email ID :</div>
                                            <div class="col-8 fw-bold">customer@bank.com</div>
                                        </div>
                                        <div class="row mb-75 align-items-start">
                                            <div class="col-4 ">Address :</div>
                                            <div class="col-8 fw-bold">Address Lane 1, Street, District, State</div>
                                        </div>
                                    </div>
                                    <hr class="my-2 mb-2" />

                                    <div class="px-3">
                                        <div class="row mb-1 align-items-center">
                                            <div class="col-6">Opening Balance:</div>
                                            <div class="col-6 fw-bolder">
                                                <span class="text-uppercase">₹</span>
                                                <span>1500.00</span>
                                            </div>
                                        </div>
                                        <div class="row mb-1 align-items-center">
                                            <div class="col-6">Total Deposit:</div>
                                            <div class="col-6 fw-bolder">
                                                <span class="text-uppercase">₹</span>
                                                <span>150000.00</span>
                                            </div>
                                        </div>
                                        <div class="row mb-1 align-items-center">
                                            <div class="col-6">Total Withdraw:</div>
                                            <div class="col-6 fw-bolder">
                                                <span class="text-uppercase">₹</span>
                                                <span>23000.00</span>
                                            </div>
                                        </div>
                                        <div class="row mb-1 align-items-center">
                                            <div class="col-6">Balance:</div>
                                            <div class="col-6 fw-bolder">
                                                <span class="text-uppercase">₹</span>
                                                <span>2500.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-9 ps-0">
                                <div class="row p-3">
                                    <div class="col-auto"
                                        style="border-right: 2px solid rgba(153, 166, 184, .55); font-size: medium;">
                                        <router-link :to="{ name: 'banking-view-deposit' }"
                                            class="profile-tab active ms-50 px-3" type="button" active-class="text-primary">
                                            <span class="me-50"><i data-feather="printer"></i></span>
                                            Deposit
                                        </router-link>
                                    </div>
                                    <div class="col-auto" style="font-size: medium;">
                                        <router-link :to="{ name: 'banking-view-withdraw' }" class="profile-tab px-3"
                                            type="button" active-class="text-primary">
                                            <span class="me-50"><i data-feather="arrow-down-left"></i></span>
                                            Withdraw
                                        </router-link>
                                    </div>
                                </div>
                                <router-view />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <Teleport to="#modals">
        <WithdrawAddModal ref="withdraw_add_ref" />
        <WithdrawEditModal ref="withdraw_edit_ref" />
        <DepositAddModal ref="deposit_add_ref" />
        <DepositEditModal ref="deposit_edit_ref" />
        <DeleteConfirmModal ref="delete_ref" />
    </Teleport>
</template>

<script>
import WithdrawAddModal from '../../components/modals/Banking/Withdraw/WithdrawAddModal.vue';
import WithdrawEditModal from '../../components/modals/Banking/Withdraw/WithdrawEditModal.vue';
import DepositAddModal from '../../components/modals/Banking/Deposit/DepositAddModal.vue';
import DepositEditModal from '../../components/modals/Banking/Deposit/DepositEditModal.vue';
import DeleteConfirmModal from '../../components/modals/Delete/DeleteConfirmModal.vue';
export default {
    components: {
    WithdrawAddModal,
    WithdrawEditModal,
    DepositAddModal,
    DepositEditModal,
    DeleteConfirmModal
}
}
</script>