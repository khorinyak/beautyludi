// ===========================
// КРАСИВЫЕ ЛЮДИ (Куркино) — Панель управления (редактируйте только этот файл)
// ===========================
//
// ✅ Что можно менять без “кодинга”:
// • промокод и текст акции
// • ссылки (онлайн‑запись / WhatsApp / Telegram / карта / соцсети)
// • адрес и режим работы
// • галерея (фото/баннеры)
//
// ⚠️ Важно:
// • Меняйте только значения в кавычках "..."
// • После изменения сохраните файл — хостинг обновит сайт
//

window.DEPITERIA_EDIT = {
  promo: {
    code: "NEW30",
    marqueeText: "−30%* для новых клиентов по промокоду NEW30 (макс. скидка 1000₽)",
    badgeText: "NEW"
  },

  links: {
    booking: "https://widget.sonline.su/ru/services/?placeid=627897517",
    whatsapp: "https://wa.me/79163658999",
    telegram: "https://t.me/beautyludi",
    vk: "https://vk.com/beautyludi_salon",
    youtube: "https://www.youtube.com/@beautyludi",
    avito: "https://avito.ru/brands/e174d8407c6aadffa3e911154cc3d475",
    gis2: "https://2gis.ru/moscow/geo/70000001032420210",
    yandexAll: "https://yandex.ru/maps/-/CHdqm26d"
  },

  place: {
    title: "Куркино",
    address: "Москва, Куркино, Новокуркинское шоссе, 45",
    hours: "Ежедневно 10:00–21:00",
    phone: "+7 916 365-89-99"
  },

  // ====== Галерея (фото/баннеры) ======
  // src — миниатюра, full — что открыть при клике (можно одинаково)
  gallery: [
    { src: "assets/manicure.webp", full: "assets/manicure.jpg", alt: "Маникюр и педикюр — прайс" },
    { src: "assets/hair.webp", full: "assets/hair.jpg", alt: "Стрижки и окрашивание — прайс" },
    { src: "assets/cosmetology.webp", full: "assets/cosmetology.jpg", alt: "Косметология — услуги и цены" },
    { src: "assets/wax.webp", full: "assets/wax.jpg", alt: "Восковая депиляция — прайс" },
    { src: "assets/mix.webp", full: "assets/mix.jpg", alt: "Выгодные комплексы на депиляцию" },
    { src: "assets/laser_price.webp", full: "assets/laser_price.jpg", alt: "Лазерная эпиляция — прайс" },
    { src: "assets/laser_all.webp", full: "assets/laser_all.jpg", alt: "Лазерная эпиляция — комплекс на всё тело" },
    { type: "video", src: "assets/offers-video-square.mp4", poster: "assets/offers-video-poster.jpg", alt: "Видео о салоне" },
    { type: "slideshow", alt: "Слайдшоу наших работ", slides: ["assets/work-01.webp", "assets/work-02.webp", "assets/work-03.webp", "assets/work-04.webp", "assets/work-05.webp", "assets/work-06.webp", "assets/work-07.webp", "assets/work-08.webp", "assets/work-09.webp", "assets/work-10.webp", "assets/work-11.webp", "assets/work-12.webp", "assets/work-13.webp", "assets/work-14.webp", "assets/work-15.webp", "assets/work-16.webp", "assets/work-17.webp", "assets/work-18.webp"] }
  ]
};
