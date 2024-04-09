<template>
    <footer class="footer">
        <div class="footer-content wrapper">
            <div class="footer-row-left">
            <div class="footer-row-left_link">
                <a href="/about-us.html">About Us <i class="icon-arrow-right-new"></i></a>
                <a href="/wholesale.html">Wholesale <i class="icon-arrow-right-new"></i></a>
                <a href="/contact-us.html">Contact Us <i class="icon-arrow-right-new"></i></a>
                <a href="/verify.html">Verify <i class="icon-arrow-right-new"></i></a>
            </div>
            <div class="subscribe">
                <p class="title">SUBSCRIBE</p>
                <p class="description">Subscribe to our newsletters to keep updated with the latest MAD EYES news. </p>
                <div class="input-group">
                <input type="text" name="subscribe" placeholder="Enter your email address.....">
                <button id="J_subscribe-btn">Subscribe</button>
                </div>
            </div>
            </div>
            <div class="footer-row-right">
            <ul class="follow-us">
                <li><a href="https://www.facebook.com/FunkyLands.Official/" target="_blank"><i class="icon-facebook"></i></a></li>
                <li><a href="https://twitter.com/FUNKYLANDS" target="_blank"><i class="icon-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/FunkyLands.Official/" target="_blank"><i class="icon-instagram"></i></a></li>
            </ul>
            <div class="footer-copy">
                Copyright © 2023 MAD EYES. All Rights Reserved.<a href="/privacy-policy.html">Privacy Policy</a>|<a href="/terms-conditions.html">Terms &amp; Conditions</a>
            </div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
/* footer */
.footer {
  color: #000;
  background-color: #000;
  background-attachment: fixed;
  text-align: left;
  padding: 92px 0 60px 0;
  position: relative;
  z-index: 2;
}
.footer-content{
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  color: #fff;
  flex-wrap: wrap;
}
.footer-content .footer-row-left{
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-content  .footer-row-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer-content .footer-row-left_link{
  width: 100%;
  margin-bottom: 4.1vw;
  cursor: pointer;
}
.footer-content .footer-row-left_link .icon-arrow-right-new{
  display: none;
}
.footer-content .footer-row-left_link a:hover{
  color: var(--hover-color);
}
.footer-content .footer-row-left_link a:last-of-type{
  color:#fff;
  margin-right: 0px;
}
.footer-content .footer-copy{
  display: inline-block;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  color:#bbbbbb;
  text-align: right;
}
.footer-content .footer-copy a{
  color:#bbbbbb;
}
.footer-content .footer-copy a:hover{
  color:var(--hover-color);
}
.footer-content .footer-copy a:first-of-type{
  margin-left: 32px;
  margin-right: 12px;
}
.footer-content .footer-copy a:last-of-type{
  margin-left: 12px;
}
.footer-content.subscribe {
  width: 100%;
  position: relative;
}
.footer-content .follow-us {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.footer-content .title {
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 8px;
}
.footer .input-group input {
  height: 40px;
  line-height: 40px;
  max-width: 320px;
  width: calc(100% - 140px);
  background-color: transparent;
  border: 1px solid #999;
  color: #777;
  padding: 0 16px;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}
.footer .input-group button {
  width: 120px;
  height: 40px;
  background-color: #fff;
  font-size: 14px;
  line-height: 40px;
  margin-left: 10px;
  color: #000;
}
.footer .input-group button:hover {
  background-color: var(--hover-color);
  color: #fff;
}
.footer .description {
  color: #bbbbbb;
  margin-bottom: 24px;
  font-size: 15px;
  line-height: 1.2;
}
.footer .follow-us li {
  margin-left: 40px;
}
.footer .follow-us a {
  width: 40px;
  line-height: 40px;
  height: 40px;
  display: block;
  border: 1px solid #fff;
  border-radius: 100%;
  font-size: 18px;
  text-align: center;
  color: #fff;
}
.footer .follow-us a:hover {
  color: var(--hover-color);
  border-color:  var(--hover-color);
}
.footer .footer-bottom {
  margin-top: 80px;
  color: #999;
  font-size: 16px;
  border-top: 1px solid #c8c8c8;
  padding: 24px 0;
}
.footer-privacybox {
  display: inline;
}
.footer-privacybox a {
  position: relative;
  color: #fff;
}
.footer-privacybox a:hover {
  color: var(--hover-color);
}
.footer-content .footer-row-left_link{
  display: inline-flex;
  justify-content: space-between;
  margin-right: 24px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 8px;
}
.footer-content .footer-row-left_link a{
  color:#fff;
  margin-right: 48px;
}

.footer-style-fix{
    position: fixed;
    width: 100%;
    bottom: 0;
}
</style>