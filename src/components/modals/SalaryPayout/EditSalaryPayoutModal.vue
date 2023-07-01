<template>
    <div class="modal fade" id="editreceipt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Edit Payout Details</div>
                    <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body normal-modal">
                        <div class="row justify-content-between align-items-start">
                            <div class="col-6">
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Employee</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Select Customer"
                                            value="Nithish Robin - +91 9876543210">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Account Balance</label>
                                    </div>
                                    <div class="col-8">
                                        <h6 class="m-0">
                                            <span>$</span>
                                            <span>3200.75</span>
                                        </h6>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Paid Amount</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="number" class="form-control" placeholder="Enter Amount">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Balance</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="number" class="form-control" placeholder="Enter Balance">
                                    </div>
                                </div>
                                <div class="row align-items-center justify-content-end mb-3">
                                    <div class="col-4">
                                        <label>Towards</label>
                                    </div>
                                    <div class="col-8">
                                        <div class="d-flex align-items-center">
                                            <!-- <label class="custom-radio">
                                                <input type="radio" name="cash-receipt" checked />
                                                <div class="option-1">
                                                    <span>Sales Bal.</span>
                                                </div>
                                            </label> -->
                                            <label class="custom-radio">
                                                <input type="radio" name="cash-receipt" checked />
                                                <div class="option-2">
                                                    <span>Salary</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Method</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-select" v-model="payment_method">
                                            <option disabled>Select Payment Method</option>
                                            <option value="1">Cash</option>
                                            <option value="2">Card</option>
                                            <option value="3">Cheque</option>
                                            <option value="4">UPI</option>
                                            <option value="5">Bank Transfer</option>
                                            <option value="6">Bank Note</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-5" v-if="payment_method==3">
                                    <div class="col-4">
                                        <label>Cheque Due Date</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-5">
                                    <div class="col-4">

                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter Reference">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Attachment</label>
                                    </div>
                                    <div class="col-8">
                                        <div class="">
                                            <input class="d-none" type="file" id="upload" />
                                            <label class="align-items-center" for="upload">
                                                <div class="d-flex align-items-center attachment-label">
                                                    <span class=" me-2">
                                                        <img class="attach-icon" src="app-assets/img/btn-icons/attach.svg">
                                                    </span>
                                                    <span><u>Add Attachment</u></span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-start">
                                    <div class="col-4">
                                        <label>Notes/Remarks</label>
                                    </div>
                                    <div class="col-8">
                                        <textarea rows="3" class="form-control"
                                            placeholder="Enter Notes/Remarks"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Receipt #</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" disabled class="form-control border-none" value="10001">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Date</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="row align-items-center justify-content-end mb-3">
                                    <div class="col-4">
                                        <label>Status</label>
                                    </div>
                                    <div class="col-8">
                                        <span class="badge badge-danger">Not Paid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-text">Save & New</button>
                        <button type="submit" class="btn btn-primary">Save</button>
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
            modal: null,
            payment_method:1
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById('editreceipt'));
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