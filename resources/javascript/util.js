//This file contains a single util object that can be used for basic utility functions

var util = {

    //This function takes a youtube embed url (which can be obtained by right clicking a youtube video and selecting the embed option) 
    //and returns a div containing the embedded video
    embedVideo: function (url) {
        return `
                <iframe 
                  class = "frame"
                  src="` + url + ` " 
                  title="Genki Study Resources" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>`;
    }

};