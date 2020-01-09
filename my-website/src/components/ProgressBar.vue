<template>
    <div class="progress">
        <span class='title'>
            {{skill.name}}
        </span>
        <div class="bar" v-bind:id="skill.name + '-bar'">
            <div v-bind:id="skill.name + '-content'" class="coloredBar" v-on:scroll="isInView"></div>
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
    data() {
        return {
            state: false,
        }
    },
    created() {
        document.addEventListener('scroll', this.isInView);
    },
    destroyed() {
        document.removeEventListener('scroll', this.isInView);
    },
    methods: {
        isInView() {
            let elBar = document.getElementById(this.skill.name + '-bar');
            let elContent = document.getElementById(this.skill.name + '-content');
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && elBar.offsetTop > viewport.top && elBar.offsetTop < viewport.bottom
                && elBar.offsetTop - viewport.top < window.innerHeight / 1.08) {
                this.state = !this.state;
                elContent.style.width = this.skill.rate + '%';
                elContent.classList.add('barTransition');
                return true;
            }
            return false;
        }
    }
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

.barTransition {
    animation-duration: 2s;
    animation-name: loadBar;
    animation-iteration-count: 1;
}

@keyframes loadBar {
    from {
        opacity: 0;
        width: 0px;
    }
}

.rate {
    width: 25%;
}
</style>