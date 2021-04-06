//This file contains a single util object that can be used for basic utility functions

var util = {

    //This function takes a youtube embed url (which can be obtained by right clicking a youtube video and selecting the embed option) 
    //and returns a div containing the embedded video
    embedVideo: function (url) {
        return `<iframe width="960" height="540" 
                  src="`+ url +` " 
                  title="Genki Study Resources" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>`;
      },

      //Temporary: This function will create buttons for all video lessons.
      subtitlesButton: function(){
        return `<div id="button" class="box-3">
                  <div id="sub" class="btn btn-three active">With Subtitle</div>
                  <div id="noSub" class="btn btn-three">Without Subtitle</div>
                </div>`;
      },

      changeVideo: function(){
        var header = document.getElementById("button");
          var btns = header.getElementsByClassName("btn");
          for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
              var current = document.getElementsByClassName("active");
              current[0].className = current[0].className.replace(" active", "");
              this.className += " active";

            });
          }
      }
};