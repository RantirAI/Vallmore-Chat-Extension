<template>
    <div class="go-genie-wrapper">
        <IconPanel/>
        <div style="display: none; opacity: 0; transform: translate3d(0px, 19px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" id="ms-chat-box" class="ms-chat-box">
        <div style="height: 190px; width: 338.667px;" class="ms-chat-bg"></div>
  <div class="ms-chat-frame ms-chat-home">
    <div style="height: 190px; width: 338.667px;" class="ms-chat-animation">
      <HeaderPanel/>
    </div>
    <div style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="ms-chat-channel-wrap font-family-leaguespartan">
      <a @click="showChatMenu()" data-w-id="a73391d9-123e-3433-df1e-0d08a0af7810" href="#" class="ms-chat-channel-btn w-inline-block" style="display: flex;">
        <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e99cfa2041672505134_stars-dark.svg" loading="lazy" alt="" class="ms-chat-channel-icon">
        <div>
          <div class="ms-chat-bold">Chat or Search the Site</div>
          <div class="ms-chat-smaller-text">Ask questions or get real time data instantly on this website.</div>
        </div>
      </a>
      <a class="ms-chat-channel-btn w-inline-block" style="display: flex;">
        <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/6464115b18558c7fe8080226_reload-window.svg" loading="lazy" alt="" class="ms-chat-channel-icon">
        <div>
          <div class="ms-chat-bold">Your Chat history</div>
          <div class="ms-chat-smaller-text">This is a recollection of your chat history for logged-in members 🎉</div>
        </div>
      </a>
      <a href="#" class="ms-chat-channel-btn w-inline-block" style="display: flex;">
        <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/6464115bedb3b43d131f579d_multi-mac-os-window.svg" loading="lazy" alt="" class="ms-chat-channel-icon">
        <div>
          <div class="ms-chat-bold">Your Browsing History </div>
          <div class="ms-chat-smaller-text">View all of your Sites that you have used Genie on. Members Only🎉</div>
        </div>
      </a>
      <a href="#" class="hexigon-link w-inline-block">
        <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/6464115bc961bced9977d0ec_hexigonai.svg" loading="lazy" width="82" alt="">
      </a>
      <div class="ms-chat-bottom-text">All Rights Reserved Hexigon AI, Inc. 2023</div>
    </div>
  </div>
  <div style="opacity: 0; display: none;" class="ms-chat-frame ms-chat-email">
    <div style="height: 120px;" class="ms-chat-animation">
      <div class="ms-chat-header">
        <div>Start a Conversation with this Site</div>
        <div class="ms-chat-profile-img-wrap">
          <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e9959a87a6f57439db6_fav-from-site.svg" loading="lazy" alt="" class="genie-site-fav">
        </div>
        <div class="site-name">http://sitename.com</div>
        <a data-w-id="a73391d9-123e-3433-df1e-0d08a0af783b" href="#" class="ms-chat-back w-inline-block"></a>
      </div>
    </div>
    <div style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="ms-chat-channel-wrap">
      <div class="ms-chat-channel-form w-form">
        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" aria-label="Email Form 2">
          <div class="ms-chat-field-wrap">
            <label for="Ask-this-site" class="ms-chat-label">Ask A Question or Search</label>
            <textarea placeholder="Ask this site anything" maxlength="5000" id="Ask-this-site" name="Ask-this-site" data-name="Ask this site" class="genei-chat-field genei-chat-message w-input"></textarea>
          </div>
          <input type="submit" value="Ask &amp; Start Chat" data-wait="Please wait..." class="ms-chat-submit-button w-button">
        </form>
        <div class="relay-genie w-form-done" tabindex="-1" role="region" aria-label="Email Form 2 success">
          <div class="chat-genie-fav-avatar">
            <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e993b38dbacc4c77d53_genie%20avatar.svg" loading="lazy" alt="" class="genie-site-fav small-over">
            <img src="https://assets.website-files.com/64640c61e787ce0fd0ed972b/64640e9959a87a6f57439db6_fav-from-site.svg" loading="lazy" alt="" class="genie-site-fav">
          </div>
          <div class="text-block">
            <strong>Let me think... </strong>Good Question, I&nbsp;don't see any relevant data on this site to support this question. Try to find something specific to this particular website that I&nbsp;can give rich context too and answer appropriately.
          </div>
          <a href="#" class="button w-button">New Search</a>
          <a href="#" class="button light w-button">Ask Something Else</a>
        </div>
        <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form 2 failure">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="ms-chat-channel-form">
        <div class="ms-chat-smaller-text">Ask this site anything, search context and reasoning or opinions based on relevant data on this particular website.</div>
      </div>
      <div class="ms-chat-bottom-text">All Rights Reserved Hexigon AI, Inc. 2023</div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    import HeaderPanel from "./HeaderPanel";
    import IconPanel from "./IconPanel";

    export default {
        name: 'Icon Panel',
        components: {
            HeaderPanel,
            IconPanel
        },
        mounted() {
              if(this.$store.state.back_to_first_panel == true) {
                let elemIconOpen = document.getElementById("ms-chat-icon-img");
                let elemOpen = document.getElementById("ms-chat-box");
                let elemClose = document.getElementById("ms-exit-icon");
                  elemClose.style.display = "block";
                  elemClose.style.opacity = 1;
                  elemOpen.style.display = "block";
                  elemIconOpen.style.display = "none";
                  elemOpen.style.opacity = 1;
                this.$store.state.back_to_first_panel = false;
              }
        },
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
            showChatMenu() {
              this.$store.state.icon_panel = false;
              this.$store.state.chat_panel = true;
            }
        }
    }
</script>

