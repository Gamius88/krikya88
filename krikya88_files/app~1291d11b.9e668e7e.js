(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~1291d11b"],{"0b01":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-bottom-sheet",{staticClass:"profile-sheet-main",attrs:{persistent:"",fullscreen:"",scrollable:""},model:{value:e.showProfileSheet,callback:function(t){e.showProfileSheet=t},expression:"showProfileSheet"}},[i("v-sheet",{staticClass:"profile-sheet"},[i("div",{staticClass:"profile-sheet-wrapper"},[i("div",{staticClass:"profile-sheet-header"},[i("div",{staticClass:"profile-sheet-header-wrapper"},[i("div",{staticClass:"profile-sheet-close-wrapper",on:{click:e.closeProfileSheet}},[i("v-icon",{staticClass:"profile-sheet-close-icon",staticStyle:{color:"var(--v-primary-base)"}},[e._v("mdi-close")])],1),i("div",{staticClass:"header-member-name"},[i("v-avatar",{staticClass:"profile-sheet-profile-avatar",attrs:{size:"84"}},[i("div",[e._v(e._s(e.memberInfo.name?e.memberInfo.name.slice(0,1).toUpperCase():e.memberInfo.memberCode.slice(0,1).toUpperCase()))])]),i("div",{staticClass:"white--text"},[e._v(e._s(e.memberInfo.name||e.memberInfo.memberCode))])],1)])]),i("div",{staticClass:"profile-sheet-body"},[i("div",{staticClass:"profile-sheet-body-wrapper"},[i("div",{staticClass:"profile-sheet-item"},[e.isLoggedIn?i("div",{staticClass:"balance-details",class:[e.tierColorThemeName]},[i("v-row",{staticClass:"MB-row pa-3",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"MB-left-col"},[i("v-row",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"11"}},[i("span",{staticClass:"membercode-span highlighted-span"},[e._v("\n                        "+e._s(e.$t("label.viptierlevel"))+" :\n                        "),i("span",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.tierName))])])])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticStyle:{"margin-bottom":"10px"},attrs:{cols:"11"}},[i("v-progress-linear",{staticClass:"customized-progressbar",class:[e.tierColorThemeName],attrs:{value:e.currentProgressPercentage,size:"20","background-color":"viptier"+e.tierColorThemeName}},[i("span",{staticStyle:{color:"#fff","font-size":"10px"}},[e._v(e._s(e.currentDeposit)+" / "+e._s(e.requiredDeposit))])])],1),i("v-col",{staticClass:"progress-details-col progress_text",staticStyle:{"font-weight":"normal","margin-bottom":"10px"},attrs:{cols:"11"}},["black"===e.tierColorThemeName?i("span",[e._v(e._s(e.$t("label.highestlevelreach")))]):i("span",[e._v("\n                        "+e._s(e.$t("label.upgradetonextlevel"))+"\n                        "+e._s(e.nextlevelname)+"\n                        "+e._s(e.$t("label.nextlevel"))+"\n                        "),i("br"),e._v("\n                        "+e._s(e.$t("label.depositRequired"))+e._s(e.progressRequired)+"\n                        "),i("br"),e._v("\n                        "+e._s(e.$t("label.turnoverRequired"))+e._s(e.turnoverRequired)+"\n                      ")])])],1)],1),i("v-col",{staticClass:"MB-right-col d-flex align-center",attrs:{cols:"3"}},[i("v-row",{staticClass:"justify-space-around"},[i("v-avatar",{staticClass:"vip-tier-current",staticStyle:{height:"70px",width:"70px","margin-top":"10px"},attrs:{tile:""}},[i("v-img",{attrs:{src:"/static/svg/vipassets/"+e.tierColorThemeName+".png"}})],1)],1)],1)],1),i("v-row",{staticClass:"MB-btm-row px-3",attrs:{"no-gutters":""},on:{click:e.goToTierDetails}},[i("v-col",{attrs:{cols:"10"}},[i("span",{staticStyle:{"font-size":"12px",color:"#FFF","font-weight":"normal"}},[e._v(e._s(e.$t("label.viewMemberShip")))])]),i("v-spacer"),i("v-icon",{attrs:{color:"white"}},[e._v("mdi-chevron-right")])],1)],1):e._e()]),i("WatchTutorialVideo",{attrs:{label:e.$t("label.howToRedeemVoucher"),"video-url":"https://krikyabangladesh.wistia.com/medias/lyf7d7jamq"}}),i("div",{staticClass:"profile-sheet-item profile-sheet-wallet"},[i("div",{staticClass:"profile-sheet-balance"},[i("label",[e._v(e._s(e.$t("label.mainWallet")))]),i("div",{staticClass:"refresh-balance-icon",on:{click:function(t){return e.getMemberWallet()}}}),i("div",{on:{click:function(t){return e.maskBalance()}}},[e.showBalance?i("v-icon",{staticClass:"mask-balance"},[e._v("mdi-eye-off")]):i("v-icon",{staticClass:"mask-balance"},[e._v("mdi-eye-settings")])],1)]),i("div",[e.notLoading?i("label",{staticClass:"text-capitalize balance"},[e.showBalance?i("span",[e._v(e._s(e._f("maskNumber")(e._f("currency")(e.memberWallet.totalBalance,e.currentCurrency))))]):i("span",[e._v(e._s(e._f("currency")(e.memberWallet.totalBalance,e.currentCurrency)))])]):e._e(),e.notLoading?e._e():i("v-progress-circular",{attrs:{indeterminate:"",color:"amber",width:3,size:24}})],1)]),i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.fund")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("DEPOSIT")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-deposit.svg",alt:"deposit icon"}})]),i("label",[e._v(e._s(e.$t("label.deposit")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("WITHDRAWAL")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-withdrawal.svg",alt:"withdrawal icon"}})]),i("label",[e._v(e._s(e.$t("label.withdrawal")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("INSTANTREBATE")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/instant_rebate_icon.png",width:"36",height:"36",alt:"withdrawal icon"}})]),i("label",[e._v(e._s(e.$t("label.InstantRebate")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("CLAIM_VOUCHER")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-grabcoin.svg",alt:"grabcoin icon"}})]),i("label",[e._v(e._s(e.$t("label.claimVoucher")))])])])]),i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.history")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("BETTING_RECORD")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-total.svg",alt:"total icon"}})]),i("label",[e._v(e._s(e.$t("label.bettingRecors")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("TURNOVER_RECORD")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-total.svg",alt:"total icon"}})]),i("label",[e._v(e._s(e.$t("label.turnoverRecors")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("TRANSFER_RECORD")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-tranfer.svg",alt:"transfer icon"}})]),i("label",[e._v(e._s(e.$t("label.transferRecors")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("BONUS")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-bonus.svg",alt:"bonus icon"}})]),i("label",[e._v(e._s(e.$t("label.bonus")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("TRANSACTION")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-transaction.svg",alt:"transaction icon"}})]),i("label",[e._v(e._s(e.$t("label.transactionRecors")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("REDEMPTION")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-transaction.svg",alt:"transaction icon"}})]),i("label",[e._v(e._s(e.$t("label.redemptionRecord")))])])])]),i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.getFreeCoins")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("DEPOSIT")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-grabcoin.svg",alt:"grabcoin icon"}})]),i("label",[e._v(e._s(e.$t("label.deposit")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("REWARDS")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-checkin.svg",alt:"checkin icon"}})]),i("label",[e._v(e._s(e.$t("label.dailyCheckIn")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("CLAIM_VOUCHER")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-grabcoin.svg",alt:"grabcoin icon"}})]),i("label",[e._v(e._s(e.$t("label.claimVoucher")))])]),0==e.disabledCardMania()?i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("CARD_MANIA")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-card-mania.svg",alt:"card mania icon"}})]),i("label",[e._v(e._s(e.$t("label.cardMania")))])]):e._e()])]),i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.getRewards")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){e.$vuetify.breakpoint.mdAndDown?e.routeTo("MWOF"):e.routeTo("WOF")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/svg/icon-luckyspin.svg",height:"40",width:"40",alt:"lucky spin"}})]),i("label",[e._v(e._s(e.$t("label.fortuneSpin")))])]),!0===e.configuration.reward_store.enabled?i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("REWARD_STORE")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/rewardStore_icon.png",height:"40",width:"40",alt:"rewardStore icon"}})]),i("label",[e._v(e._s(e.$t("label.rewardStore")))])]):e._e()])]),i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.profile")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("PERSONAL")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-info.svg",alt:"info icon"}})]),i("label",[e._v(e._s(e.$t("label.personalInfo")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("CHANGE_PASSWORD")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-reset.svg",alt:"reset icon"}})]),i("label",[e._v(e._s(e.$t("label.changePassword")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("BANK_DETAIL")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-info.svg",alt:"info icon"}})]),i("label",[e._v(e._s(e.$t("label.bankDetail")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("INBOX")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("v-badge",{attrs:{dot:"",right:"","offset-x":"5","offset-y":"8",color:e.hasUnreadInboxMsg?"red":"transparent"}},[i("img",{attrs:{src:"/static/image/profile/icon-inbox.svg",alt:"inbox icon"}})])],1),i("label",[e._v(e._s(e.$t("label.inbox")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("REFERRAL_SUMMARY")}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-referral.svg",alt:"referral"}})]),i("label",[e._v(e._s(e.$t("label.referral")))])])])]),i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.contactUs")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column"},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-support.svg",alt:"support icon"}})]),i("label",[e._v(e._s(e.$t("label.support")))])]),i("div",{staticClass:"profile-sheet-item-column disbaledDiv",attrs:{disabled:""},on:{click:function(t){return e.routeTo("WHATSAPP",!0)}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-whatsapp.svg",alt:"whatsapp icon"}})]),i("label",[e._v(e._s(e.$t("label.whatsApp")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("TELEGRAM",!0)}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-telegram.svg",alt:"telegram icon"}})]),i("label",[e._v(e._s(e.$t("label.telegram")))])]),i("div",{staticClass:"profile-sheet-item-column",on:{click:function(t){return e.routeTo("FACEBOOK",!0)}}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{src:"/static/image/profile/icon-fb.svg",alt:"facebook icon"}})]),i("label",[e._v(e._s(e.$t("label.facebook")))])])])]),e.isAndroid||e.isDesktop?i("div",{staticClass:"profile-sheet-item"},[i("div",{staticClass:"profile-sheet-item-header"},[i("div",{staticClass:"profile-sheet-item-title"},[e._v(e._s(e.$t("label.download")))])]),i("div",{staticClass:"profile-sheet-item-divider"}),i("div",{class:e.$vuetify.breakpoint.mdAndDown?"profile-sheet-item-row-mobile":"profile-sheet-item-row"},[i("div",{staticClass:"profile-sheet-item-column",on:{click:e.downloadAPK}},[i("div",{staticClass:"profile-sheet-icon"},[i("img",{attrs:{width:"36",height:"36",src:"/static/image/profile/icon-downloadapk.png",alt:"download apk icon"}})]),i("label",[e._v(e._s(e.$t("label.downloadandroid")))])])])]):e._e(),i("div",{staticClass:"logout-container"},[i("div",{staticClass:"logout-btn",on:{click:e.logoutBtn}},[i("div",{staticClass:"logout-icon"}),i("div",[e._v(e._s(e.$t("label.logout")))])])])],1)])])])],1)},a=[],r=(i("4de4"),i("6eba"),i("0d03"),i("b0c0"),i("a9e3"),i("e25e"),i("ac1f"),i("5319"),i("15a4")),o=i("bb72"),l=i("4260"),n=i("2f58"),c=i("639a"),m=i("2c2b"),p={name:"ProfileSheet",components:{WatchTutorialVideo:m["a"]},props:{showProfileSheet:{type:Boolean,required:!0,default:!1},closeProfileSheet:{type:Function,required:!1},logout:{type:Function,required:!1}},data:function(){return{currentDeposit:0,requiredDeposit:0,progressRequired:0,turnoverRequired:0,nextlevelname:"",tierName:"",currentProgressPercentage:0,tierColorThemeName:"starter",routeName:r["a"],notLoading:!0,currentCurrency:l["f"].getCurrency(),showBalance:!0,isAndroid:l["f"].isAndroid(),isDesktop:"desktop"==l["f"].getPlatform(),communicationUrl:""}},created:function(){this.isLoggedIn&&(this.getMemberDetail(),this.getVipTierProgress(),this.getVipProgress(),this.getConfigurationStatus())},computed:{hasUnreadInboxMsg:function(){return this.$store.state.inbox.inboxMsg.filter((function(e){return!e.has_read})).length>0},vipTierUpgrade:function(){return this.$store.state.member.vipTierProgress.upgrade},memberVipTierProgress:function(){return this.$store.state.member.vipTierProgress.pairing},isLoggedIn:function(){return this.$store.state.member.isLoggedIn},memberInfo:function(){return this.$store.state.member.info},memberWallet:function(){return this.$store.state.member.walletBalance},affiliateBonus:function(){return this.$store.state.affiliateBonus.affiliateBonusDetail},communicationLink:function(){return this.$store.state.member.vipTierCommunication.success},configuration:function(){return this.$store.state.reward.configurationStatus}},methods:{getConfigurationStatus:function(){var e={currency:l["f"].getCurrency()};this.$store.dispatch("".concat(c["g"]),{filter:e})},getVipTierProgress:function(){this.$store.dispatch(o["U"])},getVipProgress:function(){this.isLoggedIn&&this.$store.dispatch(o["j"])},goToTierDetails:function(){this.$router.push({name:this.routeName.VIPTIER,params:{lang:this.$route.params.lang}}),this.closeProfileSheet()},getAffiliateBonusDetail:function(){this.$store.dispatch("".concat(n["d"]))},maskBalance:function(){this.showBalance=!this.showBalance},getMemberDetail:function(){this.$store.dispatch("".concat(o["g"]))},getMemberWallet:function(){var e=sessionStorage.getItem("lastDispatchTime");(!e||Date.now()-parseInt(e)>15e3)&&(this.notLoading=!1,sessionStorage.setItem("lastDispatchTime",Date.now()),this.$store.dispatch(o["V"])),this.maskBalance()},getVipCommunicationLink:function(e){var t={type:e};this.$store.dispatch("".concat(o["T"]),{communicationUrl:t})},logoutBtn:function(){this.logout(),this.closeProfileSheet()},routeTo:function(e,t){var i;switch(this.closeProfileSheet(),e){case"REWARD_STORE":e=r["a"].REWARDSTORE,i={lang:this.$route.params.lang};break;case"REDEMPTION":e=r["a"].REDEMPTION_HISTORY,i={tab:"REDEMPTION",lang:this.$route.params.lang};break;case"DEPOSIT":e=r["a"].FUNDS,i={tab:"deposit",lang:this.$route.params.lang};break;case"WITHDRAWAL":e=r["a"].FUNDS,i={tab:"withdrawal",lang:this.$route.params.lang};break;case"INSTANTREBATE":e=r["a"].REBATE,i={lang:this.$route.params.lang};break;case"TRANSFER_RECORD":e=r["a"].TRANSFER_HISTORY,i={tab:"TRANSFER",lang:this.$route.params.lang};break;case"BETTING_RECORD":e=r["a"].BETTING_HISTORY,i={tab:"TRANSFER",lang:this.$route.params.lang};break;case"TURNOVER_RECORD":e=r["a"].TURNOVER_RECORD,i={tab:"RUNNING",lang:this.$route.params.lang};break;case"BONUS":e=r["a"].BONUS_HISTORY,i={tab:"REBATE",lang:this.$route.params.lang};break;case"TRANSACTION":e=r["a"].TRANSACTION_HISTORY,i={tab:"DEPOSIT",lang:this.$route.params.lang};break;case"PERSONAL":e=r["a"].PERSONAL,i={lang:this.$route.params.lang};break;case"BANK_DETAIL":e=r["a"].BANK_ACCOUNT,i={lang:this.$route.params.lang};break;case"CHANGE_PASSWORD":e=r["a"].CHANGE_PASSWORD,i={lang:this.$route.params.lang};break;case"INBOX":e=r["a"].INBOX,i={lang:this.$route.params.lang};break;case"REFERRAL_SUMMARY":e=r["a"].REFERRAL_SUMMARY,i={lang:this.$route.params.lang};break;case"REFERRAL_BONUS":e=r["a"].REFERRAL_BONUS,i={lang:this.$route.params.lang};break;case"REWARDS":e=r["a"].REWARDS,i={lang:this.$route.params.lang};break;case"CLAIM_VOUCHER":e=r["a"].CLAIM_VOUCHER,i={lang:this.$route.params.lang};break;case"APPLY_AGENT":e=r["a"].APPLY_AGENT,i={lang:this.$route.params.lang};break;case"MWOF":e=r["a"].MWOF,i={lang:this.$route.params.lang};break;case"WOF":e=r["a"].WOF,i={lang:this.$route.params.lang};break;case"COIN_CARNIVAL":e=r["a"].GRAB_COIN,i={lang:this.$route.params.lang};break;case"CARD_MANIA":e=r["a"].CARD_MANIA,i={lang:this.$route.params.lang};break}void 0!=t&&t?"FACEBOOK"==e?this.getVipCommunicationLink(e):"WHATSAPP"==e?this.getVipCommunicationLink(e):"TELEGRAM"==e&&this.getVipCommunicationLink(e):this.$router.push({name:e,params:i})},downloadAPK:function(){l["f"].downloadAPK()},disabledCardMania:function(){return!this.configuration.card_mania||!this.configuration.card_mania.enabled}},watch:{memberWallet:function(){this.notLoading=!0},isLoggedIn:function(){this.isLoggedIn&&(this.getAffiliateBonusDetail(),this.getVipTierProgress(),this.getMemberDetail(),this.getVipProgress())},vipTierUpgrade:function(){if(null!=this.vipTierUpgrade){this.vipTierUpgrade.current_upgrade_deposit>0?this.currentProgressPercentage=Math.ceil(this.vipTierUpgrade.current_upgrade_deposit/this.vipTierUpgrade.required_upgrade_deposit*100):this.currentProgressPercentage=0;var e=Number(this.vipTierUpgrade.required_upgrade_deposit).toLocaleString();e=e.replace(/\.00$/,"");var t=Number(this.vipTierUpgrade.current_upgrade_deposit).toLocaleString();t=t.replace(/\.00$/,""),this.currentDeposit=t,this.requiredDeposit=e,this.progressRequired=this.vipTierUpgrade.required_upgrade_deposit-this.vipTierUpgrade.current_upgrade_deposit,this.progressRequired<=0?this.progressRequired="Completed":this.progressRequired=" ৳ "+Number(this.progressRequired).toLocaleString(),this.nextlevelname=this.vipTierUpgrade.vip_level_name.toLowerCase().replace(/^(.)(.*)$/,(function(e,t,i){return t.toUpperCase()+i.toLowerCase()})),this.turnoverRequired=this.vipTierUpgrade.required_upgrade_turnover-this.vipTierUpgrade.current_upgrade_turnover,this.turnoverRequired<=0?this.turnoverRequired="Completed":this.turnoverRequired=" ৳ "+Number(this.turnoverRequired).toLocaleString()}},memberVipTierProgress:function(){var e=this.$store.state.member.vipTierProgress;if(null!=e.pairing){var t=e.pairing;switch(this.showProgress=!0,t.level_sequence){case 0:this.tierColorThemeName="starter";break;case 1:this.tierColorThemeName="club";break;case 2:this.tierColorThemeName="diamond";break;case 3:this.tierColorThemeName="heart";break;case 4:this.tierColorThemeName="spade";break;case 5:this.tierColorThemeName="ace";break;case 6:this.tierColorThemeName="raja";break;default:this.tierColorThemeName="starter",this.tierBarBgColor="#1867c0"}this.tierBarBgColor="viptier"+this.tierColorThemeName,this.tierName=t.name.toLowerCase().replace(/^(.)(.*)$/,(function(e,t,i){return t.toUpperCase()+i.toLowerCase()})),this.currentLv=this.memberVipTierProgress.level_sequence,this.nextLv=this.memberVipTierProgress.level_sequence+1}else this.showProgress=!1},communicationLink:function(){this.$store.state.member.vipTierCommunication.success&&window.open(this.$store.state.member.vipTierCommunication.data)},configuration:function(){return this.$store.state.reward.configurationStatus}}},u=p,d=(i("7030"),i("2877")),h=i("6544"),g=i.n(h),f=i("8212"),v=i("4ca6"),b=i("288c"),C=i("62ad"),_=i("132d"),T=i("adda"),R=i("490a"),w=i("8e36"),$=i("0fd9"),k=i("8dd9"),A=i("2fa4"),S=Object(d["a"])(u,s,a,!1,null,null,null);t["a"]=S.exports;g()(S,{VAvatar:f["a"],VBadge:v["a"],VBottomSheet:b["a"],VCol:C["a"],VIcon:_["a"],VImg:T["a"],VProgressCircular:R["a"],VProgressLinear:w["a"],VRow:$["a"],VSheet:k["a"],VSpacer:A["a"]})},"5e46":function(e,t,i){},7030:function(e,t,i){"use strict";var s=i("5e46"),a=i.n(s);a.a}}]);
//# sourceMappingURL=app~1291d11b.9e668e7e.js.map