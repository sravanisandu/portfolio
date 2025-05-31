$(document).ready(function () {
  $("#name, #hi").slideDown(1000);
  //Animate the main content after a timeout of 1 second which includes the nav elements, and the summary
  setTimeout(() => {
    $(".nav-ul").slideDown(1000).css("display", "flex");
    $("#quote").stop(true, true).animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      1000
    );
    $("#summary").stop(true, true).animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      1000
    );
  }, 1500);
  //Animate the profile image after the main content animation is complete
  setTimeout(() => {
    $(".profile>img").fadeIn(1000);
  }, 2500);

  // adding click events to the navigation bar elements(About, Contact and shop)
  $("#contact-link").click(function () {
    $("#contact-link").attr("href", "#contact");
    $(".page-footer").css("display", "flex");
    $(".social").css("display", "flex");
  });
  $("#about-link").click(function () {
    $("#about-link").attr("href", "#about");
    $(".about").fadeIn(1500).css("display", "flex");
  });
  $("#shop-link").click(function () {
    $("#shop-link").attr("href", "#shop");
    //On click of shop
    $(".shop").css("display", "flex");
    //Below code calls the jsonplaceholder url that returns a json array of objects containing about 500 photos out of which
    //using a for statement we only take the first 6 photos and display them by adding innerhtml to a div under Shop heading
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "get",
      dataType: "json",
      success: function (response) {
        var div = $("<div class='cards'></div>");
        for (var i = 0; i < 6; i++) {
          const url = response[i].url;
          var subDiv = $("<div class = 'products'></div>");
          var image =
            "<img src=" + url + " alt='Profile' class = 'product-images'>";
          var product_name = "Product " + response[i].id;
          var p = $("<p></p>").text(product_name);
          subDiv.append(image);
          subDiv.append(p);
          div.append(subDiv);
        }
        $(".cards-container").html(div);
      },
    });
  });
});
