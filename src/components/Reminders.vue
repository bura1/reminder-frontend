<template>
    <div>
        <h1>{{category.name}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: Object
        }
    },
}
</script>
