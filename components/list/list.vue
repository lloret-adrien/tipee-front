<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-20">
            <Item v-for="item in pages" :key="item.slug" :item="item" />
        </div>
    </div>
</template>

<script>
import Item from '@/components/list/item'

export default {
    components: { Item },
    computed: {
      pages() {
        return this.$store.getters['pages/pages'];
      },
    },
    methods: {
      async fetch() {
        await this.$store.dispatch('pages/fetchPages');
      },
    },
    mounted() {
      this.fetch()
    }
}
</script>