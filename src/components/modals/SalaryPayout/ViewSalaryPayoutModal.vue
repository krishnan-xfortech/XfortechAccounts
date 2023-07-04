<template>
    <div class="modal fade" id="viewreceipt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Salary Payout Details</div>
                    <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body normal-modal">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Date
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            16/08/2022
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Receipt #
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            10001
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Employee
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">Customer Name - +91 9876543210</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Amount
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            <span>₹</span>
                                            <span class="ms-6">5200.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Towards
                                    </div>
                                    <div class="col-9">
                                        <span class="badge badge-pink">
                                            Salary
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        <label>Payment Method</label>
                                    </div>
                                    <div class="col-9">
                                        <span class="text-uppercase text-white">Cheque</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                       Cheque Due Date
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            16/08/2022
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Payment Status
                                    </div>
                                    <div class="col-9">
                                        <span class="badge badge-secondary">
                                            Partially paid
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Reference
                                    </div>
                                    <div class="col-9">
                                        <span class="text-uppercase text-white">1231542102004546</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Attachment
                                    </div>
                                    <div class="col-9">
                                        <a href="" class="text-primary" type="button">
                                            <u>file-name.jpg</u>
                                        </a>
                                    </div>
                                </div>
                                <div class="row align-items-start mb-4">
                                    <div class="col-3">
                                        Notes/Remarks
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">
                                            lorem ipsum dolar sit
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-3 mb-3">
                                    <div class="col-3">
                                        Created At
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">16/08/2022, 11:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-text" @click="hideModal()">Close</button>
                        <button type="submit" class="btn btn-primary">Print Reciept</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
    data() {
        return {
            modal: null
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById('viewreceipt'));
    },
    methods: {
        showModal() {
            this.modal.show()
        },
        hideModal() {
            this.modal.hide()
        }
    }
}
</script>