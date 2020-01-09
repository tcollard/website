<template>
    <div class="nav-bar">
        <span class="ref">CV</span>
        <a v-scroll-to="'#description'">HOME</a>
        <a v-scroll-to="'#skills'">SKILLS</a>
        <a v-scroll-to="'#experience'">EXPERIENCE</a>
        <a v-scroll-to="'#portfolio'">PORTFOLIO</a>
        <a v-scroll-to="'#contact'">CONTACT</a>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'NavBar',
        data() {
            return {
                selectedElem: null,
            };
        },
        
        // methods: {
        //     changeColor(id) {
        //         console.log('YOYO: ', id) /* eslint-disable-line */
        //         console.log('YOYO 1: ', this.selectedElem) /* eslint-disable-line */
        //         let el = document.getElementById(id);
        //         el.classList.add('select');
                
        //         if (this.selectedElem) {
        //             console.log('YOYO 2: ', this.selectedElem.classList) /* eslint-disable-line */

        //             // this.selectedElem.classList.remove('select');
        //         }
        //         this.selectedElem = el;
        //     }
        // },
    }
</script>

<style scoped>
    .nav-bar {
        /* background: linear-gradient(-90deg, #84CF6A, #16C0B0); */
        height: 60px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        color: orange;
        font-size: 18px;
    }

    .ref {
        cursor: pointer;
    }

    a {
        cursor: pointer;
        color: orange;
    }
</style>