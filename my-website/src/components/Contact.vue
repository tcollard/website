<template>
    <div class="contact">
        <h1>Contact</h1>
        <div class="contactContainer">
            <a href="mailto:thibault.collard1@gmail.com">
                <img class="img" src="../assets/mail.svg" alt="mail">
                <p class="contactText">thibault.collard1@gmail.com</p>
            </a>
            <a href="https://fr.linkedin.com/in/thibault-collard-b8228168" target="_blank">
                <img class="img" src="../assets/linkedin.svg" alt="linkedIn">
                <p class="contactText">linkedin.com/in/thibault-collard-b8228168</p>
            </a>                
            <a  href="https://github.com/tcollard" target="_blank">
                <img class="img" src="../assets/github.svg" alt="linkedIn">
                <p class="contactText">github.com/tcollard</p>
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
/* Web */
@media only screen and (min-width: 480px) {
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
        background-color: orange;
        /* max-width: 100%; */
    }
}

/* Phone */
@media only screen and (max-width: 480px) {
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 10% 8% 10%;
        background-color: orange;
        /* width: 100%; */
    }
}
    .contactContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .addColor {
        color: orange;
    }

    .img {
        width: 40px;
        cursor: pointer;
        margin-right: 5%;
    }

    .contactText {
        font-size: 1.4em;
        font-weight: 400;
        line-height: 0.9em;
        font-family: 'Roboto Slab';
        text-align: left;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        text-decoration: none;
        color: white;
    }

    .linkContent {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>