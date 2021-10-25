import $ from "jquery";
import 'bootstrap';
import '../scss/styles.scss';
import 'jquery';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';




// Navbar

var icon = document.querySelector("#icon");
var logo = document.querySelector("#logo");
var body = document.querySelector("body");
logo.src = "https://www.leonoliver.com/img/logo-bookmark.svg";  
icon.addEventListener('click', function() {
    if(!icon.classList.contains("close")) {
        icon.classList.add("close");
        icon.src = "https://www.leonoliver.com/img/icon-close.svg";
        logo.src = "https://www.leonoliver.com/img/logo-white.svg";
        body.classList.add("fixed");
       
    }else{
        icon.src = "https://www.leonoliver.com/img/icon-hamburger.svg";
        logo.src = "https://www.leonoliver.com/img/logo-bookmark.svg";  
        icon.classList.remove("close");
        body.classList.remove("fixed");
    }
});

// Validate Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
    $("#email").css("border", "");
    $result.removeClass("result");
    // $result.css("padding", "");
    // $result.css("display", "none");
    //   $result.text(email + " is valid :)");
    //   $result.css("color", "green");
    } else {
    $result.text("Whoops, make sure it's an email");
    $("#email").css("border", "2px solid red");

    // $result.css("background", "red");
    // $result.css("color", "white");
    // $result.css("height", "30px");
    // $result.css("padding", "5px");
    // $result.css("display", "block");
    // $result.css("margin-bottom", "5px");
    $result.addClass("result");
    //   $result.text(email + " is not valid :(");
   
    }
    return false;
  }

  $("#email").on("input", validate);


//   Features
var navlinks = Array.from(document.querySelectorAll("ul.head-links"));
var featureTitle = document.querySelector(".feature-section_title");
var featureParagraph = document.querySelector(".feature-section_paragraph");
var featuresectionImage = document.querySelector(".feature-section_image");
console.log(featuresectionImage);


  navlinks.forEach(function(element) {
      element.addEventListener('click', function(e){
        console.log(e.target.innerHTML);
        var link = e.target.innerHTML;
        
        switch(link){
            case 'Simple Bookmarking':
                featureTitle.textContent = "Bookmark in one click";
                featureParagraph.textContent = "Organize your bookmark however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
                featuresectionImage.src = "https://www.leonoliver.com/img/illustration-features-tab-1.svg";
                break;
            case 'Speedy Searching':
                featureTitle.textContent = "Intelligent search";
                featureParagraph.textContent = "Our powerful search feature will help you find saved sites in no time at all . No need to trawl through all of your bookmarks.";
                featuresectionImage.src = "https://www.leonoliver.com/img/illustration-features-tab-2.svg";
                break;
            case 'Easy Sharing':
                    featureTitle.textContent = "Share your bookmarks";
                    featureParagraph.textContent = "Easily your boomarks and collections with others. Create a shareable link that you can send at the click of a button.";
                    featuresectionImage.src = "https://www.leonoliver.com/img/illustration-features-tab-3.svg";
                break;
        }

      });
  });




