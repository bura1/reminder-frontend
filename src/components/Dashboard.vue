<template>
    <div>
        <b-card no-body>
            <b-tabs pills card vertical>

                <b-tab v-for="cat in categories" :key="cat.id" :title="cat.name">
                    <reminders :category="cat"></reminders>
                    <b-button size="sm" variant="danger" class="float-right" @click="closeCategory(cat.id)">
                        Close tab
                    </b-button>
                </b-tab>

                <template #tabs-end>
                    <b-form inline class="form-new-category" @submit="newCategory">
                        <b-form-group id="input-group-1" label-for="input-1">
                            <b-form-input
                                id="input-1"
                                v-model="form_new_cat.newCategory"
                                placeholder="Dodaj novu kategoriju"
                                required
                            ></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary">+</b-button>
                    </b-form>
                </template>

                <!-- Render this if no tabs -->
                <template #empty>
                    <div class="text-center text-muted">
                        Otvori novu kategoriju klikom na <b>+</b> button.
                    </div>
                </template>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'
import Reminders from './Reminders.vue'

export default {
  components: { Reminders },
    data() {
        return {
            categories: {},
            form_new_cat: {
                newCategory: ''
            },
            response: ""
        }
    },
    async created () {
        await this.getResponse();
        this.categories = this.response.data
    },
    methods: {
        async getResponse() {
            this.response = await axios.get('https://localhost:8000/categories')
        },
        async newCategory(event) {
            event.preventDefault()
            await axios.post('https://localhost:8000/categories/new/' + this.form_new_cat.newCategory);
            await this.getResponse();
            this.categories = this.response.data
            this.form_new_cat.newCategory = "";
        },
        async closeCategory(id) {
            await axios.delete('https://localhost:8000/categories/delete/' + id);
            await this.getResponse();
            this.categories = this.response.data
        }
    }
}
</script>

<style>
.form-new-category {
    margin-top: 50px;
}
.form-new-category .form-control {
    margin-right: 10px;
    max-width: 217px;
}
.card {
    border: none;
}
.card-header {
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    padding-top: 50px;
}
</style>