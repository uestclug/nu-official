<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 4 : 1"
          class="rounded-lg transition-swing mt-6"
          outlined
        >
          <v-card-title class="color-primary font-weight-bold">
            # WE NEED YOU
          </v-card-title>
          <v-card-text>
            我们是成立{{ existYear }}年的学生组织，历经变迁，现隶属于信息中心，
            参与校内网络基础设施维护工作，提供开源软件镜像等诸多服务。
          </v-card-text>
          <v-card-title>
            ## 我们要做的事
          </v-card-title>
          <v-card-text>
            1. 向校内外提供开源软件镜像、在线文档、IP 电视等服务；<br/>
            2. 维护两校区学生宿舍区的网络基础设施。
          </v-card-text>
          <v-card-title>
            ## 为何要加入我们
          </v-card-title>
          <v-card-text>
            办公处所位置便利，电力与网络顺畅稳定；<br/>
            内部藏书种类繁多，团建活动定期举办；<br/>
            够用的服务器资源，助你实现天才想法；<br/>
            零距离接触生产环境网络设备的有趣经验；<br/>
            勤工助学有偿服务机会。
          </v-card-text>
          <v-card-title>
            ## 招新方向
          </v-card-title>
          <v-card-text>
            <p>我们面向<strong>电子科技大学的全体学生</strong>招新，包括以下四个方向：</p>
            <v-chip label color="primary" class="mr-2">网络</v-chip>
            <v-chip label color="primary" class="mr-2">前端</v-chip>
            <v-chip label color="primary" class="mr-2">后端</v-chip>
            <v-chip label color="primary" class="mr-2">文宣</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="primary"
              :disabled="submitResumeLink == ''"
              @click="$Utils.openExternalLink(submitResumeLink)"
            >
              投递简历
            </v-btn>
            <v-btn
              text
              color="secondary"
              :disabled="recruitmentGroupLink == ''"
              @click="$Utils.openExternalLink(recruitmentGroupLink)"
            >
              了解更多
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
    <div>
      <v-btn
        class="mt-2 float-right"
        color="primary"
        text
        to="/about"
      >前往成员殿堂<v-icon right small>fas fa-street-view</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recruitment',
  data: () => ({
    existYear: '许多',
    submitResumeLink: process.env.VUE_APP_RECRUIT_LINK,
    recruitmentGroupLink: process.env.VUE_APP_RECRUIT_QQ_LINK,
  }),
  created() {
    // 计算成立时长
    this.existYear = ' ' + (new Date().getFullYear() - 1997) + ' ';
  },
};
</script>
