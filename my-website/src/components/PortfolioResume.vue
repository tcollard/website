<template>
    <div class="portfolio">
        <h1>Portfolio</h1>
        <carousel-3d>
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <div class="container">
                        <img :data-index="index" class="fullContent" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.img">
                        <div class="middle">
                            <div class="text">{{slide.title}}
                                <br>
                                {{slide.description}}
                            </div>
                        </div>
                    </div>
                </template>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
export default {
    name: 'PortfolioResume',
    data() {
        return {
            slides: [
                {
                    title: '42sh',
                    img: require('../assets/term.gif'),
                    description: 'gdsgds gds gsd gds gsdgndsgndjgksldngksln gndkslng kldsn gndsklgnklds'
                },
                {
                    title: 'Test1',
                    img: require('../assets/term.gif'),
                    description: 'gdsgds gds gsd gds gsdgndsgndjgksldngksln gndkslng kldsn gndsklgnklds'
                },
                {
                    title: 'Test2',
                    img: require('../assets/term.gif'),
                    description: 'gdsgds gds gsd gds gsdgndsgndjgksldngksln gndkslng kldsn gndsklgnklds'
                },
                {
                    title: 'Test3',
                    img: require('../assets/term.gif'),
                    description: 'gdsgds gds gsd gds gsdgndsgndjgksldngksln gndkslng kldsn gndsklgnklds'
                },
                {
                    title: 'Test4',
                    img: require('../assets/term.gif'),
                    description: 'gdsgds gds gsd gds gsdgndsgndjgksldngksln gndkslng kldsn gndsklgnklds'
                }
            ]
        }
    }
}
</script>

<style scoped>
.portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8% 10% 8% 10%;
}

/* .carousel {
    display: flex;
    flex-direction: row;
} */

.fullContent {
    width: 100%;
    height: 100%;
}

.container {
    width: 100%;
    height: 100%;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .fullContent {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

</style>