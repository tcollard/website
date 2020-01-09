<template>
    <div class="experience">
        <h1>Experience</h1>
        <div class="timeLine" v-for="(experience, index) in experiences" :key="index">
            <ExperienceContainer :index="index" :experience="experience" :length="experiences.length - 1"></ExperienceContainer>
        </div>
    </div>
</template>

<script>
import ExperienceContainer from "./ExperienceContainer.vue";

export default ({
    name: 'Experience',
    components: {
        ExperienceContainer,
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
            ],
            state: false,
        }
    },
})
</script>

<style scoped>
.experience {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15%;
}

.timeLine {
    display: flex;
    flex-direction: column;
}
</style>