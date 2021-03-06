/**
 * Created by niko on 12/14/13.
 *
 *  scene 2 definitions
 *    list of scene:
 *      - background
 *      - Scene Animations
 *        - location + animationID
 *      - objects
 *        - with actions list
 *          - ObjectAction
 *    RickAction State Animations:
 *      - list of transitions and oa animations
 *        - see Classes Doc
 *
*     http://www.json.org/
 *
 */


define(["Loader", "storys/RatG/scenes/scene4/script"],function(Loader, script){
  var scene4 = function (){
    var scene = {};

    scene.name = "Cubicle";

    scene.startFade = {r: 0, g: 0, b: 0, o: 0.5};

    scene.startingIdle = {
      spritesheet: Loader.getAnimation("rickglobal"),
      starting: "sitl",
      location: {x:514, y:200}
    };

    scene.music = "scene4";
    scene.background = {
      path: Loader.getStill("assets/scenes/scene4/background.png")
    };

    //Scene Animations
    //animations that are during the haunting phase
    //  or arent associated with timeblocks

    scene.animations = {};
    //cabinet (scene object animations don't need new locations <- what does this mean?)
    scene.animations["possessCabinet"] = {
      spritesheet: Loader.getAnimation("cabinet"),
      starting: "reaction-possess"
    };
    scene.animations["sortCabinet"] = {
      spritesheet: Loader.getAnimation("cabinet"),
      starting: "reaction-sort"
    };
    //motiv
    scene.animations["placeMotivGood"] = {
      spritesheet: Loader.getAnimation("motiv"),
      starting: "reaction-positive"
    };
    scene.animations["placeMotivBad"] = {
      spritesheet: Loader.getAnimation("motiv"),
      starting: "reaction-negative"
    };



    //Scene Objects (cabinet, calender, radio)
    scene.objects = {};

    //////////// CABINET /////////////
    scene.objects["cabinet"] = {
      tag: "cabinet",
      name: "Cabinet",
      clickBounds: {x:363, y:330, w:115, h:170},//to click it
      idleAnimation: {    
        spritesheet: Loader.getAnimation("cabinet"),
        starting: "idle",
        location: {x:270,y:200}
      },

      actionList: [
        { //action 1
          description: script["cabinet-button1"],
          meterStatAffected: {
            goodday: -4
          },
          postAnimation: scene.animations["possessCabinet"],  //from scene.animations, optional
          oaDef: {
            type: "animation",
            animation: {  //animation for during RickAction phase
              spritesheet: Loader.getAnimation("cabinet"),
              starting: "objectaction-open"
            },
            timerDef: {
              type: "rickdialog",
              location: {x: 290, y:150},
              offset: 100,  //timer
              script: script["cabinet-option1"],
              displayLength: 3000
            }
          }
        },
        { //action 2
          description: script["cabinet-button2"],
          meterStatAffected: {
            goodday: -8,
            suspense: +3
          },
          postAnimation: scene.animations["sortCabinet"],  //from scene.animations, optional
          oaDef: {
            type: "animation",
            animation: {  //animation for during RickAction phase
              spritesheet: Loader.getAnimation("cabinet"),
              starting: "objectaction-open"
            },
            timerDef: {
              type: "rickdialog",
              location: {x: 290, y:150},
              offset: 100,  //timer
              script: script["cabinet-option2"],
              displayLength: 3000
            }
          }
        },
        {//action 3
          description: script["cabinet-button3"],
          oaDef: {
            type: "animation",
            animation: {  //animation for during RickAction phase
              spritesheet: Loader.getAnimation("cabinet"),
              starting: "objectaction-open"
            },
            timerDef: {
              type: "rickdialog",
              location: {x: 290, y:150},
              offset: 100,  //timer
              script: script["cabinet-option3"],
              displayLength: 3000
            }
          }
        }
      ]
    };
    //////////// Motiv /////////////
    scene.objects["motiv"] = {
      tag: "motiv",
      name: "Motiv",
      clickBounds: {x:894, y:269, w:150, h:100},//to click it
      idleAnimation: {
        spritesheet: Loader.getAnimation("motiv"),
        starting: "idlenone",
        location: {x:820,y:200}
      },

      actionList: [
        { //action 1
          description: script["motiv-button1"],
          meterStatAffected: {
            goodday: -8,
            suspense: +3
          },
          postAnimation: scene.animations["placeMotivGood"],  //from scene.animations, optional
          oaDef: {//action def
            type: "wait",
            wait: 1000, //ms
            timerDef: [
              {
                type: "rickdialog",
                location: {x:645, y:150},
                offset: 100,  //timer
                script: script["motiv-option1"],
                displayLength: 3000
              }
            ]
          }
        },
        { //action 2
          description: script["motiv-button2"],
          meterStatAffected: {
            goodday: -5,
            suspense: +7,
            scared: +5
          },
          postAnimation: scene.animations["placeMotivBad"],  //from scene.animations, optional

          oaDef: {
            type: "wait",
            wait: 1000,
            timerDef: {
              type: "rickdialog",
              location: {x: 645, y:150},
              offset: 100,  //timer
              script: script["motiv-option2"],
              displayLength: 3000
            }
          }
        },
        {//action 3
          description: script["motiv-button3"],
          oaDef: {
            type: "wait",
            wait: 1000,
            timerDef: {
              type: "rickdialog",
              location: {x: 645, y:150},
              offset: 100,  //timer
              script: script["motiv-option3"],
              displayLength: 2000
            }
          }
        }

      ]
    };
    //////////// RADIO /////////////
    scene.objects["radio"] = {
      tag: "radio",
      name: "Radio",
      clickBounds: {x:627, y:179, w:57, h:61},//to click it
      idleAnimation: {
        spritesheet: Loader.getAnimation("radio"),
        starting: "idle",
        location: {x:505,y:87}
      },

      actionList: [
        { //action 1
          description: script["radio-button1"],
          meterStatAffected: {
            goodday: -2,
            suspense: +3,
            scared: +2
          },
          //postAnimation: scene.animations["markPoster"],  //from scene.animations, optional
          oaDef: {
            type: "wait",
            wait: 1000,
            timerDef: {
              type: "rickdialog",
              location: {x: 600, y:300},
              offset: 100,  //timer
              script: script["radio-option1"],
              displayLength: 3000
            }
          }
        },
        { //action 2
          description: script["radio-button2"],
          meterStatAffected: {
            goodday: +2,
            suspense: +2
          },//reaction-eggs
          //postAnimation: scene.animations["eggTheRadio"],  //from scene.animations, optional
          oaDef: {
            type: "wait",
            wait: 5000, //ms
            timerDef: {
              type: "rickdialog",
              location: {x: 400, y:300},
              offset: 100,  //timer
              script: script["radio-option2"],
              displayLength: 3000
            }
          }
        },
        {//action 3
          description: script["radio-button3"],
          oaDef: {
            type: "wait",
            wait: 1000, //ms
            timerDef: {
              type: "rickdialog",
              location: {x: 400, y:300},
              offset: 100,  //timer
              script: script["radio-option3"],
              displayLength: 3000
            }
          }
        }
      ]
    };

    //RickAction Phase Animations
    scene.animationTimeline = [];

    ///////////TIME BLOCKS/////////////
    scene.startSceneTimerDef = {
      type: "fade",
      desc: "pre-haunting fade",
      offset: 0,
      opaque: {
        start:1,
        stop:0
      },
      displayLength: 500
    };


    scene.animationTimeline.push({
      type: "intro",
      name: "getup from chair",
      facing: "left",

      introAnim: {
        spritesheet: Loader.getAnimation("rickglobal"),
        starting: "sitl",
        location: {x:514, y:200}
      }
    });

    scene.animationTimeline.push({
      type: "transition",
      //walking somewhere
      name: "walking from chair to cabinet",

      facing: "left",
      length: 300 //timelength til rick stops and goes to his idle


    });

    scene.animationTimeline.push({
      type: "oa", //objectaction animation
      tag: "cabinet"//link to scene.objects


    });

    scene.animationTimeline.push({
      type: "transition",
      //walking somewhere
      name: "walking from cabinet to radio",

      facing: "right",
      length: 300 //timelength til rick stops and goes to his idle


    });

    scene.animationTimeline.push({
      type: "oa", //objectaction animation
      tag: "radio" //link to scene.objects
    });

    scene.animationTimeline.push({
      type: "transition",
      //walking somewhere
      name: "walking from the radio to the motiv",

      facing: "right",
      length: 200 //timelength til rick stops and goes to his idle

    });

    scene.animationTimeline.push({
      type: "oa", //objectaction animation
      tag: "motiv",

      timerDef: {
        type: "fade",
        desc: "end fade",
        offset: 3000,
        opaque: {stop: 0},
        exit: true,
        displayLength: 1000
      }
    });

    return scene;
  }

  return scene4;
});