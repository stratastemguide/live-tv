/* ============================================================
   WORLD MONITOR — Script
   ============================================================ */

// ---- Channel Data ----
const CHANNELS = [
    // ─── BREAKING / 24-HOUR NEWS ───
    {
        id: 'aljazeera',
        name: 'Al Jazeera English',
        region: 'MIDDLE EAST • QATAR',
        category: ['breaking', 'world'],
        color: '#d4a843',
        abbreviation: 'AJ',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg',
        youtubeVideoId: 'gCNeDWCI0vo',
        description: '24/7 English-language news from Al Jazeera Media Network'
    },
    {
        id: 'france24',
        name: 'France 24 English',
        region: 'EUROPE • FRANCE',
        category: ['breaking', 'world'],
        color: '#00a1e0',
        abbreviation: 'F24',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCQfwfsi5VrQ8yKZ-UWmAEFg',
        youtubeVideoId: 'h3MuIUNCCzI',
        description: 'International news 24/7 from Paris'
    },
    {
        id: 'dw',
        name: 'DW News',
        region: 'EUROPE • GERMANY',
        category: ['breaking', 'world'],
        color: '#003d7d',
        abbreviation: 'DW',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCknLrEdhRCp1aegoMqRaCZg',
        youtubeVideoId: 'pqabxBKzZ6M',
        description: 'Deutsche Welle — German international broadcaster'
    },
    {
        id: 'skynews',
        name: 'Sky News',
        region: 'EUROPE • UK',
        category: ['breaking', 'world'],
        color: '#c8102e',
        abbreviation: 'SKY',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCoMdktPbSTixAyNGwb-UYkQ',
        youtubeVideoId: '9Auq9mYxFEE',
        description: 'Sky News — Breaking news, headlines and top stories'
    },
    {
        id: 'euronews',
        name: 'Euronews',
        region: 'EUROPE • INTERNATIONAL',
        category: ['breaking', 'world'],
        color: '#003479',
        abbreviation: 'EN',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCW2QcKZiU8aUGg4yxCIditg',
        youtubeVideoId: 'pykpO5kQJ98',
        description: 'European news from a multinational perspective'
    },
    {
        id: 'abcnews',
        name: 'ABC News Live',
        region: 'NORTH AMERICA • USA',
        category: ['breaking', 'world'],
        color: '#000000',
        abbreviation: 'ABC',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCBi2mrWuNuyYy4gbM6fU18Q',
        youtubeVideoId: 'YVhMIeezCCU',
        description: 'ABC News — Live 24/7 coverage'
    },
    {
        id: 'nbcnews',
        name: 'NBC News NOW',
        region: 'NORTH AMERICA • USA',
        category: ['breaking', 'world'],
        color: '#e2a612',
        abbreviation: 'NBC',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCeY0bbntWzzVIaj2z3QigXg',
        youtubeVideoId: '0N-UNhOKbNw',
        description: 'NBC News NOW — Live 24/7 breaking news & top stories'
    },
    {
        id: 'abc7',
        name: 'ABC7 Eyewitness News',
        region: 'NORTH AMERICA • USA',
        category: ['breaking', 'regional'],
        color: '#1a73e8',
        abbreviation: 'AB7',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCMikvHyt1qcjmhgj75dVN9g',
        youtubeVideoId: 's3iVFJoxrYc',
        description: 'ABC7 Eyewitness News — Live local & national coverage from Southern California'
    },

    // ─── WORLD / INTERNATIONAL ───
    {
        id: 'wion',
        name: 'WION',
        region: 'ASIA • INDIA',
        category: ['world', 'breaking'],
        color: '#e63946',
        abbreviation: 'WION',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UC_gUM8rL-Lrg6O3adPW9K1g',
        youtubeVideoId: '-upyPouRrB8',
        description: 'World Is One News — Global perspective from India'
    },
    {
        id: 'trtworld',
        name: 'TRT World',
        region: 'MIDDLE EAST • TURKEY',
        category: ['world'],
        color: '#1a1a2e',
        abbreviation: 'TRT',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UC7fWeaHhqgM4Lba5uhzEKPg',
        youtubeVideoId: 'CV5Fooi8YJA',
        description: 'Turkish Radio & Television — World news'
    },
    {
        id: 'cna',
        name: 'CNA',
        region: 'ASIA • SINGAPORE',
        category: ['world', 'business'],
        color: '#e50000',
        abbreviation: 'CNA',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCo8bcnLyZH8tBIH9V1mLgqQ',
        youtubeVideoId: 'XWq5kBlakcQ',
        description: 'Channel News Asia — Asian perspective on global news'
    },
    {
        id: 'ndtv',
        name: 'NDTV 24x7',
        region: 'ASIA • INDIA',
        category: ['world', 'regional'],
        color: '#ff0000',
        abbreviation: 'NDTV',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCZFMm1MxIMvRwYHwEBiAxrA',
        youtubeVideoId: 'DpjTPdLjra4',
        description: 'New Delhi Television — India\'s #1 English news channel'
    },
    {
        id: 'nhkworld',
        name: 'NHK World Japan',
        region: 'ASIA • JAPAN',
        category: ['world', 'regional'],
        color: '#0068b7',
        abbreviation: 'NHK',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCQ1_E-tml4Ygessk7VDz0Fg',
        youtubeVideoId: 'f0lYkdA-Jto',
        description: 'Japan\'s international broadcasting service'
    },
    {
        id: 'cgtn',
        name: 'CGTN',
        region: 'ASIA • CHINA',
        category: ['world'],
        color: '#d42d2d',
        abbreviation: 'CGTN',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCgrNz-aDmcr2uuto8_DL2jg',
        youtubeVideoId: 'ELvMqENKOTs',
        description: 'China Global Television Network'
    },

    // ─── BUSINESS & FINANCE ───
    {
        id: 'bloomberg',
        name: 'Bloomberg TV',
        region: 'NORTH AMERICA • USA',
        category: ['business'],
        color: '#2800d2',
        abbreviation: 'BLM',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCIALMKvObZNtJ68-rmLjb5A',
        youtubeVideoId: 'dp8PhLsUcFE',
        description: 'Business & financial market news 24/7'
    },
    {
        id: 'cnbctv18',
        name: 'CNBC TV18',
        region: 'ASIA • INDIA',
        category: ['business'],
        color: '#005596',
        abbreviation: 'CNBC',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCGrdl4LAc7lvfX2_SxNR7NA',
        youtubeVideoId: 'oEEkIUm2hFM',
        description: 'CNBC TV18 — Business and financial news from India'
    },

    // ─── TECH & SCIENCE ───
    {
        id: 'nasa',
        name: 'NASA TV',
        region: 'INTERNATIONAL • SPACE',
        category: ['tech'],
        color: '#0b3d91',
        abbreviation: 'NASA',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCLA_DiR1FfKNvjuUpBHmylQ',
        youtubeVideoId: '21X5lGlDOfg',
        description: 'National Aeronautics & Space Administration live feed'
    },

    // ─── REGIONAL ───
    {
        id: 'arirang',
        name: 'Arirang TV',
        region: 'ASIA • SOUTH KOREA',
        category: ['regional', 'world'],
        color: '#00338e',
        abbreviation: 'ARI',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCL_qhgtOy0dy1Agp8vkySQg',
        youtubeVideoId: '3HDhuy2lXBg',
        description: 'Korea\'s international English broadcasting network'
    },
    {
        id: 'abc-au',
        name: 'ABC News Australia',
        region: 'OCEANIA • AUSTRALIA',
        category: ['regional', 'world'],
        color: '#00573f',
        abbreviation: 'ABC',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCVgO39Bk5sMo66-6o6Spn6Q',
        youtubeVideoId: 'NQYXG-8PVPA',
        description: 'Australian Broadcasting Corporation live news'
    },
    {
        id: 'tvp',
        name: 'TVP World',
        region: 'EUROPE • POLAND',
        category: ['regional', 'world'],
        color: '#cf2e2e',
        abbreviation: 'TVP',
        embedType: 'youtube-channel',
        youtubeChannelId: 'UCQF7jZ7s6VBDuEiNv7HXHBQ',
        youtubeVideoId: 'mYLTdaGhyBY',
        description: 'Polish public television\'s international news channel'
    }
];

