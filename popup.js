const toggle = document.getElementById("toggleModoIA");

// Pega estado atual
chrome.storage.sync.get(["modoIAEnabled"], (result) => {
    toggle.checked = result.modoIAEnabled !== false;
});

// Ao mudar o toggle, atualiza o storage
toggle.addEventListener("change", () => {
    chrome.storage.sync.set({ modoIAEnabled: toggle.checked });
});
