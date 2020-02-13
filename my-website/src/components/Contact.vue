<template>
    <div class="contact">
        <h2>{{ $t('contact.title') }}</h2>
        <div class="contactContainer">
            <a href="mailto:thibault.collard1@gmail.com">
                <img class="img" src="../assets/mail.svg" alt="mail">
                <p class="contactText">thibault.collard1@gmail.com</p>
            </a>
            <a href="https://fr.linkedin.com/in/thibault-collard-b8228168" target="_blank" rel="noopener">
                <img class="img" src="../assets/linkedin.svg" alt="linkedIn">
                <p class="contactText">/thibault-collard-b8228168</p>
            </a>                
            <a  href="https://github.com/tcollard" target="_blank" rel="noopener">
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
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8% 10% 8% 10%;
        background-color: orange;
    }

    .contactContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media only screen and (min-width: 1024px){
        .contactText {
            font-size: 1.4em;
        }
    }

    .contactText {
        font-weight: 400;
        line-height: 0.9em;
        font-family: 'Roboto Slab';
    }

    .img {
        width: 7.5vw;
        max-width: 40px;
        cursor: pointer;
        margin-right: 5%;
    }

    a {
        display: flex;
        text-decoration: none;
        color: white;
        -webkit-tap-highlight-color: transparent;
    }

</style>