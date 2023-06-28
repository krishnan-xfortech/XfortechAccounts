<!-- <template>
    <div class="modal fade" id="viewmeasurement" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-hidden="true" @keydown.esc="hideModal()">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title m-0">Measurement Details</div>
                    <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body normal-modal">
                        <div class="row" v-if="measurement != null">
                            <div class="col-lg-12">
                                <div class="row mb-4">
                                    <div class="col-9">
                                        <div class="row align-items-center mb-4">
                                            <div class="col-4">
                                                Customer
                                            </div>
                                            <div class="col-8">
                                                <div class="text-white">
                                                    <span>{{ measurement.customer ? measurement.customer.name : '' }}</span>
                                                    <span>-</span>
                                                    <span>+91 {{ measurement.customer ? measurement.customer.phone :
                                                        '' }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-center mb-4">
                                            <div class="col-4">
                                                Service
                                            </div>
                                            <div class="col-6">
                                                <div class="text-white">
                                                    {{ measurement.service ? measurement.service.name : '' }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-center">
                                            <div class="col-4">
                                                Measurement
                                            </div>
                                            <div class="col-8">
                                                <div class="text-white">
                                                    {{ measurement.name }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="border border-secondary p-3 text-center rounded">
                                            <img src="app-assets/img/btn-icons/info.svg" class="mb-3 measurement-info-icon">
                                            <h6 class="m-0 text-sm text-secondary">
                                                Measurement values are in
                                                <span class="text-uppercase fw-bold">inches</span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-3">

                                    </div>
                                    <div class="col-9">
                                        <div class="row">
                                            <div class="col-4" v-for="item in attributes" :key="item.id">
                                                <div class="input-group">
                                                    <span class="input-group-text col-7">{{ item.name }}</span>
                                                    <input class="form-control col-5" type="number" placeholder="Value"
                                                        disabled :value="item.value" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-start mb-4">
                                    <div class="col-3">
                                        Notes/Remarks
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">
                                            {{ measurement.notes }}
                                        </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-3 mb-3">
                                    <div class="col-3">
                                        Created At
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">{{ $moment(measurement.created_at).format('DD/MM/YYYYLT')}}</span>
                                    </div>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-3">
                                        Created By
                                    </div>
                                    <div class="col-9">
                                        <span class="text-white">{{ measurement.created_by ? measurement.created_by.name :
                                                '' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-text" @click="hideModal()">Close</button>
                        <button type="submit" class="btn btn-primary">Print Measurement</button>
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
        };
    },
    mounted() {
        //Define modal
        this.modal = new Modal(document.getElementById("viewmeasurement"));
    },
    methods: {
        //show modal
        showModal() {
            this.modal.show();
        },
        //hide modal
        hideModal() {
            this.modal.hide();
        }
    },
}
</script> -->