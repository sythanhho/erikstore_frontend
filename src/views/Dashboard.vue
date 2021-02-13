<template>
  <v-container fluid>
    <v-row class="ma-0">
      <v-col cols="12" md="8">
        <v-card class="mx-auto" max-width="100%" rounded="xl">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ $t("revenueCard.title") }}
              </div>
              <VueApexCharts
                width="100%"
                type="line"
                :options="options"
                :series="series"
              ></VueApexCharts>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card max-width="100%" height="100%" rounded="xl">
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4">{{ $t("transactionCard.title") }}</div>
              <v-list class="transparent">
                <v-list-item v-for="item in transaction" :key="item.name">
                  <v-list-item-title>{{ item.name }}</v-list-item-title>

                  <v-list-item-subtitle class="text-right">
                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                    {{ item.amount }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card max-width="100%" rounded="xl">
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4">{{ $t("card.activity.title") }}</div>
              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  Today
                </div>

                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :color="message.color"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>{{ message.from }}</strong> @{{ message.time }}
                      </div>
                      <div>{{ message.message }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card max-width="100%" rounded="xl">
          <v-toolbar>
            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <v-list-item-group
              v-model="selected"
              active-class="pink--text"
              multiple
            >
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle
                        v-text="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text
                        v-text="item.action"
                      ></v-list-item-action-text>

                      <v-icon v-if="!active" color="grey lighten-1">
                        mdi-star-outline
                      </v-icon>

                      <v-icon v-else color="yellow darken-3">
                        mdi-star
                      </v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < items.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card max-width="100%" rounded="xl">
          <v-toolbar>
            <v-toolbar-title>To-dos</v-toolbar-title>
          </v-toolbar>

          <v-list>
            <v-list-item-group active-class="pink--text">
              <template v-for="(item, index) in todos">
                <v-list-item :key="item.title">
                  <template v-slot:default="{}">
                    <v-list-item-content>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.headline"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle
                        v-text="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < todos.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: { VueApexCharts },
  name: "Dashboard",
  data() {
    return {
      selected: [2],
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "me, Scrott, Jennifer"
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          title: "Britta Holt"
        }
      ],
      todos: [
        {
          headline: "Advance the model",
          subtitle: `Redesign input dimensions to be adaptive of target memory`
        },
        {
          headline: "Initiate mobile design",
          subtitle: `Sketch a mockup for iOS app UI`
        },
        {
          headline: "Write NDA draft",
          subtitle: "Use IP Australia tool for generating NDA"
        },
        {
          headline: "Energy loss prevention",
          subtitle: "Go shopping for next week's food at Paris Store"
        }
      ],
      messages: [
        {
          from: "You",
          message: `Import 100kg OM3`,
          time: "10:42am",
          color: "deep-purple lighten-1"
        },
        {
          from: "John Doe",
          message: "Return extra notebooks to Office Depot",
          time: "10:37am",
          color: "green"
        },
        {
          from: "You",
          message: "Submit plan for next month",
          time: "9:47am",
          color: "deep-purple lighten-1"
        }
      ],
      options: {
        chart: {
          id: "vuechart-example"
        },
        colors: [this.$vuetify.theme.themes.light.primary],
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        }
      },
      series: [
        {
          name: "series-1",
          data: [
            7.1,
            67.57,
            53.67,
            13.77,
            19.55,
            -6.16,
            15.52,
            55.21,
            41.49,
            51.39
          ]
        }
      ],
      transaction: [
        {
          name: "Microsoft",
          icon: "mdi-arrow-up-bold",
          amount: "€1500.27",
          color: "green"
        },
        {
          name: "Intel",
          icon: "mdi-arrow-up-bold",
          amount: "€2750.50",
          color: "green"
        },
        {
          name: "Facebook",
          icon: "mdi-arrow-down-bold",
          amount: "€930.10",
          color: "red"
        },
        {
          name: "Google",
          icon: "mdi-arrow-up-bold",
          amount: "€3500.00",
          color: "green"
        }
      ]
    };
  }
};
</script>

<i18n>
{
  "en": {
    "revenueCardTitle": "Daily Revenue"
  }
}</i18n>
