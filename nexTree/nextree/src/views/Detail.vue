<template>
  <div>
    <!-- content begin -->
    <div class="no-bottom no-top" id="content">
      <div id="top"></div>

      <!-- section begin -->
      <section
        id="subheader"
        class="text-light"
        data-bgimage="url(images/background/subheader.jpg) top"
      >
        <div class="center-y relative text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center"></div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- section close -->

      <!-- section begin -->
      <section aria-label="section" class="mt90 sm-mt-0">
        <div class="detail">
          <div class="product">
            <div class="product-photo">
              <img src="@/assets/artist/img_5.jpg" />
              <img src="@/assets/artist/img_5.jpg" />
            </div>
            <div class="product-detail">
              <h1 class="product__title">김석기 30x30</h1>
              <h2 class="product__title2">2018-07-31</h2>
              <div class="item_info_counts">
                <div class="item_info_type"><i class="fa fa-image"></i>Art</div>
                <div class="item_info_like"><i class="fa fa-heart"></i>153</div>
              </div>
              <div class="product__subtitle">
                무엇을 어떻게 그릴 것인가 고뇌하고, 자연을 관찰하고, 그 속에
                숨어있는 신비와 섭리를 터득하고, 독특한 기법을 창출하고자 엉뚱한
                시도도 하면서 많은 세월을 보냈습니다. 수묵의 향기를 은은하게
                풍겨주는 오방산수의 나무 한 그루를 센 강가에 심고
                싶었습니다.동양과 서양을 함께 아울러 줄 향기 넘치는 나무,
                오방산수(SOOMUKHWA – COREE)를 말이다.
              </div>

              <h6>Creator</h6>
              <div class="item_author">
                <div class="author_list_pp">
                  <img
                    class="lazy"
                    src="http://www.hsnews.co.kr/news/photo/201607/76136_40567_1255.jpg"
                    alt=""
                  />
                  <i class="fa fa-check"></i>
                </div>
                <div class="author_list_info">KIM SEOK KI</div>

                <a class="product__button" href="/artist">
                  <span>back</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../css/detail/style.scss";
</style>
