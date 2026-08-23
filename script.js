const mediaData = [
  {
    id: 1,
    title: "LENiN (2026) DS4K WEB-DL [Hindi (DD5.1) & Telugu] 4K 1080p 720p & 480p Dual Audio [x264/HEVC] | Full Movie",
    shortTitle: "LENiN (2026)",
    year: "2026",
    releaseDate: "Aug-21st, 2026",
    genre: ["Action", "Comedy", "Drama", "Dual Audio", "Hindi Dubbed", "South Hindi Movies"],
    poster: "1000234794.jpg", // aapki bheji hui photo ka file name
    quality: "4K UHD",
    downloads: [
      { quality: "480p ⚡ [570MB]", size: "570 MB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "720p HEVC [980MB]", size: "980 MB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "720p 10Bit HEVC [1.2GB]", size: "1.2 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "720p x264 [1.5GB]", size: "1.5 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "1080p HEVC [2.1GB]", size: "2.1 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "1080p 10Bit HEVC [2.7GB]", size: "2.7 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "1080p x264 [3.1GB]", size: "3.1 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "1080p [AMZN WEB-DL – 11.5GB]", size: "11.5 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" },
      { quality: "4K [2160p SDR ZEE5 WEB-DL – 9.6GB]", size: "9.6 GB", link: "https://pub-bb3047cda4324954adc1d55b39aaeccc.r2.dev/1b8a44196c3c40bdcae24f5cf1a26ae5" }
    ]
  },
  {
    id: 2,
    title: "7 Dogs (2026) HQ-HDTC [Hindi (LINE)] 1080p 720p & 480p [x264/HEVC] | Full Movie",
    shortTitle: "7 Dogs (2026)",
    year: "2026",
    releaseDate: "Jul-14th, 2026",
    genre: ["Action", "Thriller"],
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60",
    quality: "1080p",
    downloads: [
      { quality: "480p HQ Clean", size: "450 MB", link: "#" },
      { quality: "720p HEVC x265", size: "850 MB", link: "#" },
      { quality: "1080p Full HD", size: "1.8 GB", link: "#" }
    ]
  },
  {
    id: 3,
    title: "Rush (2013) BluRay [Hindi (DD2.0) & English] 1080p 720p Dual Audio [HEVC] | Movie",
    shortTitle: "Rush (2013)",
    year: "2013",
    releaseDate: "Sep-20th, 2013",
    genre: ["Drama", "Action", "Dual Audio"],
    poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60",
    quality: "BluRay",
    downloads: [
      { quality: "720p BluRay Dual", size: "1.1 GB", link: "#" },
      { quality: "1080p BluRay 5.1", size: "2.4 GB", link: "#" }
    ]
  },
  {
    id: 4,
    title: "Clean Up Company (Season 1) WEB-DL [Hindi DD5.1] 4K 1080p [x264/ESubs] | Series",
    shortTitle: "Clean Up Company (S01)",
    year: "2026",
    releaseDate: "Jun-10th, 2026",
    genre: ["Comedy", "Drama"],
    poster: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&auto=format&fit=crop&q=60",
    quality: "4K Web",
    downloads: [
      { quality: "Season 1 [480p Pack]", size: "1.4 GB", link: "#" },
      { quality: "Season 1 [720p Pack]", size: "3.2 GB", link: "#" },
      { quality: "Season 1 [1080p Pack 4K]", size: "6.8 GB", link: "#" }
    ]
  },
  {
    id: 5,
    title: "Insidious: Out of the Further (2026) HQ-HDTC [Hindi-Tamil] 1080p 720p | Full Movie",
    shortTitle: "Insidious (2026)",
    year: "2026",
    releaseDate: "Aug-05th, 2026",
    genre: ["Thriller", "Dual Audio"],
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop&q=60",
    quality: "HDTC",
    downloads: [
      { quality: "480p Multi Audio", size: "480 MB", link: "#" },
      { quality: "720p HQ x264", size: "1.2 GB", link: "#" },
      { quality: "1080p HD Audio", size: "2.2 GB", link: "#" }
    ]
  }
];

let activeList = [...mediaData];

// Render Main Grid Cards
function renderCards(items) {
  const grid = document.getElementById("mainGrid");
  document.getElementById("totalCount").textContent = `${items.length} Titles Available`;

  grid.innerHTML = items.map(item => `
    <article class="movie-card" onclick="openMovieDetail(${item.id})">
      <div class="poster-wrapper">
        <img src="${item.poster}" alt="${item.shortTitle}" loading="lazy">
        <span class="badge-quality">${item.quality}</span>
      </div>
      <div class="card-details">
        <div class="card-title">${item.title}</div>
        <div class="card-meta"><i class="fa-regular fa-clock"></i> ${item.year} • ${item.genre[0]}</div>
      </div>
    </article>
  `).join("");
}

// Render Top Carousel Slider
function renderSlider() {
  const slider = document.getElementById("sliderTrack");
  slider.innerHTML = mediaData.map(item => `
    <div class="slider-card" onclick="openMovieDetail(${item.id})">
      <img src="${item.poster}" alt="${item.shortTitle}">
    </div>
  `).join("");
}

// Open Movie Detail View
function openMovieDetail(id) {
  const item = mediaData.find(m => m.id === id);
  if (!item) return;

  const detailView = document.getElementById("detailView");
  const homeView = document.getElementById("homeView");
  const detailContent = document.getElementById("detailContent");

  const tagsHTML = item.genre.map(g => `<span class="tag"><i class="fa-solid fa-folder"></i> ${g}</span>`).join("");
  const dlHTML = item.downloads.map(dl => `
    <a href="${dl.link}" target="_blank" class="download-item">
      <span class="dl-quality">${dl.quality}</span>
      <span class="dl-size">${dl.size}</span>
    </a>
  `).join("");

  detailContent.innerHTML = `
    <div class="back-btn-box">
      <button class="home-btn" onclick="showHomePage()"><i class="fa-solid fa-house"></i> Go to HomePage</button>
    </div>

    <div class="detail-header-card">
      <h1 class="detail-title"><i class="fa-solid fa-clapperboard"></i> ${item.title}</h1>
      
      <div class="tag-container">
        <span class="tag" style="background:#00e5ff; color:#000; font-weight:700;"><i class="fa-solid fa-calendar-day"></i> ${item.releaseDate}</span>
        ${tagsHTML}
      </div>

      <p class="detail-summary">Download ${item.shortTitle} WEB-DL [Hindi (DD5.1) & Telugu] 1080p 720p & 480p Dual Audio [x264/HEVC's] | Full Movie</p>
      
      <img src="${item.poster}" alt="${item.shortTitle}" class="detail-banner">

      <div class="download-section">
        <div class="download-title">: DOWNLOAD LINKS :</div>
        <div class="download-list">
          ${dlHTML}
        </div>
      </div>
    </div>
  `;

  homeView.classList.add("hidden");
  detailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show Home Page
function showHomePage() {
  document.getElementById("detailView").classList.add("hidden");
  document.getElementById("homeView").classList.remove("hidden");
}

// Search Function
function searchMedia() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  activeList = mediaData.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.genre.some(g => g.toLowerCase().includes(query))
  );
  showHomePage();
  renderCards(activeList);
}

// Genre Filter Function
function filterGenre(genreName) {
  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.classList.toggle("active", btn.textContent === genreName);
  });

  if (genreName === "All") {
    activeList = [...mediaData];
  } else {
    activeList = mediaData.filter(item => item.genre.includes(genreName));
  }
  showHomePage();
  renderCards(activeList);
}

// Initialization
renderSlider();
renderCards(activeList);
