/**
 * assets.js for Rick and the Ghost
 *
 * Created by niko on 12/29/13.
 */

define(function(){
  return {
    fonts: {
      "rickDialog": {
        fontFamily: "RBNo2",
        color: "#ff7700",
        size: 26
      },

      "hauntObjectOptions": {
        fontFamily: "RBNo2",
        color: "#ffffff",
        size: 24
      }
    },
    //stuff that has to be loaded

    whenLoad: "allatbeginning", //NYI (placeholder)

    stills: [
      //menu/goal ui
      {src: "assets/start/startbackground.png", id: "startbackground"},
      {src: "assets/start/startSuspicionLow.png", id: "startSuspicionLow"},
      {src: "assets/end/endneutral.png", id: "endneutral"},

      //scene ui
      {src: "assets/ui/lowerbar.png", id: "lowerbar"},
      {src: "assets/ui/option-dash.png", id: "option-dash"},
      {src: "assets/ui/arrow0.png", id: "arrow0"},

      {src: "assets/ui/state-haunting.png", id: "state-haunting"},
      {src: "assets/ui/state-recording.png", id: "state-recording"},

      //scene1
      {src: "assets/scenes/a1s1/background.png", id: "scene1-background"},

      //scene2
      {src: "assets/scenes/a1s2/background.png", id: "scene2-background"},

      //scene4
      {src: "assets/scenes/a2s1/background.png", id: "scene4-background"}
    ],

    //animations auto loaded if defined in animations.js

    sounds: [
      {src:"assets/sounds/Game-Death.ogg", id:"hauntOptionsClick"}
    ]
  };
});