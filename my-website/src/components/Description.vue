<template>
    <div class="description">
        <div class="title">
            <h1>THIBAULT COLLARD</h1>
            <h2>Dévelopeur full stack JS</h2>
        </div>
        <div class="descriptionContent">
            <span>Issue d'une formation en gestion des énergies, je me suis reconverti afin de trouver ma passion en tant que developpeur full stack.
                J'ai integré en 2017 l'école 42 à Paris, qui est riche en formation...
            </span>
            <span>Dowload CV</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description'
}
</script>

<style scoped>
.description {
    display: flex;
    flex-direction: column;
    /* align-content: center;
    justify-content: center; */
}

.title {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-content: center; */
    text-align: center;
    margin-bottom: 5%;
}

.descriptionContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2%;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 10px;
  background-color: rgb(51, 59, 80);
  text-align: center;
  font-size: 18px;
}
</style>