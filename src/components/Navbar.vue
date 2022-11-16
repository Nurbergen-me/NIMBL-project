<template>
    <div class="navbar">
      <img class="navbar_logo" src="@/assets/icons/logo.svg" alt="">
      <div class="navbar_search">
        <input placeholder="Search Channels, Videos or NFTs" class="search" type="text">
      </div>
      <div class="navbar_content">
        <div class="navbar_dropdown" v-for="item in 3" :key="item">
          <div class="name">Wallet</div>
          <img class="icon" src="@/assets/icons/arrow_down.svg" alt="">
        </div>
        <img class="chat icon" src="@/assets/icons/chat.svg" alt="">
        <img class="icon" src="@/assets/icons/profile.svg" alt="">
      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  
  .navbar {
    font-family: "Octosquares-Regular";
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 83px;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .navbar_logo {
    margin-right: 657px;
  }
  .navbar_search {
    position: relative;
    margin-right: 91px;
  }
  .navbar_search::before {
    content: url('../assets/icons/search.svg');
    position: absolute;
    margin-top: 9px;
    margin-left: 8px;
  }
  .search {
    font-family: "Octosquares-Regular";
    padding-left: 50px;
    color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.35);
  
    background: rgba(0, 0, 0, 0.35);
    box-shadow: inset 4px 4px 27px rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(23.5px);
    width: 810px;
    height: 52px;
    
    font-weight: 400;
    font-size: 26px;
    line-height: 37px;
  }
  .search::placeholder {
    padding-top: 20px;
    padding-left: 5px;
    font-weight: 400;
    font-size: 26px;
    line-height: 37px;
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
    margin-right: 47px;
  }
  </style>
  