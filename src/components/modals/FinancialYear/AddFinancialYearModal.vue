<template>
    <div class="modal fade" id="addyear" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Add Financial Year</div>
                    <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <label class="form-label">Year Prefix</label>
                                <input type="text" class="form-control" placeholder="Enter a Prefix">
                            </div>
                            <div class="col-lg-12">
                                <label class="form-label">Start Date</label>
                                <input type="date" class="form-control">
                            </div>
                            <div class="col-lg-12">
                                <label class="form-label">End Date</label>
                                <input type="date" class="form-control">
                            </div>
                            <div class="col-lg-12">
                                <label class="form-label">Status</label>
                                <select class="form-select">
                                    <option disabled>Select a Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-text" @click="hideModal">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="save">Save</button>
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
        this.modal = new Modal(document.getElementById('addyear'));
    },
    methods: {
        showModal() {
            this.modal.show()
        },
        hideModal() {
            this.modal.hide()
        },
        save(){
            this.hideModal();
        }
    }
}
</script>