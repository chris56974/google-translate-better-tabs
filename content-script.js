window.addEventListener('load', () => {
  let prevUrl = 'https://translate.google.com/';

  const observer = new MutationObserver((_) => {
    if (location.href !== prevUrl) {
      prevUrl = location.href;
      const [sourceLang, targetLang] = parseLangsFromUrl(location.href)
      updateTitleWithLangs(sourceLang, targetLang)
    }
  });

  const config = { subtree: true, childList: true };
  observer.observe(document, config);

  function parseLangsFromUrl(stringUrl) {
    const urlObject = new URL(stringUrl)
    return [urlObject.searchParams.get('sl'), urlObject.searchParams.get('tl')]
  }

  function updateTitleWithLangs(sourceLang, targetLang) {
    document.title = `${sourceLang} ⮂ ${targetLang}`
  }
})