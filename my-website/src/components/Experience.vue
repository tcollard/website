<template>
    <div class="experience">
        <h1>Experience</h1>
        <div class="timeLine" v-for="(experience, index) in experiences" :key="index">
            <div class="time">
                <div class="leftSide">
                    <ExperienceDetail  v-if="index % 2 === 0" :experience="experience" :index="index"></experienceDetail>
                </div>
                <div class="line"></div>
                <div class="rightSide">
                    <ExperienceDetail  v-if="index % 2 === 1" :experience="experience"></experienceDetail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ExperienceDetail from "./ExperienceDetail.vue";

export default ({
    name: 'Experience',
    components: {
        ExperienceDetail,
    },
    data() {
        return {
            experiences: [
                {
                    date: '2019',
                    company: 'Neocity',
                    job: 'Dev fullStack',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed iusto hic, maxime totam, officia eveniet saepe dolorem et doloribus repellat harum impedit ipsum distinctio porro rem facere labore, voluptates quas? Quidem cumque voluptatibus dolores vel omnis dignissimos voluptatem architecto doloremque a pariatur, libero, asperiores ab ducimus porro modi impedit natus esse veritatis consequatur dolorem! Eos animi hic corrupti minus odit omnis, numquam sed libero rem, incidunt quisquam quasi aliquam totam similique, accusamus ipsa? Impedit fugit maiores, odit possimus ducimus explicabo repellendus magni iure voluptatibus. Consectetur veritatis hic magnam aliquam in dolor fuga nesciunt atque! Doloribus id hic labore neque.'
                },
                {
                    date: '2018',
                    company: 'SideProject Iota Amsterdam',
                    job: 'Dev',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed iusto hic, maxime totam, officia eveniet saepe dolorem et doloribus repellat harum impedit ipsum distinctio porro rem facere labore, voluptates quas? Quidem cumque voluptatibus dolores vel omnis dignissimos voluptatem architecto doloremque a pariatur, libero, asperiores ab ducimus porro modi impedit natus esse veritatis consequatur dolorem! Eos animi hic corrupti minus odit omnis, numquam sed libero rem, incidunt quisquam quasi aliquam totam similique, accusamus ipsa? Impedit fugit maiores, odit possimus ducimus explicabo repellendus magni iure voluptatibus. Consectetur veritatis hic magnam aliquam in dolor fuga nesciunt atque! Doloribus id hic labore neque.'
                },
                {
                    date: '2017',
                    company: '42',
                    job: 'Student',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed iusto hic, maxime totam, officia eveniet saepe dolorem et doloribus repellat harum impedit ipsum distinctio porro rem facere labore, voluptates quas? Quidem cumque voluptatibus dolores vel omnis dignissimos voluptatem architecto doloremque a pariatur, libero, asperiores ab ducimus porro modi impedit natus esse veritatis consequatur dolorem! Eos animi hic corrupti minus odit omnis, numquam sed libero rem, incidunt quisquam quasi aliquam totam similique, accusamus ipsa? Impedit fugit maiores, odit possimus ducimus explicabo repellendus magni iure voluptatibus. Consectetur veritatis hic magnam aliquam in dolor fuga nesciunt atque! Doloribus id hic labore neque.'
                },
                {
                    date: '2015 - 2016',
                    company: 'WHV',
                    job: 'Australia',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed iusto hic, maxime totam, officia eveniet saepe dolorem et doloribus repellat harum impedit ipsum distinctio porro rem facere labore, voluptates quas? Quidem cumque voluptatibus dolores vel omnis dignissimos voluptatem architecto doloremque a pariatur, libero, asperiores ab ducimus porro modi impedit natus esse veritatis consequatur dolorem! Eos animi hic corrupti minus odit omnis, numquam sed libero rem, incidunt quisquam quasi aliquam totam similique, accusamus ipsa? Impedit fugit maiores, odit possimus ducimus explicabo repellendus magni iure voluptatibus. Consectetur veritatis hic magnam aliquam in dolor fuga nesciunt atque! Doloribus id hic labore neque.'
                },
                {
                    date: '2013 - 2015',
                    company: 'CEPI Ingenierie',
                    job: 'Charge de Projet / Thermicien',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed iusto hic, maxime totam, officia eveniet saepe dolorem et doloribus repellat harum impedit ipsum distinctio porro rem facere labore, voluptates quas? Quidem cumque voluptatibus dolores vel omnis dignissimos voluptatem architecto doloremque a pariatur, libero, asperiores ab ducimus porro modi impedit natus esse veritatis consequatur dolorem! Eos animi hic corrupti minus odit omnis, numquam sed libero rem, incidunt quisquam quasi aliquam totam similique, accusamus ipsa? Impedit fugit maiores, odit possimus ducimus explicabo repellendus magni iure voluptatibus. Consectetur veritatis hic magnam aliquam in dolor fuga nesciunt atque! Doloribus id hic labore neque.'
                },
                {
                    date: '2012',
                    company: 'Cellulose de Broceliande',
                    job: 'Gestionnaire d\'Energie',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed iusto hic, maxime totam, officia eveniet saepe dolorem et doloribus repellat harum impedit ipsum distinctio porro rem facere labore, voluptates quas? Quidem cumque voluptatibus dolores vel omnis dignissimos voluptatem architecto doloremque a pariatur, libero, asperiores ab ducimus porro modi impedit natus esse veritatis consequatur dolorem! Eos animi hic corrupti minus odit omnis, numquam sed libero rem, incidunt quisquam quasi aliquam totam similique, accusamus ipsa? Impedit fugit maiores, odit possimus ducimus explicabo repellendus magni iure voluptatibus. Consectetur veritatis hic magnam aliquam in dolor fuga nesciunt atque! Doloribus id hic labore neque.'
                },
            ]
        }
    }
})
</script>

<style scoped>
.experience {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 15%;
}

.timeLine {
    display: flex;
    flex-direction: column;
}

.leftSide, .rightSide {
    width: 49%;
}

.time {
    display: flex;
    flex-direction: row;
}

.line {
    width: 1%;
    background-color: orange;
    margin-left: 2%;
    margin-right: 2%;
}
</style>