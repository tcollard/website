<template>
    <div v-bind:id="xp + id" class="detail" :class="index % 2 === 0 ? 'leftPosition' : 'rightPosition'">
        <h5 v-if="index % 2 === 0 && id === 'right'" :class="index % 2 === 0 ? 'rightPosition' : 'leftPosition'">{{ $t('experience.'+ xp +'.date') }}</h5>
        <h5 v-if="index % 2 === 1 && id === 'left'" :class="index % 2 === 0 ? 'rightPosition' : 'leftPosition'">{{ $t('experience.' + xp + '.date') }}</h5>
        <div class="containerDetail" v-if="index % 2 === 0 && id === 'left' || index % 2 === 1 && id === 'right'">
            <h4>{{ $t('experience.' + xp + '.company') }}</h4>
            <h3>{{ $t('experience.' + xp + '.job') }}</h3>
            <p>{{ $t('experience.' + xp + '.content') }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceDetail',
    props: {
        xp: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
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
            let el = document.getElementById(this.xp + this.id);
            const scroll = window.scrollY || window.pageYOffset
            const viewport = {
                top: scroll,
                bottom: scroll + window.innerHeight,
            }

            if (!this.state && el.offsetTop > viewport.top && el.offsetTop < viewport.bottom
                    && el.offsetTop - viewport.top < window.innerHeight / 1.4) {
                this.state = !this.state;
                el.classList.add('transitionOpacity');
                return true;
            }
            return false;
        }
    }

}
</script>

<style scoped>

    h3 {
        font-size: 2em;
        font-weight: 400;
        padding-bottom: 5%;
        overflow-wrap: break-word;
        hyphens: auto;
        margin: 0;
    }
    
    h4 {
        font-size: 1.4em;
        font-weight: 400;
        line-height: 0.9em;
        margin: 0;
    }
    
    h5 {
        font-family: 'Roboto';
        color: orange;
        font-weight: 400;
        font-size: 14px;    
        margin: 0;
    }

    .containerDetail {
        display: flex;
        flex-direction: column;
    }

    .detail {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        opacity: 0;
        margin-bottom: 50px;
    }

    .leftPosition {
        text-align: right;
    }

    .rightPosition {
        text-align: left;
    }

    .transitionOpacity {
        animation-name: opacityAnimation;
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-delay: .4s;
        animation-fill-mode: forwards;
    }

    @keyframes opacityAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @media only screen and (max-width: 1024px) {
        p {
            hyphens: auto;
        }
    }

</style>