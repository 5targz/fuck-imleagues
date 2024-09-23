const adblockModalContainer = document.getElementsByClassName("adBlockModalContainer").item(0);
if (adblockModalContainer) {
    const adblockModalChangeListener = new MutationObserver(() => {
        const backdrop = adblockModalContainer.getElementsByClassName("modal-backdrop").item(0);
        const modal = document.getElementById("b-ad-modal");
        if (backdrop) {
            backdrop.remove();
            console.log("Blocked Backdrop");
        }
        if (modal) {
            modal.remove();
        }
        document.body.style.overflow = "auto";
    });
    adblockModalChangeListener.observe(adblockModalContainer, {childList: true, subtree: true});
}
