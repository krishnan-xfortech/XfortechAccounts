<template>
    <div class="modal fade" id="addEmployee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Add Employee</div>
                    <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body normal-modal">
                        <div class="row justify-content-between">
                            <div class="col-6">
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Employee Name</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter Employee Name">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Phone Number</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="number" class="form-control" placeholder="Enter Phone Number">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Date of Birth</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-5">
                                    <div class="col-4">
                                        <label>Email ID</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="email" class="form-control" placeholder="Enter Email ID">
                                    </div>
                                </div>
                                <!-- <div class="row align-items-center mb-5">
                                    <div class="col-4">
                                        <label>Tax Number</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter Tax Number">
                                    </div>
                                </div> -->
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Address</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter Address">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Location</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter City Name">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">

                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter State/Province/Region">
                                    </div>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-4">

                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter Zip/Postal Code">
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Employee ID</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" placeholder="Enter ID" value="XF-10001">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Department</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" value="Department">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Designation</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" value="Senior Developer">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Date of Join</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                                <!-- <div class="row align-items-center mb-5">
                                    <div class="col-4">
                                        <label>Loyalty #</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control" value="1001">
                                    </div>
                                </div> -->
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label>Salary</label>
                                    </div>
                                    <div class="col-8">
                                        <input type="number" class="form-control" placeholder="Enter Amount">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-4">
                                        <label class="form-label">Status</label>
                                    </div>
                                    <div class="col-8">
                                        <select class="form-select">
                                            <option>Active</option>
                                            <option>In Active</option>
                                        </select>
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
            modal: null
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById('addEmployee'));
    },
    methods: {
        showModal() {
            this.modal.show()
        },
        hideModal() {
            this.modal.hide()
        },
        update() {
            this.hideModal();
        }
    }
}
</script>