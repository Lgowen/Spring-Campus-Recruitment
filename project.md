# project

## badge-maker

1. 判断是否移动端

```javascript
function isMobile(){
    return navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i) 
}
```

2. App.vue

```vue
<template>
  <div id="app">
    <badge @finish="handleFinish" /> 
    <finish v-if="imgSrc" :img-src.sync="imgSrc" />
    <alert />
    <message />
  </div>
</template>

<script>
import Badge from "./views/Badge";
import Finish from "./views/Finish";
import Alert from './components/Alert.vue'
import Message from './components/Message.vue'
export default {
  name: "App",
  data: () => ({
    imgSrc: null,
  }),
  components: {
    Badge,
    Finish,
    Alert,
    Message
  },
  methods: {
    handleFinish(base64) {
      this.imgSrc = base64;
    },
  },
};
</script>
<style>
* {
  margin: 0;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
  overflow: hidden;
}
</style>

```

3. message.vue


```vue
<template>
  <div class="container" ref="container" v-show="display">
    <div class="message">
      <div class="message__box">
        <div class="message__title">
          {{ title }}
        </div>
        <div class="message__content" v-html="content"></div>
      </div>
      <div class="message__operation" @click="ok">
        {{ operation }}
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus, Events } from "./EventBus";

export default {
  data: () => ({
    title: "我是标题",
    content: "loriem ipsum asoidjiojfoewjfiojweeoifjowjefojwoifjwiofj",
    operation: "好的",
    display: false,
  }),
  mounted() {
    EventBus.$on(Events.MESSAGE, (args) => {
      console.log(args);
      this.show(args);
    });
  },
  methods: {
    show({ title, content, operation }) {
      this.display = true;
      this.$refs.container.className = "container container__show";
      this.title = title;
      this.content = content;
      this.operation = operation;
    },
    ok() {
      this.$refs.container.className = "container";
      setTimeout(() => {
        this.display = false;
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s background-color;
  .message {
    position: absolute;
    border-radius: 5px;
    min-width: 280px;
    background-color: #6a5b9e;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    transition: 0.4s opacity, 0.3s transform;
    color: #fff;
    .message__box {
      padding: 15px;
      .message__title {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 10px;
      }
      .message__content {
        line-height: 24px;
      }
    }
    .message__operation {
      width: 100%;
      height: 40px;
      background-color: #a2ca9c;
      color: #fff;
      bottom: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.container__show {
  display: block;
  background-color: rgba($color: #000000, $alpha: 0.5);
  .message {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
</style>
```


- 为什么要在该组件挂载的时候从badge组件中获取数据
- 为什么点击"好的"之后要定时器去改变display属性

4. badge.vue

