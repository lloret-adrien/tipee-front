<template>
  <div>
      <div class="back" v-show="isOpen" @click="isOpen = false"></div>
      <form @submit.prevent="addItem(); reset()" v-show="isOpen">
          <h3>Ajouter une page</h3>
          <div class="label">
              <label>Nom :</label>
              <input
                  id="name"
                  v-model="fields.name"
                  type="text"
                  required
              />
          </div>
          <div class="label mt-16 mb-16">
              <label>Slug :</label>
              <input
                  id="slug"
                  v-model="fields.slug"
                  type="text"
                  required
              />
          </div>
          <button class="btn btn-primary" type="submit">Ajouter</button>
      </form>
      <button class="add" @click="isOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
      </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            fields: {
                name: null,
                slug: null
            },
            isOpen: false
        }
    },
    methods: {
      addItem() {
        const store = this.$store
        axios.post(`http://localhost:8000/projects`, {
          name: this.fields.name,
          slug: this.fields.slug
        })
        .then(async function (response) {
          const newPage = JSON.parse(response.data.project)
          await store.dispatch('pages/addPage', newPage)
        })
      },
      reset() {
        this.isOpen = false
        this.fields.name = ''
        this.fields.slug = ''
      }
    }
}
</script>

<style scoped lang="scss">
form {
  position: fixed;
  background: white;
  border-radius: 10px;
  z-index: 999;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .label {
    display: flex;
    align-items: center;
    gap: .2rem;
  }
}
.back {
  position: fixed;
  z-index: 10;
  top: 0;
  background: rgba(0, 0, 0, 0.385);
  width: 100vw;
  height: 100vh;
}

.add {
  position: fixed;
  z-index: 9;
  bottom: 35px;
  right: 35px;
  width: 80px;
  height: 80px;
  padding: 10px;
  text-align: center;
  color: white;
  border-radius: 50px;
  background: #8ae672;
  cursor: pointer;
  svg {
    width: 40px;
  }
  &:hover {
    filter: brightness(1.1);
  }
}

input:not([type="radio"]):not([type="checkbox"]) {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    box-shadow: 1px 1px 0 0 #e8e8e8;
    color: #535657;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem;
    transition: all .1s ease;
}
input:not([type="radio"]):not([type="checkbox"]):focus {
    border-color: #4dc4d6;
    box-shadow: inset 0 0 0 3px #b6e5ec;
    outline: 0;
}
.btn {
    background-color: #16ba16;
    color: white;
    border-radius: 2px;
}
</style>