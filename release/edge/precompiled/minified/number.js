function Bb(a,b,c,d,e,g){var h=a.toFixed(20),i=h.search(/\./);h=h.search(/[1-9]/);i=i-h;if(i>0)i-=1;e=w.max(w.min((i/3).floor(),e===n?c.length:e),-d);d=c.charAt(e+d-1);if(i<-9){e=-3;b=i.abs()-9;d=c.slice(0,1)}return(a/(g?(2).pow(10*e):(10).pow(e*3))).round(b||0).format()+d.trim()}
E(u,n,n,{random:function(a,b){var c,d;if(arguments.length==1){b=a;a=0}c=w.min(a||0,K(b)?1:b);d=w.max(a||0,K(b)?1:b)+1;return pa(w.random()*(d-c)+c)}});
E(u,k,n,{log:function(a){return w.log(this)/(a?w.log(a):1)},abbr:function(a){return Bb(this,a,"kmbt",0,4)},metric:function(a,b){return Bb(this,a,"n\u03bcm kMGTPE",4,K(b)?1:b)},bytes:function(a,b){return Bb(this,a,"kMGTPE",0,K(b)?4:b,k)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(a){return this%a===0},format:function(a,b,c){var d,e,g,h="";if(K(b))b=",";if(K(c))c=".";d=(B(a)?
N(this,a||0).toFixed(w.max(a,0)):this.toString()).replace(/^-/,"").split(".");e=d[0];g=d[1];for(d=e.length;d>0;d-=3){if(d<e.length)h=b+h;h=e.slice(w.max(0,d-3),d)+h}if(g)h+=c+qa((a||0)-g.length,"0")+g;return(this<0?"-":"")+h},hex:function(a){return this.pad(a||1,n,16)},upto:function(a,b,c){return oa(this,a,b,c||1)},downto:function(a,b,c){return oa(this,a,b,-(c||1))},times:function(a){if(a)for(var b=0;b<this;b++)a.call(this,b);return this.toNumber()},chr:function(){return t.fromCharCode(this)},pad:function(a,
b,c){return O(this,a,b,c)},ordinalize:function(){var a=this.abs();a=parseInt(a.toString().slice(-2));return this+ra(a)},toNumber:function(){return parseFloat(this,10)}});H(u,k,n,"round,floor,ceil",function(a,b){a[b]=function(c){return N(this,c,b)}});H(u,k,n,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(a,b){a[b]=function(c,d){return w[b](this,c,d)}});
