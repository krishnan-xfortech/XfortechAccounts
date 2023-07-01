<template>
    <div class="modal fade" id="deleteconfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Confirm Delete</div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 text-center py-3">
                                <h5 class="mb-3">Are You Sure?</h5>
                                <p class="m-0 text-sm">Do you want to delete.</p>
                            </div>
                            <div class="col-12 text-center">
                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <button type="submit" class="btn btn-secondary w-100" data-bs-dismiss="modal">Dismiss</button>
                                    </div>
                                    <div class="col-4">
                                        <button type="submit" class="btn  btn-primary w-100">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        this.modal = new Modal(document.getElementById('deleteconfirm'));
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