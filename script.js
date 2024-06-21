const searchBar = document.getElementById('search-bar');
const videoList = document.getElementById('video-list').getElementsByClassName('video-item');

searchBar.addEventListener('input', function() {
    const searchQuery = searchBar.value.toLowerCase();

    Array.from(videoList).forEach(function(video) {
        const videoTitle = video.getElementsByTagName('iframe')[0].title.toLowerCase();

        if (videoTitle.includes(searchQuery)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
});
