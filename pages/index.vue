<template>
    <div class="pt">
      <h2 class="pt-24 pb-24 text-center">Mes pages favorites</h2>
      <AddItem />
      <List />
    </div>
</template>

<script>
import AddItem from '@/components/list/addItem'
import List from '@/components/list/list'

export default {
    name: 'IndexPage',
    components: { AddItem, List }
}
</script>

<style scoped>
.pt {
  padding-top: 84px;
}
h2 {
    background-image: linear-gradient(90deg,#86b3e4,#6f8fe7);
    color: white;
}
</style>