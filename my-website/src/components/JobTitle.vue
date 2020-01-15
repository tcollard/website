<template>
    <div class="title">
        <span class="name">THIBAULT COLLARD</span>
        <h1 class="post">Dev full stack JS</h1>
    </div>
</template>

<script>
export default {
    name: 'JobTitle',
}
</script>

<style scoped>

.title {
    position: fixed;
    margin-top: 100px;
    text-align: center;
    width: 100%;
}

.name {
    font-family: 'Roboto Slab';
    font-size: 5em;
    font-weight: bold;
    color: white;
    /* background: linear-gradient(white 0%, transparent 100%); */
	/* -webkit-background-clip: text;
	-webkit-text-fill-color: transparent; */
    z-index: -1;
}

.post {
    /* font-family: 'Roboto Slab';
    font-size: 3em;
    font-weight: bold; */
    color: orange;
}

</style>