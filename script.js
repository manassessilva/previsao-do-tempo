//Função para alterar os dados do cartão
function colocarDadosNaTela(dados) {

  console.log(dados)
  document.querySelector(".card_content_title").innerHTML = "Tempo em " + dados.name
  document.querySelector(".card_content_legend_temperature_info").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".legend_temperature_max_tex").innerHTML = "Max: " + Math.floor(dados.main.temp_max) + "°C"
  document.querySelector(".legend_temperature_min_text").innerHTML = "Min: " + Math.floor(dados.main.temp_min) + "°C"
  document.querySelector(".card_content_legend_weather_info").innerHTML = dados.weather[0].description
  document.querySelector(".card_content_legend_description_info").innerHTML = "Umidade " + dados.main.humidity + "%"
  document.querySelector(".card_content_legend_img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

//buscar as informações da cidade no servidor
//Com o "async" o navegador executa a função de forma asincrona enquanto carrega as demais informações do site.
async function buscarInformacaoDaCidade(cidade) {

  //realizará a consulta ao servidor e retornará as informações da cidade informada pelo usuário
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json())

  colocarDadosNaTela(dados)
}

//Armazenar o nome da cidade ao clicar no botão de pesquisar
function aoClicarNoBotão() {

  //busque no documento html, a tag com o id ou classe inserida nos parênteses
  const cidade = document.querySelector(".card_content_search_bar").value

  //com o nome da cidade armazenado, vamos agora enviar esse nome para coletar as informações sobre essa cidade no servidor
  buscarInformacaoDaCidade(cidade)
}

//chave da API-
const key = "d5bdb0aef28a46f17f2601f5b7fc61b7"