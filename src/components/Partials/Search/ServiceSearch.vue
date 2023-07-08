<template>
    <div class="row align-items-center mb-3 ">
        <div class="col-4">
            Service
        </div>
        <div class="col-8 position-relative">
            <input type="text" class="form-control" @focusout="hideItemSearch"
                id="customer-select" v-model="itemsearch"
                :class="{ 'border-danger': error, 'search-input-p-w': selectedItem }"
                :placeholder="selectedItem == null ? 'Select Service' : (selectedItem.name )"
                @focusin="showItemSearch" @keydown.enter.prevent="handleEnter" @keydown.up.prevent="goUp"
                @keydown.down.prevent="goDown">
            <div class="position-absolute shadow-lg rounded dropdown-custom w-100" v-if="showhideitemsearch == true">
                <div class="bg-dark dropdown-item-1 w-100" v-for="(item, index2) in filterItems"
                    :class="{ 'item-selected-arrow': searchhoveritem == index2 }" :key="item.id"
                    @mousedown="selectItem(item)">
                    <div class="d-flex justify-content-between w-100">
                        <div class="w-100 text-white"> {{ item.name }} </div>
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
            let items = this.items.filter((item, index) => (!(item.name.toLowerCase()).indexOf(this.itemsearch.toLowerCase())));
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
</style>