<template>
    <div class="contact">
        <h1>Contact</h1>
        <div class="contactContainer">
            <a  href="https://www.linkedin.com/in/thibault-collard-b8228168/" target="_blank">
                <img class="img" src="../assets/linkedIn.svg" alt="linkedIn">
            </a>
            <span class="text mail">thibault.collard1@gmail.com</span>
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
        padding: 8% 10% 8% 10%;
    }

    .contactContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }

    .mail {
        margin-left: 5%;
        margin-right: 5%;
    }
    .img {
        width: 5em;
        cursor: pointer;
    }

</style>