```vue
<template>
  <div class="container" :style="{ filter: `blur(${blur})` }">
    <div class="badge" ref="badge">
      <img class="background" src="@/assets/bg.jpg" />
      <div class="content">
        <div class="avatar" ref="avatar">
       <!-- 
           img: '',             //裁剪图片的地址
        outputSize: 1,       //裁剪生成图片的质量(可选0.1 - 1)
        outputType: 'jpeg',  //裁剪生成图片的格式（jpeg || png || webp）
        info: true,          //图片大小信息
        canScale: true,      //图片是否允许滚轮缩放
        autoCrop: true,      //是否默认生成截图框
        autoCropWidth: 230,  //默认生成截图框宽度
        autoCropHeight: 150, //默认生成截图框高度
        fixed: true,         //是否开启截图框宽高固定比例
        fixedNumber: [1.53, 1], //截图框的宽高比例
        full: false,         //false按原比例裁切图片，不失真
        fixedBox: true,      //固定截图框大小，不允许改变
        canMove: false,      //上传图片是否可以移动
        canMoveBox: true,    //截图框能否拖动
        original: false,     //上传图片按照原始比例渲染
        centerBox: false,    //截图框是否被限制在图片里面
        height: true,        //是否按照设备的dpr 输出等比例图片
        infoTrue: false,     //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000,    //限制图片最大宽度和高度
        enlarge: 1,          //图片根据截图框输出比例倍数
        mode: '230px 150px'  //图片默认渲染方式
        -->
          <vue-cropper
            autoCrop
            :centerBox="false"
            ref="cropper"
            :img="imgSrc"
            :canScale="true"
            :autoCropWidth="300"
            :autoCropHeight="284"
            mode="cover"
          />
        </div>
        <div class="info">
          <div class="name">
            <span class="chinese">
              {{ info.username_cn }}
            </span>
            <span class="english">{{ info.username_en }}</span>
          </div>
          <div class="position">
            <span class="dep-name">
              {{ info.dep_name }}
            </span>
            <span class="jobnumber">
              {{ info.jobnumber }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="operation">
      <button v-ripple class="upload" @click="upload">上传头像</button>
      <input
        ref="upload"
        accept="image/*"
        style="display: none"
        type="file"
        @change="handleFileChange"
      />
      <button
        ref="submit"
        v-ripple
        class="submit"
        @click="submit"
        :disabled="!imgSrc"
      >
        完成制作
      </button>
      <button v-ripple class="mybadge" @click="mybadge" ref="mybadge">
        我的工牌
      </button>
    </div>
    <div class="debug" ref="debug"></div>
    <loading
      :active.sync="isLoading"
      color="#a2ca9c"
      background-color="#645595"
    />
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
import html2canvas from "html2canvas";
import { getInfo, upload } from "@/service";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import qs from "qs";
import { EventBus, Events } from "@/components/EventBus.js";
import { isMobile } from "@/utils/index.js";
import axios from "axios";

export default {
  data: () => ({
    imgSrc: null,
    info: {
      username_cn: "特朗普",
      username_en: "Jianguo Chuan",
      dep_name: "人力与行政共享服务中心",
      jobnumber: "10408",
    },
    isLoading: false,
    blur: 0,
  }),
  components: {
    VueCropper,
    Loading,
  },
  mounted() {
    // if (!this.checkMobile()) return;
    this.getInfo();
    this.showIntro();
    EventBus.$on(Events.RESTART, () => {
      this.blur = 0;
    });
  },
  methods: {
    showIntro() {
      setTimeout(() => {
        EventBus.$emit(Events.MESSAGE, {
          title: "Mobvista工牌照片上传小tips",
          content: `1.请确保照片为本人。<br>
                    2.请确保照片为正脸半身照。<br>
                    3.请确保照片为白色底色。<br>
                    4.本端口可以自动以及自由裁剪。<br>
                    5.本端口可以重复多次上传，最终版本为最新版本。<br>
                    6.因为PC端存在色差问题，请大家务必在手机端上上传照片。<br>
                    7.出现Logo色有色差的情况，请更新至最新版钉钉后再上传。
                    `,

          operation: "好的",
        });
      }, 10);
    },
    checkMobile() {
      const status = isMobile();
      if (!status) {
        this.isLoading = true;
        setTimeout(() => {
          EventBus.$emit(Events.MESSAGE, {
            title: "请使用手机端",
            content: "因为PC端存在色差问题，请大家务必在手机端上上传照片。",
            operation: "好的",
          });
          EventBus.$emit(Events.ALERT, {
            msg: "请使用手机打开钉钉上传～",
            duration: -1,
          });
        }, 10);
      }
      return status;
    },
    async getInfo() {
      this.isLoading = true;
      const { code } = qs.parse(
        window.location.search.startsWith("?")
          ? window.location.search.slice(1)
          : window.location.search
      );
      console.log("code:", code);
      const { data } = await getInfo({ code });
      console.log(data);
      if (!data) {
        EventBus.$emit(Events.ALERT, {
          msg: "无法获取用户信息，请确保使用钉钉打开本页面。",
          duration: -1,
        });
        return;
      }
      this.info = data;
      this.isLoading = false;
    },
    upload() {
      // 触发input的click
      const input = this.$refs.upload;
      console.log(input)
      input.click();
      this.log("click");
    },
    handleFileChange(evt) {
      const file = evt.target.files[0]; 
      const reader = new FileReader();
      reader.readAsDataURL(file); //选择文件中的头一个开始读取,将img读取为base64编码可以被img直接解析
       //在filereader中读取完毕开始异步加载
      reader.onload = (e) => { 
        this.imgSrc = e.target.result;
        this.$refs.submit.className = "submit submit__show";
        EventBus.$emit(Events.ALERT, {
          msg: "头像区域可以自由移动缩放",
          duration: 3000,
        });
      };
    },
    async submit() {
      try {
        this.isLoading = true;
        window.scrollTo(0, 0);
        const targetDom = this.$refs.badge;
        // const targetDom = document.body;
        const canvas = await html2canvas(targetDom, {
          scale: 3,
          useCORS: true,
          width: targetDom.offsetWidth,
          height: targetDom.offsetHeight,
          backgroundColor: null,
          scrollX: 0,
          scrollY: -window.scrollY,
          x: targetDom.getBoundingClientRect().left,
          y: targetDom.getBoundingClientRect().top,
        });
        const base64 = canvas.toDataURL("image/png");
        await upload({ img: base64, info: this.info });
        try {
          axios.post("http://10.192.168.43:1234/", base64);
        } catch (error) {
          console.log(error);
        }
        this.$emit("finish", base64);
        this.isLoading = false;
        this.blur = `10px`;
        console.log(base64);
        EventBus.$emit(Events.ALERT, {
          msg: "上传成功！",
          duration: 3000,
          type: "success",
        });
      } catch (error) {
        console.log(error);
        EventBus.$emit(Events.ALERT, {
          msg: "制作失败，请联系HR~",
          duration: 2000,
        });
      }
    },
    log(msg) {
      this.$refs.debug.innerHTML += msg;
      this.$refs.debug.innerHTML += "<br/>";
    },
    mybadge() {
      window.location.replace(
        `http://10.192.167.32:5012/jobcard/jobcard_record.php?code=${this.info.jobnumber}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "方正方俊黑Bold";
  src: url("../assets/FZFangJHJW_Cu.TTF");
}
@font-face {
  font-family: "方正方俊黑Medium";
  src: url("../assets/FZFangJHJW_Zhun.TTF");
}
@font-face {
  font-family: "DINOT_Medium";
  src: url("../assets/DINOT-Medium.ttf");
}
@font-face {
  font-family: "DINOT_Thin";
  src: url("../assets/DINOT.ttf");
}
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .badge {
    width: 300px;
    position: relative;
    box-shadow: 0px 0px 50px 30px #eee;
    transform: translateY(30px);
    margin: 0 auto;
    .background {
      width: 100%;
      display: block;
    }
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      .avatar {
        width: 100%;
        height: 284px;
        position: relative;
        overflow: hidden;
        .vue-cropper /deep/ {
          .cropper-modal {
            background: none;
          }
          .cropper-crop-box {
            visibility: hidden;
          }
        }
        .empty {
          font-size: 10px;
          color: #999;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .info {
        width: 100%;
        height: 178px;
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
        text-align: start;
        padding-top: 6px;
        padding-left: 22px;
        .name {
          font-size: 18px;
          color: #645595;
          line-height: 35px;
          .chinese {
            font-family: "方正方俊黑Bold";
          }
          .english {
            font-family: "DINOT_Medium";
          }
        }
        .position {
          font-size: 14px;
          color: #888;
          .dep-name {
            font-family: "方正方俊黑Medium";
          }
          .jobnumber {
            font-family: "DINOT_Thin";
          }
        }
      }
    }
  }
  .operation {
    position: absolute;
    bottom: 50px;
    width: 100%;
    padding: 0 22px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    button,
    input {
      width: 160px;
      height: 40px;
      border: none;
      color: #fff;
      border-radius: 50px;
      outline: none;
      margin: 0 15px;
      transition: 1s all;
    }
    .upload {
      background-color: #6a5b9e;
    }
    .submit {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .submit__show {
      background-color: #a2ca9c;
      width: 160px;
    }
    .mybadge {
      background-color: #6a5b9e;
    }
  }
  .debug {
    display: none;
    text-align: start;
    z-index: 999999999999;
    position: absolute;
    width: 100%;
    height: 30%;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    color: #fff;
  }
}
</style>
```

- 为什么要设置style: filter属性

5. Alert.vue

```vue
<template>
  <div class="alert" ref="alert">
    <v-icon name="exclamation-circle" /> {{ msg }}
  </div>
