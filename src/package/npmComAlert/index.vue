<template>
  <div class="npm-com-alert" :class="className" v-show="visible">
    <div class="mask">
      <div class="box">
        <div class="close" v-if="closable" @click="visible=!visible">
          <img src="./assets/icon-close.png" alt="">
        </div>
        <div class="title" v-if="title" v-html="title"></div>
        <div class="text" v-if="text" v-html="text"></div>
        <div class="btn" v-if="btnTitle">
          <span class="btnTitle" @click="btnClick" v-text="btnTitle"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      className: '', // 自定义的样式类
      visible: false, // 控制显隐
      title: '', // 标题，可传HTML
      text: '', // 提示文字，可传HTML
      btnTitle: '', // 按钮文字，可选
      closable: true, // 是否可关闭，默认可关闭
      resolve: null,
    };
  },
  methods: {
    async show ({className = '', title = '', text = '', btnTitle = '', closable = true} = {}) {
      return new Promise((resolve) => {
        if (this.visible) {
          this.visible = false;
        }
        // 元素赋值
        this.className = className,
        this.title = title;
        this.text = text;
        this.btnTitle = btnTitle;
        this.closable = closable;
  
        this.visible = true;
        this.resolve = resolve;
      })
    },
    btnClick () {
      this.visible = false;

      // 清空内容
      this.className = '';
      this.title = '';
      this.text = '';
      this.btnTitle = '';

      // 执行回调
      if (this.resolve) {
        this.resolve(true);
        this.resolve = null;
      }
    },
    async alert (options) {
      if (options === false) {
        this.visible = false;
      } else {
        return await this.show(options);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.npm-com-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  .mask {
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .box {
      position: relative;
      width: 275px;
      box-shadow: 0 0 1px 0 #CCC;
      background: #FFF;
      box-sizing: border-box;
      border-radius: 5px;

      .close {
        position: absolute;
        right: 0;
        top: -43px;

        img {
          width: 25px;
          height: 43px;
          display: block;
        }
      }

      .title {
        font-size: 20px;
        font-weight: bold;
        line-height: 1.4;
        margin: 32px 26px;
        text-align: center;
      }

      .text {
        font-size: 15px;
        line-height: 1.4;
        margin: 32px 26px;
        color: #666;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        img {
          width: 180px;
          height: 180px;
          display: block;
          margin-bottom: 30px;
        }
      }

      .btn {
        font-size: 16px;
        margin: 24px;
        display: flex;
        text-align: center;

        .btnTitle {
          border-radius: 2px;
          flex: 1;
          padding: 14px 12px;
          background: #FF811E;
          color: #FFF;
        }
      }
    }
  }
}
</style>
