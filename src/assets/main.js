const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCgruoFs2kN2SFUZ3K7CkLog&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8a110128e8msh409033a26fd2ab4p1b819bjsn27236e1f5b7d',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

/**Esta es la sintaxis de una funcion que se llama asi misma, esto con el fin de que secarge apenas se ejecuta la app.*/
(async () => {
    try {
        const videos = await fetchData(API, options);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="blank">
        <div class="group relative">
            <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        </a>
        `).slice(0,8).join('')}
        
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
        
    }
})();

// try {
//     const apiUrl = new URL(url);
//     const response = await fetch(apiUrl);
//     const data = response.json();
//     return data;
// } catch {
//     throw new Error('Something was wrong');
// }