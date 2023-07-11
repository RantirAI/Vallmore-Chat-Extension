<template>
      <div class="ms-chat-header font-family-leaguespartan">
        <div>Start a Conversation with this Site</div>
        <div class="ms-chat-profile-img-wrap">
          <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e993b38dbacc4c77d53_genie%20avatar.svg" loading="lazy" alt="" class="genie-site-fav">
          <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e9959a87a6f57439db6_fav-from-site.svg" loading="lazy" alt="" class="genie-site-fav">
        </div>
        <div class="site-name">{{url}}</div>
      </div>
</template>
<script>
    export default {
        name: 'Header Panel',
        data() {
            return {
                url: window.location.href,
            }
        },
    }
</script>