// ---- Windy Map Config ----
const WINDY_KEY = 'public'; // Using public key for development
const WINDY_MAP_URL = `https://www.windy.com/?wind,40.712,-74.006,3,m:eXaad28`;

// ---- State ----
let currentCategory = 'all';
let currentView = 'grid';
let loadedIframes = new Set();
let searchQuery = '';
let isMapLoaded = false;

// ---- Configuration ----
const WEATHER_API_KEY = ''; // Add your OpenWeatherMap API key here if needed
const DEFAULT_LAT = 6.9271; // Colombo, Sri Lanka
const DEFAULT_LON = 79.8612;

// ---- DOM References ----
const grid = document.getElementById('channels-grid');
const intelView = document.getElementById('intel-view');
const toolbar = document.getElementById('toolbar');
const searchInput = document.getElementById('search-input');
const navGlow = document.getElementById('nav-glow');
const channelCountEl = document.getElementById('channel-count');
const featuredOverlay = document.getElementById('featured-overlay');
const featuredVideo = document.getElementById('featured-video');
const featuredTitle = document.getElementById('featured-title');
const featuredDesc = document.getElementById('featured-desc');
const featuredClose = document.getElementById('featured-close');
const masterClock = document.getElementById('master-clock');
const windyMap = document.getElementById('windy-map');
const intelLat = document.getElementById('intel-lat');
const intelLon = document.getElementById('intel-lon');
const intelLoader = document.getElementById('intel-map-loader');

