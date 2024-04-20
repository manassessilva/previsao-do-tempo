//Função para alterar os dados do cartão
function colocarDadosNaTela(dados) {

  //Dados principais
  console.log(dados)
  document.querySelector(".card_title").innerHTML = "tempo em " + dados.name
  document.querySelector(".card_content_legend_weather_info").innerHTML = dados.weather[0].description
  let icon = dados.weather[0].icon;
  switch (icon) {
      case "01d":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/rpZYWMw1/clear-sky-icon.png";
        break;
      case "01n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/DytvQ38K/clear-sky-nigth-icon.png";
        break;
      case "02d":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/t42S6WqZ/few-clouds-icon.png";
        break;
      case "02n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/FFwg2GRV/few-clouds-night-icon.png";
        break;
      case "02n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/FFwg2GRV/few-clouds-night-icon.png";
        break;
      case "03d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/Twj8bhpK/scattered-clouds-icon.png";
      break;
      case "03n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/L4zfqSDG/scattered-clouds-night-icon.png";
      break;
      case "04d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/Twj8bhpK/scattered-clouds-icon.png";
      break;
      case "04n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/L4zfqSDG/scattered-clouds-night-icon.png";
      break;
      case "09d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/c48XDCRC/bath-rain-icon.png";
      break;
      case "09n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/SNhj2txs/bath-rain-night-icon.png";
      break;
      case "10d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/c48XDCRC/bath-rain-icon.png";
      break;
      case "10n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/bwv6PgbC/rain-night-icon.png";
      break;
      case "11d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/kG0tHnQP/thunderstorm-icon.png";
      break;
      case "11n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/KzcwHTFB/thunderstorm-night-icon.png";
      break;
      case "13d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/zfy0bkJd/snow-icon.png";
      break;
      case "13n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/VvP8H6G8/snow-night-icon.png";
      break;
      case "13d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/zfy0bkJd/snow-icon.png";
      break;
      case "13n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/VvP8H6G8/snow-night-icon.png";
      break;
      case "50d":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/3wjVJB9P/mist-icon.png";
      break;
      case "50n":
          document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/3wjVJB9P/mist-icon.png";
      break;
      default:
        console.log("Ícone não encontrado");
  }

  //Dados sobre a temperatura
  document.querySelector(".card_content_legend_temperature").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".card_content_legend_group_temperature_max").innerHTML = "Máx: " + Math.floor(dados.main.temp_max) + "°C"
  document.querySelector(".card_content_legend_group_temperature_min").innerHTML = "Mín: " + Math.floor(dados.main.temp_min) + "°C"
  document.querySelector(".card_content_legend_group_sensation").innerHTML = "Sensação: " + Math.floor(dados.main.feels_like) + "°C"

  //Dados sobre a humidade e vento
  document.querySelector(".card_content_air_humidity_info").innerHTML = Math.floor(dados.main.humidity) + "%"
  document.querySelector(".card_content_air_pressure_info").innerHTML = Math.floor(dados.main.pressure) + "hPa"
  document.querySelector(".card_content_air_wind_info").innerHTML = Math.floor(dados.wind.speed) + "m/s"
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
  const cidade = document.querySelector(".card_search_bar").value

  //com o nome da cidade armazenado, vamos agora enviar esse nome para coletar as informações sobre essa cidade no servidor
  buscarInformacaoDaCidade(cidade)
}

//chave da API-
const key = "d5bdb0aef28a46f17f2601f5b7fc61b7"