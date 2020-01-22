<template>
    <div class="experience">
        <h1>Expérience</h1>
        <!-- <h1>Experience</h1> -->
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
                    description: 'Réalisation d\'application citadinne cross-platform, via cordova / ionic. Utilisation d\'angular pour les applications, et nodeJS pour l\'API'
                    // description: 'Realization of urban cross-platform application, via cordova / ionic. Use of angular for the applications, and nodeJS for the API'
                },
                {
                    date: '2018',
                    company: 'IOTA Smart Grid',
                    job: 'Dev',
                    description: 'Réalisation d\'un PoC sur une smart grid (JS/nodeJs) suite au Hackathon IOTA à 42. Utilisation du réseau IOTA pour effectuer des micro-transactions (données et monétaires) entre les différents acteurs (IoT). Présentation du PoC avec IOTA à Amsterdam lors de la Blockchain Expo Europe 2018'
                    // description: 'Realization of a PoC on a smart grid (JS/nodeJs) after the IOTA Hackathon at 42. Use of the IOTA network to perform micro-transactions (data and monetary) between the different actors (IoT). Presentation of PoC with IOTA in Amsterdam at the Blockchain Expo Europe 2018'
                },
                {
                    date: '2017',
                    company: '42',
                    job: 'Étudiant',
                    description: 'Suivi du cursus de 42, formation en programmation. Plusieurs projets en C de type recoder ls / printf, recréer un interpreteur de commande. Et initiation au web PHP / HTML / CSS (2 semaines de formation)',
                    // description: 'Followed the curriculum of 42, training in programming. Several projects in C of type recode ls / printf, recreate a command interpreter. And initiation to web PHP / HTML / CSS (2 weeks of training)',
                },
                {
                    date: '2013 - 2015',
                    company: 'CEPI Ingéniérie',
                    job: 'Thermicien',
                    description: 'Chargé de projet et de réalisation d\'étude thermique (RT 2012), plan et dimensionnement Chauffage, Ventilation, Climatisation, et isolation de bâtiments.'
                    // description: 'In charge of project and realization of thermal study (RT 2012), plan and dimensioning Heating, Ventilation, Air-conditioning, and insulation of buildings'
                },
                {
                    date: '2012',
                    company: 'Cellulose de Brocéliande',
                    job: 'Gestionnaire d\'Énergie',
                    description: 'Réalisation d\'un audit énergétique sur le process industriel'
                    // description: 'Carrying out an energy audit of the industrial process'
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
            width: 100%;
        }
    }

    .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
    }

    .timeLine {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

</style>