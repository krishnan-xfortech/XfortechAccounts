<template>
    <div class="main-layout">
        <div class="main-layout-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="has-icon-left mb-0">
                                                <input type="text" class="form-control" placeholder="Seach Here" />
                                                <div class="form-control-position">
                                                    <img class="search-icon mb-4" src="app-assets/img/btn-icons/search.svg">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <h5 class="m-0 text-center text-uppercase">Customers</h5>
                                </div>
                                <div class="col-4">
                                    <div class="row align-items-center justify-content-end">
                                        <div class="col-auto">
                                            <button href="" class="btn btn-secondary btn-sqr" @click="$refs.view_customer_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/eye.svg">
                                            </button>
                                            <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.edit_customer_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg">
                                            </button>
                                            <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.delete_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg">
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <a type="button" class="btn btn-primary" @click="$refs.add_customer_ref.showModal()">
                                                <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg">
                                                <span>Add New Customer</span>
                                            </a>
                                        </div>
                                        <div class="col-auto">
                                            <router-link :to="{name:'dashboard'}" type="button" class="">
                                                <img src="app-assets/img/btn-icons/close.svg" class="back-btn">
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="mb-3">
                                <div class="table-responsive main-table-scroll">
                                    <table class="table table-sm m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Customer ID</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Balance Due</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="">
                                                <td>1</td>
                                                <td>
                                                    C-10001
                                                </td>
                                                <td>
                                                    Nithish Robin
                                                </td>
                                                <td>
                                                    <span>+91 </span> <span>9876543210</span>
                                                </td>
                                                <td>
                                                    customer123456@gmail.com
                                                </td>
                                                <td>
                                                    <span>₹ </span> <span>5000</span>
                                                </td>
                                                <td>
                                                    Mannaniya Complex, Chinnakkada
                                                </td>
                                                <td>
                                                    <small>16/08/2022, 11:30 PM</small>
                                                </td>
                                            </tr>
                                            <tr class="active">
                                                <td>2</td>
                                                <td>
                                                    C-10001
                                                </td>
                                                <td>
                                                    Nithish Robin
                                                </td>
                                                <td>
                                                    <span>+91 </span> <span>9876543210</span>
                                                </td>
                                                <td>
                                                    customer123456@gmail.com
                                                </td>
                                                <td>
                                                    <span>₹ </span> <span>5000</span>
                                                </td>
                                                <td>
                                                    Mannaniya Complex, Chinnakkada
                                                </td>
                                                <td>
                                                    <small>16/08/2022, 11:30 PM</small>
                                                </td>
                                            </tr>
                                            <tr class="">
                                                <td>3</td>
                                                <td>
                                                    C-10001
                                                </td>
                                                <td>
                                                    Nithish Robin
                                                </td>
                                                <td>
                                                    <span>+91 </span> <span>9876543210</span>
                                                </td>
                                                <td>
                                                    customer123456@gmail.com
                                                </td>
                                                <td>
                                                    <span>₹ </span> <span>5000</span>
                                                </td>
                                                <td>
                                                    Mannaniya Complex, Chinnakkada
                                                </td>
                                                <td>
                                                    <small>16/08/2022, 11:30 PM</small>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Teleport to="#modals">
        <AddCustomersModal ref="add_customer_ref" />
        <EditCustomersModal ref="edit_customer_ref" />
        <ViewCustomerModal ref="view_customer_ref" />
        <DeleteConfirmModal ref="delete_ref" />
    </Teleport>
</template>

<script>
import EditCustomersModal from '../components/modals/Customers/EditCustomersModal.vue';
import AddCustomersModal from '../components/modals/Customers/AddCustomersModal.vue';
import ViewCustomerModal from '../components/modals/Customers/ViewCustomerModal.vue';
import DeleteConfirmModal from '../components/modals/Delete/DeleteConfirmModal.vue';
export default {
    data() {
        return {}
    },
    components: {
    AddCustomersModal,
    EditCustomersModal,
    ViewCustomerModal,
    DeleteConfirmModal
}
}
</script>

