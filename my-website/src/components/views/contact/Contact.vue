<template>
  <div class="contact">
    <h2>{{ $t("contact.title") }}</h2>
    <div class="contactContainer">
      <a
        @mouseover="doAnimation('mail')"
        @mouseleave="undoAnimation('mail')"
        href="mailto:thibault.collard1@gmail.com"
      >
        <img id="mail" class="img" src="../../../assets/mail.svg" alt="mail" />
        <p class="contactText">thibault.collard1@gmail.com</p>
      </a>
      <a
        @mouseover="doAnimation('linkedin')"
        @mouseleave="undoAnimation('linkedin')"
        href="https://fr.linkedin.com/in/thibault-collard-b8228168"
        target="_blank"
        rel="noopener"
      >
        <img
          id="linkedin"
          class="img"
          src="../../../assets/linkedin.svg"
          alt="linkedIn"
        />
        <p class="contactText">/thibault-collard-b8228168</p>
      </a>
      <a
        @mouseover="doAnimation('github')"
        @mouseleave="undoAnimation('github')"
        href="https://github.com/tcollard"
        target="_blank"
        rel="noopener"
      >
        <img
          id="github"
          class="img"
          src="../../../assets/github.svg"
          alt="linkedIn"
        />
        <p class="contactText">github.com/tcollard</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    doAnimation(id) {
      let el = document.getElementById(id);
      if (el.classList.contains("imgAnimationReverse"))
        el.classList.remove("imgAnimationReverse");
      el.classList.add("imgAnimation");
    },
    undoAnimation(id) {
      let el = document.getElementById(id);
      if (el.classList.contains("imgAnimation"))
        el.classList.remove("imgAnimation");
      el.classList.add("imgAnimationReverse");
    },
  },
};
</script>

<style scoped>
a {
  display: flex;
  text-decoration: none;
  color: white;
  -webkit-tap-highlight-color: transparent;
}

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

.contactText {
  font-weight: 400;
  line-height: 0.9em;
  font-family: "Roboto Slab";
  white-space: nowrap;
}

.img {
  width: 7.5vw;
  max-width: 40px;
  cursor: pointer;
  margin-right: 5%;
}

.imgAnimation {
  animation-name: textTransition;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes textTransition {
  to {
    margin-right: 10%;
  }
}

.imgAnimationReverse {
  animation-name: textTransitionUndo;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes textTransitionUndo {
  from {
    margin-right: 10%;
  }
  to {
    margin-right: 5%;
  }
}
@media only screen and (min-width: 1024px) {
  .contactText {
    font-size: 1.4em;
  }
}
</style>