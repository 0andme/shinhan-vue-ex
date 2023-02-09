<template>
  <ol class="list">
    <li v-for="(movie, i) in movies" :key="movie.name">
      <a href="">
        <h4 class="hide">{{ movie.name }}</h4>
        <!-- <span :class="'hide rate rate'+ movie.rate[0]"
            >{{movie.rate[1]}}</span
          > -->
        <span :class="['hide', 'rate', `rate${movie.rate[0]}`]">{{
          movie.rate[1]
        }}</span>
        <strong class="rank">{{ i + 1 }}</strong>
        <img
          class="poster"
          :src="require(`@/assets/${movie.src}`)"
          :alt="movie.name"
        />
        <!-- 예매순 -->
        <span v-if="movContext === 'ticketing'" class="desc">
          <i class="reserve_title">예매율</i>
          <em class="reserv_num">{{ movie.ticketing }}%</em>
        </span>
        <!-- 평점순 -->
        <span v-else-if="movContext === 'score'" class="desc">
          <i class="star"><b :style="{width: movie.score * 10 + '%'}"></b></i>
          <em class="score">{{ movie.score }}</em>
        </span>
        <!-- 개봉일순 -->
        <span v-else-if="movContext === 'openDate'" class="desc">
          <i class="open_title">{{ movie.openDate }}</i>
          <em class="open_num">개봉</em>
        </span>
        <!-- 주말관객순 -->
        <span v-else-if="movContext === 'week'" class="desc">
          <i class="week_title">주말관객수</i>
          <em class="week_num">{{ movie.week }}명</em>
        </span>
        <!-- 다운로드수 -->
        <span v-else-if="movContext === 'sale'" class="desc">
          <i class="sale_title">판매율</i>
          <em class="sale_num">{{ movie.sale }} %</em>
        </span>
      </a>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    movies: Array,
    movContext: String,
  },
};
</script>
