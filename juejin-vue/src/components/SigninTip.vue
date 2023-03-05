<template>
  <div class="signin-tip signin">
    <div class="first-line">
      <div class="icon-text">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20.9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z"
            fill="#FFCF8B"
          ></path>
          <rect x="5" y="12" width="3" height="2" rx="1" fill="#FF7D00"></rect>
          <rect
            x="10.5"
            y="12"
            width="3"
            height="2"
            rx="1"
            fill="#FF7D00"
          ></rect>
          <rect x="5" y="16" width="3" height="2" rx="1" fill="#FF7D00"></rect>
          <rect
            x="10.5"
            y="16"
            width="3"
            height="2"
            rx="1"
            fill="#FF7D00"
          ></rect>
          <rect x="16" y="12" width="3" height="2" rx="1" fill="#FF7D00"></rect>
          <rect x="16" y="16" width="3" height="2" rx="1" fill="#FF7D00"></rect>
        </svg>
        <span class="title">晚上好！</span>
      </div>
      <button class="signedin-btn">
        <span class="btn-text signed-text">已签到</span>
      </button>
    </div>
    <div class="second-line">
      你已经连续签到
      <span class="figure">20</span>
      天
    </div>
  </div>
</template>
<script></script>
<style>
.signin {
  
  height: 96px;
  margin-bottom: 16px;
}

.signin-tip {
  padding: 16px;
  background-color: #fff;
  box-sizing: border-box;
}
.signin-tip .first-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}
.signin-tip .icon-text {
      display: flex;
    }
.icon-text .icon {
      margin-right: 12px;
      margin-top: 2px;
    }
.title {
      margin-top: 2px;
      color: #1d2129;
      font-size: 18px;
      font-weight: 500;
}
.signedin-btn {
      background-color: #e8f3ff;
      border: 1px solid #e8f3ff;
      border-radius: 50px;
      height: 32px;
      padding:0;
}
.second-line {
    margin-bottom: 2px;
    margin-left: 36px;
    color: #4e5969;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
}
.second-line .figure {
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #1d7dfa;
    margin: 0 4px;
}
</style>
