<template>
    <div class="footer">
        <p class="text">Thibault Collard © 2020</p>
        <a href="https://github.com/tcollard/website/tree/master/my-website" target="_blank">
            <img class="img" src="../assets/github.svg" alt="linkedIn">
        </a>
    </div>
</template>

<script>
export default {
    name: 'InfoBottom',
}
</script>

<style scoped>
    @media only screen and (max-width: 1024px) {
        .footer {
            width: 100%;
        }
    }
    
    .footer {
        background-color: orange;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0% 10% 0% 10%;
    }

    .img {
        width: 15px;
        cursor: pointer;
        margin-left: 10px;
    }
</style>