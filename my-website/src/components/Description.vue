<template>
    <div class="description">
        <div class="title">
            <span class="name">THIBAULT COLLARD</span>
            <span class="post">Dev full stack JS</span>
            <h1>À propos</h1>
        </div>
        <div class="descriptionContent text">
            <span class="text">
                {{description}}
            </span>
            <!-- <span>Link download CV</span> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description',
    data () {
        return {
            description: 'Aprés avoir été formé à 42 Paris, j\'ai pu travailler dans le développement web et d\'application cross-platform.\n Je m\'interesse à différentes technologies telles que Flutter / vueJS.'
        }
    }
}
</script>

<style scoped>
.description {
    display: flex;
    flex-direction: column;
    padding: 8% 10% 8% 10%;
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
  background-color: rgb(51, 59, 80);
  text-align: center;
}

.name {
    font-family: 'Roboto Slab';
    font-size: 5em;
    font-weight: bold;
}

.post {
    font-family: 'Roboto Slab';
    font-size: 3em;
    font-weight: bold;
    color: orange;
}
</style>