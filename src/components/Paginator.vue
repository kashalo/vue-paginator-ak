
<template>
  <ul
    class="pagination"
    :style="alignment ? `justify-content: ${alignment};` : ''"
    v-show="shouldPaginat"
  >
    <li v-show="prevUrl" class="page-item">
      <a class="page-link" href="#" tabindex="-1" rel="previous" @click.prevent="page--">Previous</a>
    </li>
    <li
      class="page-item"
      v-for=" pages in paginationNO"
      :key="pages.id"
      v-bind:class="{'active' : pages == page}"
    >
      <a class="page-link" href="#" v-text="pages" @click.prevent="page = pages"></a>
    </li>

    <li v-show="nextUrl" class="page-item">
      <a class="page-link" href="#" rel="next" @click.prevent="page++">Next</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "paginator",
  props: {
    DataSet: {
      type: Object,
      required: false
    },
    dataLength: {
      type: [String, Number],
      required: true
    },
    dataLimit: {
      type: [String, Number],
      required: true
    },
    totalLinks: {
      type: [String, Number],
      required: false,
      default: 5
    },
    alignment: {
      type: String,
      required: false,
      default: "flex-end"
    },
    preserveUrl: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      page: 1,
      total: 0,
      current_page: 0,
      total: 1
    };
  },

  watch: {
    page() {
      this.broadcast().updateUrl();
    }
  },
  computed: {
    /**
     * Detemine if the user want to use Laravel or other backend
     *
     */
    paginationType() {},
    /**
     * Create The Pagination Numbers array to be rendered in the html
     * @returns array
     */
    paginationNO() {
      this.total = Math.floor(this.dataLength / this.dataLimit);
      let pagesLeft = Math.min(this.totalLinks, this.total);

      this.current_page = this.page - Math.floor(this.totalLinks / 2);
      let pagesArray = [];
      if (this.current_page < 1) {
        this.current_page = 1;
      }
      if (this.current_page + pagesLeft > this.total + 1) {
        this.current_page = this.total + 1 - pagesLeft;
      }
      while (pagesLeft != 0 && this.current_page <= this.total) {
        pagesArray.push(this.current_page);
        this.current_page++;
        pagesLeft--;
      }
      return pagesArray;
    },
    /**
     * Check if the pagination should occur or not
     * @returns boolean
     */
    shouldPaginat() {
      return this.total > 1 ? true : false;
    },
    /**
     * Set the Next Button URL
     * @returns Int or boolean
     */
    nextUrl() {
      if (this.page + 1 > this.total) {
        return false;
      }
      return this.page + 1;
    },
    /**
     * Set the previous Button URL
     * @returns Int or boolean
     */
    prevUrl() {
      if (this.page === 1) {
        return false;
      }
      return this.page - 1;
    }
  },
  methods: {
    /**
     * BroadCast a page change event so other compnents can reacte if necceassery
     * @returns events
     */
    broadcast() {
      return this.$emit("changed", this.page);
    },

    /**
     * update the page url to append the page number
     * @returns null
     */
    updateUrl() {
      if (!this.preserveUrl) {
        history.pushState(null, null, "?page=" + this.page);
      }
    }
  }
};
</script>
<style  lang="scss">
@import "../scss/Paginator";
</style>
