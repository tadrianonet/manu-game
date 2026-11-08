export class Music {
 ctx?:AudioContext; muted=false; timer?:number; step=0;
 start(){this.ctx??=new AudioContext();void this.ctx.resume();if(!this.timer)this.timer=window.setInterval(()=>{if(document.hidden)return;const notes=[523,659,784,659,587,698,880,698,659,784,988,784,587,698,784,587];this.tone(notes[this.step%16],.32,.035);if(this.step%4===0)this.tone([262,294,330,294][Math.floor(this.step/4)%4],1.2,.025);this.step++},350)}
 tone(freq:number,duration=.15,volume=.07){if(!this.ctx||this.muted||document.hidden)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(0,this.ctx.currentTime);g.gain.linearRampToValueAtTime(volume,this.ctx.currentTime+.02);g.gain.exponentialRampToValueAtTime(.0001,this.ctx.currentTime+duration);o.connect(g);g.connect(this.ctx.destination);o.start();o.stop(this.ctx.currentTime+duration+.02)}
 toggle(){this.muted=!this.muted;if(this.ctx)void(this.muted?this.ctx.suspend():this.ctx.resume());return this.muted}
}