// ---- Market & Weather DOM ----
const cryptoTickerTrack = document.getElementById('crypto-ticker-track');
const weatherInstrumentation = document.getElementById('weather-instrumentation');
const weatherForecastEl = document.getElementById('weather-forecast');

// ---- State ----
let marketData = [];
let weatherData = null;

// ---- Earth Monitor DOM ----
const earthView = document.getElementById('earth-view');
const globeContainer = document.getElementById('globe-viz');
const earthPointsEl = document.getElementById('earth-points-count');

// ---- Global State ----
let earthGlobe = null;
let isEarthLoaded = false;

// ---- News Hotspots (Lat/Lon) ----
const NEWS_HOTSPOTS = [
    { name: 'Washington D.C.', lat: 38.9072, lng: -77.0369, size: 0.15, color: '#00f0ff' },
    { name: 'London', lat: 51.5074, lng: -0.1278, size: 0.12, color: '#8b5cf6' },
    { name: 'Paris', lat: 48.8566, lng: 2.3522, size: 0.1, color: '#00a1e0' },
    { name: 'Berlin', lat: 52.5200, lng: 13.4050, size: 0.1, color: '#003d7d' },
    { name: 'Doha', lat: 25.2854, lng: 51.5310, size: 0.12, color: '#d4a843' },
    { name: 'New Delhi', lat: 28.6139, lng: 77.2090, size: 0.15, color: '#ff0000' },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, size: 0.12, color: '#e50000' },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503, size: 0.15, color: '#0068b7' },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093, size: 0.1, color: '#00573f' },
    { name: 'Beijing', lat: 39.9042, lng: 116.4074, size: 0.12, color: '#d42d2d' },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708, size: 0.1, color: '#00f0ff' },
    { name: 'Iskenderun', lat: 36.5833, lng: 36.1667, size: 0.1, color: '#1a1a2e' }
];

// ============================================================
//  WORLD CLOCKS
// ============================================================
function updateClocks() {
    const zones = {
        'clock-ny': 'America/New_York',
        'clock-ldn': 'Europe/London',
        'clock-dub': 'Asia/Dubai',
        'clock-mum': 'Asia/Kolkata',
        'clock-tok': 'Asia/Tokyo'
    };

    for (const [elId, tz] of Object.entries(zones)) {
        const el = document.getElementById(elId);
        if (el) {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', {
                timeZone: tz,
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            el.textContent = timeStr;
        }
    }
}

setInterval(updateClocks, 1000);
updateClocks();

// ============================================================
//  NAVIGATION
// ============================================================
function initNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    
    // Update tab counts
    updateTabCounts();

    // Position the glow under the active tab
    positionNavGlow();

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            positionNavGlow();
            
            if (currentCategory === 'intel') {
                showIntelView();
            } else if (currentCategory === 'earth') {
                showEarthView();
            } else {
                showNewsView();
                renderChannels();
            }
        });
    });
}

function showIntelView() {
    grid.style.display = 'none';
    earthView.style.display = 'none';
    toolbar.style.display = 'none';
    intelView.style.display = 'block';
    
    if (!isMapLoaded) {
        initWindyMap();
    }
}

function showEarthView() {
    grid.style.display = 'none';
    intelView.style.display = 'none';
    toolbar.style.display = 'none';
    earthView.style.display = 'block';
    
    if (!isEarthLoaded) {
        initEarthMonitor();
    }
}

