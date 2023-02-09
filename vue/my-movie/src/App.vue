<template>
  <div class="movie">
    <ul ref="tab" @click.prevent="setContext($event)" class="tab">
      <li
        :data-cate="cate.val"
        v-for="(cate, i) in cateList"
        :class="{on: movContext === cate.val}"
        :key="i"
      >
        <a href=""> {{ cate.name }}</a>
      </li>
    </ul>
    <!-- 영화 리스트 -->
    <movie-list :movies="movies" :mov-context="movContext"></movie-list>
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";
export default {
  components: {MovieList},
  data() {
    return {
      // listCate: {
      //   예매순: "ticketing",
      //   평점순: "score",
      //   개봉일순: "openDate",
      //   주말관객순: "week",
      //   다운로드순: "sale",
      // },
      cateList: [
        {name: "예매순", val: "ticketing"},
        {name: "평점순", val: "score"},
        {name: "개봉일순", val: "openDate"},
        {name: "주말관객순", val: "week"},
        {name: "다운로드순", val: "sale"},
      ],
      movContext: "ticketing",
      rateMach: {
        0: "전체관람가",
        12: "12세이상 관람가",
        15: "15세이상 관람가",
        19: "19세이상 관람가",
        20: "청소년관람불가",
      },
      movies: [
        {
          name: "남애의 여름밤",
          src: "images/mov_1.jpg",
          rate: 15,
          score: 9.43, //평점
          sale: 11.7, //판매율
          openDate: 8.26, //개봉일
          ticketing: 11.79, //예매율
          week: 8777, //주말관객
        },
        {
          name: "시크릿 가든",
          src: "images/mov_2.jpg",
          rate: 0,
          score: 8.13,
          sale: 7.7, //판매율
          openDate: 9.3, //개봉일
          ticketing: 20.66,
          week: 2000,
        },
        {
          name: "반도",
          src: "images/mov_3.jpg",
          rate: 15,
          score: 8.54,
          sale: 7.7,
          openDate: 9.3,
          ticketing: 9.79,
          week: 23327,
        },
        {
          name: "강철비2",
          src: "images/mov_4.jpg",
          rate: 19,
          score: 7.43,
          sale: 7.7,
          openDate: 9.7,
          ticketing: 8.6,
          week: 23421,
        },
        {
          name: "신혼여행 허리케인",
          src: "images/mov_5.jpg",
          rate: 12,
          score: 6.2,
          sale: 10.7,
          openDate: 8.17,
          ticketing: 2.11,
          week: 3213,
        },
        {
          name: "테넷",
          src: "images/mov_6.jpg",
          rate: 19,
          score: 7.12,
          sale: 9.11,
          openDate: 11.17,
          ticketing: 3.21,
          week: 3213,
        },
        {
          name: "오케이 마담",
          src: "images/mov_7.jpg",
          rate: 20,
          score: 9.43,
          sale: 9.11,
          openDate: 9.1,
          ticketing: 3.79,
          week: 2277,
        },
        {
          name: "다만 악에서 구하소서",
          src: "images/mov_8.jpg",
          rate: 20,
          score: 8.9,
          sale: 8.8,
          openDate: 8.21,
          ticketing: 12.79,
          week: 83777,
        },
      ],
    };
  },

  watch: {
    movContext(newCxt, oldXct) {
      // 바뀐 탭에 따라 소팅하기
      this.setOrder(newCxt);
    },
  },
  mounted() {
    // rate 데이터 손 보기
    this.movies = this.movies.map((movie) => ({
      ...movie,
      rate: [movie.rate, this.rateMach[movie.rate]],
    }));
    // 시작 시 소팅하기
    this.setOrder(this.movContext);
  },
  methods: {
    setOrder(cxt) {
      this.movies.sort((movieA, movieB) => movieB[cxt] - movieA[cxt]);
    },
    setContext(event) {
      if (event.target.tagName === "A") {
        this.movContext = event.target.parentNode.dataset.cate;
      }
    },
  },
};
</script>

<style>
@charset 'utf-8';

/* reset */
body {
  font: normal 12px Arial, sans-serif;
  line-height: 1.3;
  color: #666666;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1em;
}
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
dl,
dt,
dd,
ul,
ol,
li,
form,
fieldset,
blockquote,
address,
table,
thead,
tbody,
tfoot,
tr,
td,
caption {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}

/* movie */
body {
  background-color: #242424;
}
.movie {
  width: 590px;
  margin: 30px auto 0;
  padding: 10px;
  background-color: #242424;
  overflow: hidden;
}
.movie > ol > li {
  float: left;
  width: 125px;
  height: 204px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.movie > ol > li a {
  display: block;
  position: relative;
}
.movie > ol > li .hide {
  font-size: 0;
}
.movie > ol > li .rank {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 24px;
  font-style: italic;
  color: white;
  text-shadow: 0 0 10px black;
}
.movie > ol > li .rate {
  position: absolute;
  top: 5px;
  right: 5px;
  content: "";
  width: 25px;
  height: 25px;
  display: block;
  background-image: url("./assets/images/icon_rate.png");
  background-repeat: no-repeat;
}
.movie > ol > li .rate15 {
  background-position: 0 -60px;
}
.movie > ol > li .rate12 {
  background-position: 0 -30px;
}
.movie > ol > li .rate00 {
  background-position: 0 0;
}
.movie > ol > li .rate19 {
  background-position: 0 -120px;
}
.movie > ol > li .rate20 {
  background-position: 0 -90px;
}
.movie > ol > li .poster {
  display: block;
}
.movie > ol > li .desc {
  position: relative;
  background-color: black;
  display: block;
  height: 25px;
}
.movie > ol > li i {
  float: left;
  margin: 5px 0 0 10px;
  font-style: normal;
}
.movie > ol > li em {
  float: right;
  margin: 5px 5px 0 0;
  font-weight: bold;
  font-style: normal;
}
.movie > ol > li i.star {
  width: 71px;
  height: 14px;
  background: url("./assets/images/icon_star.png") no-repeat 0 0/71px auto;
}
.movie > ol > li i.star > b {
  display: block;
  width: 0;
  height: 100%;
  background: url("./assets/images/icon_star.png") no-repeat 0 -15px/71px auto;
}
.movie > ol > li i.reserv_title {
  font-weight: bold;
}
.movie > ol > li em.reserv_num {
  color: red;
}
.movie > ol > li i.open_title {
  position: absolute;
  right: 35px;
  font-weight: bold;
  color: red;
}
.movie > ol > li em.open_num {
  font-weight: bold;
}
.movie > ol > li i.week_title {
  font-weight: bold;
}
.movie > ol > li em.week_num {
  color: red;
}
.movie > ol > li i.sale_title {
  font-weight: bold;
}
.movie > ol > li em.sale_num {
  color: red;
}

.movie > .tab {
  text-align: center;
  font-size: 16px;
}
.movie > .tab > li {
  display: inline-block;
  margin: 0 20px;
}
.movie > .tab > li.on a {
  color: red;
}
</style>
