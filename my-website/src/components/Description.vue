<template>
    <div class="description">
        <div class="title">
            <h1>À propos</h1>
        </div>
        <div class="descriptionContent text">
            <span class="text">
                {{description}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description',
    data () {
        return {
            description: 'Aprés un parcours en ingénierie du bâtiment et des énergies, 42 m\'a offert l\'opportunité de découvrir et de me former au monde de l\'informatique.'
        }
    }
}
</script>

<style scoped>
/* Web */
@media only screen and (min-width: 480px) {
    .description {
        display: flex;
        flex-direction: column;
        padding: 8% 10% 8% 10%;
        margin-top: 30%;
    }
}
/* Phone */
@media only screen and (max-width: 480px) {
    .description {
        display: flex;
        flex-direction: column;
        padding: 8% 10% 8% 10%;
        margin-top: 125%;
        width: 100%;
    }
}
.title {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 5%;
}

.descriptionContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2%;
  border-radius: 10px;
  /* background-color: rgb(51, 59, 80); */
  text-align: center;
}

</style>