let swiperWeekCards = new Swiper('.card-content-week', {
  loop: false,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  },

});

let swiperCards = new Swiper('.card-content', {
  loop: false,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },

});

//inserir as informações do por do sol
function colocarPorDoSolNaTela(dados) {

  let data = new Date(dados.city.sunset * 1000);
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let sunset = hour + ":" + minutes
  
  document.querySelector(".card-today-content-container-sunset-group-info-value").innerHTML = sunset;
}

//inserir as informações do nascer do sol
function colocarNascerDoSolNaTela(dados) {

  let data = new Date(dados.city.sunrise * 1000);
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let sunrise = hour + ":" + minutes

  document.querySelector(".card-today-content-container-sunrise-group-info-value").innerHTML = sunrise;
}

//inserir as informações da velocidade e direção do vento
function colocarVelocidadeDoVentoNaTela(dados) {

  //alterar valor da velocidade do vento
  document.querySelector(".card-today-content-container-wind-info-value").innerHTML = dados.list[0].wind.speed;


  let deg = dados.list[0].wind.deg;
  if(deg <= 22.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Norte";
  }
  else if(deg <= 67.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Nordeste";
  }
  else if(deg <= 112.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Leste";
  }
  else if(deg <= 157.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Sudeste";
  }
  else if(deg <=202.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Sul";
  }
  else if(deg <=247.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Sudoeste";
  }
  else if(deg <=292.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Oeste";
  }
  else if(deg <=337.50) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Noroeste";
  }
  else if(deg <= 360) {
    document.querySelector(".card-today-content-container-wind-description").innerHTML = "Direção Norte";
  }
  else{
    console.log("Direção não encontrada")
  }

}

//inserir as informações da umidade na cidade pesquisada
function colocarUmidadeNaTela(dados) {

  document.querySelector(".card-today-content-container-humidity-info").innerHTML = dados.list[0].main.humidity + "%"

  let humidity = dados.list[0].main.humidity;
  if(humidity >= 80) {
    document.querySelector(".card-today-content-container-humidity-description").innerHTML = "Muito Úmido"
  }
  else if(humidity >= 70) {
    document.querySelector(".card-today-content-container-humidity-description").innerHTML = "Úmido"
  }
  else if(humidity >= 60) {
    document.querySelector(".card-today-content-container-humidity-description").innerHTML = "Umidade Ideal"
  }
  else if(humidity >= 50) {
    document.querySelector(".card-today-content-container-humidity-description").innerHTML = "Pouco Úmido"
  }
  else if(humidity >= 40) {
    document.querySelector(".card-today-content-container-humidity-description").innerHTML = "Ar Seco"
  }
  else if(humidity < 40) {
    document.querySelector(".card-today-content-container-humidity-description").innerHTML = "Ar Sequíssimo"
  }
  else {
    console.log("Descrição de umidade não encontrada")
  }
}

