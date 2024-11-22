<template>
	<section class="info-monuments montserrat-font" v-if="thisMonument">
    <div class="container">
      <div class="title">
        <h2>{{ thisMonument.title }}</h2>
      </div>
      <div class="tabs">
        <div class="tab" :style="{'height': thisMonument.tab1.show ? 'auto' : '30px'}">
          <div class="header-tab">
            <h2>История создания</h2>
  
            <div class="arrow-container" @click="thisMonument.tab1.show = !thisMonument.tab1.show" :style="{'transform': thisMonument.tab1.show ? 'rotate(180deg)' : 'rotate(0deg)'}">
              <div class="arrow"></div>
            </div>
          </div>

          <div class="tab-content">
            <p class="text">
              {{ thisMonument.tab1.descriptionHistory }}
            </p>
          </div>
        </div>

        <div class="tab" :style="{'height': thisMonument.tab2.show ? 'auto' : '30px'}">
          <div class="header-tab">
            <h2>Значение</h2>
  
            <div class="arrow-container" @click="thisMonument.tab2.show = !thisMonument.tab2.show" :style="{'transform': thisMonument.tab2.show ? 'rotate(180deg)' : 'rotate(0deg)'}">
              <div class="arrow"></div>
            </div>
          </div>

          <div class="tab-content">
            <p class="text">
              {{ thisMonument.tab2.descriptionMeaning }}
            </p>
          </div>
        </div>
        <div class="tab" :style="{'height': thisMonument.tab3.show ? 'auto' : '40px'}">
          <div class="header-tab">
            <h2 style=" width: 200px; padding-bottom: 10px;">{{ thisMonument.tab3.titleWhatTitle }}</h2>
  
            <div class="arrow-container" @click="thisMonument.tab3.show = !thisMonument.tab3.show" :style="{'transform': thisMonument.tab3.show ? 'rotate(180deg)' : 'rotate(0deg)'}">
              <div class="arrow"></div>
            </div>
          </div>

          <div class="tab-content">
            <p class="text">
              {{ thisMonument.tab3.descriptionWhatTitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .info-monuments {

    & .container {
      position: relative;

      & .title {
        padding: 10px 0px;
        position: absolute;
        top: -65px;
        text-align: center;
        z-index: 1;
        width: 400px;
        height: 50px;
        font-size: 12px;
        border-radius: 30px 30px 0px 0px;
        background:rgba(255, 255, 255, 0.603);
        
        & > h2 {
          margin-top: 10px;
          margin-left: 20px;
          text-align: left;
          width: 350px;
        }
      }

      & .tabs {
        background: #fff;

        & .tab {
          padding: 20px 20px;
          transition: all 0.5s;
          overflow: hidden;
          border: 1px solid #000;
          
          & .header-tab {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            & h2 {
              font-size: 16px;
            }
  
            & .arrow-container {
              @size: 30px;
  
              display: flex;
              justify-content: center;
              align-items: center;
              width: @size;
              height: @size;
              border-radius: 50px;
              border: 1px solid #000;
  
              & .arrow {
                position: absolute;
                left: 5px;
                width: 11px;
                height: 2px;
                transform: rotate(45deg);
                background: #000;
                border-radius: 10px;
                &::before {
                  content: "";
                  position: absolute;
                  width: 12px;
                  border-radius: 10px;
                  right: -6px;
                  top: -6px;
                  height: 2px;
                  transform: rotate(-90deg);
                  background: #000;
                }
              }
            }
          }

          & .tab-content {
            margin-top: 20px;
          }
        }
      }
    }
  }

</style>

<script setup>
  import { useActiveSlideStore } from '../stores/pinia';

  const sliderStore = useActiveSlideStore();
  const arrayMonuments = ref([
    {
      id: 0,
      title: "Памятник Владимиру Ильичу Ленину на перроне",
      tab1: {
        descriptionHistory: "Памятник был установлен в 1970-х годах, в период активного возведения памятников Ленину по всей стране.",
        show: false
      },

      tab2: {
        descriptionMeaning: "Памятник Ленину в Белогорске продолжает оставаться важным элементом городской культуры и исторической памяти, отражая сложные процессы, происходившие в стране в ХХ веке.Памятник стал не только историческим объектом, но и местом для встреч местных жителей, а также туристов, интересующихся историей региона. Установка на перроне станции делает памятник доступным для всех приезжающих и уезжающих из города, что подчеркивает его значимость для местных жителей",
        show: false
      },
      tab3: {
        titleWhatTitle: "Почему возвели памятник именно Владимиру Ильичу Ленину?",
        descriptionWhatTitle: "Установка памятника была частью культурной политики того времени, направленной на увековечение памяти лидеров Октябрьской революции и формирования советской идентичности.",
        show: false,
      }
    },
    {
      id: 1,
      title: "Памятник «Амурский ротан»",
      tab1: {
        descriptionHistory: "Летом 2009 года администрация Белогорска объявила конкурс на лучшую идею памятника. Жители города приняли активное участие и прислали на конкурс более сотни предложений. Автором лучшей идеи признана выпускница гимназии искусств-Ирина Лесникова, предложившая увековечить амурского ротана. Открытие памятника состоялось 12 июня 2010 года во время празднования 150-тия города Белогорска.",
        show: false
      },

      tab2: {
        descriptionMeaning: "Памятник ротану символизирует местные традиции рыболовства, а также богатство природных ресурсов региона.Он служит местом для общественных встреч и мероприятий.",
        show: false
      },
      tab3: {
        titleWhatTitle: "Почему именно ротан?",
        descriptionWhatTitle: "Амурский ротан-рыба,считающаяся сорной, но обладающая удивительной жизнестойкостью и жизнелюбием. Естественный ареал обитания рыбки—Дальний Восток.Она неприхотлива и демонстрирует фантастическую живучесть.",
        show: false,
      }
    },
    {
      id: 2,
      title: "Памятник «Телега переселенцев»",
      tab1: {
        descriptionHistory: "Памятник установлен 28 мая 2010 года.Идея памятника принадлежит Виктору Асташову, победителю конкурса, объявленного администрацией Белогорска в мае 2009 года. Проектировала и изготавливала памятник фирма из Иркутска. Финансировали производство, доставку и установку памятника городские предприниматели.",
        show: false
      },

      tab2: {
        descriptionMeaning: "Памятник служит напоминанием о важной вехе в истории города и всего региона, когда переселенцы приходили сюда в поисках новой жизни.Строительство памятника связано с массовым переселением людей в Сибирь и Дальний Восток в конце XIX—начале ХХ века, когда множество семей покидали свои места для улучшения условий жизни",
        show: false
      },
      tab3: {
        titleWhatTitle: "Почему именно телега?",
        descriptionWhatTitle: "На камне — памятная доска с надписью: «Город Белогорск основан в 1860 году переселенцами из Енисейской и Пермской губерний: Барановыми, Мартыновскими, Мезенцевыми, Мингилевыми, Михайловыми, Могильниковыми, Поздеевыми, Чебыкиными, Рыбиными».Телега переселенцев-это значимый символ, который отражает исторические события, связанные с переселением и освоением этих земель.Памятник символизирует трудолюбие, стойкость и адаптацию людей, что является основой развития современного Белогорска.",
        show: false,
      }
    },
    {
      id: 3,
      title: "Памятник «Вежливым людям»",
      tab1: {
        descriptionHistory: "Первый в России памятник 'вежливым людям' открыли 6 мая 2015 года в городе Белогорск Амурской области.Скульптуру высотой 1,8 метра, которая изображает российского солдата с котенком в руках, установили ко Дню Победы.Памятник создан на частные пожертвования. Его изготовили на заводе в уральском городе Касли.В основу памятника легла фотография из серии «Вежливые люди» фотографа ТАСС Андрея Рюмина.",
        show: false
      },

      tab2: {
        descriptionMeaning: "«Мы хотим,чтобы память о тех, кто помогал Крыму вернуться домой, осталась навсегда. Это будет памятник Вежливому солдату. Мы сделаем все, чтобы не потерять историческую память народа, чтобы не допустить событий, которые происходят сейчас в когда-то братской для нас стране. В России народ и армия – едины» - слова мэра города Белогорск.",
        show: false
      },
      tab3: {
        titleWhatTitle: "Почему памятник именно «вежливым людям»?",
        descriptionWhatTitle: "'Вежливые люди' - устойчивое выражение, которым обозначают военнослужащих, действовавших в Крыму во время 'Крымской весны' в марте 2014 года. 'Вежливые люди' стали не только гарантом свободного волеизъявления жителей Крыма, но и новым символом российских Вооруженных сил, что, в свою очередь, вызвало колоссальный подъем патриотических настроений среди российских граждан разного возраста и социального положения.",
        show: false,
      }
    },
    {
      id: 4,
      title: "Памятник «Часовня»",
      tab1: {
        descriptionHistory: "Часовня была освящена в 2005 году.Инициатива построить часовню возникла у местных жителей и ветеранов, которые стремились увековечить память о солдатах, отдавших свои жизни на фронтах войны. Памятник был возведен на средства местных жителей и спонсоров.",
        show: false
      },

      tab2: {
        descriptionMeaning: "Часовня является символом памяти и уважения к тем, кто отдал свою жизнь за Родину.Она не только памятник, но и место для молитвы и размышлений, что привлекает как местных жителей, так и туристов.Часовня построена в память воинам, погибшим при защите Отечества в войне 1941-1945 гг. в честь 50 - летия Победы.",
        show: false
      },
      tab3: {
        titleWhatTitle: "Почему памятник именно часовня?",
        descriptionWhatTitle: "Часовня в Белогорске служит важным напоминанием о героизме и самопожертвовании людей во время войны, а также объединяет людей в их стремлении сохранить память о прошлом.",
        show: false,
      }
    },
    

  ])
  let thisMonument = ref(null);
  const activeSlide = computed(() => sliderStore.activeSlideNum);
  
  watch(activeSlide, (newE) => {
    console.log(thisMonument.value);
    thisMonument.value = arrayMonuments.value[newE];
    console.log(arrayMonuments.value[newE]);
    
  });

  onMounted(() => {
    thisMonument.value = arrayMonuments.value[0];
  })
</script>
