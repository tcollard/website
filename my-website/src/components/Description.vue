<template>
    <div class="description">
        <div class="title">
            <h1>THIBAULT COLLARD</h1>
            <h2>Dev full stack JS</h2>
        </div>
        <div class="descriptionContent">
            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quis deleniti recusandae neque impedit facilis? Ut placeat possimus incidunt. Ipsa, voluptate? Distinctio culpa assumenda iusto nisi ea aut tempora autem molestiae enim natus vero quas consequatur officiis, dicta voluptatem? Officia laboriosam quo a nesciunt qui modi alias tempora nemo ad recusandae, fugit hic? At mollitia voluptatibus, explicabo fuga eaque accusamus veritatis quia nihil atque quasi unde magni cupiditate! Sequi velit asperiores impedit iure ipsum iste est deserunt cumque quas corrupti beatae illo dolor perspiciatis quasi, atque veniam vero quae eius vel tempore quidem a similique ratione! Magnam quisquam aliquid inventore.
            </span>
            <span>Link download CV</span>
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
    padding-bottom: 10%;
    padding-top: 10%;
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
  margin-left: 15%;
  margin-right: 15%;
  border-radius: 10px;
  background-color: rgb(51, 59, 80);
  text-align: center;
  font-size: 18px;
}
</style>