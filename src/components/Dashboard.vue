<template>
    <div>
        <b-card no-body>
            <b-tabs pills card vertical>

                <b-tab v-for="cat in categories" :key="cat.id" :title="cat.name">
                    Tab contents {{ cat }}
                    <b-button size="sm" variant="danger" class="float-right" @click="closeTab(cat)">
                        Close tab
                    </b-button>
                </b-tab>

                <template #tabs-end>
                    <b-form inline class="form-new-category">
                        <label class="sr-only" for="category">Name</label>
                        <b-form-input
                            id="category"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Ime kategorije"
                        ></b-form-input>
                        <b-button variant="primary">+</b-button>
                    </b-form>
                </template>

                <!-- Render this if no tabs -->
                <template #empty>
                    <div class="text-center text-muted">
                        There are no open categories<br>
                        Open a new category using the <b>+</b> button above.
                    </div>
                </template>
            </b-tabs>
        </b-card>
        <!--<b-card no-body>
            <b-tabs pills card vertical v-for="category in categories">
                <b-tab title="{{ category.name }}">{{ category.name }}</b-tab>

                <template #tabs-end>
                    <b-form inline class="form-new-category">
                        <label class="sr-only" for="category">Name</label>
                        <b-form-input
                            id="category"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Ime kategorije"
                        ></b-form-input>
                        <b-button variant="primary">Dodaj</b-button>
                    </b-form>
                </template>

            </b-tabs>
        </b-card>-->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            categories: {}
        }
    },
    async created () {
        const response = await axios.get('https://localhost:8001/categories')
        this.categories = response.data
    },
    methods: {
        click() {
            console.log(this.categories);
        }
    }
}
</script>

<style>
.form-new-category {
    margin-top: 50px;
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