function showNewsView() {
    grid.style.display = 'grid';
    toolbar.style.display = 'flex';
    intelView.style.display = 'none';
    earthView.style.display = 'none';
    
    grid.classList.remove('view-grid', 'view-featured', 'view-single');
    grid.classList.add(`view-${currentView}`);
}

function initEarthMonitor() {
    if (typeof Globe === 'undefined') {
        console.warn('Globe library not yet ready. Retrying...');
        setTimeout(initEarthMonitor, 500);
        return;
    }

    isEarthLoaded = true;
    earthPointsEl.textContent = NEWS_HOTSPOTS.length;

    // Initialize Globe.gl
    earthGlobe = Globe()
        (globeContainer)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('#00f0ff')
        .atmosphereDaylightAlpha(0.1)
        .pointsData(NEWS_HOTSPOTS)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor('color')
        .pointAltitude('size')
        .pointRadius(0.5)
        .pointsMerge(true);

    // Dynamic rotation
    earthGlobe.controls().autoRotate = true;
    earthGlobe.controls().autoRotateSpeed = 0.5;

    // Handle resize
    window.addEventListener('resize', () => {
        if (earthGlobe) {
            earthGlobe.width(globeContainer.offsetWidth);
            earthGlobe.height(globeContainer.offsetHeight);
        }
    });

    // Initial size
    setTimeout(() => {
        earthGlobe.width(globeContainer.offsetWidth);
        earthGlobe.height(globeContainer.offsetHeight);
    }, 100);
}

function updateMasterClock() {
    if (!masterClock) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    masterClock.textContent = timeStr;
}

setInterval(updateMasterClock, 1000);
updateMasterClock();

// ============================================================
//  MARKET DATA (CRYPTO — CoinPaprika)
// ============================================================
async function fetchMarketData() {
    try {
        const coinIds = ['btc-bitcoin', 'eth-ethereum', 'sol-solana', 'xrp-xrp'];
        // Using Promise.allSettled to ensure failure of one coin doesn't break the whole ticker
        const results = await Promise.allSettled(
            coinIds.map(id => fetch(`https://api.coinpaprika.com/v1/tickers/${id}`).then(res => res.json()))
        );
        
        marketData = results
            .filter(r => r.status === 'fulfilled' && r.value && r.value.symbol)
            .map(r => r.value);
            
        if (marketData.length > 0) {
            renderMarketTicker();
        }
    } catch (err) {
        console.error('Market data fetch failed:', err);
        if (cryptoTickerTrack) cryptoTickerTrack.innerHTML = '<span class="ticker-item">MARKET SYNC OFFLINE</span>';
    }
}

function renderMarketTicker() {
    if (!cryptoTickerTrack || !marketData.length) return;
    
    const itemsHTML = marketData.map(coin => {
        const quote = coin.quotes && coin.quotes.USD;
        if (!quote) return '';
        
        const price = parseFloat(quote.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const change = quote.percent_change_24h || 0;
        const changeClass = change >= 0 ? 'up' : 'down';
        const changeSign = change >= 0 ? '+' : '';
        
        return `
            <div class="ticker-item">
                <span class="ticker-symbol">${coin.symbol}</span>
                <span class="ticker-price">${price}</span>
                <span class="ticker-change ${changeClass}">${changeSign}${change}%</span>
            </div>
        `;
    }).join('');
    
    cryptoTickerTrack.innerHTML = itemsHTML + itemsHTML;
}

// ============================================================
//  WEATHER DATA (ENV SENSORS)
// ============================================================
async function fetchWeatherData() {
    try {
        const lat = DEFAULT_LAT;
        const lon = DEFAULT_LON;
        
        // Fetch both current weather and 7-day forecast
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.current) {
            weatherData = data; // Store entire object
            renderWeatherPanel();
            renderWeatherForecast();
        }
    } catch (err) {
        console.error('Weather data fetch failed:', err);
    }
}

