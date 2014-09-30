var hashuery = function() {
        	_c = null;
            _h = window.location.hash.slice(1);
            cb = function(c) {
                console.log(c);
            };
            ccb = function() {
                console.log("onClear");
            };
            parse = function(hash) {
                var splt = hash.split("&");
                var c = new Object();
                var cr = null;
                for(l in splt){
                    cr = splt[l].split('=');
                    if (cr[0] != '')
                        c[cr[0]] = (cr[1] == undefined) ? true : cr[1];  
                }
                return c;
            };
            unparse = function(obj) {
                if(typeof obj != "object") {
                    console.error("This is not an object: ",obj)
                    return false;
                }

                var cr = '';
                for (j in obj) {
                    cr+= j.replace("&","")+'='+obj[j].replace("&","")+'&';
                }
                return cr.slice(0,-1);
            }
            var onChange = function(c) {
                cb = c;
            };
            chng = function () {
                _h = window.location.hash.slice(1);
                if(_h != '') {
                    _c = parse(_h);
                    cb(_c);
                }
            };
            chng();
            if ("onhashchange" in window) {
                window.onhashchange = chng;
            }
            var hitoryAllowed = ("history" in window);
        	var onClear = function(c) {ccb=c;};
        	var clear = function() {window.location.hash='';ccb();};
            var set = function(obj) {
                var un = unparse(obj);
                if(un != false)
                    window.location.hash = un;
            };
            var append = function(obj) {
                window.location.hash = _h+'&'+unparse(obj);
            };
            var get = function(){return _c;};

            return {
                set:set,
                get:get,
                clear:clear,
                append:append,
                onClear:onClear,
                onChange:onChange
            }
        };