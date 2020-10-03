$(document).ready(function(){

    var counter = 1;
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
        var element = document.getElementById("desc");
        var elementTitle = document.getElementById("descTitle");
            counter++;
            console.log(counter);
            if(counter == 2){
                elementTitle.innerHTML = "ASIA PACIFIC LEAGUE";
                element.innerHTML = "As unveiled during the Six Invitational 2020, a major update is coming to the Tom Clancy’s Rainbow Six Siege’s esports programs. The four existing regions – Europe, North America, Latin America and Asia-Pacific – will now run in parallel their dedicated regional programs, all leading to the Six Invitational, the pinnacle of the Rainbow Six competitive year. For Asia-Pacific, the action starts on June 23, with the first playday of the new Asia-Pacific League, and more specifically of the North Division. As we get ready for this next chapter of Rainbow Six Esports Asia-Pacific, let’s review the key changes that you can expect.";
                counter = 2;
            }
            if(counter >= 3){
              elementTitle.innerHTML = "UNVEILING THE RAINBOW SIX CLASSICS";
              element.innerHTML = "ini description 3 buat judul 3To sunset 4 years of highly competitive Rainbow Six Pro League and celebrate the entry into the next chapter of Rainbow Six Esports, pro players from iconic pro teams will join current or former teammates to compete. Once more, pro players will compete online with some of the historical settings of the game, such as playing with the historically accurate list of Operators available at the time of the original matches. ";
              counter = 3;
            }
        
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
        var element = document.getElementById("desc");
        var elementTitle = document.getElementById("descTitle");
        counter--;
        if(counter == 1){
            elementTitle.innerHTML = "Master Siege with Gameplan: Share Your Video Guides Today";
            element.innerHTML = "Master Your Game with Gameplan, available now for Rainbow Six Siege. Gameplan is a part of the Ubisoft web ecosystem and can help you level up your game by efficiently filtering through YouTube videos for you. The Gameplan system is streamlined to deliver quality content relevant to your needs making it fast and easy to find walkthroughs, tips & tricks, and other helpful content! ";
            counter = 1;
        }
        if(counter == 2){
          elementTitle.innerHTML = "ASIA PACIFIC LEAGUE";
          element.innerHTML = "As unveiled during the Six Invitational 2020, a major update is coming to the Tom Clancy’s Rainbow Six Siege’s esports programs. The four existing regions – Europe, North America, Latin America and Asia-Pacific – will now run in parallel their dedicated regional programs, all leading to the Six Invitational, the pinnacle of the Rainbow Six competitive year. For Asia-Pacific, the action starts on June 23, with the first playday of the new Asia-Pacific League, and more specifically of the North Division. As we get ready for this next chapter of Rainbow Six Esports Asia-Pacific, let’s review the key changes that you can expect.";
          counter = 2;
        }
        if(counter >= 3){
            elementTitle.innerHTML = "UNVEILING THE RAINBOW SIX CLASSICS";
            element.innerHTML = "ini description 3 buat judul 3To sunset 4 years of highly competitive Rainbow Six Pro League and celebrate the entry into the next chapter of Rainbow Six Esports, pro players from iconic pro teams will join current or former teammates to compete. Once more, pro players will compete online with some of the historical settings of the game, such as playing with the historically accurate list of Operators available at the time of the original matches. ";
            counter = 3;
        }
      }
    });
  });



window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 