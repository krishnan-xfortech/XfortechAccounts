<template>
  <div class="modal fade" id="edithead" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Edit Expense Category</div>
          <button type="button" class="btn-close" @click="hideModal()" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <label class="form-label">Expense Category Name</label>
                <input type="text" ref="firstInput" class="form-control" placeholder="Enter Expense Category Name"
                  v-model="name" :class="{ 'border-danger': v$.name.$error }" />
              </div>
              <div class="col-lg-12">
                <label class="form-label">Description</label>
                <textarea rows="2" class="form-control" placeholder="Enter Description" v-model="description"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-text" @click="hideModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" @click="update()">Update</button>
          </div>
        </form>
      </div>
    </div>
    <SpinnerLoader v-if="loading" />
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import SpinnerLoader from '../../Loaders/SpinnerLoader.vue'
import { message } from '@tauri-apps/api/dialog';

export default {
  //setting up validation
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    SpinnerLoader
  },
  data() {
    return {
      modal: null,
      name: "",
      description: "",
      loading: false,
      edit_data: []
    }
  },
  mounted() {
    //Define modal and focus on first input
    this.modal = new Modal(document.getElementById("edithead"));
    this.$refs.modal.addEventListener('keydown', this.handleShortcuts)
  },
  beforeUnmount() {
    this.$refs.modal.removeEventListener('keydown', this.handleShortcuts)
  },
  methods: {
    //Show modal
    showModal() {
      this.modal.show();
      setTimeout(() => {
        this.$refs.firstInput.focus();
      }, 300)
    },
    //Get data and fill the form
    getEditData(item) {
      this.showModal();
      this.loading = true;
      this.axios.get('expense-category/update/' + item.id).then((response) => {
        this.edit_data = response.data.data;
        this.loading = false;
        this.fillData();
        setTimeout(() => {
          this.$refs.firstInput.focus();
        }, 200)
      })
    },
    //fill data from api
    fillData() {
      this.name = this.edit_data.category_name;
      this.description = this.edit_data.category_description;
    },
    //Hide Modal
    hideModal() {
      this.resetData();
      this.modal.hide();
      this.$emit('close')
    },
    //Send data to server.
    async update() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      this.loading = true;
      this.axios.post("expense-category/update/" + this.edit_data.id, {
        name: this.name,
        description: this.description,
      }).then((response) => {
        this.loading = false;
        this.$emit('done');
        this.resetData();
        this.hideModal();
      });
    },
    //Reset all data
    resetData() {
      this.v$.$reset();
      this.name = "";
      this.description = "";
    },
    //Handle short cut keys (CTRL+S)
    handleShortcuts(event) {
      if (event.ctrlKey && event.key.toLowerCase() == 's') {
        this.update();
        return;
      }
    }
  },
  validations() {
    return {
      name: { required },
    };
  },
  components: { SpinnerLoader }
}
</script>