//inserir previsão para o quarto destaque da semana
function colocarQuintoDestaque(dados) {

  //colocar data da previsão
  let time = new Date((dados.list[39].dt) * 1000);
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let day = days[time.getDay()];

  document.querySelector(".card-week-content-container-card-five-day").innerHTML = day

  //colocar o icone da previsão
  let icon = dados.list[39].weather[0].icon;
  switch (icon) {
    case "01d":
      document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/Dzcy0ryn/01d.png";
      break;
    case "01n":
      document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/0NkwNSLV/01n.png";
      break;
    case "02d":
      document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/yxH6d3ST/02d.png";
      break;
    case "02n":
      document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/Mpd02xTM/02n.png";
      break;
    case "03d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/ydcFGrVs/03d.png  ";
    break;
    case "03n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/VNS9qkpS/03n.png";
    break;
    case "04d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "04n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "09d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "09n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "10d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/dt8m6pTX/10d.png";
    break;
    case "10n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/8CTyLDKt/10n.png";
    break;
    case "11d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/mkv7bN1t/11d.png";
    break;
    case "11n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/4y7zkFdD/11n.png";
    break;
    case "13d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "13n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "50d":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    case "50n":
        document.querySelector(".card-week-content-container-card-five-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    default:
      console.log("Ícone não encontrado");
  }

  //colocar temperatura da previsão
  document.querySelector(".card-week-content-container-card-five-temp").innerHTML = Math.floor(dados.list[39].main.temp) + "°C"

}

//inserir previsão para o quarto destaque da semana
function colocarQuartoDestaque(dados) {

  //colocar data da previsão
  let time = new Date((dados.list[32].dt) * 1000);
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let day = days[time.getDay()];

  document.querySelector(".card-week-content-container-card-four-day").innerHTML = day

  //colocar o icone da previsão
  let icon = dados.list[32].weather[0].icon;
  switch (icon) {
    case "01d":
      document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/Dzcy0ryn/01d.png";
      break;
    case "01n":
      document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/0NkwNSLV/01n.png";
      break;
    case "02d":
      document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/yxH6d3ST/02d.png";
      break;
    case "02n":
      document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/Mpd02xTM/02n.png";
      break;
    case "03d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/ydcFGrVs/03d.png  ";
    break;
    case "03n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/VNS9qkpS/03n.png";
    break;
    case "04d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "04n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "09d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "09n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "10d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/dt8m6pTX/10d.png";
    break;
    case "10n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/8CTyLDKt/10n.png";
    break;
    case "11d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/mkv7bN1t/11d.png";
    break;
    case "11n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/4y7zkFdD/11n.png";
    break;
    case "13d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "13n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "50d":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    case "50n":
        document.querySelector(".card-week-content-container-card-four-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    default:
      console.log("Ícone não encontrado");
  }

  //colocar temperatura da previsão
  document.querySelector(".card-week-content-container-card-four-temp").innerHTML = Math.floor(dados.list[32].main.temp) + "°C"

}

//inserir previsão para o terceiro destaque da semana
function colocarTerceiroDestaque(dados) {

  //colocar data da previsão
  let time = new Date((dados.list[24].dt) * 1000);
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let day = days[time.getDay()];

  document.querySelector(".card-week-content-container-card-three-day").innerHTML = day

  //colocar o icone da previsão
  let icon = dados.list[24].weather[0].icon;
  switch (icon) {
    case "01d":
      document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/Dzcy0ryn/01d.png";
      break;
    case "01n":
      document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/0NkwNSLV/01n.png";
      break;
    case "02d":
      document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/yxH6d3ST/02d.png";
      break;
    case "02n":
      document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/Mpd02xTM/02n.png";
      break;
    case "03d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/ydcFGrVs/03d.png  ";
    break;
    case "03n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/VNS9qkpS/03n.png";
    break;
    case "04d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "04n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "09d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "09n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "10d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/dt8m6pTX/10d.png";
    break;
    case "10n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/8CTyLDKt/10n.png";
    break;
    case "11d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/mkv7bN1t/11d.png";
    break;
    case "11n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/4y7zkFdD/11n.png";
    break;
    case "13d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "13n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "50d":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    case "50n":
        document.querySelector(".card-week-content-container-card-three-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    default:
      console.log("Ícone não encontrado");
  }

  //colocar temperatura da previsão
  document.querySelector(".card-week-content-container-card-three-temp").innerHTML = Math.floor(dados.list[24].main.temp) + "°C"

}

//inserir previsão para o segundo destaque da semana
function colocarSegundoDestaque(dados) {

  //colocar data da previsão
  let time = new Date((dados.list[17].dt) * 1000);
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let day = days[time.getDay()];

  document.querySelector(".card-week-content-container-card-two-day").innerHTML = day

  //colocar o icone da previsão
  let icon = dados.list[17].weather[0].icon;
  switch (icon) {
    case "01d":
      document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/Dzcy0ryn/01d.png";
      break;
    case "01n":
      document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/0NkwNSLV/01n.png";
      break;
    case "02d":
      document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/yxH6d3ST/02d.png";
      break;
    case "02n":
      document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/Mpd02xTM/02n.png";
      break;
    case "03d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/ydcFGrVs/03d.png  ";
    break;
    case "03n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/VNS9qkpS/03n.png";
    break;
    case "04d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "04n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "09d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "09n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "10d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/dt8m6pTX/10d.png";
    break;
    case "10n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/8CTyLDKt/10n.png";
    break;
    case "11d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/mkv7bN1t/11d.png";
    break;
    case "11n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/4y7zkFdD/11n.png";
    break;
    case "13d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "13n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "50d":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    case "50n":
        document.querySelector(".card-week-content-container-card-two-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    default:
      console.log("Ícone não encontrado");
  }

  //colocar temperatura da previsão
  document.querySelector(".card-week-content-container-card-two-temp").innerHTML = Math.floor(dados.list[17].main.temp) + "°C"

}

//inserir previsão para o primeiro destaque da semana
function colocarPrimeiroDestaque(dados) {

  //colocar data da previsão
  let time = new Date((dados.list[8].dt) * 1000);
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let day = days[time.getDay()];

  document.querySelector(".card-week-content-container-card-one-day").innerHTML = day

  //colocar o icone da previsão
  let icon = dados.list[8].weather[0].icon;
  switch (icon) {
    case "01d":
      document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/Dzcy0ryn/01d.png";
      break;
    case "01n":
      document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/0NkwNSLV/01n.png";
      break;
    case "02d":
      document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/yxH6d3ST/02d.png";
      break;
    case "02n":
      document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/Mpd02xTM/02n.png";
      break;
    case "03d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/ydcFGrVs/03d.png  ";
    break;
    case "03n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/VNS9qkpS/03n.png";
    break;
    case "04d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "04n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "09d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "09n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "10d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/dt8m6pTX/10d.png";
    break;
    case "10n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/8CTyLDKt/10n.png";
    break;
    case "11d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/mkv7bN1t/11d.png";
    break;
    case "11n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/4y7zkFdD/11n.png";
    break;
    case "13d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "13n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "50d":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    case "50n":
        document.querySelector(".card-week-content-container-card-one-icon").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    default:
      console.log("Ícone não encontrado");
  }

  //colocar temperatura da previsão
  document.querySelector(".card-week-content-container-card-one-temp").innerHTML = Math.floor(dados.list[8].main.temp) + "°C"

}

//alterar data e horario no momento da consulta
function colocarTimeNaTela(dados) {

  //gerar as informações de tempo
  let time = new Date();

  //extrair o dia da semana
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let day = days[time.getDay()];

  //extrair a data e o mês
  let date = time.getDate();
  let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let month = months[time.getMonth()];
  let dateMonth = date + ", de " + month;

  //extrair hora da consulta  
  let hour = time.getHours()
  let minutes = time.getMinutes()
  if(minutes < 10) {
    minutes = "0" + time.getMinutes()
  }
  let hourMinutes = hour + ":" + minutes

  //inserir a informação do dia atual da consulta
  document.querySelector(".sidebar-baseboard-time-group-day").innerHTML = day

  //inserir a informação da data e ano atual da consulta
  document.querySelector(".sidebar-baseboard-time-group-date").innerHTML = dateMonth
  
  //inserir a informação do horário atual da consulta
  document.querySelector(".sidebar-baseboard-hour-text").innerHTML = hourMinutes
  
  //alterar fundo do card de data e horário
  let icon = dados.list[0].weather[0].icon;
  let baseboard = document.querySelector(".sidebar-baseboard");

  switch (icon) {
    case "01d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/3wt6SY4Y/01d-cape.png')"
      break;
    case "01n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/qRYFrwxF/01n-cape.png')"
      break;
    case "02d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/zB3Q46KW/02d-cape.png')"
      break;
    case "02n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/SKS3fJKg/02n-cape.png')"
      break;
    case "03d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/13cbFpyg/03d-card.png')"
    break;
    case "03n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/mgG0hdWf/03n-cape.png')"
    break;
    case "04d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/J7SwCrTh/04d-card.png')"
    break;
    case "04n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/KzYfRTYy/04n-card.png')"
    break;
    case "09d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/44YC07QM/09d-card.png')"
    break;
    case "09n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/zXXVRkCM/09n-card.png')"
    break;
    case "10d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/65Zk9kSf/10d-card.png')"
    break;
    case "10n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/ZRDc3q9v/10n-card.png')"
    break;
    case "11d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/x1xXypGh/11d-card.png')"
    break;
    case "11n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/MpKcBJB1/11n-card.png')"
    break;
    case "13d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/7hGNNy7s/13d-card.png')"
    break;
    case "13n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/cCpB95Bs/13n-card.png')"
    break;
    case "50d":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/0NnZknPf/50d-card.png')"
    break;
    case "50n":
      baseboard.style.backgroundImage = "url('https://i.postimg.cc/R04Xxy5h/50n-card.png')"
    break;
    default:
      console.log("Ícone não encontrado");

  }
  
}

function colocarTemperaturaNaTela(dados) {

  //alterar cidade e sigla do país a que pertence
  document.querySelector(".sidebar-header-title-text").innerHTML = dados.city.name + ", " + dados.city.country;

  //alterar ícone da temperatura de acordo com a descrição do tempo
  let icon = dados.list[0].weather[0].icon;
  switch (icon) {
    case "01d":
      document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/Dzcy0ryn/01d.png";
      break;
    case "01n":
      document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/0NkwNSLV/01n.png";
      break;
    case "02d":
      document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/yxH6d3ST/02d.png";
      break;
    case "02n":
      document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/Mpd02xTM/02n.png";
      break;
    case "03d":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/ydcFGrVs/03d.png  ";
    break;
    case "03n":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/VNS9qkpS/03n.png";
    break;
    case "04d":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "04n":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/QxVXsZj9/04d.png";
    break;
    case "09d":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "09n":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/N0W6pwvd/09d.png";
    break;
    case "10d":
        document.querySelector(".sidebar-content-image-icon").src = "https://i.postimg.cc/dt8m6pTX/10d.png";
    break;
    case "10n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/8CTyLDKt/10n.png";
    break;
    case "11d":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/mkv7bN1t/11d.png";
    break;
    case "11n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/4y7zkFdD/11n.png";
    break;
    case "13d":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "13n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/7h0zTKQr/13d.png";
    break;
    case "50d":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    case "50n":
        document.querySelector(".card_content_legend_weather_img").src = "https://i.postimg.cc/G2fJxBqg/visibility-icon.png";
    break;
    default:
      console.log("Ícone não encontrado");
  }

  //alterar temperatura atual da cidade pesquisada
  document.querySelector(".sidebar-content-description-temperature-text").innerHTML = Math.floor(dados.list[0].main.temp) + "°c"

  //alterar descrição da temperatura na cidade pesquisada
  document.querySelector(".sidebar-content-description-temperature-info").innerHTML = dados.list[0].weather[0].description

  //alterar temperatura mínima do dia para a cidade procurada
  document.querySelector(".sidebar-content-temperature-min").innerHTML = Math.floor(dados.list[0].main.temp_min) + "°C"

  //alterar temperatura máxima do cia para a cidade procurada
  document.querySelector(".sidebar-content-temperature-max").innerHTML = Math.floor(dados.list[0].main.temp_max) + "°C"

  //alterar a temperatura sentida(sensação termica) do dia para a cidade procurada
  document.querySelector(".sidebar-content-temperature-sensation").innerHTML = Math.floor(dados.list[0].main.feels_like) + "°C"

}

//buscar as informações da cidade no servidor
//Com o "async" o navegador executa a função de forma asincrona enquanto carrega as demais informações do site.
async function buscarInformacaoDaCidade(cidade) {

  //realizará a consulta ao servidor e retornará as informações da cidade informada pelo usuário
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(response => response.json())

  console.log(dados)

  colocarTemperaturaNaTela(dados),
  colocarTimeNaTela(dados),
  colocarPrimeiroDestaque(dados),
  colocarSegundoDestaque(dados),
  colocarTerceiroDestaque(dados),
  colocarQuartoDestaque(dados),
  colocarQuintoDestaque(dados),
  colocarUmidadeNaTela(dados),
  colocarVelocidadeDoVentoNaTela(dados),
  colocarNascerDoSolNaTela(dados),
  colocarPorDoSolNaTela(dados)
}

//Armazenar o nome da cidade ao clicar no botão de pesquisar
function aoClicarNoBotão() {

  //busque no documento html, a tag com o id ou classe inserida nos parênteses
  const cidade = document.querySelector(".sidebar-header-search-text").value

  //com o nome da cidade armazenado, vamos agora enviar esse nome para coletar as informações sobre essa cidade no servidor
  buscarInformacaoDaCidade(cidade)
}

//chave da API-
const key = "d5bdb0aef28a46f17f2601f5b7fc61b7"