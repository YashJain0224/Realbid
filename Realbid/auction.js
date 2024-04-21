<script>
document.getElementById('liveAuctionLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var url = this.href; // Get the URL from the link
  var windowName = "liveAuctionWindow"; // A name for the new window
  var windowSize = "width=800,height=600"; // Specify the desired size (and other features) of the new window

  window.open(url, windowName, windowSize); // Open the new window
});
</script>
