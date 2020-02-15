<template>
    <div class="footer">
        <p>Thibault Collard © 2020</p>
        <a href="https://github.com/tcollard/website/tree/master/my-website" target="_blank" rel="noopener">
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
    .footer {
        background-color: orange;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0% 10% 2% 10%;
        height: 6vh;
    }

    .img {
        width: 20px;
        cursor: pointer;
        margin-left: 10px;
    }
</style>