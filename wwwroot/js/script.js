var slideIndex=0;
carousel();

function carousel()
{
    var images= document.getElementsByClassName("slides");
    for(var i=0; i< images.length; i++) {
        images[i].style.opacity = 0;
    }
    slideIndex++;
    if(slideIndex > images.length) {
        slideIndex = 1;
    }
    images[slideIndex-1].style.opacity = 1;
    setTimeout(carousel, 2000);
}

function showDetails(type) {
    var currentOpacity = 0;
    var currentPrice;
    var prices = document.getElementsByClassName(type+"-price");
    if (prices.length) {
        currentPrice = prices[0];
        currentOpacity = currentPrice.style.opacity;
    }

    var allPrices = document.getElementsByClassName("price");
    for(var i=0; i< allPrices.length; i++) {
        allPrices[i].style.opacity = 0;
    }

    if(currentOpacity == 1){
        currentPrice.style.opacity = 0;
    } else {
        currentPrice.style.opacity = 1;
    }
    
}