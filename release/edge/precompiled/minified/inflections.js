var Gb=[],Hb=[],Y=[],Ib=[],Jb={},Kb,Z;function Lb(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}
function Mb(a,b,c){D(b)&&Lb(Y,b);Lb(Y,c);a.unshift({ma:b,sa:c})}function Nb(a,b){return a==b||a=="all"||!a}function Ob(a){return Y.some(function(b){return(new q("\\b"+b+"$","i")).test(a)})}function Pb(a,b){a=D(a)?a.toString():"";return a.isBlank()||Ob(a)?a:Qb(a,b?Gb:Hb)}function Qb(a,b){H(b,function(c,d){if(a.match(d.ma)){a=a.replace(d.ma,d.sa);return m}});return a}function Rb(a){return a.replace(/^\W*[a-z]/,function(b){return b.toUpperCase()})}
Z={acronym:function(a){Jb[a.toLowerCase()]=a;a=o.keys(Jb).map(function(b){return Jb[b]});Z.acronymRegExp=q(a.join("|"),"g")},plural:function(a,b){Mb(Gb,a,b)},singular:function(a,b){Mb(Hb,a,b)},irregular:function(a,b){var c=a.first(),d=a.from(1),e=b.first(),f=b.from(1),g=e.toUpperCase(),j=e.toLowerCase(),i=c.toUpperCase(),h=c.toLowerCase();Lb(Y,a);Lb(Y,b);if(i==g){Z.plural(new q("({1}){2}$".assign(c,d),"i"),"$1"+f);Z.plural(new q("({1}){2}$".assign(e,f),"i"),"$1"+f);Z.singular(new q("({1}){2}$".assign(e,
f),"i"),"$1"+d)}else{Z.plural(new q("{1}{2}$".assign(i,d)),g+f);Z.plural(new q("{1}{2}$".assign(h,d)),j+f);Z.plural(new q("{1}{2}$".assign(g,f)),g+f);Z.plural(new q("{1}{2}$".assign(j,f)),j+f);Z.singular(new q("{1}{2}$".assign(g,f)),i+d);Z.singular(new q("{1}{2}$".assign(j,f)),h+d)}},uncountable:function(a){var b=p.isArray(a)?a:G(arguments);Y=Y.concat(b)},human:function(a,b){Ib.unshift({ma:a,sa:b})},clear:function(a){if(Nb(a,"singulars"))Hb=[];if(Nb(a,"plurals"))Gb=[];if(Nb(a,"uncountables"))Y=[];
if(Nb(a,"humans"))Ib=[];if(Nb(a,"acronyms"))Jb={}}};Kb=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"];Z.plural(/$/,"s");Z.plural(/s$/gi,"s");Z.plural(/(ax|test)is$/gi,"$1es");Z.plural(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1i");Z.plural(/(census|alias|status)$/gi,"$1es");Z.plural(/(bu)s$/gi,"$1ses");Z.plural(/(buffal|tomat)o$/gi,"$1oes");Z.plural(/([ti])um$/gi,"$1a");Z.plural(/([ti])a$/gi,"$1a");
Z.plural(/sis$/gi,"ses");Z.plural(/f+e?$/gi,"ves");Z.plural(/(cuff|roof)$/gi,"$1s");Z.plural(/([ht]ive)$/gi,"$1s");Z.plural(/([^aeiouy]o)$/gi,"$1es");Z.plural(/([^aeiouy]|qu)y$/gi,"$1ies");Z.plural(/(x|ch|ss|sh)$/gi,"$1es");Z.plural(/(matr|vert|ind)(?:ix|ex)$/gi,"$1ices");Z.plural(/([ml])ouse$/gi,"$1ice");Z.plural(/([ml])ice$/gi,"$1ice");Z.plural(/^(ox)$/gi,"$1en");Z.plural(/^(oxen)$/gi,"$1");Z.plural(/(quiz)$/gi,"$1zes");Z.plural(/(phot|cant|hom|zer|pian|portic|pr|quart|kimon)o$/gi,"$1os");
Z.plural(/(craft)$/gi,"$1");Z.plural(/([ft])[eo]{2}(th?)$/gi,"$1ee$2");Z.singular(/s$/gi,"");Z.singular(/([pst][aiu]s)$/gi,"$1");Z.singular(/([aeiouy])ss$/gi,"$1ss");Z.singular(/(n)ews$/gi,"$1ews");Z.singular(/([ti])a$/gi,"$1um");Z.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/gi,"$1$2sis");Z.singular(/(^analy)ses$/gi,"$1sis");Z.singular(/(i)(f|ves)$/i,"$1fe");Z.singular(/([aeolr]f?)(f|ves)$/i,"$1f");Z.singular(/([ht]ive)s$/gi,"$1");Z.singular(/([^aeiouy]|qu)ies$/gi,"$1y");
Z.singular(/(s)eries$/gi,"$1eries");Z.singular(/(m)ovies$/gi,"$1ovie");Z.singular(/(x|ch|ss|sh)es$/gi,"$1");Z.singular(/([ml])(ous|ic)e$/gi,"$1ouse");Z.singular(/(bus)(es)?$/gi,"$1");Z.singular(/(o)es$/gi,"$1");Z.singular(/(shoe)s?$/gi,"$1");Z.singular(/(cris|ax|test)[ie]s$/gi,"$1is");Z.singular(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1us");Z.singular(/(census|alias|status)(es)?$/gi,"$1");Z.singular(/^(ox)(en)?/gi,"$1");Z.singular(/(vert|ind)(ex|ices)$/gi,"$1ex");
Z.singular(/(matr)(ix|ices)$/gi,"$1ix");Z.singular(/(quiz)(zes)?$/gi,"$1");Z.singular(/(database)s?$/gi,"$1");Z.singular(/ee(th?)$/gi,"oo$1");Z.irregular("person","people");Z.irregular("man","men");Z.irregular("child","children");Z.irregular("sex","sexes");Z.irregular("move","moves");Z.irregular("save","saves");Z.irregular("save","saves");Z.irregular("cow","kine");Z.irregular("goose","geese");Z.irregular("zombie","zombies");Z.uncountable("equipment,information,rice,money,species,series,fish,sheep,jeans".split(","));
F(t,k,m,{pluralize:function(){return Pb(this,k)},singularize:function(){return Pb(this,m)},humanize:function(){var a=Qb(this,Ib);a=a.replace(/_id$/g,"");a=a.replace(/(_)?([a-z\d]*)/gi,function(b,c,d){return(c?" ":"")+(Jb[d]||d.toLowerCase())});return Rb(a)},titleize:function(){var a=/[.:;!]$/,b,c,d;return this.spacify().humanize().words(function(e,f,g){b=a.test(e);d=f==0||f==g.length-1||b||c;c=b;return d||Kb.indexOf(e)===-1?Rb(e):e}).join(" ")},parameterize:function(a){var b=this;if(a===undefined)a=
"-";if(b.normalize)b=b.normalize();b=b.replace(/[^a-z0-9\-_]+/gi,a);if(a)b=b.replace(new q("^{sep}+|{sep}+$|({sep}){sep}+".assign({sep:S(a)}),"g"),"$1");return encodeURI(b.toLowerCase())}});t.Inflector=Z;t.Inflector.acronyms=Jb;
