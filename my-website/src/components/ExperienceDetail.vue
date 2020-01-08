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
    font-size: 1.2em;
    padding-bottom: 2%;
}

.company {
    font-size: 1.4em;
    font-weight: bold;
    padding-bottom: 2%;
    margin-bottom: 5%;
}

.job {
    font-size: 1.2em;
    font-weight: bold;
    padding-bottom: 2%;
}

.description {
    font-size: 1em;
    line-height: 1.25rem;
}

.leftPosition {
    text-align: right;
}

.rightPosition {
    text-align: left;
}
</style>