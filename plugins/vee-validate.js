import Vue from 'vue';
import VeeValidate, { Validator } from'vee-validate'
import ja from 'vee-validate/dist/locale/ja'

Vue.use(VeeValidate, {
  inject: true
})

const ja_custom_msg = {
  custom: {
    user_name: {
      required: '名前は必須です'
    },
    email: {
      email: 'メールアドレスを入力して下さい',
      required: 'メールアドレスは必須です'
    },
    phone: {
      alpha_num: '電話番号を入力して下さい',
      numeric: '半角数字を入力してください。ハイフンは不要です。',
      required: '電話番号は必須です'
    },
    inquiry_type: {
      required: '種類を選んで下さい'
    },
    text_area : {
      required: '問い合わせ内容は必須です'
    },
    term_checked : {
      required: '個人情報保護方針を選択してください'
    }
  }
}

Validator.localize('ja', ja_custom_msg);
