<template>
        <a href="#" class="ms-chat-icon w-inline-block">
            <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64641083a2b9a4c7681e5b1d_Genie%20Icon-white.svg" loading="lazy" width="44" alt="" class="ms-chat-icon-img" style="display:block;" id="ms-chat-icon-img" @click="showMenu()">
            <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640c62e787ce0fd0ed9785_noun_Close_996783.svg" loading="lazy" alt="" class="ms-exit-icon" style="display:none;" id="ms-exit-icon" @click="showMenu()">
            <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e99cfa2041672505134_stars-dark.svg" loading="lazy" alt="" class="image">
        </a>
</template>
<script>
    export default {
        name: 'Icon Panel',
        methods: {
            showMenu() {
              let elemIconOpen = document.getElementById("ms-chat-icon-img");
              let elemClose = document.getElementById("ms-exit-icon");
              let elemOpen = document.getElementById("ms-chat-box");
                if(elemClose.style.display == "block") {
                  elemClose.style.display = "none";
                  elemClose.style.opacity = 0;
                  elemOpen.style.display = "none";
                  elemIconOpen.style.display = "block";
                  elemOpen.style.opacity = 0;
                }
                else {
                  elemClose.style.display = "block";
                  elemClose.style.opacity = 1;
                  elemOpen.style.display = "block";
                  elemIconOpen.style.display = "none";
                  elemOpen.style.opacity = 1;
                }
            },
        }
    }
</script>