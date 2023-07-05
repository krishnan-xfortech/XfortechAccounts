<template>
    <div class="modal fade" id="viewcustomer" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Customer Details</div>
                    <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body normal-modal">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Customer Name
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">	Nithish Robin </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Customer ID
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            C-10001
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Loyalty #
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            1001
                                        </div>
                                    </div>
                                </div> -->
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Phone Number
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                           
                                            <span class="ms-6">	+919876543210</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Secondary Phone Number
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                           
                                            <span class="ms-6">	+919876543210</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Email
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">
                                            customer123@xfortech.com
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Tax Number
                                    </div>
                                    <div class="col-9">
                                        <span class="text-uppercase text-white">
                                            tre352sc3
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        <label>Opening Bal.</label>
                                    </div>
                                    <div class="col-9">
                                        <span class="text-uppercase text-white">$ 4000</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        <label>Balance Due</label>
                                    </div>
                                    <div class="col-9">
                                        <span class="badge badge-pink">$ 5000</span>
                                    </div>
                                </div>
                                <div class="row align-items-start mb-4">
                                    <div class="col-3">
                                        Address
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">
                                            lorem ipsum dolar sit
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-start mb-4">
                                    <div class="col-3">
                                        Location
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">
                                            Kollam , Kerala
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
        this.modal = new Modal(document.getElementById('viewcustomer'));
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