function renderWeatherPanel() {
    const instrumentation = document.getElementById('weather-instrumentation');
    if (!instrumentation || !weatherData) return;
    
    const cur = weatherData.current;
    const temp = Math.round(cur.temperature_2m);
    const humidity = cur.relative_humidity_2m;
    const wind = cur.wind_speed_10m.toFixed(1);
    const condition = getWeatherCondition(cur.weather_code);
    
    instrumentation.innerHTML = `
        <div class="weather-card">
            <span class="weather-label">SRI LANKA TEMP</span>
            <span class="weather-value">${temp}<span class="weather-unit">°C</span></span>
        </div>
        <div class="weather-card">
            <span class="weather-label">HUMIDITY</span>
            <span class="weather-value">${humidity}<span class="weather-unit">%</span></span>
        </div>
        <div class="weather-card">
            <span class="weather-label">WIND VELOCITY</span>
            <span class="weather-value">${wind}<span class="weather-unit">KM/H</span></span>
        </div>
        <div class="weather-card">
            <span class="weather-label">ATMOSPHERIC</span>
            <span class="weather-condition">${condition}</span>
        </div>
    `;
}

function renderWeatherForecast() {
    if (!weatherForecastEl || !weatherData || !weatherData.daily) return;
    
    const daily = weatherData.daily;
    let html = '';
    
    // Show next 3 days
    for (let i = 1; i <= 3; i++) {
        const date = new Date(daily.time[i]);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);
        const condition = getWeatherCondition(daily.weather_code[i]);
        
        html += `
            <div class="forecast-item">
                <span class="forecast-day">${dayName}</span>
                <span class="forecast-temp">${maxTemp}° / ${minTemp}°</span>
                <span class="forecast-desc">${condition}</span>
            </div>
        `;
    }
    
    weatherForecastEl.innerHTML = html;
}

function getWeatherCondition(code) {
    const codes = {
        0: 'CLEAR SKY',
        1: 'MAINLY CLEAR', 2: 'PARTLY CLOUDY', 3: 'OVERCAST',
        45: 'FOGGY', 48: 'DEPOSING RIME FOG',
        51: 'LIGHT DRIZZLE', 53: 'MODERATE DRIZZLE', 55: 'DENSE DRIZZLE',
        61: 'SLIGHT RAIN', 63: 'MODERATE RAIN', 65: 'HEAVY RAIN',
        71: 'SLIGHT SNOW', 73: 'MODERATE SNOW', 75: 'HEAVY SNOW',
        80: 'RAIN SHOWERS', 81: 'MODERATE SHOWERS', 82: 'VIOLENT SHOWERS',
        95: 'THUNDERSTORM', 96: 'STORM WITH HAIL'
    };
    return codes[code] || 'SCANNING...';
}

function updateTabCounts() {
    const counts = { all: CHANNELS.length };
    
    CHANNELS.forEach(ch => {
        ch.category.forEach(cat => {
            counts[cat] = (counts[cat] || 0) + 1;
        });
    });

    document.querySelectorAll('.tab-count').forEach(el => {
        const key = el.dataset.count;
        el.textContent = counts[key] || 0;
    });
}

function positionNavGlow() {
    const activeTab = document.querySelector('.nav-tab.active');
    if (!activeTab || !navGlow) return;
    
    const track = activeTab.parentElement;
    const trackRect = track.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    
    navGlow.style.left = (tabRect.left - trackRect.left) + 'px';
    navGlow.style.width = tabRect.width + 'px';
}

// ============================================================
//  VIEW SWITCHER
// ============================================================
function initViewSwitcher() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            
            grid.classList.remove('view-grid', 'view-featured', 'view-single');
            grid.classList.add(`view-${currentView}`);
        });
    });
}

// ============================================================
//  SEARCH
// ============================================================
function initSearch() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderChannels();
    });
}

// ============================================================
//  RENDER CHANNELS
// ============================================================
function getFilteredChannels() {
    let filtered = CHANNELS;

    // Category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(ch => ch.category.includes(currentCategory));
    }

    // Search filter
    if (searchQuery) {
        filtered = filtered.filter(ch =>
            ch.name.toLowerCase().includes(searchQuery) ||
            ch.region.toLowerCase().includes(searchQuery) ||
            ch.description.toLowerCase().includes(searchQuery)
        );
    }

    return filtered;
}

function renderChannels() {
    const filtered = getFilteredChannels();
    channelCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">📡</div>
                <h3>NO CHANNELS FOUND</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((ch, i) => createChannelCard(ch, i)).join('');

    // Attach event listeners
    filtered.forEach((ch, i) => {
        const card = document.getElementById(`card-${ch.id}`);
        if (!card) return;

        // Lazy load on placeholder click
        const placeholder = card.querySelector('.card-video-placeholder');
        if (placeholder) {
            placeholder.addEventListener('click', () => loadStream(ch));
        }

        // Expand button
        const expandBtn = card.querySelector('.card-expand-btn');
        if (expandBtn) {
            expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openFeatured(ch);
            });
        }
    });
}

