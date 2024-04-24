<script>
  let amount = Number(document.getElementById("currency-converter"));
  const currencies = [
    { name: "AED" },
    { name: "AFN" },
    { name: "ALL" },
    { name: "AMD" },
    { name: "ANG" },
    { name: "AOA" },
    { name: "ARS" },
    { name: "AUD" },
    { name: "AWG" },
    { name: "AZN" },
    { name: "BAM" },
    { name: "BBD" },
    { name: "BDT" },
    { name: "BGN" },
    { name: "BHD" },
    { name: "BIF" },
    { name: "BMD" },
    { name: "BND" },
    { name: "BOB" },
    { name: "BRL" },
    { name: "BSD" },
    { name: "BTC" },
    { name: "BTN" },
    { name: "BWP" },
    { name: "BYN" },
    { name: "BZD" },
    { name: "CAD" },
    { name: "CDF" },
    { name: "CHF" },
    { name: "CLF" },
    { name: "CLP" },
    { name: "CNY" },
    { name: "COP" },
    { name: "CRC" },
    { name: "CUC" },
    { name: "CUP" },
    { name: "CVE" },
    { name: "CZK" },
    { name: "DJF" },
    { name: "DKK" },
    { name: "DOP" },
    { name: "DZD" },
    { name: "EGP" },
    { name: "ERN" },
    { name: "ETB" },
    { name: "EUR" },
    { name: "FJD" },
    { name: "FKP" },
    { name: "GBP" },
    { name: "GEL" },
    { name: "GGP" },
    { name: "GHS" },
    { name: "GIP" },
    { name: "GMD" },
    { name: "GNF" },
    { name: "GTQ" },
    { name: "GYD" },
    { name: "HKD" },
    { name: "HNL" },
    { name: "HRK" },
    { name: "HTG" },
    { name: "HUF" },
    { name: "IDR" },
    { name: "ILS" },
    { name: "IMP" },
    { name: "INR" },
    { name: "IQD" },
    { name: "IRR" },
    { name: "ISK" },
    { name: "JEP" },
    { name: "JMD" },
    { name: "JOD" },
    { name: "JPY" },
    { name: "KES" },
    { name: "KGS" },
    { name: "KHR" },
    { name: "KMF" },
    { name: "KPW" },
    { name: "KRW" },
    { name: "KWD" },
    { name: "KYD" },
    { name: "KZT" },
    { name: "LAK" },
    { name: "LBP" },
    { name: "LKR" },
    { name: "LRD" },
    { name: "LSL" },
    { name: "LYD" },
    { name: "MAD" },
    { name: "MDL" },
    { name: "MGA" },
    { name: "MKD" },
    { name: "MMK" },
    { name: "MNT" },
    { name: "MOP" },
    { name: "MRO" },
    { name: "MRU" },
    { name: "MUR" },
    { name: "MVR" },
    { name: "MWK" },
    { name: "MXN" },
    { name: "MYR" },
    { name: "MZN" },
    { name: "NAD" },
    { name: "NGN" },
    { name: "NIO" },
    { name: "NOK" },
    { name: "NPR" },
    { name: "NZD" },
    { name: "OMR" },
    { name: "PAB" },
    { name: "PEN" },
    { name: "PGK" },
    { name: "PHP" },
    { name: "PKR" },
    { name: "PLN" },
    { name: "PYG" },
    { name: "QAR" },
    { name: "RON" },
    { name: "RSD" },
    { name: "RUB" },
    { name: "RWF" },
    { name: "SAR" },
    { name: "SBD" },
    { name: "SCR" },
    { name: "SDG" },
    { name: "SEK" },
    { name: "SGD" },
    { name: "SHP" },
    { name: "SLL" },
    { name: "SOS" },
    { name: "SRD" },
    { name: "SSP" },
    { name: "STD" },
    { name: "STN" },
    { name: "SVC" },
    { name: "SYP" },
    { name: "SZL" },
    { name: "THB" },
    { name: "TJS" },
    { name: "TMT" },
    { name: "TND" },
    { name: "TOP" },
    { name: "TRY" },
    { name: "TTD" },
    { name: "TWD" },
    { name: "TZS" },
    { name: "UAH" },
    { name: "UGX" },
    { name: "USD" },
    { name: "UYU" },
    { name: "UZS" },
    { name: "VEF" },
    { name: "VES" },
    { name: "VND" },
    { name: "VUV" },
    { name: "WST" },
    { name: "XAF" },
    { name: "XAG" },
    { name: "XAU" },
    { name: "XCD" },
    { name: "XDR" },
    { name: "XOF" },
    { name: "XPD" },
    { name: "XPF" },
    { name: "XPT" },
    { name: "YER" },
    { name: "ZAR" },
    { name: "ZMW" },
    { name: "ZWL" },
  ];

  let apiKey = "e1e502cd47ebd9d9f624bd07";
  let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  let convertFrom = "";
  let convertTo = "";
  let finalAmount = "0.00";

  async function convertCurrency() {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[convertFrom];
        let toExchangeRate = data.conversion_rates[convertTo];
        amount = amount < 0 ? 0 : amount;
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        finalAmount = convertedAmount.toFixed(2);
        finalAmount = finalAmount == "NaN" ? "Выберите валюту" : finalAmount;
      });
  }
</script>

<div class="mt-4 rounded shadow border bg-red-50">
  <div id="currency-converter" class="px-4 py-4">
    <br />
    <span class="mt-10">Введите сумму:</span>
    <input
      class="px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 rounded sm:text-sm border-gray-300"
      type="number"
      name="currencyAmount"
      placeholder="Введите сумму"
      bind:value={amount}
      on:change={convertCurrency}
    />
    <br /> <br />

    <span>Конвертация из:</span>
    <div id="from-currency-select" class="px-4 py-4">
      <select
        class="px-4 py-3 rounded-full"
        bind:value={convertFrom}
        on:change={convertCurrency}
      >
        {#each currencies as { name }}
          <option value={name}>
            {name}
          </option>
        {/each}
      </select>
    </div>

    <span class="ml-10 mr-10">Конвертация в:</span>
    <div id="to-currency-select" class="px-4 py-4">
      <select
        class="px-4 py-3 rounded-full"
        bind:value={convertTo}
        on:change={convertCurrency}
      >
        {#each currencies as { name }}
          <option value={name}>
            {name}
          </option>
        {/each}
      </select>
    </div>
    <br /><br />
    <span>{amount} {convertFrom} = {finalAmount} {convertTo}</span>
  </div>
</div>
