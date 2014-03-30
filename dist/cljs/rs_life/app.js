// Compiled by ClojureScript 0.0-2156
goog.provide('rs_life.app');
goog.require('cljs.core');
goog.require('rs_life.core');
goog.require('cljs.core.async');
goog.require('rs_life.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
$("h1").text("Game of Life");
rs_life.app.render = (function render(board){var rows = d3.select(".game-of-life").selectAll("g").data(cljs.core.clj__GT_js.call(null,board));rows.enter().append("g").attr("transform",(function (d,i){return [cljs.core.str("translate(0, "),cljs.core.str((i * 15)),cljs.core.str(")")].join('');
}));
var circles = rows.selectAll("circle").data(cljs.core.identity);circles.enter().append("circle");
return circles.attr("r",5).attr("cx",(function (d,i){return (5 + (i * 15));
})).attr("cy",5).attr("class",(function (d){return new cljs.core.PersistentArrayMap(null, 2, [0,"dead",1,"live"], null).call(null,d);
}));
});
rs_life.app.game_state = cljs.core.atom.call(null,null);
cljs.core.add_watch.call(null,rs_life.app.game_state,new cljs.core.Keyword(null,"render","render",4374279432),(function (_,___$1,___$2,new_state){return rs_life.app.render.call(null,new_state);
}));
rs_life.app.start_state = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,0,0,0], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0,0,1,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1,0,0,1], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,0,0,0], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0,0,0,1], null)], null);
rs_life.app.new_game = (function new_game(){return cljs.core.reset_BANG_.call(null,rs_life.app.game_state,rs_life.app.start_state);
});
$(".game-reset").click(rs_life.app.new_game);
var c__5428__auto___8394 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5429__auto__ = (function (){var switch__5413__auto__ = (function (state_8378){var state_val_8379 = (state_8378[1]);if((state_val_8379 === 7))
{var inst_8369 = (state_8378[2]);var inst_8370 = cljs.core.swap_BANG_.call(null,rs_life.app.game_state,rs_life.core.next_generation);var state_8378__$1 = (function (){var statearr_8380 = state_8378;(statearr_8380[7] = inst_8369);
(statearr_8380[8] = inst_8370);
return statearr_8380;
})();var statearr_8381_8395 = state_8378__$1;(statearr_8381_8395[2] = null);
(statearr_8381_8395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8379 === 6))
{var inst_8374 = (state_8378[2]);var state_8378__$1 = state_8378;var statearr_8382_8396 = state_8378__$1;(statearr_8382_8396[2] = inst_8374);
(statearr_8382_8396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8379 === 5))
{var state_8378__$1 = state_8378;var statearr_8383_8397 = state_8378__$1;(statearr_8383_8397[2] = null);
(statearr_8383_8397[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8379 === 4))
{var inst_8367 = cljs.core.async.timeout.call(null,1000);var state_8378__$1 = state_8378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8378__$1,7,inst_8367);
} else
{if((state_val_8379 === 3))
{var inst_8376 = (state_8378[2]);var state_8378__$1 = state_8378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8378__$1,inst_8376);
} else
{if((state_val_8379 === 2))
{var state_8378__$1 = state_8378;if(true)
{var statearr_8384_8398 = state_8378__$1;(statearr_8384_8398[1] = 4);
} else
{var statearr_8385_8399 = state_8378__$1;(statearr_8385_8399[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8379 === 1))
{var state_8378__$1 = state_8378;var statearr_8386_8400 = state_8378__$1;(statearr_8386_8400[2] = null);
(statearr_8386_8400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5413__auto__){
return (function() {
var state_machine__5414__auto__ = null;
var state_machine__5414__auto____0 = (function (){var statearr_8390 = [null,null,null,null,null,null,null,null,null];(statearr_8390[0] = state_machine__5414__auto__);
(statearr_8390[1] = 1);
return statearr_8390;
});
var state_machine__5414__auto____1 = (function (state_8378){while(true){
var ret_value__5415__auto__ = (function (){try{while(true){
var result__5416__auto__ = switch__5413__auto__.call(null,state_8378);if(cljs.core.keyword_identical_QMARK_.call(null,result__5416__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5416__auto__;
}
break;
}
}catch (e8391){if((e8391 instanceof Object))
{var ex__5417__auto__ = e8391;var statearr_8392_8401 = state_8378;(statearr_8392_8401[5] = ex__5417__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8378);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5415__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8402 = state_8378;
state_8378 = G__8402;
continue;
}
} else
{return ret_value__5415__auto__;
}
break;
}
});
state_machine__5414__auto__ = function(state_8378){
switch(arguments.length){
case 0:
return state_machine__5414__auto____0.call(this);
case 1:
return state_machine__5414__auto____1.call(this,state_8378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5414__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5414__auto____0;
state_machine__5414__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5414__auto____1;
return state_machine__5414__auto__;
})()
;})(switch__5413__auto__))
})();var state__5430__auto__ = (function (){var statearr_8393 = f__5429__auto__.call(null);(statearr_8393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5428__auto___8394);
return statearr_8393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5430__auto__);
}));
rs_life.app.new_game.call(null);

//# sourceMappingURL=app.js.map