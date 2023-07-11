<template>
    <div class="go-genie-wrapper">
        <IconPanel/>
        <div style="display: block; opacity: 1; transform: translate3d(0px, 19px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" id="ms-chat-box" class="ms-chat-box">
            <div style="height: 190px; width: 338.667px;" class="ms-chat-bg"></div>
            <div class="ms-chat-frame ms-chat-home">
                <div style="height: 190px; width: 338.667px;" class="ms-chat-animation">
                      <a data-w-id="a73391d9-123e-3433-df1e-0d08a0af783b" href="#" class="ms-chat-back w-inline-block" @click="backToFirstPanel()"></a>
                    <HeaderPanel/>
                    <div style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="ms-chat-channel-wrap">
                    <div class="ms-chat-bottom-text">All Rights Reserved Hexigon AI, Inc. 2023</div>
                    </div>                    
                </div>
                <div style="opacity: 1; display: block;" class="ms-chat-frame ms-chat-email">
                   
                    <div style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="ms-chat-channel-wrap">
                        <div class="ms-chat-channel-form w-form">
                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" aria-label="Email Form 2">
                            <div class="ms-chat-field-wrap">
                            <label v-if="result == ''" for="Ask-this-site" class="ms-chat-label font-family-leaguespartan" style="margin-bottom: 0.6em;"><strong>Ask A Question or Search </strong></label>
                            <textarea v-if="result == ''" name="query" placeholder="Ask this site anything" maxlength="5000" id="Ask-this-site" data-name="Ask this site" class="genei-chat-field genei-chat-message w-input" @change="onChangeInput"></textarea>
                            <span class="font-family-leaguespartan font-size-14px" v-if="result != ''">{{result}}</span>
                            </div>
                            <input v-if="result == ''" @click="fetchAPIChatBot" type="submit" :value="`${button_text}`" class="ms-chat-submit-button w-button">
                            <input v-if="result != ''" @click="newSearch" type="submit" :value="`New Search`" class="ms-chat-submit-button w-button margin-top-2em">
                        </form>
                        </div>
                        <div class="ms-chat-channel-form">
                        <div class="ms-chat-smaller-text font-family-leaguespartan">Ask this site anything, search context and reasoning or opinions based on relevant data on this particular website.</div>
                        </div>
                        <div class="ms-chat-bottom-text font-family-leaguespartan">All Rights Reserved Hexigon AI, Inc. 2023</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderPanel from "./HeaderPanel";
    import IconPanel from "./IconPanel";
    import axios from 'axios';

    export default {
        name: 'App',
        components: {
            HeaderPanel,
            IconPanel
        },
        data() {
            return {
                query: "",
                result: "",
                button_text: "Ask & Start Chat"
            }
        },
        mounted() {
              let elemIconOpen = document.getElementById("ms-chat-icon-img");
              let elemClose = document.getElementById("ms-exit-icon");
              elemClose.style.display = "block";
              elemClose.style.opacity = 1;
              elemIconOpen.style.display = "none";
            },
        methods: {
            backToFirstPanel() {
              this.$store.state.chat_panel = false;
              this.$store.state.icon_panel = true;
              this.$store.state.back_to_first_panel = true;
            },
            async fetchAPIChatBot(e) {
                e.preventDefault();
                this.button_text = "Please Wait..."
                await axios.post('https://app.gogenie.ai/chat',{
                    query: this.query,
                    url: window.location.href
                }).then((res) => {
                    this.button_text = "Ask & Start Chat"
                    this.result = res.data.content;
                })
            },
            newSearch(e) {
                e.preventDefault();
                this.result = "";
            },
            onChangeInput(e) {
                this[e.target.name] = e.target.value;
            }
        }
    }
</script>