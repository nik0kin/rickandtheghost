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
        color: "#ffffff",
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
      {src: "assets/scenes/scene1/background.png", id: "scene1-background"},

      //scene2
      {src: "assets/scenes/scene2/background.png", id: "scene2-background"},

      //scene4
      {src: "assets/scenes/scene4/background.png", id: "scene4-background"}
    ],

    //animations auto loaded if defined in animations.js

    sounds: [
    //background music
      {src: "assets/music/Haunted.ogg", id: "backgroundMusic", volume: .4},
      {src: "assets/music/Haunted1.ogg", id: "scene1", volume: .4},
      {src: "assets/music/Haunted2.ogg", id: "scene2", volume: .4},
      {src: "assets/music/office1.ogg", id: "scene4", volume:.2},

    //sound effects
      {src:"assets/sounds/transition.ogg", id:"startGameClick"},
      {src:"assets/sounds/Game-Death2.ogg", id:"continueButtonClick"},
      {src:"assets/sounds/Actionsfx.ogg", id:"objectSelectClick"},
      {src:"assets/sounds/Actionsfx2.ogg", id:"hauntOptionsClick"}
    ]
  };
});