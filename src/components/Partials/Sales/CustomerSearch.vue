<template>
    <div class="row align-items-center mb-3">
        <div class="col-auto">
            <img src="app-assets/img/home-icons/customer.png" class="sale-icon">
        </div>
        <div class="col position-relative">
            <input type="text" class="form-control" @focusout="hideItemSearch" id="customer-select" v-model="itemsearch"
                ref="firstInput" :class="{ 'border-danger': error, 'search-input-p-w': selectedItem }"
                :placeholder="selectedItem == null ? 'Select Customer' : (selectedItem.name  + ' - +91 ' + selectedItem.phone )"
                @focusin="showItemSearch" @keydown.enter.prevent="handleEnter" @keydown.up.prevent="goUp"
                @keydown.down.prevent="goDown" data-type="SUPPLIERSELECT" :readonly="status==false">
            <div class="position-absolute shadow-lg rounded dropdown-custom custom-w" v-if="showhideitemsearch == true && status !=false">
                <div class="bg-dark dropdown-item-1 w-100" v-for="(item, index2) in filterItems"
                    :class="{ 'item-selected-arrow': searchhoveritem == index2 }" :key="item.id"
                    @mousedown="selectItem(item)">
                    <div class="d-flex justify-content-between w-100">
                        <div class="w-100 text-white"> {{ item.name + ' - +91 ' + item.phone }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
const HIDE_MENU_TIME = 100;
const ITEM_LIMIT = 15;
export default {
    emits: ['itemselected'],
    props: {
        items: {
            type: Array,
            required: true
        },
        selected: {

        },
        status: {

        },
        error: {
        }
    },
    data() {
        return {
            itemsearch: '',
            searchhoveritem: null,
            showhideitemsearch: false,
            searchResultTimeout: null,
            selectedItem: null,
        }
    },
    mounted() {
    },
    methods: {
        hideItemSearch() {
            this.showhideitemsearch = false;
        },
        showItemSearch() {
            clearTimeout(this.searchResultTimeout);
            this.$nextTick(() => {
                this.showhideitemsearch = true;
            })
        },
        selectItemManual(item) {
            this.selectedItem = item;
        },
        selectItem(item) {
            this.selectedItem = item;
            this.$emit('itemselected', item)
            this.itemsearch = '';
            this.searchhoveritem = null;
            this.hideItemSearch();
        },
        goUp() {
            if (this.searchhoveritem == null) {
                this.searchhoveritem = this.filterItems.length - 1;
            }
            else {
                if (this.searchhoveritem <= (this.filterItems.length - 1) && this.searchhoveritem != 0) {
                    this.searchhoveritem--;
                }
                else {
                    this.searchhoveritem = this.filterItems.length - 1;
                }
            }
        },
        handleEnter() {
            if (this.searchhoveritem == null) {
                return
            }
            this.selectedItem = this.filterItems[this.searchhoveritem];
            this.itemsearch = '';
            this.showhideitemsearch = false;
            this.searchhoveritem = null;
            this.$emit('itemselected', this.selectedItem)
        },
        goDown() {
            if (this.searchhoveritem == null) {
                this.searchhoveritem = 0;
            }
            else {
                if (this.searchhoveritem >= 0 && this.searchhoveritem != (this.filterItems.length - 1)) {
                    this.searchhoveritem++;
                }
                else {
                    this.searchhoveritem = 0;
                }
            }
        }
    },
    computed: {
        filterItems: function () {
            let items = this.items.filter((item, index) => (!(item.name.toLowerCase()).indexOf(this.itemsearch.toLowerCase()) || item.phone.startsWith(this.itemsearch)));
            return items.slice(0, (ITEM_LIMIT))
        },

    },
}
</script>


<style>
.dropdown-item-1 {
    z-index: 999 !important;
    padding: 5px;
}

.dropdown-item-1:hover {
    background-color: #8380eb !important;
}

.item-selected-arrow {
    background-color: #6a66fb !important;
}

.dropdown-custom {
    z-index: 999 !important
}

.search-input-p-w::placeholder {
    color: white;
}
.custom-w{
    width: calc(100% - 20px);
}
</style>