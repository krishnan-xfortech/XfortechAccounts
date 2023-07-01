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
                                    <h5 class="m-0 text-center text-uppercase">Employees</h5>
                                </div>
                                <div class="col-4">
                                    <div class="row align-items-center justify-content-end">
                                        <div class="col-auto">
                                            <button class="btn btn-secondary btn-sqr"  @click="$refs.view_employee_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/eye.svg">
                                            </button>
                                            <button class="btn btn-secondary btn-sqr ms-75" @click="$refs.edit_employee_ref.showModal()">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg">
                                            </button>
                                            <button class="btn btn-secondary btn-sqr ms-75">
                                                <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg">
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <a type="button" class="btn btn-primary" @click="$refs.add_employee_ref.showModal()">
                                                <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg">
                                                <span>Add New Employee</span>
                                            </a>
                                        </div>
                                        <div class="col-auto">
                                            <router-link :to="{name : 'dashboard'}" type="button" class="">
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
                                                <th scope="col">Employee ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Designation</th>
                                                <th scope="col">Date of Join</th>
                                                <th scope="col">Salary/month(₹)</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Status</th>
                                                <!-- <th scope="col">Created At</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="" v-for="i of 5">
                                                <td>1</td>
                                                <td>XF-10001</td>
                                                <td>Nithish Robin</td>
                                                <td>Development</td>
                                                <td>Senior Developer</td>
                                                <td>16/08/2022</td>
                                                <td>₹10000</td>
                                                <td><span>+91</span><span>9876543210</span></td>
                                                <td>employee123@xfortech.com</td>
                                                <td>
                                                    <span class="badge badge-success">Active</span>
                                                </td>
                                                <!-- <td><small>16/08/2022, 11:30 PM</small></td> -->
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
        <AddEmployeeModal ref="add_employee_ref" />
        <EditEmployeeModal ref="edit_employee_ref" />
        <ViewEmployeeModal ref="view_employee_ref" />
    </Teleport>
</template>

<script>
import AddEmployeeModal from '../components/modals/Employee/AddEmployeeModal.vue';
import EditEmployeeModal from '../components/modals/Employee/EditEmployeeModal.vue';
import ViewEmployeeModal from '../components/modals/Employee/ViewEmployeeModal.vue';
export default {
    data() {
        return {

        }
    },
    components: {
    AddEmployeeModal,
    EditEmployeeModal,
    ViewEmployeeModal
}
}

</script>