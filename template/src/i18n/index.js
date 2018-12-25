import Vue from 'vue';
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

// const zh = require('./lang_zh-cn');
// const en = require('./lang_en-us');


// import zh from './lang_zh-cn';
// import en from './lang_en-us';

// let result = {};
// for (let index in zh) {
//   let zhIndexKey = index.toLocaleLowerCase();
//   let enIndexKey = '';
//   let zhKey = '';
//   let enKey = '';
//   result[index] = {};
//   for (let num in zh[index]) {
//     zhKey = num.toLocaleLowerCase();
//     result[index][num]=zh[index][num];
//     for (let index2 in en) {
//       enIndexKey = index2.toLocaleLowerCase();
//       if (zhIndexKey == enIndexKey) {
//         for (let num2 in en[index2]) {
//           enKey = num2.toLocaleLowerCase();
//           if (enKey == zhKey) {
//             result[index][num] = en[index2][num2];
//           }
//         }
//       }

//     }
//   }
// }

// console.log(JSON.stringify(result));



const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('./lang_zh-cn'),
    'en-US': require('./lang_en-us')
  }
})
export default i18n
