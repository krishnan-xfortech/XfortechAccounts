<template>
  <div class="main-layout">
    <div class="main-layout-content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-4">
                  <div class="row">
                    <div class="col-8">
                      <div class="has-icon-left mb-0">
                        <input type="text" ref="focus_search" v-model="search" class="form-control" placeholder="Seach Here" />
                        <div class="form-control-position">
                          <img class="search-icon mb-4" src="app-assets/img/btn-icons/search.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <h5 class="m-0 text-center text-uppercase">Expense Category</h5>
                </div>
                <div class="col-4">
                  <div class="row align-items-center justify-content-end">
                    <div class="col-auto" v-if="selectedItem.id">
                      <a type="button" class="btn btn-secondary btn-sqr ms-75" @click="editItem(false)">
                        <img class="btn-icon" src="app-assets/img/btn-icons/edit.svg" />
                      </a>
                      <button class="btn btn-secondary btn-sqr ms-75" @click="deleteItem()">
                        <img class="btn-icon" src="app-assets/img/btn-icons/delete.svg" />
                      </button>
                    </div>
                    <div class="col-auto">
                      <a class="btn btn-primary" @click="$refs.category_add_ref.showModal()">
                        <img class="btn-plus-icon me-2" src="app-assets/img/btn-icons/plus.svg" />
                        <span>Add New Category</span>
                      </a>
                    </div>
                    <div class="col-auto">
                      <router-link :to="{ name: 'dashboard' }" type="button" class="">
                        <img src="app-assets/img/btn-icons/close.svg" class="back-btn" />
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="mb-3">
                <div class="table-responsive main-table-scroll">
                  <template v-if="!loading">
                    <table class="table table-sm m-0" v-if="filterData.length > 0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Expense Category Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr :class="{ 'active': selectedItem.id == item.id }" v-for="(item, index) in filterData"
                          :key="item.id" @click="selectItem(item)" @dblclick="editItem(item)">
                          <td>{{ index + 1 }}</td>
                          <td>{{ item.category_name }}</td>
                          <td><span class="text-sm text-secondary">{{ item.category_description }}</span></td>
                          <td><small>{{ $moment(item.created_at).format('DD/MM/YYYY LT') }}</small></td>
                        </tr>
                      </tbody>
                    </table>
                    <EmptyItem v-else />
                  </template>
                  <TablePlaceholder v-else :count="5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-if="performingAction" />
  </div>
  <Teleport to="#modals">
    <CategoryAddModal ref="category_add_ref" @done="getData" @close="deselectItem" />
    <CategoryEditModal ref="category_edit_ref" @done="getData" @close="deselectItem" />
  </Teleport>
</template>

<script>
import CategoryAddModal from "../../components/modals/Expense/CategoryAddModal.vue";
import CategoryEditModal from "../../components/modals/Expense/CategoryEditModal.vue";
import EmptyItem from '../../components/Partials/EmptyItem.vue';
import TablePlaceholder from '../../components/Placeholder/TablePlaceholder.vue';
import Loader from '../../components/Loaders/Loader.vue';

export default {
  data() {
    return {
      search: '',
      categories: [],
      selectedItem: [],
      loading: false,
      performingAction: false,
    }
  },
  mounted() {
    this.getData();
    this.loading = true;
    window.addEventListener('keydown', this.keyEvents);
  },
  beforeUnmount() {
    //removing kev event listeners
    window.removeEventListener('keydown', this.keyEvents);
  },
  methods: {
    //keyboard shorcuts
    keyEvents(e) {
      //Ctrl+n to open create modal
      if (e.ctrlKey && e.key.toLowerCase() == "n") {
        this.$refs.category_add_ref.showModal()
      }
      //Ctrl+K to search event
      if (e.ctrlKey && e.key.toLowerCase() == "k") {
        this.$refs.focus_search.focus()
      }
      //escape key events
      if (e.key == "Escape") {
        this.$refs.category_add_ref.hideModal()
        this.$refs.category_edit_ref.hideModal()
        this.$refs.focus_search.blur()
        this.search = '';
        this.selectedItem = '';
      }
    },
    // get expense category
    getData() {
      this.axios.get('expense-category').then((response) => {
        if (response.data.success) {
          this.categories = response.data.data;
          this.selectedItem = []
          this.loading = false;
          this.performingAction = false;
        }
      })
    },
    //select item on click
    selectItem(item) {
      if (this.selectedItem && this.selectedItem.id == item.id) {
        this.selectedItem = [];
        return;
      }
      this.selectedItem = item;
    },
    //remove selected item
    deselectItem() {
      this.selectedItem = []
    },
    //open edit modal
    editItem(item) {
      if (item != false) {
        this.selectedItem = item;
        this.$refs.category_edit_ref.getEditData(this.selectedItem);
        return;
      }
      this.$refs.category_edit_ref.getEditData(this.selectedItem);
    },
    //ask for confirmation and delete item
    async deleteItem() {
      const confirmed = await confirm('Are you sure you want to delete ?', 'Confirm Action');
      if (confirmed) {
        this.performingAction = true;
        this.axios.get('expense-category/delete/' + this.selectedItem.id).then((response) => {
          this.getData();
        })
        return;
      }
      this.deselectItem();
    }
  },
  computed:
  {
    //filter items with search and category.
    filterData() {
      return this.categories.filter(item => {
        return item.category_name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: {
    CategoryAddModal, CategoryEditModal, TablePlaceholder, Loader, EmptyItem
  },
};
</script>
