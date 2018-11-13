<template>
    <div class="cart">
        <div class="title">
            我的购物车
        </div>
        <ul class="title-bar">
            <li class="label">
                <label></label>
                <span>全选</span>
            </li>
            <li class="info">商品信息</li>
            <li>单价</li>
            <li>数量</li>
            <li>金额</li>
            <li>操作</li>
        </ul>
        <ul class="goods">
            <li v-for="n in 8" :key="n">
                <div class="label">
                    <label></label>
                </div>
                <div class="img">
                    <img src="">
                </div>
                <div class="info">
                    【旗舰店】雀巢咖啡1+2微研磨原味三合一速溶咖啡粉100条*15g
                </div>
                <div class="price">￥110.00</div>
                <div class="count">
                    <span class="minus">-</span>
                    <input type="text">
                    <span class="plus">+</span>
                </div>
                <div class="total">￥220.00</div>
                <div class="action">
                    <span>删除</span>
                </div>
            </li>
        </ul>
        <ul class="action-bar">
            <li class="label">
                <label></label>
                <span>全选</span>
            </li>
            <li class="info">商品信息</li>
            <li>单价</li>
            <li>数量</li>
            <li>金额</li>
            <li>操作</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Cart',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforedestroy() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.cart {
  width: 800px;
  margin: 0 auto;
  > .title {
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    padding-left: 20px;
    margin: 10px 0;
    color: #f10215;
    cursor: default;
    user-select: none;
  }
  > .title-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    user-select: none;
    cursor: default;
    height: 30px;
    margin-bottom: 10px;
    > li {
      width: 100px;
      font-size: 12px;
      &.label {
        width: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        > label {
          background: #fff;
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 2px;
          margin-right: 4px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          &::after {
            content: '';
            display: block;
            width: 10px;
            height: 5px;
            border-left: 2px solid #f10215;
            border-bottom: 2px solid #f10215;
            transform: rotateZ(-50deg) translateX(-1px) translateY(2px);
          }
        }
        > span {
          font-size: 12px;
        }
      }
      &.info {
        flex-grow: 1;
      }
    }
  }
  > .goods {
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    > li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 0;
      > div {
        width: 100px;
        font-size: 12px;
        &.label {
          width: 30px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          cursor: pointer;
          > label {
            background: #fff;
            display: block;
            width: 14px;
            height: 14px;
            border-radius: 2px;
            margin-right: 2px;
            border: 1px solid rgba(0, 0, 0, 0.15);
            &::after {
              content: '';
              display: block;
              width: 10px;
              height: 5px;
              border-left: 2px solid #f10215;
              border-bottom: 2px solid #f10215;
              transform: rotateZ(-50deg) translateX(-1px) translateY(2px);
            }
          }
          > span {
            font-size: 12px;
          }
        }
        &.img {
          width: 80px;
          height: 80px;
          > img {
            width: 80px;
            height: 80px;
          }
        }
        &.info {
          flex-grow: 1;
          padding: 0 20px 0 5px;
        }
        &.price {
          font-weight: 700;
          cursor: default;
        }
        &.count {
          font-weight: 700;
          cursor: default;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          > span {
            display: flex;
            justify-content: center;
            align-content: center;
            width: 24px;
            height: 24px;
            font-size: 14px;
            background: rgba(0, 0, 0, 0.05);
            cursor: pointer;
            border-radius: 2px;
            border: 1px solid transparent;
            user-select: none;
            &:hover {
              color: #f10215;
              border-color: #f10215;
            }
          }
          > input {
            display: block;
            width: 35px;
            text-align: center;
            font-size: 12px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 2px;
            margin: 0 1px;
            cursor: default;
            &:focus {
              outline: none;
            }
          }
        }
        &.total {
          color: #f10215;
          font-weight: 700;
          cursor: default;
        }
        &.action {
          > span {
            font-size: 12px;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  > .action-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 0 30px 20px;
    user-select: none;
    cursor: default;
    height: 30px;
    background: rgba(0, 0, 0, 0.05);
    margin: 10px 0 20px 0;
    > li {
      width: 100px;
      font-size: 12px;
      &.label {
        width: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        > label {
          background: #fff;
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 2px;
          margin-right: 4px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          &::after {
            content: '';
            display: block;
            width: 10px;
            height: 5px;
            border-left: 2px solid #f10215;
            border-bottom: 2px solid #f10215;
            transform: rotateZ(-50deg) translateX(-1px) translateY(2px);
          }
        }
        > span {
          font-size: 12px;
        }
      }
      &.info {
        flex-grow: 1;
      }
    }
  }
}
</style>