const DownloadForm = document.getElementById("download-form");
DownloadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = e.target.url.value;
  format = "1080";
  download(url, format);
  document.getElementById("url-input").value = "";
});
const download = (url, format) => {
  const button = document.getElementById("download-button");
  button.style.padding = "0";
  button.style.backgroundColor = "#64C896";
  button.innerHTML = `<iframe style='height: 52px; width:100%; border: none; ' src="https://loader.to/api/button/?url=${url}&f=${format}"></iframe>`;
};

// # Video Downloader

// ## Features:
// * Download video from url
// * Supports video from Youtube, Facebook and most of the sites.

// ## Technologies used:
// * HTML, CSS, JavaScript, Ajax
