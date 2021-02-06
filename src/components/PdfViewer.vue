<template>
  <div>
    <pdf
      :src="source"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  props: {
    source: String
  },
  components: {
    pdf
  },
  data() {
    return {
      currentPage: 0,
      pageCount: 0
    };
  }
};
</script>
