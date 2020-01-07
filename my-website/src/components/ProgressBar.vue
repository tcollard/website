<template>
    <div class="progress">
        <span class='title'>
            {{skill.name}}
        </span>
        <div class="bar">
            <div class="coloredBar" :style="{width: skill.rate + '%'}"></div>
        </div>
        <span class="rate">{{skill.rate}} %</span>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        skill: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.progress {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.title {
    width: 25%;
    text-align: right;
}

.bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    width: 50%;
}
.coloredBar {
    background-color: orange;
    align-self: flex-start;
    height: 10px;
}

.rate {
    width: 25%;
}
</style>