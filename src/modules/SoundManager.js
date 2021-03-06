/**
 * SoundManager.js
 *
 * Created by niko on 12/29/13.
 */

define(["Loader"], function(Loader){

  var mute;
  var that = {};

  var bgMusicInstance;

  that.playSoundEffect = function(soundClipName){
    if(mute) return;

    console.log("playing SoundEffect: "+soundClipName);

    var instance = createjs.Sound.play(soundClipName);  // play using id.  Could also use full sourcepath or event.src.
    instance.addEventListener("complete", createjs.proxy(function(){
      console.log("soundEffectEnded: "+soundClipName);
      instance = null;
    }, this));
    instance.volume = 0.8;
  };

  //would be used for scenes and
  that.playBackgroundMusic = function(musicClipName){
    if(mute) return;

    var resourceInfo = Loader.getResourceInfo({resourceName: musicClipName});

    if (!resourceInfo || resourceInfo.type !== "sound")
      throw "resource doesn't exist";

    var volume = resourceInfo.volume || .2;
    var instance = createjs.Sound.play(musicClipName, createjs.Sound.INTERRUPT_ANY, 0, 0, -1, volume, 0);

    bgMusicInstance = instance;
    console.log("playing background music: "+musicClipName);
  };

  //pauses background music if any is playing
  that.pauseBackgroundMusic = function(){
    if(bgMusicInstance) bgMusicInstance.pause();
  };

  that.stopBackgroundMusic = function(){
    if(bgMusicInstance) bgMusicInstance.stop();
    bgMusicInstance = null;
  };

  that.loadMuteSettings = function(){
    mute = false;
    //TODO load from local settings
  };

  that.toggleMute = function(){
    that.setMute(!mute);
  };
  that.setMute = function(enabled){
    mute = enabled;

    if(mute){
      if(bgMusicInstance)
        bgMusicInstance.pause();//kill bgMusicInstance?
    } else {
      if (bgMusicInstance)
        bgMusicInstance.play();
    }

  };

  that.loadMuteSettings();

  return that;
});