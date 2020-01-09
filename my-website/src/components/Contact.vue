<template>
    <div class="contact">
        <h1>Contact</h1>
        <div class="contactContainer">
            <a  href="https://www.linkedin.com/in/thibault-collard-b8228168/" target="_blank">
                <img class="img" src="../assets/linkedIn.svg" alt="linkedIn">
            </a>
            <span class="text">thibaul.collard1@gmail.com</span>
            <a  href="https://github.com/tcollard" target="_blank">
                <img class="img" src="../assets/github.svg" alt="linkedIn">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 15%;
    }

    .contactContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }

    .img {
        width: 80px;
        cursor: pointer;
    }

</style>