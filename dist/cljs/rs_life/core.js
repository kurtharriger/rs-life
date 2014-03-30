// Compiled by ClojureScript 0.0-2156
goog.provide('rs_life.core');
goog.require('cljs.core');
rs_life.core.valid_index_QMARK_ = (function valid_index_QMARK_(row_size,col_size,row,col){return ((row >= 0)) && ((col >= 0)) && ((row < row_size)) && ((col < col_size));
});
rs_life.core.get_neighbouring_indecies = (function get_neighbouring_indecies(p__4716,p__4717){var vec__4730 = p__4716;var row_size = cljs.core.nth.call(null,vec__4730,0,null);var col_size = cljs.core.nth.call(null,vec__4730,1,null);var vec__4731 = p__4717;var row = cljs.core.nth.call(null,vec__4731,0,null);var col = cljs.core.nth.call(null,vec__4731,1,null);if(rs_life.core.valid_index_QMARK_.call(null,row_size,col_size,row,col))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-index?","valid-index?",229020247,null),new cljs.core.Symbol(null,"row-size","row-size",-1642997299,null),new cljs.core.Symbol(null,"col-size","col-size",1964698087,null),new cljs.core.Symbol(null,"row","row",-1640418413,null),new cljs.core.Symbol(null,"col","col",-1640432839,null))))].join('')));
}
return cljs.core.filter.call(null,(function (p__4732){var vec__4733 = p__4732;var new_row = cljs.core.nth.call(null,vec__4733,0,null);var new_col = cljs.core.nth.call(null,vec__4733,1,null);return rs_life.core.valid_index_QMARK_.call(null,row_size,col_size,new_row,new_col);
}),(function (){var iter__4024__auto__ = (function iter__4734(s__4735){return (new cljs.core.LazySeq(null,(function (){var s__4735__$1 = s__4735;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4735__$1);if(temp__4092__auto__)
{var s__4735__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4735__$2))
{var c__4022__auto__ = cljs.core.chunk_first.call(null,s__4735__$2);var size__4023__auto__ = cljs.core.count.call(null,c__4022__auto__);var b__4737 = cljs.core.chunk_buffer.call(null,size__4023__auto__);if((function (){var i__4736 = 0;while(true){
if((i__4736 < size__4023__auto__))
{var vec__4740 = cljs.core._nth.call(null,c__4022__auto__,i__4736);var row_delta = cljs.core.nth.call(null,vec__4740,0,null);var col_delta = cljs.core.nth.call(null,vec__4740,1,null);cljs.core.chunk_append.call(null,b__4737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + row_delta),(col + col_delta)], null));
{
var G__4742 = (i__4736 + 1);
i__4736 = G__4742;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4737),iter__4734.call(null,cljs.core.chunk_rest.call(null,s__4735__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4737),null);
}
} else
{var vec__4741 = cljs.core.first.call(null,s__4735__$2);var row_delta = cljs.core.nth.call(null,vec__4741,0,null);var col_delta = cljs.core.nth.call(null,vec__4741,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + row_delta),(col + col_delta)], null),iter__4734.call(null,cljs.core.rest.call(null,s__4735__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4024__auto__.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null));
})());
});
rs_life.core.get_board_size = (function get_board_size(game_board){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,game_board),cljs.core.count.call(null,cljs.core.first.call(null,game_board))], null);
});
rs_life.core.get_value_at = (function get_value_at(game_matrix,p__4743){var vec__4745 = p__4743;var row = cljs.core.nth.call(null,vec__4745,0,null);var col = cljs.core.nth.call(null,vec__4745,1,null);return cljs.core.nth.call(null,cljs.core.nth.call(null,game_matrix,row),col);
});
rs_life.core.count_neighbours_at_pos = (function count_neighbours_at_pos(game_board,pos){return cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__4024__auto__ = (function iter__4750(s__4751){return (new cljs.core.LazySeq(null,(function (){var s__4751__$1 = s__4751;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4751__$1);if(temp__4092__auto__)
{var s__4751__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4751__$2))
{var c__4022__auto__ = cljs.core.chunk_first.call(null,s__4751__$2);var size__4023__auto__ = cljs.core.count.call(null,c__4022__auto__);var b__4753 = cljs.core.chunk_buffer.call(null,size__4023__auto__);if((function (){var i__4752 = 0;while(true){
if((i__4752 < size__4023__auto__))
{var pos__$1 = cljs.core._nth.call(null,c__4022__auto__,i__4752);cljs.core.chunk_append.call(null,b__4753,rs_life.core.get_value_at.call(null,game_board,pos__$1));
{
var G__4754 = (i__4752 + 1);
i__4752 = G__4754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4753),iter__4750.call(null,cljs.core.chunk_rest.call(null,s__4751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4753),null);
}
} else
{var pos__$1 = cljs.core.first.call(null,s__4751__$2);return cljs.core.cons.call(null,rs_life.core.get_value_at.call(null,game_board,pos__$1),iter__4750.call(null,cljs.core.rest.call(null,s__4751__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4024__auto__.call(null,rs_life.core.get_neighbouring_indecies.call(null,rs_life.core.get_board_size.call(null,game_board),pos));
})());
});
rs_life.core.get_neighbour_counts = (function get_neighbour_counts(game_board){var vec__4762 = rs_life.core.get_board_size.call(null,game_board);var row_size = cljs.core.nth.call(null,vec__4762,0,null);var col_size = cljs.core.nth.call(null,vec__4762,1,null);return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,col_size,(function (){var iter__4024__auto__ = (function iter__4763(s__4764){return (new cljs.core.LazySeq(null,(function (){var s__4764__$1 = s__4764;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4764__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var row = cljs.core.first.call(null,xs__4579__auto__);var iterys__4020__auto__ = ((function (s__4764__$1,row,xs__4579__auto__,temp__4092__auto__){
return (function iter__4765(s__4766){return (new cljs.core.LazySeq(null,((function (s__4764__$1,row,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4766__$1 = s__4766;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4766__$1);if(temp__4092__auto____$1)
{var s__4766__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4766__$2))
{var c__4022__auto__ = cljs.core.chunk_first.call(null,s__4766__$2);var size__4023__auto__ = cljs.core.count.call(null,c__4022__auto__);var b__4768 = cljs.core.chunk_buffer.call(null,size__4023__auto__);if((function (){var i__4767 = 0;while(true){
if((i__4767 < size__4023__auto__))
{var col = cljs.core._nth.call(null,c__4022__auto__,i__4767);cljs.core.chunk_append.call(null,b__4768,rs_life.core.count_neighbours_at_pos.call(null,game_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
{
var G__4769 = (i__4767 + 1);
i__4767 = G__4769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4768),iter__4765.call(null,cljs.core.chunk_rest.call(null,s__4766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4768),null);
}
} else
{var col = cljs.core.first.call(null,s__4766__$2);return cljs.core.cons.call(null,rs_life.core.count_neighbours_at_pos.call(null,game_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)),iter__4765.call(null,cljs.core.rest.call(null,s__4766__$2)));
}
} else
{return null;
}
break;
}
});})(s__4764__$1,row,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4764__$1,row,xs__4579__auto__,temp__4092__auto__))
;var fs__4021__auto__ = cljs.core.seq.call(null,iterys__4020__auto__.call(null,cljs.core.range.call(null,col_size)));if(fs__4021__auto__)
{return cljs.core.concat.call(null,fs__4021__auto__,iter__4763.call(null,cljs.core.rest.call(null,s__4764__$1)));
} else
{{
var G__4770 = cljs.core.rest.call(null,s__4764__$1);
s__4764__$1 = G__4770;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4024__auto__.call(null,cljs.core.range.call(null,row_size));
})())));
});
rs_life.core.get_next_state = (function get_next_state(live,neighbour_count){if(((live > 0)) && ((neighbour_count < 2)))
{return 0;
} else
{if(((live > 0)) && ((neighbour_count < 4)))
{return 1;
} else
{if((live > 0))
{return 0;
} else
{if(cljs.core._EQ_.call(null,neighbour_count,3))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return 0;
} else
{return null;
}
}
}
}
}
});
/**
* Determine the next generation in the game of life
*/
rs_life.core.next_generation = (function next_generation(game_board){var vec__4778 = rs_life.core.get_board_size.call(null,game_board);var row_size = cljs.core.nth.call(null,vec__4778,0,null);var col_size = cljs.core.nth.call(null,vec__4778,1,null);var neighbour_counts = rs_life.core.get_neighbour_counts.call(null,game_board);return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,col_size,(function (){var iter__4024__auto__ = (function iter__4779(s__4780){return (new cljs.core.LazySeq(null,(function (){var s__4780__$1 = s__4780;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4780__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var row = cljs.core.first.call(null,xs__4579__auto__);var iterys__4020__auto__ = ((function (s__4780__$1,row,xs__4579__auto__,temp__4092__auto__){
return (function iter__4781(s__4782){return (new cljs.core.LazySeq(null,((function (s__4780__$1,row,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4782__$1 = s__4782;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4782__$1);if(temp__4092__auto____$1)
{var s__4782__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4782__$2))
{var c__4022__auto__ = cljs.core.chunk_first.call(null,s__4782__$2);var size__4023__auto__ = cljs.core.count.call(null,c__4022__auto__);var b__4784 = cljs.core.chunk_buffer.call(null,size__4023__auto__);if((function (){var i__4783 = 0;while(true){
if((i__4783 < size__4023__auto__))
{var col = cljs.core._nth.call(null,c__4022__auto__,i__4783);var live = rs_life.core.get_value_at.call(null,game_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));var neighbour_count = rs_life.core.get_value_at.call(null,neighbour_counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));cljs.core.chunk_append.call(null,b__4784,rs_life.core.get_next_state.call(null,live,neighbour_count));
{
var G__4785 = (i__4783 + 1);
i__4783 = G__4785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4784),iter__4781.call(null,cljs.core.chunk_rest.call(null,s__4782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4784),null);
}
} else
{var col = cljs.core.first.call(null,s__4782__$2);var live = rs_life.core.get_value_at.call(null,game_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));var neighbour_count = rs_life.core.get_value_at.call(null,neighbour_counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));return cljs.core.cons.call(null,rs_life.core.get_next_state.call(null,live,neighbour_count),iter__4781.call(null,cljs.core.rest.call(null,s__4782__$2)));
}
} else
{return null;
}
break;
}
});})(s__4780__$1,row,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4780__$1,row,xs__4579__auto__,temp__4092__auto__))
;var fs__4021__auto__ = cljs.core.seq.call(null,iterys__4020__auto__.call(null,cljs.core.range.call(null,col_size)));if(fs__4021__auto__)
{return cljs.core.concat.call(null,fs__4021__auto__,iter__4779.call(null,cljs.core.rest.call(null,s__4780__$1)));
} else
{{
var G__4786 = cljs.core.rest.call(null,s__4780__$1);
s__4780__$1 = G__4786;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4024__auto__.call(null,cljs.core.range.call(null,row_size));
})())));
});

//# sourceMappingURL=core.js.map