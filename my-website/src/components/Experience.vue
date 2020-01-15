<template>
    <div class="experience">
        <h1>Expérience</h1>
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
                    description: 'Réalisation d\'application citadinne, cross-platform.'
                },
                {
                    date: '2018',
                    company: 'SideProject Iota Amsterdam',
                    job: 'Dev',
                    description: 'Réalisation d\'un PoC sur une smart grid (JS/nodeJs) suite au Hackathon IOTA à 42. Utilisation du réseau IOTA pour effectuer des micro-transactions (données et monétaires) entre les différents acteurs (IoT). Présentation du PoC avec IOTA à Amsterdam lors de la Blockchain Expo Europe 2018'
                },
                {
                    date: '2017',
                    company: '42',
                    job: 'Student',
                    description: 'Suivi du cursus de 42, formation en programmation.'
                },
                {
                    date: '2015 - 2016',
                    company: 'WHV',
                    job: 'Australia',
                    description: 'Séjour linguistique en Australie : découverte du pays et expériences pro (restauration, manutention, ferme)'
                },
                {
                    date: '2013 - 2015',
                    company: 'CEPI Ingenierie',
                    job: 'Charge de Projet / Thermicien',
                    description: 'Réalisation d\'étude thermique (RT 2012), plan et dimensionnement Chauffage Ventilation Climatisation (logiciel Autocad)'
                },
                {
                    date: '2012',
                    company: 'Cellulose de Broceliande',
                    job: 'Gestionnaire d\'Energie',
                    description: 'Réalisation d\'un audit énergétique sur le process industriel'
                },
            ],
            state: false,
        }
    },
})
</script>

<style scoped>
/* Phone */
@media only screen and (max-width: 480px) {
    .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
        width: 100%;
    }
}
/* Web */
@media only screen and (min-width: 480px) {
    .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
    }
}
.timeLine {
    display: flex;
    flex-direction: column;
    width: 100%;
}

</style>