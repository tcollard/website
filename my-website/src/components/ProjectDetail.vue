<template>
    <div>
        {{detail.img}}
        <p>{{ detail.description }}</p>
        <img v-show="detail.img" class="img" :src="'./../assets/projects/' + detail.img" :alt="detail.name">
        <a :href="detail.link" target="_blank">{{ detail.link }}</a>
    </div>
</template>

<script lang="ts">
    export default ({
        name: 'ProjectDetail',
        props: {
            detail: {
                type: Object,
                required: true,
            },
        },
    })
</script>

<style>
    .img {
        width: 50px;
    }
</style>