function loadScript(sources, callback) {
    Promise.allSettles(sources.map(src =>
    new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = resolve;
        script.onerror = reject;
    })))
    .then(() => callback());
}

