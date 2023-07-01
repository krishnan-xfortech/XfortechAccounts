<template>
    <div class="modal fade" id="viewemployee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Employee Details</div>
                    <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body normal-modal">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Date Of Join
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            16/08/2022
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Employee Name
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">	Nithish Robin </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Employee ID
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            XF-10001
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Date Of Birth
                                    </div>
                                    <div class="col-9">
                                        <div class="text-white">
                                            26-08-2000
                                        </div>
                                    </div>
                                </div>
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
                                        Email
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">
                                            employee123@xfortech.com
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Status
                                    </div>
                                    <div class="col-9">
                                        <span class="badge badge-success">Active</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        <label>Department</label>
                                    </div>
                                    <div class="col-9">
                                        <span class="text-uppercase text-white">Department</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">
                                        Designation
                                    </div>
                                    <div class="col-9">
                                        <span class="text-uppercase text-white">Senior Developer</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3 ">
                                       Salary
                                    </div>
                                    <div class="col-9">
                                        <span class="badge badge-pink"> <span>₹</span> 3000</span>
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
        this.modal = new Modal(document.getElementById('viewemployee'));
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