function createChannelCard(ch, index) {
    const isLoaded = loadedIframes.has(ch.id);
    const delay = index * 0.06;
    const primaryCategory = ch.category[0];
    const categoryLabel = primaryCategory.charAt(0).toUpperCase() + primaryCategory.slice(1);

    return `
        <article class="channel-card" id="card-${ch.id}" style="animation-delay: ${delay}s">
            <div class="card-video-wrapper">
                ${isLoaded ? getIframeHTML(ch) : `
                    <div class="card-video-placeholder" data-id="${ch.id}">
                        <div class="placeholder-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                        </div>
                        <span class="placeholder-text">CLICK TO LOAD STREAM</span>
                    </div>
                `}
            </div>
            <div class="card-info">
                <div class="card-info-left">
                    <div class="card-logo" style="background: ${ch.color}">${ch.abbreviation}</div>
                    <div class="card-details">
                        <div class="card-name">${ch.name}</div>
                        <div class="card-region">${ch.region}</div>
                    </div>
                </div>
                <div class="card-info-right">
                    <span class="card-badge category">${categoryLabel}</span>
                    <span class="card-badge live">● LIVE</span>
                    <button class="card-expand-btn" title="Expand">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 3 21 3 21 9"/>
                            <polyline points="9 21 3 21 3 15"/>
                            <line x1="21" y1="3" x2="14" y2="10"/>
                            <line x1="3" y1="21" x2="10" y2="14"/>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    `;
}

function getIframeHTML(ch) {
    const src = `https://www.youtube.com/embed/${ch.youtubeVideoId}?autoplay=1&mute=1&rel=0&modestbranding=1`;
    return `<iframe 
        src="${src}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        loading="lazy"
        title="${ch.name} Live Stream"
    ></iframe>`;
}

function loadStream(ch) {
    loadedIframes.add(ch.id);
    const card = document.getElementById(`card-${ch.id}`);
    if (!card) return;

    const wrapper = card.querySelector('.card-video-wrapper');
    wrapper.innerHTML = getIframeHTML(ch);
}

// ============================================================
//  FEATURED PLAYER
// ============================================================
function openFeatured(ch) {
    featuredTitle.textContent = ch.name;
    featuredDesc.textContent = ch.description;
    
    const src = `https://www.youtube.com/embed/${ch.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`;
    featuredVideo.innerHTML = `<iframe src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="${ch.name}"></iframe>`;
    
    featuredOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFeatured() {
    featuredOverlay.style.display = 'none';
    featuredVideo.innerHTML = '';
    document.body.style.overflow = '';
}

featuredClose.addEventListener('click', closeFeatured);
featuredOverlay.addEventListener('click', (e) => {
    if (e.target === featuredOverlay) closeFeatured();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFeatured();
});

// ============================================================
//  FULLSCREEN
// ============================================================
document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen();
    }
});

// ============================================================
//  MUTE ALL (reload iframes without autoplay audio)
// ============================================================
document.getElementById('btn-mute-all').addEventListener('click', () => {
    const iframes = document.querySelectorAll('.card-video-wrapper iframe');
    iframes.forEach(iframe => {
        const src = iframe.src;
        if (src.includes('mute=0')) {
            iframe.src = src.replace('mute=0', 'mute=1');
        }
    });
});

// ============================================================
//  RESIZE HANDLER
// ============================================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(positionNavGlow, 150);
});

// ============================================================
//  INIT
// ============================================================
function init() {
    try {
        initNavigation();
        initViewSwitcher();
        initSearch();
        
        // Initial view setup
        const allTab = document.querySelector('[data-category="all"]');
        if (allTab) {
            allTab.classList.add('active');
            currentCategory = 'all';
            showNewsView();
            renderChannels();
            setTimeout(positionNavGlow, 500); // Wait for fonts/layout
        }
        
        // Market & Weather Initial Fetch
        fetchMarketData();
        fetchWeatherData();
        
        // Refresh Intervals
        setInterval(fetchMarketData, 60000); // 1 min
        setInterval(fetchWeatherData, 300000); // 5 mins
        
        console.log('World Monitor Mission Ready.');
    } catch (err) {
        console.error('Mission initialization fatal error:', err);
    }
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', positionNavGlow); // Backup for glow positioning
