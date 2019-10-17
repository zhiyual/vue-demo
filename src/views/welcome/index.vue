<template>
  <div class="container">
    <span @click="$router.push({ name: 'skybox' })">12</span>
  </div>
</template>

<script>
import dotLine from '../../utils/dotline'
export default {
  data () {
    return {
      dl: null
    }
  },
  mounted () {
    if (!this.dl) {
      this.dl = new dotLine({
        el: '#box'
      })

      this.dl.start()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:#35a541;
  margin: 0;
  padding: 0;
  & > span {
    cursor: pointer;
    padding: 100px 0;
    font-size: 380px;
    color: #ffffff;
    text-shadow:  1px 1px rgba(34, 107, 42, 0.7), 2px 2px rgba(34, 108, 42, 0.703), 3px 3px rgba(34, 109, 42, 0.706), 4px 4px rgba(35, 110, 43, 0.709), 5px 5px rgba(35, 111, 43, 0.712), 6px 6px rgba(35, 112, 44, 0.715), 7px 7px rgba(36, 113, 44, 0.718), 8px 8px rgba(36, 114, 44, 0.721), 9px 9px rgba(36, 115, 45, 0.724), 10px 10px rgba(36, 116, 45, 0.727), 11px 11px rgba(37, 116, 45, 0.73), 12px 12px rgba(37, 117, 46, 0.733), 13px 13px rgba(37, 118, 46, 0.736), 14px 14px rgba(38, 119, 46, 0.739), 15px 15px rgba(38, 120, 47, 0.742), 16px 16px rgba(38, 121, 47, 0.745), 17px 17px rgba(38, 122, 48, 0.748), 18px 18px rgba(39, 122, 48, 0.751), 19px 19px rgba(39, 123, 48, 0.754), 20px 20px rgba(39, 124, 48, 0.757), 21px 21px rgba(40, 125, 49, 0.76), 22px 22px rgba(40, 126, 49, 0.763), 23px 23px rgba(40, 126, 49, 0.766), 24px 24px rgba(40, 127, 50, 0.769), 25px 25px rgba(41, 128, 50, 0.772), 26px 26px rgba(41, 129, 50, 0.775), 27px 27px rgba(41, 129, 51, 0.778), 28px 28px rgba(41, 130, 51, 0.781), 29px 29px rgba(41, 131, 51, 0.784), 30px 30px rgba(42, 132, 51, 0.787), 31px 31px rgba(42, 132, 52, 0.79), 32px 32px rgba(42, 133, 52, 0.793), 33px 33px rgba(42, 134, 52, 0.796), 34px 34px rgba(43, 134, 52, 0.799), 35px 35px rgba(43, 135, 53, 0.802), 36px 36px rgba(43, 136, 53, 0.805), 37px 37px rgba(43, 136, 53, 0.808), 38px 38px rgba(43, 137, 53, 0.811), 39px 39px rgba(44, 137, 54, 0.814), 40px 40px rgba(44, 138, 54, 0.817), 41px 41px rgba(44, 139, 54, 0.82), 42px 42px rgba(44, 139, 54, 0.823), 43px 43px rgba(44, 140, 55, 0.826), 44px 44px rgba(45, 140, 55, 0.829), 45px 45px rgba(45, 141, 55, 0.832), 46px 46px rgba(45, 141, 55, 0.835), 47px 47px rgba(45, 142, 56, 0.838), 48px 48px rgba(45, 143, 56, 0.841), 49px 49px rgba(46, 143, 56, 0.844), 50px 50px rgba(46, 144, 56, 0.847), 51px 51px rgba(46, 144, 56, 0.85), 52px 52px rgba(46, 145, 57, 0.853), 53px 53px rgba(46, 145, 57, 0.856), 54px 54px rgba(46, 146, 57, 0.859), 55px 55px rgba(47, 146, 57, 0.862), 56px 56px rgba(47, 147, 57, 0.865), 57px 57px rgba(47, 147, 58, 0.868), 58px 58px rgba(47, 148, 58, 0.871), 59px 59px rgba(47, 148, 58, 0.874), 60px 60px rgba(47, 149, 58, 0.877), 61px 61px rgba(47, 149, 58, 0.88), 62px 62px rgba(48, 150, 59, 0.883), 63px 63px rgba(48, 150, 59, 0.886), 64px 64px rgba(48, 151, 59, 0.889), 65px 65px rgba(48, 151, 59, 0.892), 66px 66px rgba(48, 151, 59, 0.895), 67px 67px rgba(48, 152, 60, 0.898), 68px 68px rgba(49, 152, 60, 0.901), 69px 69px rgba(49, 153, 60, 0.904), 70px 70px rgba(49, 153, 60, 0.907), 71px 71px rgba(49, 154, 60, 0.91), 72px 72px rgba(49, 154, 60, 0.913), 73px 73px rgba(49, 154, 61, 0.916), 74px 74px rgba(49, 155, 61, 0.919), 75px 75px rgba(49, 155, 61, 0.922), 76px 76px rgba(50, 156, 61, 0.925), 77px 77px rgba(50, 156, 61, 0.928), 78px 78px rgba(50, 156, 61, 0.931), 79px 79px rgba(50, 157, 61, 0.934), 80px 80px rgba(50, 157, 62, 0.937), 81px 81px rgba(50, 158, 62, 0.94), 82px 82px rgba(50, 158, 62, 0.943), 83px 83px rgba(50, 158, 62, 0.946), 84px 84px rgba(51, 159, 62, 0.949), 85px 85px rgba(51, 159, 62, 0.952), 86px 86px rgba(51, 159, 63, 0.955), 87px 87px rgba(51, 160, 63, 0.958), 88px 88px rgba(51, 160, 63, 0.961), 89px 89px rgba(51, 161, 63, 0.964), 90px 90px rgba(51, 161, 63, 0.967), 91px 91px rgba(51, 161, 63, 0.97), 92px 92px rgba(52, 162, 63, 0.973), 93px 93px rgba(52, 162, 63, 0.976), 94px 94px rgba(52, 162, 64, 0.979), 95px 95px rgba(52, 163, 64, 0.982), 96px 96px rgba(52, 163, 64, 0.985), 97px 97px rgba(52, 163, 64, 0.988), 98px 98px rgba(52, 164, 64, 0.991), 99px 99px rgba(52, 164, 64, 0.994), 100px 100px rgba(52, 164, 64, 0.997);
  }
}
</style>