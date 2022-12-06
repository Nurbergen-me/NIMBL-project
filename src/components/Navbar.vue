<template>
  <div class="navbar">
    <img class="navbar_logo" src="@/assets/icons/logo.svg" alt="" />
    <div class="navbar_search">
      <input
        placeholder="Search Channels, Videos or NFTs"
        class="search"
        type="text"
      />
    </div>
    <div class="navbar_content">
      <div class="navbar_dropdown">
        <div class="name">Wallet</div>
        <img class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
      </div>
      <div class="navbar_dropdown">
        <div class="name">Wls</div>
        <img class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
      </div>
      <div class="navbar_dropdown">
        <div class="name">Airdrop</div>
        <img class="icon" src="@/assets/icons/arrow_down.svg" alt="" />
      </div>
      <div class="chat_wrap active">
        <img class="chat_icon icon" src="@/assets/icons/chat.svg" alt="" />
      </div>
      <img class="icon person_icon" src="@/assets/icons/profile.svg" alt="" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Navbar',
  mounted() {
  }
};
</script>
  
<style lang="scss" scoped>
.navbar {
  font-family: "Octosquares-Regular";
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  // backdrop-filter: blur(6px);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(13, 7, 7, 0.4) 100%
  );
  background-clip: padding-box; /* !importanté */
  border: solid 2px transparent;
  position: relative;
  padding: 0 32px 0 7px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    margin: -2px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(
      to right,
      rgba(3, 230, 243, 0.6),
      rgba(52, 118, 254, 0.6),
      rgba(191, 25, 224, 0.6)
    );
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #111a41;
  }
}
.navbar_logo {
  height: 63px;
}
.navbar_search {
  font-family: "Octosquares-Regular";
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.35);
  box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(23.5px);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    margin: -2px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(
      to right,
      rgba(3, 230, 243, 0.6),
      rgba(52, 118, 254, 0.6),
      rgba(191, 25, 224, 0.6)
    );
  }
}
.navbar_search::before {
  content: '';
  background: url("../assets/icons/search.svg") no-repeat center / contain;
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  left: 31px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.search {
  background: #0A0E20;
  padding-left: 80px;
  color: #ffffff;
  width: 660px;
  height: 52px;
  z-index: 2;
  font-weight: 400;
  font-size: 26px;
  line-height: 37px;
}
.search::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.navbar_content {
  display: flex;
  align-items: center;
}

.navbar_dropdown {
  display: flex;
  margin-right: 60px;
  cursor: pointer;
}
.name {
  text-transform: uppercase;
  font-family: "Octosquares-Bold";
  font-weight: 400;
  font-size: 20.5635px;
  color: rgba(255, 255, 255, 0.85);
  margin-right: 13px;
}
.chat {

  &_wrap {
    position: relative;
    margin-right: 47px;
    &.active {

      &:after {
        content: '';
        background: #F51380;
        border: 2.57044px solid rgba(17, 15, 15, 0.7);
        width: 11px;
        height: 11px;
        border-radius: 50%;
        position: absolute;
        display: block;
        top: -4px;
        right: -4px;
      }
    }
  }
}

@media (max-width: 2000px) {
  .navbar {
    height: 70px;
  }
  .search {
    height: 44px;
    line-height: 44px;
    font-size: 20px;
  }
  .navbar_search::before {
    width: 24px;
    height: 24px;
  }
  .navbar_dropdown {
    margin-right: 40px;
    .name {
      font-size: 18px;
    }
    img {
      width: 18px;
    }
  }
  .chat_wrap {
    margin-right: 20px;
    height: 30px;
  }
  .chat_icon {
    width: 30px;
  }
  .person_icon {
    width: 35px;
  }
}
@media (max-width: 1600px) {
  .navbar {
    height: 60px;
    &_logo {
      height: 50px;
    }
    &_search {

      &:before {
        left: 16px;
        width: 20px;
        height: 20px;
      }
    }
    .search {
      width: 550px;
      font-size: 16px;
      height: 38px;
      line-height: 40px;
      padding-left: 50px;
    }
  }
  .navbar_dropdown {
    margin-right: 36px;
    .name {
      font-size: 16px;
    }
    img {
      width: 16px;
    }
  }
}
</style>
  