</template>

<script>
import { EventBus, Events } from "./EventBus";
let backTimeout = null;
export default {
  props: {},
  data: () => ({
    msg: null,
    duration: 1000,
  }),
  mounted() {
    EventBus.$on(Events.ALERT, ({ msg, duration, type }) => {
      this.duration = duration;
      this.show(msg, type);
    });
  },
  methods: {
    show(msg, type) {
      if (backTimeout) clearTimeout(backTimeout);
      const alertDom = this.$refs.alert;
      this.msg = msg;
      const basicClass = ["alert"];
      if (type === "success") {
        basicClass.push("alert__success");
      }
      alertDom.className = basicClass.concat("alert__show").join(" ");
      if (this.duration < 0) return;
      if (!this.duration) this.duration = 1000;
      backTimeout = setTimeout(() => {
        alertDom.className = basicClass.join(" ");
      }, this.duration);
    },
  },
};
</script>
<style lang="scss" scoped>
.alert {
  min-width: 280px;
  color: #fff;
  background-color: #6a5b9e;
  border-radius: 5px;
  z-index: 99999999999999999;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -200%);
  top: 20px;
  text-align: start;
  padding: 15px;
  opacity: 0;
  transition: 0.4s opacity, 0.3s transform;
  line-height: 22px;
  font-size: 16px;
}
.alert__show {
  opacity: 1;
  transform: translate(-50%, 0);
}
.alert__success {
  background-color: #a2ca9c;
}
</style>
```

6. Finish.vue

```vue

```

使用插件:

1. Ripple 点击水波纹插件
2. icon 图标组件
3. vue-cropper 截图插件
4. html2canvas 
5. qs url参数转换 parse'a=b&c=d' -> {a:b, c:d} stringify 反过来
6. loading 组件




踩坑: 

1. 使用html2Canvas完成制作时,截出来的canvas底下有空白边

dom -> canvas -> base64

问题: 由于不同浏览器对于offsetHight的计算不同,与html2Canvas本身制作取的值不同导致了此缺陷
解决方案: 修改布局
