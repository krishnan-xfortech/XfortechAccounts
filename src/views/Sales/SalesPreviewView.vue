<template>
    <div class="main-layout">
        <div class="main-layout-content">
            <section>
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h4 class="m-0 text-uppercase">Sales Details</h4>
                            </div>
                            <div class="col-auto">
                                <router-link to="/sales-list" type="button" class="">
                                    <img src="app-assets/img/btn-icons/close.svg" class="back-btn" />
                                </router-link>
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
                                    </div>
                                    <h6 class="text-uppercase mb-0 px-3">Customer Details</h6>
                                    <hr class="my-50 mb-1" />
                                    <div class="px-3 d-flex" style="gap: 10px; flex-direction: column;">
                                        <div class="row mb-75 align-items-center">
                                            <div class="col-4">Customer Name :</div>
                                            <div class="col-8 fw-bold">
                                                <span>Nithish Robin</span>
                                            </div>
                                        </div>
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
                                        <div class="row mb-75 align-items-start mb-2">
                                            <div class="col-4 ">Tax Number :</div>
                                            <div class="col-8 fw-bold">32AHSOHAD57819101</div>
                                        </div>
                                    </div>

                                    <h6 class="text-uppercase mb-0 px-3 mt-4">Payment Details</h6>
                                    <hr class="my-50 mb-1" />
                                    <div class="px-3 d-flex" style="gap: 10px; flex-direction: column;">
                                        <div class="row mb-75 align-items-center">
                                            <div class="col-4">Total Amount:</div>
                                            <div class="col-8 fw-bold">
                                                <span>$ 2000</span>
                                            </div>
                                        </div>
                                        <div class="row mb-75 align-items-center">
                                            <div class="col-4">Tax Amount</div>
                                            <div class="col-8 fw-bold">
                                                <span>$ 500</span>
                                            </div>
                                        </div>
                                        <div class="row mb-75 align-items-center">
                                            <div class="col-4">Recived Amount :</div>
                                            <div class="col-8 fw-bold">$ 1000</div>
                                        </div>
                                        <div class="row mb-75 align-items-start">
                                            <div class="col-4 ">Reference :</div>
                                            <div class="col-8 fw-bold text-uppercase">Ref-t73s88r271</div>
                                        </div>
                                        <div class="row mb-75 align-items-start">
                                            <div class="col-4 ">Balance :</div>
                                            <div class="col-8 fw-bold">$1000</div>
                                        </div>
                                    </div>
                                    <hr class="my-50 mb-1" />
                                </div>
                            </div>
                            <div class="col-7 ps-0">
                                <div class="row p-2">
                                    <div class="col-6">
                                        <div class="row ">
                                            <h6 class="me-50 text-uppercase">Invoice No: #10001</h6>
                                            <span class="me-50 text-uppercase">date: 20/02/2023</span>
                                            <span class="me-50 text-uppercase">due date: 10/03/2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="profile-scroll">
                                    <div class="table-responsive mt-2">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Product Name</th>
                                                    <th>Quantity</th>
                                                    <th>Unit</th>
                                                    <th>Price</th>
                                                    <th>Tax Percentage</th>
                                                    <th>Due Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        16/08/2022
                                                    </td>
                                                    <td>
                                                        Product 1
                                                    </td>
                                                    <td>
                                                        <span>10</span>
                                                    </td>
                                                    <td>
                                                        <span> Box</span>
                                                    </td>
                                                    <td>
                                                        <span>$2000</span>
                                                    </td>
                                                   <td>
                                                    <span>20 %</span>
                                                   </td>
                                                   <td>
                                                    <span>20/09/2022</span>
                                                   </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="settings-scroll p-2" style="border-left: 1px solid rgba(153, 166, 184, .15);">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="avatar bg-light-purple rounded p-1">
                                            <span class="avatar-content">
                                                <i data-feather="user" class="font-large-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <h6 class="text-uppercase mb-0 px-3">Payments</h6>
                                    <hr class="my-50 mb-1" />
                                    <div class="px-3 d-flex" style="gap: 10px; flex-direction: column;">
                                        <div class="row mb-75 align-items-start mt-2">
                                            <div class="col-5 fw-bold">12/03/2022 :</div>
                                            <div class="col-7  fw-bold">$1000 <span>[Cash]</span></div>
                                        </div>
                                        <div class="row mb-75 align-items-start mt-2">
                                            <div class="col-5 fw-bold">10/01/2021 :</div>
                                            <div class="col-7  fw-bold">$800 <span>[Card]</span></div>
                                        </div>
                                        <div class="row mb-75 align-items-start mt-2">
                                            <div class="col-5 fw-bold">13/05/2022 :</div>
                                            <div class="col-7  fw-bold">$2000 <span>[UPI]</span></div>
                                        </div>
                                        <div class="row mb-75 align-items-start mt-4">
                                            <button class="btn btn-success btn-sqr py-2" @click="$refs.payment_ref.showModal()"><span class="text-uppercase text-white">Pay</span></button>
                                        </div>
                                        <div class="row mb-75 align-items-start ">
                                            <button class="btn btn-secondary btn-sqr py-2" disabled><span class="text-uppercase text-white">Fully Paid</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <Teleport to="#modals">
        <PaymentModal ref="payment_ref" />
    </Teleport>
</template>

<script>
import PaymentModal from "../../components/modals/Sales/PaymentModal.vue";
export default {
    components: {
        PaymentModal,
}
}
</script>