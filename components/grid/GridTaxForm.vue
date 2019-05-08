<template>
  <section>
    <div class="container fixed-width">
      <div class="title">
        <div class="title-padding">令和　元年分　給与所得の源泉徴収票</div>
      </div>
      <div class="grid-container">
        <div class="Recipient">
          <div class="padding-left-5"> (受給者番号)</div>
        </div>
        <div class="MyNumber">
          <div class="flex-style">
            <div class="padding-left-5">(個人番号)</div>
            <div class="my-number-input-form flex-style centering">
              <div class="digit">1</div>
              <div class="digit">2</div>
              <div class="digit">3</div>
              <div class="digit">4</div>
              <div class="digit">5</div>
              <div class="digit">4</div>
              <div class="digit">3</div>
              <div class="digit">2</div>
              <div class="digit">1</div>
              <div class="digit">2</div>
              <div class="digit">3</div>
              <div class="digit">4</div>
            </div>
          </div>
        </div>
        <div class="Title">
          <div class="flex-style">
            <div class="padding-left-5">(役職名)</div>
            <div class="">社員</div>
          </div>
        </div>
        <div class="Name_Column">
          <div class="vertical-rl centering">氏名</div>
        </div>
        <div class="Kana_Name">
          <div class="flex-style">
            <div class="padding-left-5">(フリガナ)</div>
            <div class="padding-left-5">タナカタロウ</div>
          </div>
        </div>
        <div class="Name">
          <div class="name-input-form flex-style">
            <div class="digit">田</div>
            <div class="digit">中</div>
            <div class="digit">太</div>
            <div class="digit">郎</div>
          </div>
        </div>
        <div class="Address">
          <div class="centering">東京都中央区銀座1-1-1</div>
        </div>
        <div class="Address_Column">
          <div class="vertical-rl centering">住所または居所</div>
        </div>
        <div class="Payee">
          <div class="vertical-rl centering">支払いを受ける者</div>
        </div>
        <div class="Type">
          <div>種別</div>
        </div>
        <div class="Amount">
          <div>支払金額</div>
        </div>
        <div class="Amount_After_Deduction">
          <div>給与所得控除後の金額</div>
        </div>
        <div class="Amount_3">
          <div class="centering">所得控除の額の合計額</div>
        </div>
        <div class="Tax">
          <div>源泉徴収税額</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "GridTaxForm"
  }
</script>

<style scoped>
  .my-number-input-form {
    justify-content: space-between;
    flex-grow: 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .name-input-form {
    justify-content: space-between;
    flex-grow: 1;
    padding-left: 1rem;
    padding-right: 1rem;

  }

  .my-number-input-form > .digit {
    white-space: nowrap;
    font-weight: bold;
  }

  .fixed-width {
    width: 900px;
  }

  .title-padding {
    padding-left: 10rem
  }

  .vertical-rl {
    writing-mode: vertical-rl;
  }

  .flex-style {
    display: flex;
  }

  .padding-left-5 {
    padding-left: 5px;
  }

  .centering {
    align-self: center;
    justify-self: center;
  }

  .grid-container {
    border: 1px solid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
    grid-template-areas: "Payee Address_Column Address Address Address Address Address Address Recipient Recipient Recipient Recipient Recipient Recipient ." "Payee Address_Column Address Address Address Address Address Address MyNumber MyNumber MyNumber MyNumber MyNumber MyNumber MyNumber" "Payee Address_Column Address Address Address Address Address Address Title Title Title Title Title Title ." "Payee Address_Column Address Address Address Address Address Address Name_Column Kana_Name Kana_Name Kana_Name Kana_Name Kana_Name ." "Payee Address_Column Address Address Address Address Address Address Name_Column Name Name Name Name Name Name" "Type Type Type Amount Amount Amount Amount_After_Deduction Amount_After_Deduction Amount_After_Deduction Amount_3 Amount_3 Amount_3 Tax Tax Tax" "Type Type Type Amount Amount Amount Amount_After_Deduction Amount_After_Deduction Amount_After_Deduction Amount_3 Amount_3 Amount_3 Tax Tax Tax" "Type Type Type Amount Amount Amount Amount_After_Deduction Amount_After_Deduction Amount_After_Deduction Amount_3 Amount_3 Amount_3 Tax Tax Tax" ". . . . . . . . . . . . . . .";
  }

  .Recipient {
    grid-area: Recipient;
  }

  .MyNumber {
    grid-area: MyNumber;
    border: 1px solid;
    text-align: center;
    display: grid;
  }

  .Title {
    grid-area: Title;
  }

  .Name_Column {
    grid-area: Name_Column;
    text-align: center;
    display: grid;
  }

  .Kana_Name {
    grid-area: Kana_Name;
  }

  .Name {
    grid-area: Name;
  }

  .Address {
    grid-area: Address;
    text-align: center;
    display: grid;
    border: 1px solid;
  }

  .Address_Column {
    grid-area: Address_Column;
    text-align: center;
    display: grid;
  }

  .Payee {
    grid-area: Payee;
    text-align: center;
    display: grid;
  }

  .Type {
    grid-area: Type;
    border: 1px solid;

  }

  .Amount {
    grid-area: Amount;
    border: 1px solid;

  }

  .Amount_After_Deduction {
    grid-area: Amount_After_Deduction;
    border: 1px solid;

  }

  .Amount_3 {
    grid-area: Amount_3;
    border: 1px solid;


  }

  .Tax {
    grid-area: Tax;
    border: 1px solid;

  }

</style>
