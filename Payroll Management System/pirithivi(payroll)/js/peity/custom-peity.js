$(function(){$(".pie").peity("pie")}),$(function(){$(".donut").peity("donut")}),$(function(){var a=$(".updating-chart").peity("line",{width:240,height:48,stroke:"#e25a48",fill:!1,strokeWidth:5});setInterval(function(){var b=Math.round(5*Math.random()),c=a.text().split(",");c.shift(),c.push(b),a.text(c.join(",")).change()},500)}),$(function(){$(".gradientBar").peity("bar",{width:110,height:50,fill:function(a,b,c){var d=parseInt(b/c.length*255);return"rgb(234, "+d+", 100)"}})});