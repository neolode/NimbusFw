'use strict';
/**
 * Nimbus framework
 * by Gabriel Rotar <neo.lode@gmail.com>
 */
//define NimbusSection constructor
function NimbusSection(members) {
    var section;
    this._h = {};//we could store event handlers in here to reduce nesting
    this.init = function () {};
    this.cram = function (stuffing) {
        for ( section in stuffing )
        {
            this[section] = stuffing[section];
        }
    };
    if(members){
        this.cram(members);
    }
}
var Nimbus = {};
//use Jquery document ready event for start-up
$(document).ready(function(){
    //start-up Nimbus
    for(var section in Nimbus)
    {
        if(Nimbus[section] instanceof NimbusSection){
            //console.log("Starting up: " + section);
            Nimbus[section].parent = Nimbus;
            Nimbus[section].init.call(Nimbus[section]);
        }
    }
});
//end Nimbus framework

//modules can be in the same file or as different js files

//Index section
Nimbus.index = new NimbusSection({
    tab: 'first', //misc fields added to the module when instancing
    tpl: {},
    render: {},
    init: function(){
        //make init part of the instantiation process
    }
});

//Viewer section
Nimbus.viewer = new NimbusSection({
    tab: 'second', //misc fields added to the module when instancing
    tpl: {},
    render: {}
});

//Auto run when starting up the framework
Nimbus.viewer.init = function() {

}

//some other method part of the same module
Nimbus.viewer.otherMethod = function() {

}

//About section
Nimbus.about = new NimbusSection({
    tab: 'third', //misc fields added to the module when instancing
    tpl: {},
    render: {}
});

//add more JSON format members to the module after instancing
Nimbus.about.cram({
    init: function(){

    },
    text: "Lorem ipsum..."
});