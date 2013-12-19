/**
 * List everything about an Animation here
 * - http://www.createjs.com/Docs/EaselJS/classes/SpriteSheet.html
 * Created by niko on 12/14/13.
 */



define([],function(){
  var animations = {}

  //spritesheet - http://www.createjs.com/Docs/EaselJS/classes/SpriteSheet.html

  //GLOBAL

  animations.rickglobal = {
    framerate: 33,
    images: ["assets/scenes/global/rickbase.png"],
    frames: {width: 300, height: 300, count: 210},
    animations: {
      idlel: {
        frames: [0]
      },
      idler: {
        frames: [1]
      },
      sitl: {
        frames: [2]
      },
      walkl: [10,39],
      walkr: [40,69],
      interactl: [70,99,"idlel"],
      interactr: [100,129,"idler"],
      knockdown: [130,144,"getup"],
      getup: [150,179,"idlel"],
      sitstand: [180,209,"idlel"]
    }
  };


  //A1S1

  animations.ricka1s1 = {
    framerate: 33,
    images: ["assets/scenes/a1s1/ricka1s1.png"],
    frames: {width: 300, height: 300, count: 40},
    animations: {
      sleep: {
        frames: [0,0, false]
      },
      awoke: [39],
      wakeup: [10,39,false,.2]
    }
  };

  //misc
  animations.windowrays = {
    framerate: 33,
    images: ["assets/scenes/a1s1/windowrays.png"],
    frames: {width: 280, height: 340, count: 1},
    animations: {
      idle: [0]
    }
  };

  //scene objects

  animations.alarmclock = {
    framerate: 33,
    images: ["assets/scenes/a1s1/alarmclock.png"],
    frames: {width: 300, height: 300, count: 90},
    animations: {
      idle: {
        frames: [0]
      },
      idlebroken: {
        frames: [1]
      },

      "reaction-activated": [10,39,"idle"],
      "reaction-broken": [40,54,"idlebroken"],
      "objectaction-interactl": [60,89,"idle"]

    }
  };

  animations["switch"] = {
    framerate: 33,
    images: ["assets/scenes/a1s1/switch.png"],
    frames: {width: 300, height: 300, count: 80},
    animations: {
      idleoff: {
        frames: [0]
      },
      idleon: {
        frames: [1]
      },
      idleoffbroken: {
        frames: [2]
      },
      idleonbroken: {
        frames: [3]
      },
      "reaction-break": [10,39,"idleoffbroken"],
      "objectaction-turnon":  [40,54,"idleon"],
      "objectaction-turnonbroken": [60,74,"idleonbroken"]
    }
  };

  animations.poster = {
    framerate: 33,
    images: ["assets/scenes/a1s1/poster.png"],
    frames: {width: 120, height: 250, count: 60},
    animations: {
      idlefold: {
        frames: [0]
      },
      idleunfold: {
        frames: [1]
      },
      idlemarked: {
        frames: [2]
      },
      "reaction-unfold": [10,24,"idleunfold"],
      "reaction-mark": [30,59,"idlemarked"]
    }
  };


  //A1S2

  animations.oatmeal = {
    framerate: 33,
    images: ["assets/scenes/a1s2/oatmeal.png"],
    frames: {width: 300, height: 300, count: 30},
    animations: {
      idle: {
        frames: [0]
      },
      "reaction-heat": [10,19,false],
      "reaction-cool": [20,29,false]
    }
  };

  animations.calendar = {
    framerate: 33,
    images: ["assets/scenes/a1s2/calendar.png"],
    frames: {width: 75, height: 140, count: 30},
    animations: {
      idle: {
        frames: [0]
      },
      "reaction-swap": [10,19,false],
      "reaction-mark": [20,29,false]
    }
  };

  
  animations.fridge = {
    framerate: 33,
    images: ["assets/scenes/a1s2/fridge.png"],
    frames: {width: 600, height: 300, count: 120},
    animations: {
      idle: {
        frames: [0]
      },
      "reaction-eggs": [10,24,"idle"],
      "objectaction-open": [30,44,false],
      "objectaction-openeggs": [50,64,false],
      "objectaction-attack": [70,119,false]
    }
  };
  

  //A1S3


  animations.faucet = {
    framerate: 33,
    images: ["assets/scenes/a1s3/faucet.png"],
    frames: {width: 300, height: 300, count: 100},
    animations: {
      idle: {
        frames: [0]
      },
      idlepuddle: {
        frames: [1]
      },

      "reaction-cover": [10,19,false],
      "reaction-on": [20,49,"idlepuddle"],
      "objectaction-slip": [50,65,"objectaction-getup"],
      "objectaction-getup": [70,99,"idlepuddle"]

    }
  };

  animations.garbage = {
    framerate: 33,
    images: ["assets/scenes/a1s3/garbage.png"],
    frames: {width: 300, height: 300, count: 50},
    animations: {
      idle: {
        frames: [0]
      },
      idleswap: {
        frames: [1]
      },
      "reaction-swap": [10,24,"idleswap"],
      "reaction-sort": [30,44,"idle"]
    }
  };
  
  animations.leaves = {
    framerate: 33,
    images: ["assets/scenes/a1s3/leaves.png"],
    frames: {width: 300, height: 500, count: 70},
    animations: {
      idle: {
        frames: [0]
      },
      idlenone: {
        frames: [1]
      },
      "objectaction-fallartful": [10,39,"idlenone"],
      "objectaction-fallattack": [40,69,false]
    }
  };


  //A2S1


  animations.cabinet = {
    framerate: 33,
    images: ["assets/scenes/a2s1/cabinet.png"],
    frames: {width: 300, height: 300, count: 170},
    animations: {
	  "idle": [0],
	  "idleopen": [1],
      "objectaction-open": [10,24,"idleopen"],
      "objectaction-close": [30,44,"idle"],
      "reaction-sort": [50,109,"idle"],
      "reaction-possess": [110,169,"idle"]
    }
  };

  animations.motiv = {
    framerate: 33,
    images: ["assets/scenes/a2s1/motiv.png"],
    frames: {width: 300, height: 300, count: 70},
    animations: {
      "idle": [0],
	  "idlealt": [1],
	  "idlenone": [2],
      "reaction-positive": [10,39,"idle"],
      "reaction-negative": [40,69,"idlealt"]
    }
  };
  
  animations.radio = {
    framerate: 33,
    images: ["assets/scenes/a2s1/radio.png"],
    frames: {width: 300, height: 300, count: 20},
    animations: {
      "idle": [0]
    }
  };

  
  //A3S1


  animations.bookshelf = {
    framerate: 33,
    images: ["assets/scenes/a3s1/bookshelf.png"],
    frames: {width: 300, height: 320, count: 70},
    animations: {
	  "idle": [0],
	  "idlesorted": [1],
	  "idleempty": [2],
      "reaction-sort": [10,39,"idlesorted"],
      "reaction-empty": [40,69,"idleempty"]
    }
  };

  animations.phone = {
    framerate: 33,
    images: ["assets/scenes/a3s1/phone.png"],
    frames: {width: 300, height: 300, count: 40},
    animations: {
      "idle": [0],
	  "idlebroken": [1],
      "objectaction-possess": [10,21,"idle"],
      "reaction-break": [30,39,"idlebroken"]
    }
  };
  
  animations.vent = {
    framerate: 33,
    images: ["assets/scenes/a3s1/vent.png"],
    frames: {width: 300, height: 300, count: 70},
    animations: {
      "idle": [0],
      "idlemarbles": [1],
      "idlerug": [2],
      "reaction-marbles": [10,39,"idlemarbles"],
      "reaction-rug": [40,69,"idlerug"]
    }
  };

                     /*
  var that = {};

  var spriteSheets = {};
  var loaded = false;

  that.loadAnimations = function (listToBeLoaded,callback){
    var total = 0;
    $.each(listToBeLoaded,function(index, value){
      if(!animations[name]){
        return;
      }
      if(spriteSheets[index].complete)
        return;//already loaded
      spriteSheets[index] = new createjs.SpriteSheet(value);

    });


    setTimeout(function(){

      do{
        var not = false;
        $.each(spriteSheets,function(index, value){
          if(!spriteSheets[index].complete)
            not = true;
        })
      }while(not);

      loaded = true;
      callback();
    },10);

  };

  that.get = function(name){
    throw "nooooooo";
  }

  return that;         */
  return animations;
});