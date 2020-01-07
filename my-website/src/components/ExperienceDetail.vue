<template>
    <div class="detail" :class="index % 2 === 0 ? 'leftPosition' : 'rightPosition'">
        <span class="date">{{experience.date}}</span>
        <span class="company">{{experience.company}}</span>
        <span class="job">{{experience.job}}</span>
        <span class="description">{{experience.description}}</span>
    </div>
</template>

<script>
export default {
    name: 'ExperienceDetail',
    props: {
        experience: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
}
</script>

<style scoped>
.detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
}

.date {
    color: orange;
    font-weight: bold;
}

.leftPosition {
    text-align: right;
}

.rightPosition {
    text-align: left;
}
</style>