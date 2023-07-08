<template>
  <div class="modal fade" id="addhead" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title m-0">Add Expense Category</div>
          <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <label class="form-label">Expense Category Name</label>
                <input type="text" ref="firstInput" class="form-control" placeholder="Enter Expense Category Name" v-model="name" :class="{ 'border-danger': v$.name.$error }" />
              </div>
              <div class="col-lg-12">
                <label class="form-label">Description</label>
                <textarea rows="2" class="form-control" placeholder="Enter Description" v-model="description"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-text"  @click="save(1)">Save & New</button>
            <button type="submit" class="btn btn-primary" @click="save()">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      modal: null,
      name: '',
      description: ''
    };
  },
  mounted() {
    this.modal = new Modal(document.getElementById("addhead"));
    this.$refs.modal.addEventListener('keydown', this.handleShortcuts);
  },
  beforeUnmount() {
    this.$refs.modal.removeEventListener('keydown', this.handleShortcuts);
  },
  methods: {
    showModal() {
      this.modal.show();
      setTimeout(() => {
        this.$refs.firstInput.focus();
      }, 300)
    },
    hideModal() {
      this.resetData();
      this.modal.hide();
    },
    // create new expense category
    async save(createnew) {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      this.loading = true;
      this.axios.post("expense-category/create", {
        name: this.name,
        description: this.description,
      }).then((response) => {
        this.loading = false;
        if (response.data.success == true) {
          this.$emit('done', response.data.data);
        }
        else{
          console.log(response.data.message);
        }
        this.resetData();
        if (!createnew) {
          this.hideModal();
        }
        else {
          this.$refs.firstInput.focus();
        }
      });
    },
    //Reset all data
    resetData() {
      this.v$.$reset();
      this.name = "";
      this.description = "";
    },
    //Handle short cut keys (CTRL+S and CTRL+SHIFT+S)
    handleShortcuts(event) {
      if (event.ctrlKey && event.key.toLowerCase() == 's') {
        if (event.shiftKey) {
          this.save(1);
          return;
        }
        this.save();
        return;
      }
    }
  },
  validations() {
    return {
      name: { required }
    };
  },
};
</script>
