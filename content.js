let enabled = true;

chrome.storage.sync.get(["modoIAEnabled"], (result) => {
    enabled = result.modoIAEnabled !== false; // padrão true
    if (enabled) hideModoIA();
});

function hideModoIA() {
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.olrp5b').forEach(el => {
            if (enabled) el.style.display = 'none';
            else el.style.display = '';
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.modoIAObserver = observer;
}

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && "modoIAEnabled" in changes) {
        enabled = changes.modoIAEnabled.newValue;
        if (window.modoIAObserver) {
            document.querySelectorAll('.olrp5b').forEach(el => {
                el.style.display = enabled ? 'none' : '';
            });
        }
    }
});
