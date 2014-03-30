// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8292 = (function (f,fn_handler,meta8293){
this.f = f;
this.fn_handler = fn_handler;
this.meta8293 = meta8293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8292.cljs$lang$type = true;
cljs.core.async.t8292.cljs$lang$ctorStr = "cljs.core.async/t8292";
cljs.core.async.t8292.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8292");
});
cljs.core.async.t8292.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t8292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t8292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8294){var self__ = this;
var _8294__$1 = this;return self__.meta8293;
});
cljs.core.async.t8292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8294,meta8293__$1){var self__ = this;
var _8294__$1 = this;return (new cljs.core.async.t8292(self__.f,self__.fn_handler,meta8293__$1));
});
cljs.core.async.__GT_t8292 = (function __GT_t8292(f__$1,fn_handler__$1,meta8293){return (new cljs.core.async.t8292(f__$1,fn_handler__$1,meta8293));
});
}
return (new cljs.core.async.t8292(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__8296 = buff;if(G__8296)
{var bit__3957__auto__ = null;if(cljs.core.truth_((function (){var or__3307__auto__ = bit__3957__auto__;if(cljs.core.truth_(or__3307__auto__))
{return or__3307__auto__;
} else
{return G__8296.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__8296.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8296);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8296);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_8297 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8297);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_8297);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3295__auto__ = ret;if(cljs.core.truth_(and__3295__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3295__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4155__auto___8298 = n;var x_8299 = 0;while(true){
if((x_8299 < n__4155__auto___8298))
{(a[x_8299] = 0);
{
var G__8300 = (x_8299 + 1);
x_8299 = G__8300;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__8301 = (i + 1);
i = G__8301;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8305 = (function (flag,alt_flag,meta8306){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8306 = meta8306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8305.cljs$lang$type = true;
cljs.core.async.t8305.cljs$lang$ctorStr = "cljs.core.async/t8305";
cljs.core.async.t8305.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8305");
});
cljs.core.async.t8305.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t8305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t8305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8307){var self__ = this;
var _8307__$1 = this;return self__.meta8306;
});
cljs.core.async.t8305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8307,meta8306__$1){var self__ = this;
var _8307__$1 = this;return (new cljs.core.async.t8305(self__.flag,self__.alt_flag,meta8306__$1));
});
cljs.core.async.__GT_t8305 = (function __GT_t8305(flag__$1,alt_flag__$1,meta8306){return (new cljs.core.async.t8305(flag__$1,alt_flag__$1,meta8306));
});
}
return (new cljs.core.async.t8305(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8311 = (function (cb,flag,alt_handler,meta8312){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8312 = meta8312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8311.cljs$lang$type = true;
cljs.core.async.t8311.cljs$lang$ctorStr = "cljs.core.async/t8311";
cljs.core.async.t8311.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8311");
});
cljs.core.async.t8311.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8313){var self__ = this;
var _8313__$1 = this;return self__.meta8312;
});
cljs.core.async.t8311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8313,meta8312__$1){var self__ = this;
var _8313__$1 = this;return (new cljs.core.async.t8311(self__.cb,self__.flag,self__.alt_handler,meta8312__$1));
});
cljs.core.async.__GT_t8311 = (function __GT_t8311(cb__$1,flag__$1,alt_handler__$1,meta8312){return (new cljs.core.async.t8311(cb__$1,flag__$1,alt_handler__$1,meta8312));
});
}
return (new cljs.core.async.t8311(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8314_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8314_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3307__auto__ = wport;if(cljs.core.truth_(or__3307__auto__))
{return or__3307__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__8315 = (i + 1);
i = G__8315;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3307__auto__ = ret;if(cljs.core.truth_(or__3307__auto__))
{return or__3307__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3295__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3295__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3295__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__8316){var map__8318 = p__8316;var map__8318__$1 = ((cljs.core.seq_QMARK_.call(null,map__8318))?cljs.core.apply.call(null,cljs.core.hash_map,map__8318):map__8318);var opts = map__8318__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__8316 = null;if (arguments.length > 1) {
  p__8316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8316);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8319){
var ports = cljs.core.first(arglist__8319);
var p__8316 = cljs.core.rest(arglist__8319);
return alts_BANG___delegate(ports,p__8316);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8327 = (function (ch,f,map_LT_,meta8328){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8328 = meta8328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8327.cljs$lang$type = true;
cljs.core.async.t8327.cljs$lang$ctorStr = "cljs.core.async/t8327";
cljs.core.async.t8327.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8327");
});
cljs.core.async.t8327.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t8327.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8330 = (function (fn1,_,meta8328,ch,f,map_LT_,meta8331){
this.fn1 = fn1;
this._ = _;
this.meta8328 = meta8328;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8331 = meta8331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8330.cljs$lang$type = true;
cljs.core.async.t8330.cljs$lang$ctorStr = "cljs.core.async/t8330";
cljs.core.async.t8330.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8330");
});
cljs.core.async.t8330.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t8330.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t8330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__8320_SHARP_){return f1.call(null,(((p1__8320_SHARP_ == null))?null:self__.f.call(null,p1__8320_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t8330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8332){var self__ = this;
var _8332__$1 = this;return self__.meta8331;
});
cljs.core.async.t8330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8332,meta8331__$1){var self__ = this;
var _8332__$1 = this;return (new cljs.core.async.t8330(self__.fn1,self__._,self__.meta8328,self__.ch,self__.f,self__.map_LT_,meta8331__$1));
});
cljs.core.async.__GT_t8330 = (function __GT_t8330(fn1__$1,___$2,meta8328__$1,ch__$2,f__$2,map_LT___$2,meta8331){return (new cljs.core.async.t8330(fn1__$1,___$2,meta8328__$1,ch__$2,f__$2,map_LT___$2,meta8331));
});
}
return (new cljs.core.async.t8330(fn1,___$1,self__.meta8328,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3295__auto__ = ret;if(cljs.core.truth_(and__3295__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3295__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t8327.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8329){var self__ = this;
var _8329__$1 = this;return self__.meta8328;
});
cljs.core.async.t8327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8329,meta8328__$1){var self__ = this;
var _8329__$1 = this;return (new cljs.core.async.t8327(self__.ch,self__.f,self__.map_LT_,meta8328__$1));
});
cljs.core.async.__GT_t8327 = (function __GT_t8327(ch__$1,f__$1,map_LT___$1,meta8328){return (new cljs.core.async.t8327(ch__$1,f__$1,map_LT___$1,meta8328));
});
}
return (new cljs.core.async.t8327(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8336 = (function (ch,f,map_GT_,meta8337){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8337 = meta8337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8336.cljs$lang$type = true;
cljs.core.async.t8336.cljs$lang$ctorStr = "cljs.core.async/t8336";
cljs.core.async.t8336.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8336");
});
cljs.core.async.t8336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t8336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8336.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8338){var self__ = this;
var _8338__$1 = this;return self__.meta8337;
});
cljs.core.async.t8336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8338,meta8337__$1){var self__ = this;
var _8338__$1 = this;return (new cljs.core.async.t8336(self__.ch,self__.f,self__.map_GT_,meta8337__$1));
});
cljs.core.async.__GT_t8336 = (function __GT_t8336(ch__$1,f__$1,map_GT___$1,meta8337){return (new cljs.core.async.t8336(ch__$1,f__$1,map_GT___$1,meta8337));
});
}
return (new cljs.core.async.t8336(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8342 = (function (ch,p,filter_GT_,meta8343){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8343 = meta8343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8342.cljs$lang$type = true;
cljs.core.async.t8342.cljs$lang$ctorStr = "cljs.core.async/t8342";
cljs.core.async.t8342.cljs$lang$ctorPrWriter = (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t8342");
});
cljs.core.async.t8342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t8342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8342.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8344){var self__ = this;
var _8344__$1 = this;return self__.meta8343;
});
cljs.core.async.t8342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8344,meta8343__$1){var self__ = this;
var _8344__$1 = this;return (new cljs.core.async.t8342(self__.ch,self__.p,self__.filter_GT_,meta8343__$1));
});
cljs.core.async.__GT_t8342 = (function __GT_t8342(ch__$1,p__$1,filter_GT___$1,meta8343){return (new cljs.core.async.t8342(ch__$1,p__$1,filter_GT___$1,meta8343));
});
}
return (new cljs.core.async.t8342(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5924__auto___8427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_8406){var state_val_8407 = (state_8406[1]);if((state_val_8407 === 1))
{var state_8406__$1 = state_8406;var statearr_8408_8428 = state_8406__$1;(statearr_8408_8428[2] = null);
(statearr_8408_8428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 2))
{var state_8406__$1 = state_8406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8406__$1,4,ch);
} else
{if((state_val_8407 === 3))
{var inst_8404 = (state_8406[2]);var state_8406__$1 = state_8406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8406__$1,inst_8404);
} else
{if((state_val_8407 === 4))
{var inst_8388 = (state_8406[7]);var inst_8388__$1 = (state_8406[2]);var inst_8389 = (inst_8388__$1 == null);var state_8406__$1 = (function (){var statearr_8409 = state_8406;(statearr_8409[7] = inst_8388__$1);
return statearr_8409;
})();if(cljs.core.truth_(inst_8389))
{var statearr_8410_8429 = state_8406__$1;(statearr_8410_8429[1] = 5);
} else
{var statearr_8411_8430 = state_8406__$1;(statearr_8411_8430[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 5))
{var inst_8391 = cljs.core.async.close_BANG_.call(null,out);var state_8406__$1 = state_8406;var statearr_8412_8431 = state_8406__$1;(statearr_8412_8431[2] = inst_8391);
(statearr_8412_8431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 6))
{var inst_8388 = (state_8406[7]);var inst_8393 = p.call(null,inst_8388);var state_8406__$1 = state_8406;if(cljs.core.truth_(inst_8393))
{var statearr_8413_8432 = state_8406__$1;(statearr_8413_8432[1] = 8);
} else
{var statearr_8414_8433 = state_8406__$1;(statearr_8414_8433[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 7))
{var inst_8402 = (state_8406[2]);var state_8406__$1 = state_8406;var statearr_8415_8434 = state_8406__$1;(statearr_8415_8434[2] = inst_8402);
(statearr_8415_8434[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 8))
{var inst_8388 = (state_8406[7]);var state_8406__$1 = state_8406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8406__$1,11,out,inst_8388);
} else
{if((state_val_8407 === 9))
{var state_8406__$1 = state_8406;var statearr_8416_8435 = state_8406__$1;(statearr_8416_8435[2] = null);
(statearr_8416_8435[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 10))
{var inst_8399 = (state_8406[2]);var state_8406__$1 = (function (){var statearr_8417 = state_8406;(statearr_8417[8] = inst_8399);
return statearr_8417;
})();var statearr_8418_8436 = state_8406__$1;(statearr_8418_8436[2] = null);
(statearr_8418_8436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8407 === 11))
{var inst_8396 = (state_8406[2]);var state_8406__$1 = state_8406;var statearr_8419_8437 = state_8406__$1;(statearr_8419_8437[2] = inst_8396);
(statearr_8419_8437[1] = 10);
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
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_8423 = [null,null,null,null,null,null,null,null,null];(statearr_8423[0] = state_machine__5910__auto__);
(statearr_8423[1] = 1);
return statearr_8423;
});
var state_machine__5910__auto____1 = (function (state_8406){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_8406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e8424){if((e8424 instanceof Object))
{var ex__5913__auto__ = e8424;var statearr_8425_8438 = state_8406;(statearr_8425_8438[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8439 = state_8406;
state_8406 = G__8439;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_8406){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_8406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_8426 = f__5925__auto__.call(null);(statearr_8426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___8427);
return statearr_8426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5924__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_8591){var state_val_8592 = (state_8591[1]);if((state_val_8592 === 1))
{var state_8591__$1 = state_8591;var statearr_8593_8630 = state_8591__$1;(statearr_8593_8630[2] = null);
(statearr_8593_8630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 2))
{var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8591__$1,4,in$);
} else
{if((state_val_8592 === 3))
{var inst_8589 = (state_8591[2]);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8591__$1,inst_8589);
} else
{if((state_val_8592 === 4))
{var inst_8537 = (state_8591[7]);var inst_8537__$1 = (state_8591[2]);var inst_8538 = (inst_8537__$1 == null);var state_8591__$1 = (function (){var statearr_8594 = state_8591;(statearr_8594[7] = inst_8537__$1);
return statearr_8594;
})();if(cljs.core.truth_(inst_8538))
{var statearr_8595_8631 = state_8591__$1;(statearr_8595_8631[1] = 5);
} else
{var statearr_8596_8632 = state_8591__$1;(statearr_8596_8632[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 5))
{var inst_8540 = cljs.core.async.close_BANG_.call(null,out);var state_8591__$1 = state_8591;var statearr_8597_8633 = state_8591__$1;(statearr_8597_8633[2] = inst_8540);
(statearr_8597_8633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 6))
{var inst_8537 = (state_8591[7]);var inst_8542 = f.call(null,inst_8537);var inst_8547 = cljs.core.seq.call(null,inst_8542);var inst_8548 = inst_8547;var inst_8549 = null;var inst_8550 = 0;var inst_8551 = 0;var state_8591__$1 = (function (){var statearr_8598 = state_8591;(statearr_8598[8] = inst_8549);
(statearr_8598[9] = inst_8548);
(statearr_8598[10] = inst_8550);
(statearr_8598[11] = inst_8551);
return statearr_8598;
})();var statearr_8599_8634 = state_8591__$1;(statearr_8599_8634[2] = null);
(statearr_8599_8634[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 7))
{var inst_8587 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8600_8635 = state_8591__$1;(statearr_8600_8635[2] = inst_8587);
(statearr_8600_8635[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 8))
{var inst_8550 = (state_8591[10]);var inst_8551 = (state_8591[11]);var inst_8553 = (inst_8551 < inst_8550);var inst_8554 = inst_8553;var state_8591__$1 = state_8591;if(cljs.core.truth_(inst_8554))
{var statearr_8601_8636 = state_8591__$1;(statearr_8601_8636[1] = 10);
} else
{var statearr_8602_8637 = state_8591__$1;(statearr_8602_8637[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 9))
{var inst_8584 = (state_8591[2]);var state_8591__$1 = (function (){var statearr_8603 = state_8591;(statearr_8603[12] = inst_8584);
return statearr_8603;
})();var statearr_8604_8638 = state_8591__$1;(statearr_8604_8638[2] = null);
(statearr_8604_8638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 10))
{var inst_8549 = (state_8591[8]);var inst_8551 = (state_8591[11]);var inst_8556 = cljs.core._nth.call(null,inst_8549,inst_8551);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8591__$1,13,out,inst_8556);
} else
{if((state_val_8592 === 11))
{var inst_8548 = (state_8591[9]);var inst_8562 = (state_8591[13]);var inst_8562__$1 = cljs.core.seq.call(null,inst_8548);var state_8591__$1 = (function (){var statearr_8608 = state_8591;(statearr_8608[13] = inst_8562__$1);
return statearr_8608;
})();if(inst_8562__$1)
{var statearr_8609_8639 = state_8591__$1;(statearr_8609_8639[1] = 14);
} else
{var statearr_8610_8640 = state_8591__$1;(statearr_8610_8640[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 12))
{var inst_8582 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8611_8641 = state_8591__$1;(statearr_8611_8641[2] = inst_8582);
(statearr_8611_8641[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 13))
{var inst_8549 = (state_8591[8]);var inst_8548 = (state_8591[9]);var inst_8550 = (state_8591[10]);var inst_8551 = (state_8591[11]);var inst_8558 = (state_8591[2]);var inst_8559 = (inst_8551 + 1);var tmp8605 = inst_8549;var tmp8606 = inst_8548;var tmp8607 = inst_8550;var inst_8548__$1 = tmp8606;var inst_8549__$1 = tmp8605;var inst_8550__$1 = tmp8607;var inst_8551__$1 = inst_8559;var state_8591__$1 = (function (){var statearr_8612 = state_8591;(statearr_8612[8] = inst_8549__$1);
(statearr_8612[9] = inst_8548__$1);
(statearr_8612[10] = inst_8550__$1);
(statearr_8612[11] = inst_8551__$1);
(statearr_8612[14] = inst_8558);
return statearr_8612;
})();var statearr_8613_8642 = state_8591__$1;(statearr_8613_8642[2] = null);
(statearr_8613_8642[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 14))
{var inst_8562 = (state_8591[13]);var inst_8564 = cljs.core.chunked_seq_QMARK_.call(null,inst_8562);var state_8591__$1 = state_8591;if(inst_8564)
{var statearr_8614_8643 = state_8591__$1;(statearr_8614_8643[1] = 17);
} else
{var statearr_8615_8644 = state_8591__$1;(statearr_8615_8644[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 15))
{var state_8591__$1 = state_8591;var statearr_8616_8645 = state_8591__$1;(statearr_8616_8645[2] = null);
(statearr_8616_8645[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 16))
{var inst_8580 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8617_8646 = state_8591__$1;(statearr_8617_8646[2] = inst_8580);
(statearr_8617_8646[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 17))
{var inst_8562 = (state_8591[13]);var inst_8566 = cljs.core.chunk_first.call(null,inst_8562);var inst_8567 = cljs.core.chunk_rest.call(null,inst_8562);var inst_8568 = cljs.core.count.call(null,inst_8566);var inst_8548 = inst_8567;var inst_8549 = inst_8566;var inst_8550 = inst_8568;var inst_8551 = 0;var state_8591__$1 = (function (){var statearr_8618 = state_8591;(statearr_8618[8] = inst_8549);
(statearr_8618[9] = inst_8548);
(statearr_8618[10] = inst_8550);
(statearr_8618[11] = inst_8551);
return statearr_8618;
})();var statearr_8619_8647 = state_8591__$1;(statearr_8619_8647[2] = null);
(statearr_8619_8647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 18))
{var inst_8562 = (state_8591[13]);var inst_8571 = cljs.core.first.call(null,inst_8562);var state_8591__$1 = state_8591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8591__$1,20,out,inst_8571);
} else
{if((state_val_8592 === 19))
{var inst_8577 = (state_8591[2]);var state_8591__$1 = state_8591;var statearr_8620_8648 = state_8591__$1;(statearr_8620_8648[2] = inst_8577);
(statearr_8620_8648[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8592 === 20))
{var inst_8562 = (state_8591[13]);var inst_8573 = (state_8591[2]);var inst_8574 = cljs.core.next.call(null,inst_8562);var inst_8548 = inst_8574;var inst_8549 = null;var inst_8550 = 0;var inst_8551 = 0;var state_8591__$1 = (function (){var statearr_8621 = state_8591;(statearr_8621[8] = inst_8549);
(statearr_8621[9] = inst_8548);
(statearr_8621[15] = inst_8573);
(statearr_8621[10] = inst_8550);
(statearr_8621[11] = inst_8551);
return statearr_8621;
})();var statearr_8622_8649 = state_8591__$1;(statearr_8622_8649[2] = null);
(statearr_8622_8649[1] = 8);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_8626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8626[0] = state_machine__5910__auto__);
(statearr_8626[1] = 1);
return statearr_8626;
});
var state_machine__5910__auto____1 = (function (state_8591){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_8591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e8627){if((e8627 instanceof Object))
{var ex__5913__auto__ = e8627;var statearr_8628_8650 = state_8591;(statearr_8628_8650[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8651 = state_8591;
state_8591 = G__8651;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_8591){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_8591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_8629 = f__5925__auto__.call(null);(statearr_8629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto__);
return statearr_8629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return c__5924__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5924__auto___8732 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_8711){var state_val_8712 = (state_8711[1]);if((state_val_8712 === 1))
{var state_8711__$1 = state_8711;var statearr_8713_8733 = state_8711__$1;(statearr_8713_8733[2] = null);
(statearr_8713_8733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 2))
{var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8711__$1,4,from);
} else
{if((state_val_8712 === 3))
{var inst_8709 = (state_8711[2]);var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8711__$1,inst_8709);
} else
{if((state_val_8712 === 4))
{var inst_8694 = (state_8711[7]);var inst_8694__$1 = (state_8711[2]);var inst_8695 = (inst_8694__$1 == null);var state_8711__$1 = (function (){var statearr_8714 = state_8711;(statearr_8714[7] = inst_8694__$1);
return statearr_8714;
})();if(cljs.core.truth_(inst_8695))
{var statearr_8715_8734 = state_8711__$1;(statearr_8715_8734[1] = 5);
} else
{var statearr_8716_8735 = state_8711__$1;(statearr_8716_8735[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 5))
{var state_8711__$1 = state_8711;if(cljs.core.truth_(close_QMARK_))
{var statearr_8717_8736 = state_8711__$1;(statearr_8717_8736[1] = 8);
} else
{var statearr_8718_8737 = state_8711__$1;(statearr_8718_8737[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 6))
{var inst_8694 = (state_8711[7]);var state_8711__$1 = state_8711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8711__$1,11,to,inst_8694);
} else
{if((state_val_8712 === 7))
{var inst_8707 = (state_8711[2]);var state_8711__$1 = state_8711;var statearr_8719_8738 = state_8711__$1;(statearr_8719_8738[2] = inst_8707);
(statearr_8719_8738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 8))
{var inst_8698 = cljs.core.async.close_BANG_.call(null,to);var state_8711__$1 = state_8711;var statearr_8720_8739 = state_8711__$1;(statearr_8720_8739[2] = inst_8698);
(statearr_8720_8739[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 9))
{var state_8711__$1 = state_8711;var statearr_8721_8740 = state_8711__$1;(statearr_8721_8740[2] = null);
(statearr_8721_8740[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 10))
{var inst_8701 = (state_8711[2]);var state_8711__$1 = state_8711;var statearr_8722_8741 = state_8711__$1;(statearr_8722_8741[2] = inst_8701);
(statearr_8722_8741[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8712 === 11))
{var inst_8704 = (state_8711[2]);var state_8711__$1 = (function (){var statearr_8723 = state_8711;(statearr_8723[8] = inst_8704);
return statearr_8723;
})();var statearr_8724_8742 = state_8711__$1;(statearr_8724_8742[2] = null);
(statearr_8724_8742[1] = 2);
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
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_8728 = [null,null,null,null,null,null,null,null,null];(statearr_8728[0] = state_machine__5910__auto__);
(statearr_8728[1] = 1);
return statearr_8728;
});
var state_machine__5910__auto____1 = (function (state_8711){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_8711);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e8729){if((e8729 instanceof Object))
{var ex__5913__auto__ = e8729;var statearr_8730_8743 = state_8711;(statearr_8730_8743[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8744 = state_8711;
state_8711 = G__8744;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_8711){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_8711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_8731 = f__5925__auto__.call(null);(statearr_8731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___8732);
return statearr_8731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5924__auto___8831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_8809){var state_val_8810 = (state_8809[1]);if((state_val_8810 === 1))
{var state_8809__$1 = state_8809;var statearr_8811_8832 = state_8809__$1;(statearr_8811_8832[2] = null);
(statearr_8811_8832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 2))
{var state_8809__$1 = state_8809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8809__$1,4,ch);
} else
{if((state_val_8810 === 3))
{var inst_8807 = (state_8809[2]);var state_8809__$1 = state_8809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8809__$1,inst_8807);
} else
{if((state_val_8810 === 4))
{var inst_8790 = (state_8809[7]);var inst_8790__$1 = (state_8809[2]);var inst_8791 = (inst_8790__$1 == null);var state_8809__$1 = (function (){var statearr_8812 = state_8809;(statearr_8812[7] = inst_8790__$1);
return statearr_8812;
})();if(cljs.core.truth_(inst_8791))
{var statearr_8813_8833 = state_8809__$1;(statearr_8813_8833[1] = 5);
} else
{var statearr_8814_8834 = state_8809__$1;(statearr_8814_8834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 5))
{var inst_8793 = cljs.core.async.close_BANG_.call(null,tc);var inst_8794 = cljs.core.async.close_BANG_.call(null,fc);var state_8809__$1 = (function (){var statearr_8815 = state_8809;(statearr_8815[8] = inst_8793);
return statearr_8815;
})();var statearr_8816_8835 = state_8809__$1;(statearr_8816_8835[2] = inst_8794);
(statearr_8816_8835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 6))
{var inst_8790 = (state_8809[7]);var inst_8796 = p.call(null,inst_8790);var state_8809__$1 = state_8809;if(cljs.core.truth_(inst_8796))
{var statearr_8817_8836 = state_8809__$1;(statearr_8817_8836[1] = 9);
} else
{var statearr_8818_8837 = state_8809__$1;(statearr_8818_8837[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 7))
{var inst_8805 = (state_8809[2]);var state_8809__$1 = state_8809;var statearr_8819_8838 = state_8809__$1;(statearr_8819_8838[2] = inst_8805);
(statearr_8819_8838[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 8))
{var inst_8802 = (state_8809[2]);var state_8809__$1 = (function (){var statearr_8820 = state_8809;(statearr_8820[9] = inst_8802);
return statearr_8820;
})();var statearr_8821_8839 = state_8809__$1;(statearr_8821_8839[2] = null);
(statearr_8821_8839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 9))
{var state_8809__$1 = state_8809;var statearr_8822_8840 = state_8809__$1;(statearr_8822_8840[2] = tc);
(statearr_8822_8840[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 10))
{var state_8809__$1 = state_8809;var statearr_8823_8841 = state_8809__$1;(statearr_8823_8841[2] = fc);
(statearr_8823_8841[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8810 === 11))
{var inst_8790 = (state_8809[7]);var inst_8800 = (state_8809[2]);var state_8809__$1 = state_8809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8809__$1,8,inst_8800,inst_8790);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_8827 = [null,null,null,null,null,null,null,null,null,null];(statearr_8827[0] = state_machine__5910__auto__);
(statearr_8827[1] = 1);
return statearr_8827;
});
var state_machine__5910__auto____1 = (function (state_8809){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_8809);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e8828){if((e8828 instanceof Object))
{var ex__5913__auto__ = e8828;var statearr_8829_8842 = state_8809;(statearr_8829_8842[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8809);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8843 = state_8809;
state_8809 = G__8843;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_8809){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_8809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_8830 = f__5925__auto__.call(null);(statearr_8830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___8831);
return statearr_8830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5924__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_8890){var state_val_8891 = (state_8890[1]);if((state_val_8891 === 7))
{var inst_8886 = (state_8890[2]);var state_8890__$1 = state_8890;var statearr_8892_8908 = state_8890__$1;(statearr_8892_8908[2] = inst_8886);
(statearr_8892_8908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8891 === 6))
{var inst_8879 = (state_8890[7]);var inst_8876 = (state_8890[8]);var inst_8883 = f.call(null,inst_8876,inst_8879);var inst_8876__$1 = inst_8883;var state_8890__$1 = (function (){var statearr_8893 = state_8890;(statearr_8893[8] = inst_8876__$1);
return statearr_8893;
})();var statearr_8894_8909 = state_8890__$1;(statearr_8894_8909[2] = null);
(statearr_8894_8909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8891 === 5))
{var inst_8876 = (state_8890[8]);var state_8890__$1 = state_8890;var statearr_8895_8910 = state_8890__$1;(statearr_8895_8910[2] = inst_8876);
(statearr_8895_8910[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8891 === 4))
{var inst_8879 = (state_8890[7]);var inst_8879__$1 = (state_8890[2]);var inst_8880 = (inst_8879__$1 == null);var state_8890__$1 = (function (){var statearr_8896 = state_8890;(statearr_8896[7] = inst_8879__$1);
return statearr_8896;
})();if(cljs.core.truth_(inst_8880))
{var statearr_8897_8911 = state_8890__$1;(statearr_8897_8911[1] = 5);
} else
{var statearr_8898_8912 = state_8890__$1;(statearr_8898_8912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8891 === 3))
{var inst_8888 = (state_8890[2]);var state_8890__$1 = state_8890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8890__$1,inst_8888);
} else
{if((state_val_8891 === 2))
{var state_8890__$1 = state_8890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8890__$1,4,ch);
} else
{if((state_val_8891 === 1))
{var inst_8876 = init;var state_8890__$1 = (function (){var statearr_8899 = state_8890;(statearr_8899[8] = inst_8876);
return statearr_8899;
})();var statearr_8900_8913 = state_8890__$1;(statearr_8900_8913[2] = null);
(statearr_8900_8913[1] = 2);
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
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_8904 = [null,null,null,null,null,null,null,null,null];(statearr_8904[0] = state_machine__5910__auto__);
(statearr_8904[1] = 1);
return statearr_8904;
});
var state_machine__5910__auto____1 = (function (state_8890){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_8890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e8905){if((e8905 instanceof Object))
{var ex__5913__auto__ = e8905;var statearr_8906_8914 = state_8890;(statearr_8906_8914[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8915 = state_8890;
state_8890 = G__8915;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_8890){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_8890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_8907 = f__5925__auto__.call(null);(statearr_8907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto__);
return statearr_8907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return c__5924__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5924__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_8977){var state_val_8978 = (state_8977[1]);if((state_val_8978 === 1))
{var inst_8957 = cljs.core.seq.call(null,coll);var inst_8958 = inst_8957;var state_8977__$1 = (function (){var statearr_8979 = state_8977;(statearr_8979[7] = inst_8958);
return statearr_8979;
})();var statearr_8980_8998 = state_8977__$1;(statearr_8980_8998[2] = null);
(statearr_8980_8998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 2))
{var inst_8958 = (state_8977[7]);var state_8977__$1 = state_8977;if(cljs.core.truth_(inst_8958))
{var statearr_8981_8999 = state_8977__$1;(statearr_8981_8999[1] = 4);
} else
{var statearr_8982_9000 = state_8977__$1;(statearr_8982_9000[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 3))
{var inst_8975 = (state_8977[2]);var state_8977__$1 = state_8977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8977__$1,inst_8975);
} else
{if((state_val_8978 === 4))
{var inst_8958 = (state_8977[7]);var inst_8961 = cljs.core.first.call(null,inst_8958);var state_8977__$1 = state_8977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8977__$1,7,ch,inst_8961);
} else
{if((state_val_8978 === 5))
{var state_8977__$1 = state_8977;if(cljs.core.truth_(close_QMARK_))
{var statearr_8983_9001 = state_8977__$1;(statearr_8983_9001[1] = 8);
} else
{var statearr_8984_9002 = state_8977__$1;(statearr_8984_9002[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 6))
{var inst_8973 = (state_8977[2]);var state_8977__$1 = state_8977;var statearr_8985_9003 = state_8977__$1;(statearr_8985_9003[2] = inst_8973);
(statearr_8985_9003[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 7))
{var inst_8958 = (state_8977[7]);var inst_8963 = (state_8977[2]);var inst_8964 = cljs.core.next.call(null,inst_8958);var inst_8958__$1 = inst_8964;var state_8977__$1 = (function (){var statearr_8986 = state_8977;(statearr_8986[7] = inst_8958__$1);
(statearr_8986[8] = inst_8963);
return statearr_8986;
})();var statearr_8987_9004 = state_8977__$1;(statearr_8987_9004[2] = null);
(statearr_8987_9004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 8))
{var inst_8968 = cljs.core.async.close_BANG_.call(null,ch);var state_8977__$1 = state_8977;var statearr_8988_9005 = state_8977__$1;(statearr_8988_9005[2] = inst_8968);
(statearr_8988_9005[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 9))
{var state_8977__$1 = state_8977;var statearr_8989_9006 = state_8977__$1;(statearr_8989_9006[2] = null);
(statearr_8989_9006[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8978 === 10))
{var inst_8971 = (state_8977[2]);var state_8977__$1 = state_8977;var statearr_8990_9007 = state_8977__$1;(statearr_8990_9007[2] = inst_8971);
(statearr_8990_9007[1] = 6);
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
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_8994 = [null,null,null,null,null,null,null,null,null];(statearr_8994[0] = state_machine__5910__auto__);
(statearr_8994[1] = 1);
return statearr_8994;
});
var state_machine__5910__auto____1 = (function (state_8977){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_8977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e8995){if((e8995 instanceof Object))
{var ex__5913__auto__ = e8995;var statearr_8996_9008 = state_8977;(statearr_8996_9008[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9009 = state_8977;
state_8977 = G__9009;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_8977){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_8977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_8997 = f__5925__auto__.call(null);(statearr_8997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto__);
return statearr_8997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return c__5924__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9011 = {};return obj9011;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3295__auto__ = _;if(and__3295__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3295__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3934__auto__ = (((_ == null))?null:_);return (function (){var or__3307__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9013 = {};return obj9013;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9237 = (function (cs,ch,mult,meta9238){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9238 = meta9238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9237.cljs$lang$type = true;
cljs.core.async.t9237.cljs$lang$ctorStr = "cljs.core.async/t9237";
cljs.core.async.t9237.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t9237");
});})(cs))
;
cljs.core.async.t9237.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9237.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9237.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9237.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9237.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9239){var self__ = this;
var _9239__$1 = this;return self__.meta9238;
});})(cs))
;
cljs.core.async.t9237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9239,meta9238__$1){var self__ = this;
var _9239__$1 = this;return (new cljs.core.async.t9237(self__.cs,self__.ch,self__.mult,meta9238__$1));
});})(cs))
;
cljs.core.async.__GT_t9237 = ((function (cs){
return (function __GT_t9237(cs__$1,ch__$1,mult__$1,meta9238){return (new cljs.core.async.t9237(cs__$1,ch__$1,mult__$1,meta9238));
});})(cs))
;
}
return (new cljs.core.async.t9237(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5924__auto___9460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_9374){var state_val_9375 = (state_9374[1]);if((state_val_9375 === 32))
{var inst_9318 = (state_9374[7]);var inst_9242 = (state_9374[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9374,31,Object,null,30);var inst_9325 = cljs.core.async.put_BANG_.call(null,inst_9318,inst_9242,done);var state_9374__$1 = state_9374;var statearr_9376_9461 = state_9374__$1;(statearr_9376_9461[2] = inst_9325);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9374__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 1))
{var state_9374__$1 = state_9374;var statearr_9377_9462 = state_9374__$1;(statearr_9377_9462[2] = null);
(statearr_9377_9462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 33))
{var inst_9331 = (state_9374[9]);var inst_9333 = cljs.core.chunked_seq_QMARK_.call(null,inst_9331);var state_9374__$1 = state_9374;if(inst_9333)
{var statearr_9378_9463 = state_9374__$1;(statearr_9378_9463[1] = 36);
} else
{var statearr_9379_9464 = state_9374__$1;(statearr_9379_9464[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 2))
{var state_9374__$1 = state_9374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9374__$1,4,ch);
} else
{if((state_val_9375 === 34))
{var state_9374__$1 = state_9374;var statearr_9380_9465 = state_9374__$1;(statearr_9380_9465[2] = null);
(statearr_9380_9465[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 3))
{var inst_9372 = (state_9374[2]);var state_9374__$1 = state_9374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9374__$1,inst_9372);
} else
{if((state_val_9375 === 35))
{var inst_9356 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9381_9466 = state_9374__$1;(statearr_9381_9466[2] = inst_9356);
(statearr_9381_9466[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 4))
{var inst_9242 = (state_9374[8]);var inst_9242__$1 = (state_9374[2]);var inst_9243 = (inst_9242__$1 == null);var state_9374__$1 = (function (){var statearr_9382 = state_9374;(statearr_9382[8] = inst_9242__$1);
return statearr_9382;
})();if(cljs.core.truth_(inst_9243))
{var statearr_9383_9467 = state_9374__$1;(statearr_9383_9467[1] = 5);
} else
{var statearr_9384_9468 = state_9374__$1;(statearr_9384_9468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 36))
{var inst_9331 = (state_9374[9]);var inst_9335 = cljs.core.chunk_first.call(null,inst_9331);var inst_9336 = cljs.core.chunk_rest.call(null,inst_9331);var inst_9337 = cljs.core.count.call(null,inst_9335);var inst_9310 = inst_9336;var inst_9311 = inst_9335;var inst_9312 = inst_9337;var inst_9313 = 0;var state_9374__$1 = (function (){var statearr_9385 = state_9374;(statearr_9385[10] = inst_9312);
(statearr_9385[11] = inst_9313);
(statearr_9385[12] = inst_9311);
(statearr_9385[13] = inst_9310);
return statearr_9385;
})();var statearr_9386_9469 = state_9374__$1;(statearr_9386_9469[2] = null);
(statearr_9386_9469[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 5))
{var inst_9249 = cljs.core.deref.call(null,cs);var inst_9250 = cljs.core.seq.call(null,inst_9249);var inst_9251 = inst_9250;var inst_9252 = null;var inst_9253 = 0;var inst_9254 = 0;var state_9374__$1 = (function (){var statearr_9387 = state_9374;(statearr_9387[14] = inst_9251);
(statearr_9387[15] = inst_9252);
(statearr_9387[16] = inst_9254);
(statearr_9387[17] = inst_9253);
return statearr_9387;
})();var statearr_9388_9470 = state_9374__$1;(statearr_9388_9470[2] = null);
(statearr_9388_9470[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 37))
{var inst_9331 = (state_9374[9]);var inst_9340 = cljs.core.first.call(null,inst_9331);var state_9374__$1 = (function (){var statearr_9389 = state_9374;(statearr_9389[18] = inst_9340);
return statearr_9389;
})();var statearr_9390_9471 = state_9374__$1;(statearr_9390_9471[2] = null);
(statearr_9390_9471[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 6))
{var inst_9302 = (state_9374[19]);var inst_9301 = cljs.core.deref.call(null,cs);var inst_9302__$1 = cljs.core.keys.call(null,inst_9301);var inst_9303 = cljs.core.count.call(null,inst_9302__$1);var inst_9304 = cljs.core.reset_BANG_.call(null,dctr,inst_9303);var inst_9309 = cljs.core.seq.call(null,inst_9302__$1);var inst_9310 = inst_9309;var inst_9311 = null;var inst_9312 = 0;var inst_9313 = 0;var state_9374__$1 = (function (){var statearr_9391 = state_9374;(statearr_9391[20] = inst_9304);
(statearr_9391[19] = inst_9302__$1);
(statearr_9391[10] = inst_9312);
(statearr_9391[11] = inst_9313);
(statearr_9391[12] = inst_9311);
(statearr_9391[13] = inst_9310);
return statearr_9391;
})();var statearr_9392_9472 = state_9374__$1;(statearr_9392_9472[2] = null);
(statearr_9392_9472[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 38))
{var inst_9353 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9393_9473 = state_9374__$1;(statearr_9393_9473[2] = inst_9353);
(statearr_9393_9473[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 7))
{var inst_9370 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9394_9474 = state_9374__$1;(statearr_9394_9474[2] = inst_9370);
(statearr_9394_9474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 39))
{var inst_9331 = (state_9374[9]);var inst_9349 = (state_9374[2]);var inst_9350 = cljs.core.next.call(null,inst_9331);var inst_9310 = inst_9350;var inst_9311 = null;var inst_9312 = 0;var inst_9313 = 0;var state_9374__$1 = (function (){var statearr_9395 = state_9374;(statearr_9395[10] = inst_9312);
(statearr_9395[11] = inst_9313);
(statearr_9395[12] = inst_9311);
(statearr_9395[13] = inst_9310);
(statearr_9395[21] = inst_9349);
return statearr_9395;
})();var statearr_9396_9475 = state_9374__$1;(statearr_9396_9475[2] = null);
(statearr_9396_9475[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 8))
{var inst_9254 = (state_9374[16]);var inst_9253 = (state_9374[17]);var inst_9256 = (inst_9254 < inst_9253);var inst_9257 = inst_9256;var state_9374__$1 = state_9374;if(cljs.core.truth_(inst_9257))
{var statearr_9397_9476 = state_9374__$1;(statearr_9397_9476[1] = 10);
} else
{var statearr_9398_9477 = state_9374__$1;(statearr_9398_9477[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 40))
{var inst_9340 = (state_9374[18]);var inst_9341 = (state_9374[2]);var inst_9342 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9343 = cljs.core.async.untap_STAR_.call(null,m,inst_9340);var state_9374__$1 = (function (){var statearr_9399 = state_9374;(statearr_9399[22] = inst_9342);
(statearr_9399[23] = inst_9341);
return statearr_9399;
})();var statearr_9400_9478 = state_9374__$1;(statearr_9400_9478[2] = inst_9343);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9374__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 9))
{var inst_9299 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9401_9479 = state_9374__$1;(statearr_9401_9479[2] = inst_9299);
(statearr_9401_9479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 41))
{var inst_9242 = (state_9374[8]);var inst_9340 = (state_9374[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9374,40,Object,null,39);var inst_9347 = cljs.core.async.put_BANG_.call(null,inst_9340,inst_9242,done);var state_9374__$1 = state_9374;var statearr_9402_9480 = state_9374__$1;(statearr_9402_9480[2] = inst_9347);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9374__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 10))
{var inst_9252 = (state_9374[15]);var inst_9254 = (state_9374[16]);var inst_9260 = cljs.core._nth.call(null,inst_9252,inst_9254);var inst_9261 = cljs.core.nth.call(null,inst_9260,0,null);var inst_9262 = cljs.core.nth.call(null,inst_9260,1,null);var state_9374__$1 = (function (){var statearr_9403 = state_9374;(statearr_9403[24] = inst_9261);
return statearr_9403;
})();if(cljs.core.truth_(inst_9262))
{var statearr_9404_9481 = state_9374__$1;(statearr_9404_9481[1] = 13);
} else
{var statearr_9405_9482 = state_9374__$1;(statearr_9405_9482[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 42))
{var state_9374__$1 = state_9374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9374__$1,45,dchan);
} else
{if((state_val_9375 === 11))
{var inst_9251 = (state_9374[14]);var inst_9271 = (state_9374[25]);var inst_9271__$1 = cljs.core.seq.call(null,inst_9251);var state_9374__$1 = (function (){var statearr_9406 = state_9374;(statearr_9406[25] = inst_9271__$1);
return statearr_9406;
})();if(inst_9271__$1)
{var statearr_9407_9483 = state_9374__$1;(statearr_9407_9483[1] = 16);
} else
{var statearr_9408_9484 = state_9374__$1;(statearr_9408_9484[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 43))
{var state_9374__$1 = state_9374;var statearr_9409_9485 = state_9374__$1;(statearr_9409_9485[2] = null);
(statearr_9409_9485[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 12))
{var inst_9297 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9410_9486 = state_9374__$1;(statearr_9410_9486[2] = inst_9297);
(statearr_9410_9486[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 44))
{var inst_9367 = (state_9374[2]);var state_9374__$1 = (function (){var statearr_9411 = state_9374;(statearr_9411[26] = inst_9367);
return statearr_9411;
})();var statearr_9412_9487 = state_9374__$1;(statearr_9412_9487[2] = null);
(statearr_9412_9487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 13))
{var inst_9261 = (state_9374[24]);var inst_9264 = cljs.core.async.close_BANG_.call(null,inst_9261);var state_9374__$1 = state_9374;var statearr_9413_9488 = state_9374__$1;(statearr_9413_9488[2] = inst_9264);
(statearr_9413_9488[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 45))
{var inst_9364 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9417_9489 = state_9374__$1;(statearr_9417_9489[2] = inst_9364);
(statearr_9417_9489[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 14))
{var state_9374__$1 = state_9374;var statearr_9418_9490 = state_9374__$1;(statearr_9418_9490[2] = null);
(statearr_9418_9490[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 15))
{var inst_9251 = (state_9374[14]);var inst_9252 = (state_9374[15]);var inst_9254 = (state_9374[16]);var inst_9253 = (state_9374[17]);var inst_9267 = (state_9374[2]);var inst_9268 = (inst_9254 + 1);var tmp9414 = inst_9251;var tmp9415 = inst_9252;var tmp9416 = inst_9253;var inst_9251__$1 = tmp9414;var inst_9252__$1 = tmp9415;var inst_9253__$1 = tmp9416;var inst_9254__$1 = inst_9268;var state_9374__$1 = (function (){var statearr_9419 = state_9374;(statearr_9419[14] = inst_9251__$1);
(statearr_9419[15] = inst_9252__$1);
(statearr_9419[27] = inst_9267);
(statearr_9419[16] = inst_9254__$1);
(statearr_9419[17] = inst_9253__$1);
return statearr_9419;
})();var statearr_9420_9491 = state_9374__$1;(statearr_9420_9491[2] = null);
(statearr_9420_9491[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 16))
{var inst_9271 = (state_9374[25]);var inst_9273 = cljs.core.chunked_seq_QMARK_.call(null,inst_9271);var state_9374__$1 = state_9374;if(inst_9273)
{var statearr_9421_9492 = state_9374__$1;(statearr_9421_9492[1] = 19);
} else
{var statearr_9422_9493 = state_9374__$1;(statearr_9422_9493[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 17))
{var state_9374__$1 = state_9374;var statearr_9423_9494 = state_9374__$1;(statearr_9423_9494[2] = null);
(statearr_9423_9494[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 18))
{var inst_9295 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9424_9495 = state_9374__$1;(statearr_9424_9495[2] = inst_9295);
(statearr_9424_9495[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 19))
{var inst_9271 = (state_9374[25]);var inst_9275 = cljs.core.chunk_first.call(null,inst_9271);var inst_9276 = cljs.core.chunk_rest.call(null,inst_9271);var inst_9277 = cljs.core.count.call(null,inst_9275);var inst_9251 = inst_9276;var inst_9252 = inst_9275;var inst_9253 = inst_9277;var inst_9254 = 0;var state_9374__$1 = (function (){var statearr_9425 = state_9374;(statearr_9425[14] = inst_9251);
(statearr_9425[15] = inst_9252);
(statearr_9425[16] = inst_9254);
(statearr_9425[17] = inst_9253);
return statearr_9425;
})();var statearr_9426_9496 = state_9374__$1;(statearr_9426_9496[2] = null);
(statearr_9426_9496[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 20))
{var inst_9271 = (state_9374[25]);var inst_9281 = cljs.core.first.call(null,inst_9271);var inst_9282 = cljs.core.nth.call(null,inst_9281,0,null);var inst_9283 = cljs.core.nth.call(null,inst_9281,1,null);var state_9374__$1 = (function (){var statearr_9427 = state_9374;(statearr_9427[28] = inst_9282);
return statearr_9427;
})();if(cljs.core.truth_(inst_9283))
{var statearr_9428_9497 = state_9374__$1;(statearr_9428_9497[1] = 22);
} else
{var statearr_9429_9498 = state_9374__$1;(statearr_9429_9498[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 21))
{var inst_9292 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9430_9499 = state_9374__$1;(statearr_9430_9499[2] = inst_9292);
(statearr_9430_9499[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 22))
{var inst_9282 = (state_9374[28]);var inst_9285 = cljs.core.async.close_BANG_.call(null,inst_9282);var state_9374__$1 = state_9374;var statearr_9431_9500 = state_9374__$1;(statearr_9431_9500[2] = inst_9285);
(statearr_9431_9500[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 23))
{var state_9374__$1 = state_9374;var statearr_9432_9501 = state_9374__$1;(statearr_9432_9501[2] = null);
(statearr_9432_9501[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 24))
{var inst_9271 = (state_9374[25]);var inst_9288 = (state_9374[2]);var inst_9289 = cljs.core.next.call(null,inst_9271);var inst_9251 = inst_9289;var inst_9252 = null;var inst_9253 = 0;var inst_9254 = 0;var state_9374__$1 = (function (){var statearr_9433 = state_9374;(statearr_9433[14] = inst_9251);
(statearr_9433[15] = inst_9252);
(statearr_9433[29] = inst_9288);
(statearr_9433[16] = inst_9254);
(statearr_9433[17] = inst_9253);
return statearr_9433;
})();var statearr_9434_9502 = state_9374__$1;(statearr_9434_9502[2] = null);
(statearr_9434_9502[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 25))
{var inst_9312 = (state_9374[10]);var inst_9313 = (state_9374[11]);var inst_9315 = (inst_9313 < inst_9312);var inst_9316 = inst_9315;var state_9374__$1 = state_9374;if(cljs.core.truth_(inst_9316))
{var statearr_9435_9503 = state_9374__$1;(statearr_9435_9503[1] = 27);
} else
{var statearr_9436_9504 = state_9374__$1;(statearr_9436_9504[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 26))
{var inst_9302 = (state_9374[19]);var inst_9360 = (state_9374[2]);var inst_9361 = cljs.core.seq.call(null,inst_9302);var state_9374__$1 = (function (){var statearr_9437 = state_9374;(statearr_9437[30] = inst_9360);
return statearr_9437;
})();if(inst_9361)
{var statearr_9438_9505 = state_9374__$1;(statearr_9438_9505[1] = 42);
} else
{var statearr_9439_9506 = state_9374__$1;(statearr_9439_9506[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 27))
{var inst_9313 = (state_9374[11]);var inst_9311 = (state_9374[12]);var inst_9318 = cljs.core._nth.call(null,inst_9311,inst_9313);var state_9374__$1 = (function (){var statearr_9440 = state_9374;(statearr_9440[7] = inst_9318);
return statearr_9440;
})();var statearr_9441_9507 = state_9374__$1;(statearr_9441_9507[2] = null);
(statearr_9441_9507[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 28))
{var inst_9310 = (state_9374[13]);var inst_9331 = (state_9374[9]);var inst_9331__$1 = cljs.core.seq.call(null,inst_9310);var state_9374__$1 = (function (){var statearr_9445 = state_9374;(statearr_9445[9] = inst_9331__$1);
return statearr_9445;
})();if(inst_9331__$1)
{var statearr_9446_9508 = state_9374__$1;(statearr_9446_9508[1] = 33);
} else
{var statearr_9447_9509 = state_9374__$1;(statearr_9447_9509[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 29))
{var inst_9358 = (state_9374[2]);var state_9374__$1 = state_9374;var statearr_9448_9510 = state_9374__$1;(statearr_9448_9510[2] = inst_9358);
(statearr_9448_9510[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 30))
{var inst_9312 = (state_9374[10]);var inst_9313 = (state_9374[11]);var inst_9311 = (state_9374[12]);var inst_9310 = (state_9374[13]);var inst_9327 = (state_9374[2]);var inst_9328 = (inst_9313 + 1);var tmp9442 = inst_9312;var tmp9443 = inst_9311;var tmp9444 = inst_9310;var inst_9310__$1 = tmp9444;var inst_9311__$1 = tmp9443;var inst_9312__$1 = tmp9442;var inst_9313__$1 = inst_9328;var state_9374__$1 = (function (){var statearr_9449 = state_9374;(statearr_9449[10] = inst_9312__$1);
(statearr_9449[11] = inst_9313__$1);
(statearr_9449[12] = inst_9311__$1);
(statearr_9449[13] = inst_9310__$1);
(statearr_9449[31] = inst_9327);
return statearr_9449;
})();var statearr_9450_9511 = state_9374__$1;(statearr_9450_9511[2] = null);
(statearr_9450_9511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9375 === 31))
{var inst_9318 = (state_9374[7]);var inst_9319 = (state_9374[2]);var inst_9320 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9321 = cljs.core.async.untap_STAR_.call(null,m,inst_9318);var state_9374__$1 = (function (){var statearr_9451 = state_9374;(statearr_9451[32] = inst_9319);
(statearr_9451[33] = inst_9320);
return statearr_9451;
})();var statearr_9452_9512 = state_9374__$1;(statearr_9452_9512[2] = inst_9321);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9374__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_9456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9456[0] = state_machine__5910__auto__);
(statearr_9456[1] = 1);
return statearr_9456;
});
var state_machine__5910__auto____1 = (function (state_9374){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_9374);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e9457){if((e9457 instanceof Object))
{var ex__5913__auto__ = e9457;var statearr_9458_9513 = state_9374;(statearr_9458_9513[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9514 = state_9374;
state_9374 = G__9514;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_9374){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_9374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_9459 = f__5925__auto__.call(null);(statearr_9459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___9460);
return statearr_9459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj9516 = {};return obj9516;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3295__auto__ = m;if(and__3295__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3295__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3934__auto__ = (((m == null))?null:m);return (function (){var or__3307__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t9626 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9626 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta9627){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta9627 = meta9627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9626.cljs$lang$type = true;
cljs.core.async.t9626.cljs$lang$ctorStr = "cljs.core.async/t9626";
cljs.core.async.t9626.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t9626");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t9626.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9628){var self__ = this;
var _9628__$1 = this;return self__.meta9627;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9628,meta9627__$1){var self__ = this;
var _9628__$1 = this;return (new cljs.core.async.t9626(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta9627__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t9626 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t9626(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9627){return (new cljs.core.async.t9626(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9627));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t9626(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5924__auto___9735 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_9693){var state_val_9694 = (state_9693[1]);if((state_val_9694 === 1))
{var inst_9632 = (state_9693[7]);var inst_9632__$1 = calc_state.call(null);var inst_9633 = cljs.core.seq_QMARK_.call(null,inst_9632__$1);var state_9693__$1 = (function (){var statearr_9695 = state_9693;(statearr_9695[7] = inst_9632__$1);
return statearr_9695;
})();if(inst_9633)
{var statearr_9696_9736 = state_9693__$1;(statearr_9696_9736[1] = 2);
} else
{var statearr_9697_9737 = state_9693__$1;(statearr_9697_9737[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 2))
{var inst_9632 = (state_9693[7]);var inst_9635 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9632);var state_9693__$1 = state_9693;var statearr_9698_9738 = state_9693__$1;(statearr_9698_9738[2] = inst_9635);
(statearr_9698_9738[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 3))
{var inst_9632 = (state_9693[7]);var state_9693__$1 = state_9693;var statearr_9699_9739 = state_9693__$1;(statearr_9699_9739[2] = inst_9632);
(statearr_9699_9739[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 4))
{var inst_9632 = (state_9693[7]);var inst_9638 = (state_9693[2]);var inst_9639 = cljs.core.get.call(null,inst_9638,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9640 = cljs.core.get.call(null,inst_9638,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9641 = cljs.core.get.call(null,inst_9638,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_9642 = inst_9632;var state_9693__$1 = (function (){var statearr_9700 = state_9693;(statearr_9700[8] = inst_9642);
(statearr_9700[9] = inst_9641);
(statearr_9700[10] = inst_9640);
(statearr_9700[11] = inst_9639);
return statearr_9700;
})();var statearr_9701_9740 = state_9693__$1;(statearr_9701_9740[2] = null);
(statearr_9701_9740[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 5))
{var inst_9642 = (state_9693[8]);var inst_9645 = cljs.core.seq_QMARK_.call(null,inst_9642);var state_9693__$1 = state_9693;if(inst_9645)
{var statearr_9702_9741 = state_9693__$1;(statearr_9702_9741[1] = 7);
} else
{var statearr_9703_9742 = state_9693__$1;(statearr_9703_9742[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 6))
{var inst_9691 = (state_9693[2]);var state_9693__$1 = state_9693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9693__$1,inst_9691);
} else
{if((state_val_9694 === 7))
{var inst_9642 = (state_9693[8]);var inst_9647 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9642);var state_9693__$1 = state_9693;var statearr_9704_9743 = state_9693__$1;(statearr_9704_9743[2] = inst_9647);
(statearr_9704_9743[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 8))
{var inst_9642 = (state_9693[8]);var state_9693__$1 = state_9693;var statearr_9705_9744 = state_9693__$1;(statearr_9705_9744[2] = inst_9642);
(statearr_9705_9744[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 9))
{var inst_9650 = (state_9693[12]);var inst_9650__$1 = (state_9693[2]);var inst_9651 = cljs.core.get.call(null,inst_9650__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9652 = cljs.core.get.call(null,inst_9650__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9653 = cljs.core.get.call(null,inst_9650__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_9693__$1 = (function (){var statearr_9706 = state_9693;(statearr_9706[13] = inst_9653);
(statearr_9706[12] = inst_9650__$1);
(statearr_9706[14] = inst_9652);
return statearr_9706;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9693__$1,10,inst_9651);
} else
{if((state_val_9694 === 10))
{var inst_9658 = (state_9693[15]);var inst_9657 = (state_9693[16]);var inst_9656 = (state_9693[2]);var inst_9657__$1 = cljs.core.nth.call(null,inst_9656,0,null);var inst_9658__$1 = cljs.core.nth.call(null,inst_9656,1,null);var inst_9659 = (inst_9657__$1 == null);var inst_9660 = cljs.core._EQ_.call(null,inst_9658__$1,change);var inst_9661 = (inst_9659) || (inst_9660);var state_9693__$1 = (function (){var statearr_9707 = state_9693;(statearr_9707[15] = inst_9658__$1);
(statearr_9707[16] = inst_9657__$1);
return statearr_9707;
})();if(cljs.core.truth_(inst_9661))
{var statearr_9708_9745 = state_9693__$1;(statearr_9708_9745[1] = 11);
} else
{var statearr_9709_9746 = state_9693__$1;(statearr_9709_9746[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 11))
{var inst_9657 = (state_9693[16]);var inst_9663 = (inst_9657 == null);var state_9693__$1 = state_9693;if(cljs.core.truth_(inst_9663))
{var statearr_9710_9747 = state_9693__$1;(statearr_9710_9747[1] = 14);
} else
{var statearr_9711_9748 = state_9693__$1;(statearr_9711_9748[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 12))
{var inst_9672 = (state_9693[17]);var inst_9658 = (state_9693[15]);var inst_9653 = (state_9693[13]);var inst_9672__$1 = inst_9653.call(null,inst_9658);var state_9693__$1 = (function (){var statearr_9712 = state_9693;(statearr_9712[17] = inst_9672__$1);
return statearr_9712;
})();if(cljs.core.truth_(inst_9672__$1))
{var statearr_9713_9749 = state_9693__$1;(statearr_9713_9749[1] = 17);
} else
{var statearr_9714_9750 = state_9693__$1;(statearr_9714_9750[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 13))
{var inst_9689 = (state_9693[2]);var state_9693__$1 = state_9693;var statearr_9715_9751 = state_9693__$1;(statearr_9715_9751[2] = inst_9689);
(statearr_9715_9751[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 14))
{var inst_9658 = (state_9693[15]);var inst_9665 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9658);var state_9693__$1 = state_9693;var statearr_9716_9752 = state_9693__$1;(statearr_9716_9752[2] = inst_9665);
(statearr_9716_9752[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 15))
{var state_9693__$1 = state_9693;var statearr_9717_9753 = state_9693__$1;(statearr_9717_9753[2] = null);
(statearr_9717_9753[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 16))
{var inst_9668 = (state_9693[2]);var inst_9669 = calc_state.call(null);var inst_9642 = inst_9669;var state_9693__$1 = (function (){var statearr_9718 = state_9693;(statearr_9718[18] = inst_9668);
(statearr_9718[8] = inst_9642);
return statearr_9718;
})();var statearr_9719_9754 = state_9693__$1;(statearr_9719_9754[2] = null);
(statearr_9719_9754[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 17))
{var inst_9672 = (state_9693[17]);var state_9693__$1 = state_9693;var statearr_9720_9755 = state_9693__$1;(statearr_9720_9755[2] = inst_9672);
(statearr_9720_9755[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 18))
{var inst_9658 = (state_9693[15]);var inst_9653 = (state_9693[13]);var inst_9652 = (state_9693[14]);var inst_9675 = cljs.core.empty_QMARK_.call(null,inst_9653);var inst_9676 = inst_9652.call(null,inst_9658);var inst_9677 = cljs.core.not.call(null,inst_9676);var inst_9678 = (inst_9675) && (inst_9677);var state_9693__$1 = state_9693;var statearr_9721_9756 = state_9693__$1;(statearr_9721_9756[2] = inst_9678);
(statearr_9721_9756[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 19))
{var inst_9680 = (state_9693[2]);var state_9693__$1 = state_9693;if(cljs.core.truth_(inst_9680))
{var statearr_9722_9757 = state_9693__$1;(statearr_9722_9757[1] = 20);
} else
{var statearr_9723_9758 = state_9693__$1;(statearr_9723_9758[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 20))
{var inst_9657 = (state_9693[16]);var state_9693__$1 = state_9693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9693__$1,23,out,inst_9657);
} else
{if((state_val_9694 === 21))
{var state_9693__$1 = state_9693;var statearr_9724_9759 = state_9693__$1;(statearr_9724_9759[2] = null);
(statearr_9724_9759[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 22))
{var inst_9650 = (state_9693[12]);var inst_9686 = (state_9693[2]);var inst_9642 = inst_9650;var state_9693__$1 = (function (){var statearr_9725 = state_9693;(statearr_9725[19] = inst_9686);
(statearr_9725[8] = inst_9642);
return statearr_9725;
})();var statearr_9726_9760 = state_9693__$1;(statearr_9726_9760[2] = null);
(statearr_9726_9760[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9694 === 23))
{var inst_9683 = (state_9693[2]);var state_9693__$1 = state_9693;var statearr_9727_9761 = state_9693__$1;(statearr_9727_9761[2] = inst_9683);
(statearr_9727_9761[1] = 22);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_9731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9731[0] = state_machine__5910__auto__);
(statearr_9731[1] = 1);
return statearr_9731;
});
var state_machine__5910__auto____1 = (function (state_9693){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_9693);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e9732){if((e9732 instanceof Object))
{var ex__5913__auto__ = e9732;var statearr_9733_9762 = state_9693;(statearr_9733_9762[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9693);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9763 = state_9693;
state_9693 = G__9763;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_9693){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_9693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_9734 = f__5925__auto__.call(null);(statearr_9734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___9735);
return statearr_9734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj9765 = {};return obj9765;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3295__auto__ = p;if(and__3295__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3295__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3934__auto__ = (((p == null))?null:p);return (function (){var or__3307__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3295__auto__ = p;if(and__3295__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3295__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3934__auto__ = (((p == null))?null:p);return (function (){var or__3307__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3295__auto__ = p;if(and__3295__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3295__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3934__auto__ = (((p == null))?null:p);return (function (){var or__3307__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3295__auto__ = p;if(and__3295__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3295__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3934__auto__ = (((p == null))?null:p);return (function (){var or__3307__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3934__auto__)]);if(or__3307__auto__)
{return or__3307__auto__;
} else
{var or__3307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3307__auto____$1)
{return or__3307__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3307__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3307__auto__))
{return or__3307__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3307__auto__,mults){
return (function (p1__9766_SHARP_){if(cljs.core.truth_(p1__9766_SHARP_.call(null,topic)))
{return p1__9766_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__9766_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3307__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t9891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9891 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta9892){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta9892 = meta9892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9891.cljs$lang$type = true;
cljs.core.async.t9891.cljs$lang$ctorStr = "cljs.core.async/t9891";
cljs.core.async.t9891.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3874__auto__,writer__3875__auto__,opt__3876__auto__){return cljs.core._write.call(null,writer__3875__auto__,"cljs.core.async/t9891");
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t9891.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9893){var self__ = this;
var _9893__$1 = this;return self__.meta9892;
});})(mults,ensure_mult))
;
cljs.core.async.t9891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9893,meta9892__$1){var self__ = this;
var _9893__$1 = this;return (new cljs.core.async.t9891(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta9892__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t9891 = ((function (mults,ensure_mult){
return (function __GT_t9891(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta9892){return (new cljs.core.async.t9891(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta9892));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t9891(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5924__auto___10015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_9967){var state_val_9968 = (state_9967[1]);if((state_val_9968 === 1))
{var state_9967__$1 = state_9967;var statearr_9969_10016 = state_9967__$1;(statearr_9969_10016[2] = null);
(statearr_9969_10016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 2))
{var state_9967__$1 = state_9967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9967__$1,4,ch);
} else
{if((state_val_9968 === 3))
{var inst_9965 = (state_9967[2]);var state_9967__$1 = state_9967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9967__$1,inst_9965);
} else
{if((state_val_9968 === 4))
{var inst_9896 = (state_9967[7]);var inst_9896__$1 = (state_9967[2]);var inst_9897 = (inst_9896__$1 == null);var state_9967__$1 = (function (){var statearr_9970 = state_9967;(statearr_9970[7] = inst_9896__$1);
return statearr_9970;
})();if(cljs.core.truth_(inst_9897))
{var statearr_9971_10017 = state_9967__$1;(statearr_9971_10017[1] = 5);
} else
{var statearr_9972_10018 = state_9967__$1;(statearr_9972_10018[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 5))
{var inst_9903 = cljs.core.deref.call(null,mults);var inst_9904 = cljs.core.vals.call(null,inst_9903);var inst_9905 = cljs.core.seq.call(null,inst_9904);var inst_9906 = inst_9905;var inst_9907 = null;var inst_9908 = 0;var inst_9909 = 0;var state_9967__$1 = (function (){var statearr_9973 = state_9967;(statearr_9973[8] = inst_9906);
(statearr_9973[9] = inst_9908);
(statearr_9973[10] = inst_9907);
(statearr_9973[11] = inst_9909);
return statearr_9973;
})();var statearr_9974_10019 = state_9967__$1;(statearr_9974_10019[2] = null);
(statearr_9974_10019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 6))
{var inst_9946 = (state_9967[12]);var inst_9944 = (state_9967[13]);var inst_9896 = (state_9967[7]);var inst_9944__$1 = topic_fn.call(null,inst_9896);var inst_9945 = cljs.core.deref.call(null,mults);var inst_9946__$1 = cljs.core.get.call(null,inst_9945,inst_9944__$1);var state_9967__$1 = (function (){var statearr_9975 = state_9967;(statearr_9975[12] = inst_9946__$1);
(statearr_9975[13] = inst_9944__$1);
return statearr_9975;
})();if(cljs.core.truth_(inst_9946__$1))
{var statearr_9976_10020 = state_9967__$1;(statearr_9976_10020[1] = 19);
} else
{var statearr_9977_10021 = state_9967__$1;(statearr_9977_10021[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 7))
{var inst_9963 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_9978_10022 = state_9967__$1;(statearr_9978_10022[2] = inst_9963);
(statearr_9978_10022[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 8))
{var inst_9908 = (state_9967[9]);var inst_9909 = (state_9967[11]);var inst_9911 = (inst_9909 < inst_9908);var inst_9912 = inst_9911;var state_9967__$1 = state_9967;if(cljs.core.truth_(inst_9912))
{var statearr_9982_10023 = state_9967__$1;(statearr_9982_10023[1] = 10);
} else
{var statearr_9983_10024 = state_9967__$1;(statearr_9983_10024[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 9))
{var inst_9942 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_9984_10025 = state_9967__$1;(statearr_9984_10025[2] = inst_9942);
(statearr_9984_10025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 10))
{var inst_9906 = (state_9967[8]);var inst_9908 = (state_9967[9]);var inst_9907 = (state_9967[10]);var inst_9909 = (state_9967[11]);var inst_9914 = cljs.core._nth.call(null,inst_9907,inst_9909);var inst_9915 = cljs.core.async.muxch_STAR_.call(null,inst_9914);var inst_9916 = cljs.core.async.close_BANG_.call(null,inst_9915);var inst_9917 = (inst_9909 + 1);var tmp9979 = inst_9906;var tmp9980 = inst_9908;var tmp9981 = inst_9907;var inst_9906__$1 = tmp9979;var inst_9907__$1 = tmp9981;var inst_9908__$1 = tmp9980;var inst_9909__$1 = inst_9917;var state_9967__$1 = (function (){var statearr_9985 = state_9967;(statearr_9985[8] = inst_9906__$1);
(statearr_9985[9] = inst_9908__$1);
(statearr_9985[10] = inst_9907__$1);
(statearr_9985[11] = inst_9909__$1);
(statearr_9985[14] = inst_9916);
return statearr_9985;
})();var statearr_9986_10026 = state_9967__$1;(statearr_9986_10026[2] = null);
(statearr_9986_10026[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 11))
{var inst_9906 = (state_9967[8]);var inst_9920 = (state_9967[15]);var inst_9920__$1 = cljs.core.seq.call(null,inst_9906);var state_9967__$1 = (function (){var statearr_9987 = state_9967;(statearr_9987[15] = inst_9920__$1);
return statearr_9987;
})();if(inst_9920__$1)
{var statearr_9988_10027 = state_9967__$1;(statearr_9988_10027[1] = 13);
} else
{var statearr_9989_10028 = state_9967__$1;(statearr_9989_10028[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 12))
{var inst_9940 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_9990_10029 = state_9967__$1;(statearr_9990_10029[2] = inst_9940);
(statearr_9990_10029[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 13))
{var inst_9920 = (state_9967[15]);var inst_9922 = cljs.core.chunked_seq_QMARK_.call(null,inst_9920);var state_9967__$1 = state_9967;if(inst_9922)
{var statearr_9991_10030 = state_9967__$1;(statearr_9991_10030[1] = 16);
} else
{var statearr_9992_10031 = state_9967__$1;(statearr_9992_10031[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 14))
{var state_9967__$1 = state_9967;var statearr_9993_10032 = state_9967__$1;(statearr_9993_10032[2] = null);
(statearr_9993_10032[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 15))
{var inst_9938 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_9994_10033 = state_9967__$1;(statearr_9994_10033[2] = inst_9938);
(statearr_9994_10033[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 16))
{var inst_9920 = (state_9967[15]);var inst_9924 = cljs.core.chunk_first.call(null,inst_9920);var inst_9925 = cljs.core.chunk_rest.call(null,inst_9920);var inst_9926 = cljs.core.count.call(null,inst_9924);var inst_9906 = inst_9925;var inst_9907 = inst_9924;var inst_9908 = inst_9926;var inst_9909 = 0;var state_9967__$1 = (function (){var statearr_9995 = state_9967;(statearr_9995[8] = inst_9906);
(statearr_9995[9] = inst_9908);
(statearr_9995[10] = inst_9907);
(statearr_9995[11] = inst_9909);
return statearr_9995;
})();var statearr_9996_10034 = state_9967__$1;(statearr_9996_10034[2] = null);
(statearr_9996_10034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 17))
{var inst_9920 = (state_9967[15]);var inst_9929 = cljs.core.first.call(null,inst_9920);var inst_9930 = cljs.core.async.muxch_STAR_.call(null,inst_9929);var inst_9931 = cljs.core.async.close_BANG_.call(null,inst_9930);var inst_9932 = cljs.core.next.call(null,inst_9920);var inst_9906 = inst_9932;var inst_9907 = null;var inst_9908 = 0;var inst_9909 = 0;var state_9967__$1 = (function (){var statearr_9997 = state_9967;(statearr_9997[8] = inst_9906);
(statearr_9997[9] = inst_9908);
(statearr_9997[10] = inst_9907);
(statearr_9997[16] = inst_9931);
(statearr_9997[11] = inst_9909);
return statearr_9997;
})();var statearr_9998_10035 = state_9967__$1;(statearr_9998_10035[2] = null);
(statearr_9998_10035[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 18))
{var inst_9935 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_9999_10036 = state_9967__$1;(statearr_9999_10036[2] = inst_9935);
(statearr_9999_10036[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 19))
{var state_9967__$1 = state_9967;var statearr_10000_10037 = state_9967__$1;(statearr_10000_10037[2] = null);
(statearr_10000_10037[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 20))
{var state_9967__$1 = state_9967;var statearr_10001_10038 = state_9967__$1;(statearr_10001_10038[2] = null);
(statearr_10001_10038[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 21))
{var inst_9960 = (state_9967[2]);var state_9967__$1 = (function (){var statearr_10002 = state_9967;(statearr_10002[17] = inst_9960);
return statearr_10002;
})();var statearr_10003_10039 = state_9967__$1;(statearr_10003_10039[2] = null);
(statearr_10003_10039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 22))
{var inst_9957 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_10004_10040 = state_9967__$1;(statearr_10004_10040[2] = inst_9957);
(statearr_10004_10040[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 23))
{var inst_9944 = (state_9967[13]);var inst_9948 = (state_9967[2]);var inst_9949 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9944);var state_9967__$1 = (function (){var statearr_10005 = state_9967;(statearr_10005[18] = inst_9948);
return statearr_10005;
})();var statearr_10006_10041 = state_9967__$1;(statearr_10006_10041[2] = inst_9949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9967__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9968 === 24))
{var inst_9946 = (state_9967[12]);var inst_9896 = (state_9967[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9967,23,Object,null,22);var inst_9953 = cljs.core.async.muxch_STAR_.call(null,inst_9946);var state_9967__$1 = state_9967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9967__$1,25,inst_9953,inst_9896);
} else
{if((state_val_9968 === 25))
{var inst_9955 = (state_9967[2]);var state_9967__$1 = state_9967;var statearr_10007_10042 = state_9967__$1;(statearr_10007_10042[2] = inst_9955);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9967__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10011[0] = state_machine__5910__auto__);
(statearr_10011[1] = 1);
return statearr_10011;
});
var state_machine__5910__auto____1 = (function (state_9967){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_9967);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10012){if((e10012 instanceof Object))
{var ex__5913__auto__ = e10012;var statearr_10013_10043 = state_9967;(statearr_10013_10043[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10044 = state_9967;
state_9967 = G__10044;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_9967){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_9967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10014 = f__5925__auto__.call(null);(statearr_10014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10015);
return statearr_10014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5924__auto___10181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_10151){var state_val_10152 = (state_10151[1]);if((state_val_10152 === 1))
{var state_10151__$1 = state_10151;var statearr_10153_10182 = state_10151__$1;(statearr_10153_10182[2] = null);
(statearr_10153_10182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 2))
{var inst_10114 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10115 = 0;var state_10151__$1 = (function (){var statearr_10154 = state_10151;(statearr_10154[7] = inst_10114);
(statearr_10154[8] = inst_10115);
return statearr_10154;
})();var statearr_10155_10183 = state_10151__$1;(statearr_10155_10183[2] = null);
(statearr_10155_10183[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 3))
{var inst_10149 = (state_10151[2]);var state_10151__$1 = state_10151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10151__$1,inst_10149);
} else
{if((state_val_10152 === 4))
{var inst_10115 = (state_10151[8]);var inst_10117 = (inst_10115 < cnt);var state_10151__$1 = state_10151;if(cljs.core.truth_(inst_10117))
{var statearr_10156_10184 = state_10151__$1;(statearr_10156_10184[1] = 6);
} else
{var statearr_10157_10185 = state_10151__$1;(statearr_10157_10185[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 5))
{var inst_10135 = (state_10151[2]);var state_10151__$1 = (function (){var statearr_10158 = state_10151;(statearr_10158[9] = inst_10135);
return statearr_10158;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10151__$1,12,dchan);
} else
{if((state_val_10152 === 6))
{var state_10151__$1 = state_10151;var statearr_10159_10186 = state_10151__$1;(statearr_10159_10186[2] = null);
(statearr_10159_10186[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 7))
{var state_10151__$1 = state_10151;var statearr_10160_10187 = state_10151__$1;(statearr_10160_10187[2] = null);
(statearr_10160_10187[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 8))
{var inst_10133 = (state_10151[2]);var state_10151__$1 = state_10151;var statearr_10161_10188 = state_10151__$1;(statearr_10161_10188[2] = inst_10133);
(statearr_10161_10188[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 9))
{var inst_10115 = (state_10151[8]);var inst_10128 = (state_10151[2]);var inst_10129 = (inst_10115 + 1);var inst_10115__$1 = inst_10129;var state_10151__$1 = (function (){var statearr_10162 = state_10151;(statearr_10162[10] = inst_10128);
(statearr_10162[8] = inst_10115__$1);
return statearr_10162;
})();var statearr_10163_10189 = state_10151__$1;(statearr_10163_10189[2] = null);
(statearr_10163_10189[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 10))
{var inst_10119 = (state_10151[2]);var inst_10120 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10151__$1 = (function (){var statearr_10164 = state_10151;(statearr_10164[11] = inst_10119);
return statearr_10164;
})();var statearr_10165_10190 = state_10151__$1;(statearr_10165_10190[2] = inst_10120);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10151__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 11))
{var inst_10115 = (state_10151[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10151,10,Object,null,9);var inst_10124 = chs__$1.call(null,inst_10115);var inst_10125 = done.call(null,inst_10115);var inst_10126 = cljs.core.async.take_BANG_.call(null,inst_10124,inst_10125);var state_10151__$1 = state_10151;var statearr_10166_10191 = state_10151__$1;(statearr_10166_10191[2] = inst_10126);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10151__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 12))
{var inst_10137 = (state_10151[12]);var inst_10137__$1 = (state_10151[2]);var inst_10138 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10137__$1);var state_10151__$1 = (function (){var statearr_10167 = state_10151;(statearr_10167[12] = inst_10137__$1);
return statearr_10167;
})();if(cljs.core.truth_(inst_10138))
{var statearr_10168_10192 = state_10151__$1;(statearr_10168_10192[1] = 13);
} else
{var statearr_10169_10193 = state_10151__$1;(statearr_10169_10193[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 13))
{var inst_10140 = cljs.core.async.close_BANG_.call(null,out);var state_10151__$1 = state_10151;var statearr_10170_10194 = state_10151__$1;(statearr_10170_10194[2] = inst_10140);
(statearr_10170_10194[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 14))
{var inst_10137 = (state_10151[12]);var inst_10142 = cljs.core.apply.call(null,f,inst_10137);var state_10151__$1 = state_10151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10151__$1,16,out,inst_10142);
} else
{if((state_val_10152 === 15))
{var inst_10147 = (state_10151[2]);var state_10151__$1 = state_10151;var statearr_10171_10195 = state_10151__$1;(statearr_10171_10195[2] = inst_10147);
(statearr_10171_10195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10152 === 16))
{var inst_10144 = (state_10151[2]);var state_10151__$1 = (function (){var statearr_10172 = state_10151;(statearr_10172[13] = inst_10144);
return statearr_10172;
})();var statearr_10173_10196 = state_10151__$1;(statearr_10173_10196[2] = null);
(statearr_10173_10196[1] = 2);
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
}
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10177[0] = state_machine__5910__auto__);
(statearr_10177[1] = 1);
return statearr_10177;
});
var state_machine__5910__auto____1 = (function (state_10151){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_10151);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10178){if((e10178 instanceof Object))
{var ex__5913__auto__ = e10178;var statearr_10179_10197 = state_10151;(statearr_10179_10197[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10198 = state_10151;
state_10151 = G__10198;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_10151){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_10151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10180 = f__5925__auto__.call(null);(statearr_10180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10181);
return statearr_10180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5924__auto___10306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_10282){var state_val_10283 = (state_10282[1]);if((state_val_10283 === 1))
{var inst_10253 = cljs.core.vec.call(null,chs);var inst_10254 = inst_10253;var state_10282__$1 = (function (){var statearr_10284 = state_10282;(statearr_10284[7] = inst_10254);
return statearr_10284;
})();var statearr_10285_10307 = state_10282__$1;(statearr_10285_10307[2] = null);
(statearr_10285_10307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 2))
{var inst_10254 = (state_10282[7]);var inst_10256 = cljs.core.count.call(null,inst_10254);var inst_10257 = (inst_10256 > 0);var state_10282__$1 = state_10282;if(cljs.core.truth_(inst_10257))
{var statearr_10286_10308 = state_10282__$1;(statearr_10286_10308[1] = 4);
} else
{var statearr_10287_10309 = state_10282__$1;(statearr_10287_10309[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 3))
{var inst_10280 = (state_10282[2]);var state_10282__$1 = state_10282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10282__$1,inst_10280);
} else
{if((state_val_10283 === 4))
{var inst_10254 = (state_10282[7]);var state_10282__$1 = state_10282;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10282__$1,7,inst_10254);
} else
{if((state_val_10283 === 5))
{var inst_10276 = cljs.core.async.close_BANG_.call(null,out);var state_10282__$1 = state_10282;var statearr_10288_10310 = state_10282__$1;(statearr_10288_10310[2] = inst_10276);
(statearr_10288_10310[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 6))
{var inst_10278 = (state_10282[2]);var state_10282__$1 = state_10282;var statearr_10289_10311 = state_10282__$1;(statearr_10289_10311[2] = inst_10278);
(statearr_10289_10311[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 7))
{var inst_10262 = (state_10282[8]);var inst_10261 = (state_10282[9]);var inst_10261__$1 = (state_10282[2]);var inst_10262__$1 = cljs.core.nth.call(null,inst_10261__$1,0,null);var inst_10263 = cljs.core.nth.call(null,inst_10261__$1,1,null);var inst_10264 = (inst_10262__$1 == null);var state_10282__$1 = (function (){var statearr_10290 = state_10282;(statearr_10290[8] = inst_10262__$1);
(statearr_10290[10] = inst_10263);
(statearr_10290[9] = inst_10261__$1);
return statearr_10290;
})();if(cljs.core.truth_(inst_10264))
{var statearr_10291_10312 = state_10282__$1;(statearr_10291_10312[1] = 8);
} else
{var statearr_10292_10313 = state_10282__$1;(statearr_10292_10313[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 8))
{var inst_10254 = (state_10282[7]);var inst_10262 = (state_10282[8]);var inst_10263 = (state_10282[10]);var inst_10261 = (state_10282[9]);var inst_10266 = (function (){var c = inst_10263;var v = inst_10262;var vec__10259 = inst_10261;var cs = inst_10254;return ((function (c,v,vec__10259,cs,inst_10254,inst_10262,inst_10263,inst_10261,state_val_10283){
return (function (p1__10199_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10199_SHARP_);
});
;})(c,v,vec__10259,cs,inst_10254,inst_10262,inst_10263,inst_10261,state_val_10283))
})();var inst_10267 = cljs.core.filterv.call(null,inst_10266,inst_10254);var inst_10254__$1 = inst_10267;var state_10282__$1 = (function (){var statearr_10293 = state_10282;(statearr_10293[7] = inst_10254__$1);
return statearr_10293;
})();var statearr_10294_10314 = state_10282__$1;(statearr_10294_10314[2] = null);
(statearr_10294_10314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 9))
{var inst_10262 = (state_10282[8]);var state_10282__$1 = state_10282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10282__$1,11,out,inst_10262);
} else
{if((state_val_10283 === 10))
{var inst_10274 = (state_10282[2]);var state_10282__$1 = state_10282;var statearr_10296_10315 = state_10282__$1;(statearr_10296_10315[2] = inst_10274);
(statearr_10296_10315[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10283 === 11))
{var inst_10254 = (state_10282[7]);var inst_10271 = (state_10282[2]);var tmp10295 = inst_10254;var inst_10254__$1 = tmp10295;var state_10282__$1 = (function (){var statearr_10297 = state_10282;(statearr_10297[7] = inst_10254__$1);
(statearr_10297[11] = inst_10271);
return statearr_10297;
})();var statearr_10298_10316 = state_10282__$1;(statearr_10298_10316[2] = null);
(statearr_10298_10316[1] = 2);
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
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10302 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10302[0] = state_machine__5910__auto__);
(statearr_10302[1] = 1);
return statearr_10302;
});
var state_machine__5910__auto____1 = (function (state_10282){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_10282);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10303){if((e10303 instanceof Object))
{var ex__5913__auto__ = e10303;var statearr_10304_10317 = state_10282;(statearr_10304_10317[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10318 = state_10282;
state_10282 = G__10318;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_10282){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_10282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10305 = f__5925__auto__.call(null);(statearr_10305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10306);
return statearr_10305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5924__auto___10411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_10388){var state_val_10389 = (state_10388[1]);if((state_val_10389 === 1))
{var inst_10365 = 0;var state_10388__$1 = (function (){var statearr_10390 = state_10388;(statearr_10390[7] = inst_10365);
return statearr_10390;
})();var statearr_10391_10412 = state_10388__$1;(statearr_10391_10412[2] = null);
(statearr_10391_10412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 2))
{var inst_10365 = (state_10388[7]);var inst_10367 = (inst_10365 < n);var state_10388__$1 = state_10388;if(cljs.core.truth_(inst_10367))
{var statearr_10392_10413 = state_10388__$1;(statearr_10392_10413[1] = 4);
} else
{var statearr_10393_10414 = state_10388__$1;(statearr_10393_10414[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 3))
{var inst_10385 = (state_10388[2]);var inst_10386 = cljs.core.async.close_BANG_.call(null,out);var state_10388__$1 = (function (){var statearr_10394 = state_10388;(statearr_10394[8] = inst_10385);
return statearr_10394;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10388__$1,inst_10386);
} else
{if((state_val_10389 === 4))
{var state_10388__$1 = state_10388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10388__$1,7,ch);
} else
{if((state_val_10389 === 5))
{var state_10388__$1 = state_10388;var statearr_10395_10415 = state_10388__$1;(statearr_10395_10415[2] = null);
(statearr_10395_10415[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 6))
{var inst_10383 = (state_10388[2]);var state_10388__$1 = state_10388;var statearr_10396_10416 = state_10388__$1;(statearr_10396_10416[2] = inst_10383);
(statearr_10396_10416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 7))
{var inst_10370 = (state_10388[9]);var inst_10370__$1 = (state_10388[2]);var inst_10371 = (inst_10370__$1 == null);var inst_10372 = cljs.core.not.call(null,inst_10371);var state_10388__$1 = (function (){var statearr_10397 = state_10388;(statearr_10397[9] = inst_10370__$1);
return statearr_10397;
})();if(inst_10372)
{var statearr_10398_10417 = state_10388__$1;(statearr_10398_10417[1] = 8);
} else
{var statearr_10399_10418 = state_10388__$1;(statearr_10399_10418[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 8))
{var inst_10370 = (state_10388[9]);var state_10388__$1 = state_10388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10388__$1,11,out,inst_10370);
} else
{if((state_val_10389 === 9))
{var state_10388__$1 = state_10388;var statearr_10400_10419 = state_10388__$1;(statearr_10400_10419[2] = null);
(statearr_10400_10419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 10))
{var inst_10380 = (state_10388[2]);var state_10388__$1 = state_10388;var statearr_10401_10420 = state_10388__$1;(statearr_10401_10420[2] = inst_10380);
(statearr_10401_10420[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10389 === 11))
{var inst_10365 = (state_10388[7]);var inst_10375 = (state_10388[2]);var inst_10376 = (inst_10365 + 1);var inst_10365__$1 = inst_10376;var state_10388__$1 = (function (){var statearr_10402 = state_10388;(statearr_10402[10] = inst_10375);
(statearr_10402[7] = inst_10365__$1);
return statearr_10402;
})();var statearr_10403_10421 = state_10388__$1;(statearr_10403_10421[2] = null);
(statearr_10403_10421[1] = 2);
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
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10407 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10407[0] = state_machine__5910__auto__);
(statearr_10407[1] = 1);
return statearr_10407;
});
var state_machine__5910__auto____1 = (function (state_10388){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_10388);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10408){if((e10408 instanceof Object))
{var ex__5913__auto__ = e10408;var statearr_10409_10422 = state_10388;(statearr_10409_10422[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10423 = state_10388;
state_10388 = G__10423;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_10388){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_10388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10410 = f__5925__auto__.call(null);(statearr_10410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10411);
return statearr_10410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5924__auto___10520 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_10495){var state_val_10496 = (state_10495[1]);if((state_val_10496 === 1))
{var inst_10472 = null;var state_10495__$1 = (function (){var statearr_10497 = state_10495;(statearr_10497[7] = inst_10472);
return statearr_10497;
})();var statearr_10498_10521 = state_10495__$1;(statearr_10498_10521[2] = null);
(statearr_10498_10521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 2))
{var state_10495__$1 = state_10495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10495__$1,4,ch);
} else
{if((state_val_10496 === 3))
{var inst_10492 = (state_10495[2]);var inst_10493 = cljs.core.async.close_BANG_.call(null,out);var state_10495__$1 = (function (){var statearr_10499 = state_10495;(statearr_10499[8] = inst_10492);
return statearr_10499;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10495__$1,inst_10493);
} else
{if((state_val_10496 === 4))
{var inst_10475 = (state_10495[9]);var inst_10475__$1 = (state_10495[2]);var inst_10476 = (inst_10475__$1 == null);var inst_10477 = cljs.core.not.call(null,inst_10476);var state_10495__$1 = (function (){var statearr_10500 = state_10495;(statearr_10500[9] = inst_10475__$1);
return statearr_10500;
})();if(inst_10477)
{var statearr_10501_10522 = state_10495__$1;(statearr_10501_10522[1] = 5);
} else
{var statearr_10502_10523 = state_10495__$1;(statearr_10502_10523[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 5))
{var inst_10475 = (state_10495[9]);var inst_10472 = (state_10495[7]);var inst_10479 = cljs.core._EQ_.call(null,inst_10475,inst_10472);var state_10495__$1 = state_10495;if(inst_10479)
{var statearr_10503_10524 = state_10495__$1;(statearr_10503_10524[1] = 8);
} else
{var statearr_10504_10525 = state_10495__$1;(statearr_10504_10525[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 6))
{var state_10495__$1 = state_10495;var statearr_10506_10526 = state_10495__$1;(statearr_10506_10526[2] = null);
(statearr_10506_10526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 7))
{var inst_10490 = (state_10495[2]);var state_10495__$1 = state_10495;var statearr_10507_10527 = state_10495__$1;(statearr_10507_10527[2] = inst_10490);
(statearr_10507_10527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 8))
{var inst_10472 = (state_10495[7]);var tmp10505 = inst_10472;var inst_10472__$1 = tmp10505;var state_10495__$1 = (function (){var statearr_10508 = state_10495;(statearr_10508[7] = inst_10472__$1);
return statearr_10508;
})();var statearr_10509_10528 = state_10495__$1;(statearr_10509_10528[2] = null);
(statearr_10509_10528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 9))
{var inst_10475 = (state_10495[9]);var state_10495__$1 = state_10495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10495__$1,11,out,inst_10475);
} else
{if((state_val_10496 === 10))
{var inst_10487 = (state_10495[2]);var state_10495__$1 = state_10495;var statearr_10510_10529 = state_10495__$1;(statearr_10510_10529[2] = inst_10487);
(statearr_10510_10529[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10496 === 11))
{var inst_10475 = (state_10495[9]);var inst_10484 = (state_10495[2]);var inst_10472 = inst_10475;var state_10495__$1 = (function (){var statearr_10511 = state_10495;(statearr_10511[10] = inst_10484);
(statearr_10511[7] = inst_10472);
return statearr_10511;
})();var statearr_10512_10530 = state_10495__$1;(statearr_10512_10530[2] = null);
(statearr_10512_10530[1] = 2);
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
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10516 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10516[0] = state_machine__5910__auto__);
(statearr_10516[1] = 1);
return statearr_10516;
});
var state_machine__5910__auto____1 = (function (state_10495){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_10495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10517){if((e10517 instanceof Object))
{var ex__5913__auto__ = e10517;var statearr_10518_10531 = state_10495;(statearr_10518_10531[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10532 = state_10495;
state_10495 = G__10532;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_10495){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_10495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10519 = f__5925__auto__.call(null);(statearr_10519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10520);
return statearr_10519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5924__auto___10667 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_10637){var state_val_10638 = (state_10637[1]);if((state_val_10638 === 1))
{var inst_10600 = (new Array(n));var inst_10601 = inst_10600;var inst_10602 = 0;var state_10637__$1 = (function (){var statearr_10639 = state_10637;(statearr_10639[7] = inst_10601);
(statearr_10639[8] = inst_10602);
return statearr_10639;
})();var statearr_10640_10668 = state_10637__$1;(statearr_10640_10668[2] = null);
(statearr_10640_10668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 2))
{var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10637__$1,4,ch);
} else
{if((state_val_10638 === 3))
{var inst_10635 = (state_10637[2]);var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10637__$1,inst_10635);
} else
{if((state_val_10638 === 4))
{var inst_10605 = (state_10637[9]);var inst_10605__$1 = (state_10637[2]);var inst_10606 = (inst_10605__$1 == null);var inst_10607 = cljs.core.not.call(null,inst_10606);var state_10637__$1 = (function (){var statearr_10641 = state_10637;(statearr_10641[9] = inst_10605__$1);
return statearr_10641;
})();if(inst_10607)
{var statearr_10642_10669 = state_10637__$1;(statearr_10642_10669[1] = 5);
} else
{var statearr_10643_10670 = state_10637__$1;(statearr_10643_10670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 5))
{var inst_10601 = (state_10637[7]);var inst_10602 = (state_10637[8]);var inst_10605 = (state_10637[9]);var inst_10610 = (state_10637[10]);var inst_10609 = (inst_10601[inst_10602] = inst_10605);var inst_10610__$1 = (inst_10602 + 1);var inst_10611 = (inst_10610__$1 < n);var state_10637__$1 = (function (){var statearr_10644 = state_10637;(statearr_10644[11] = inst_10609);
(statearr_10644[10] = inst_10610__$1);
return statearr_10644;
})();if(cljs.core.truth_(inst_10611))
{var statearr_10645_10671 = state_10637__$1;(statearr_10645_10671[1] = 8);
} else
{var statearr_10646_10672 = state_10637__$1;(statearr_10646_10672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 6))
{var inst_10602 = (state_10637[8]);var inst_10623 = (inst_10602 > 0);var state_10637__$1 = state_10637;if(cljs.core.truth_(inst_10623))
{var statearr_10648_10673 = state_10637__$1;(statearr_10648_10673[1] = 12);
} else
{var statearr_10649_10674 = state_10637__$1;(statearr_10649_10674[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 7))
{var inst_10633 = (state_10637[2]);var state_10637__$1 = state_10637;var statearr_10650_10675 = state_10637__$1;(statearr_10650_10675[2] = inst_10633);
(statearr_10650_10675[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 8))
{var inst_10601 = (state_10637[7]);var inst_10610 = (state_10637[10]);var tmp10647 = inst_10601;var inst_10601__$1 = tmp10647;var inst_10602 = inst_10610;var state_10637__$1 = (function (){var statearr_10651 = state_10637;(statearr_10651[7] = inst_10601__$1);
(statearr_10651[8] = inst_10602);
return statearr_10651;
})();var statearr_10652_10676 = state_10637__$1;(statearr_10652_10676[2] = null);
(statearr_10652_10676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 9))
{var inst_10601 = (state_10637[7]);var inst_10615 = cljs.core.vec.call(null,inst_10601);var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10637__$1,11,out,inst_10615);
} else
{if((state_val_10638 === 10))
{var inst_10621 = (state_10637[2]);var state_10637__$1 = state_10637;var statearr_10653_10677 = state_10637__$1;(statearr_10653_10677[2] = inst_10621);
(statearr_10653_10677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 11))
{var inst_10617 = (state_10637[2]);var inst_10618 = (new Array(n));var inst_10601 = inst_10618;var inst_10602 = 0;var state_10637__$1 = (function (){var statearr_10654 = state_10637;(statearr_10654[12] = inst_10617);
(statearr_10654[7] = inst_10601);
(statearr_10654[8] = inst_10602);
return statearr_10654;
})();var statearr_10655_10678 = state_10637__$1;(statearr_10655_10678[2] = null);
(statearr_10655_10678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 12))
{var inst_10601 = (state_10637[7]);var inst_10625 = cljs.core.vec.call(null,inst_10601);var state_10637__$1 = state_10637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10637__$1,15,out,inst_10625);
} else
{if((state_val_10638 === 13))
{var state_10637__$1 = state_10637;var statearr_10656_10679 = state_10637__$1;(statearr_10656_10679[2] = null);
(statearr_10656_10679[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 14))
{var inst_10630 = (state_10637[2]);var inst_10631 = cljs.core.async.close_BANG_.call(null,out);var state_10637__$1 = (function (){var statearr_10657 = state_10637;(statearr_10657[13] = inst_10630);
return statearr_10657;
})();var statearr_10658_10680 = state_10637__$1;(statearr_10658_10680[2] = inst_10631);
(statearr_10658_10680[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10638 === 15))
{var inst_10627 = (state_10637[2]);var state_10637__$1 = state_10637;var statearr_10659_10681 = state_10637__$1;(statearr_10659_10681[2] = inst_10627);
(statearr_10659_10681[1] = 14);
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
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10663[0] = state_machine__5910__auto__);
(statearr_10663[1] = 1);
return statearr_10663;
});
var state_machine__5910__auto____1 = (function (state_10637){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_10637);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10664){if((e10664 instanceof Object))
{var ex__5913__auto__ = e10664;var statearr_10665_10682 = state_10637;(statearr_10665_10682[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10683 = state_10637;
state_10637 = G__10683;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_10637){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_10637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10666 = f__5925__auto__.call(null);(statearr_10666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10667);
return statearr_10666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5924__auto___10826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5925__auto__ = (function (){var switch__5909__auto__ = (function (state_10796){var state_val_10797 = (state_10796[1]);if((state_val_10797 === 1))
{var inst_10755 = [];var inst_10756 = inst_10755;var inst_10757 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_10796__$1 = (function (){var statearr_10798 = state_10796;(statearr_10798[7] = inst_10757);
(statearr_10798[8] = inst_10756);
return statearr_10798;
})();var statearr_10799_10827 = state_10796__$1;(statearr_10799_10827[2] = null);
(statearr_10799_10827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 2))
{var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10796__$1,4,ch);
} else
{if((state_val_10797 === 3))
{var inst_10794 = (state_10796[2]);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10796__$1,inst_10794);
} else
{if((state_val_10797 === 4))
{var inst_10760 = (state_10796[9]);var inst_10760__$1 = (state_10796[2]);var inst_10761 = (inst_10760__$1 == null);var inst_10762 = cljs.core.not.call(null,inst_10761);var state_10796__$1 = (function (){var statearr_10800 = state_10796;(statearr_10800[9] = inst_10760__$1);
return statearr_10800;
})();if(inst_10762)
{var statearr_10801_10828 = state_10796__$1;(statearr_10801_10828[1] = 5);
} else
{var statearr_10802_10829 = state_10796__$1;(statearr_10802_10829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 5))
{var inst_10764 = (state_10796[10]);var inst_10760 = (state_10796[9]);var inst_10757 = (state_10796[7]);var inst_10764__$1 = f.call(null,inst_10760);var inst_10765 = cljs.core._EQ_.call(null,inst_10764__$1,inst_10757);var inst_10766 = cljs.core.keyword_identical_QMARK_.call(null,inst_10757,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_10767 = (inst_10765) || (inst_10766);var state_10796__$1 = (function (){var statearr_10803 = state_10796;(statearr_10803[10] = inst_10764__$1);
return statearr_10803;
})();if(cljs.core.truth_(inst_10767))
{var statearr_10804_10830 = state_10796__$1;(statearr_10804_10830[1] = 8);
} else
{var statearr_10805_10831 = state_10796__$1;(statearr_10805_10831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 6))
{var inst_10756 = (state_10796[8]);var inst_10781 = inst_10756.length;var inst_10782 = (inst_10781 > 0);var state_10796__$1 = state_10796;if(cljs.core.truth_(inst_10782))
{var statearr_10807_10832 = state_10796__$1;(statearr_10807_10832[1] = 12);
} else
{var statearr_10808_10833 = state_10796__$1;(statearr_10808_10833[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 7))
{var inst_10792 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10809_10834 = state_10796__$1;(statearr_10809_10834[2] = inst_10792);
(statearr_10809_10834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 8))
{var inst_10764 = (state_10796[10]);var inst_10760 = (state_10796[9]);var inst_10756 = (state_10796[8]);var inst_10769 = inst_10756.push(inst_10760);var tmp10806 = inst_10756;var inst_10756__$1 = tmp10806;var inst_10757 = inst_10764;var state_10796__$1 = (function (){var statearr_10810 = state_10796;(statearr_10810[7] = inst_10757);
(statearr_10810[8] = inst_10756__$1);
(statearr_10810[11] = inst_10769);
return statearr_10810;
})();var statearr_10811_10835 = state_10796__$1;(statearr_10811_10835[2] = null);
(statearr_10811_10835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 9))
{var inst_10756 = (state_10796[8]);var inst_10772 = cljs.core.vec.call(null,inst_10756);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10796__$1,11,out,inst_10772);
} else
{if((state_val_10797 === 10))
{var inst_10779 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10812_10836 = state_10796__$1;(statearr_10812_10836[2] = inst_10779);
(statearr_10812_10836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 11))
{var inst_10764 = (state_10796[10]);var inst_10760 = (state_10796[9]);var inst_10774 = (state_10796[2]);var inst_10775 = [];var inst_10776 = inst_10775.push(inst_10760);var inst_10756 = inst_10775;var inst_10757 = inst_10764;var state_10796__$1 = (function (){var statearr_10813 = state_10796;(statearr_10813[7] = inst_10757);
(statearr_10813[8] = inst_10756);
(statearr_10813[12] = inst_10774);
(statearr_10813[13] = inst_10776);
return statearr_10813;
})();var statearr_10814_10837 = state_10796__$1;(statearr_10814_10837[2] = null);
(statearr_10814_10837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 12))
{var inst_10756 = (state_10796[8]);var inst_10784 = cljs.core.vec.call(null,inst_10756);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10796__$1,15,out,inst_10784);
} else
{if((state_val_10797 === 13))
{var state_10796__$1 = state_10796;var statearr_10815_10838 = state_10796__$1;(statearr_10815_10838[2] = null);
(statearr_10815_10838[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 14))
{var inst_10789 = (state_10796[2]);var inst_10790 = cljs.core.async.close_BANG_.call(null,out);var state_10796__$1 = (function (){var statearr_10816 = state_10796;(statearr_10816[14] = inst_10789);
return statearr_10816;
})();var statearr_10817_10839 = state_10796__$1;(statearr_10817_10839[2] = inst_10790);
(statearr_10817_10839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 15))
{var inst_10786 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10818_10840 = state_10796__$1;(statearr_10818_10840[2] = inst_10786);
(statearr_10818_10840[1] = 14);
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
}
}
}
}
}
}
}
}
});return ((function (switch__5909__auto__){
return (function() {
var state_machine__5910__auto__ = null;
var state_machine__5910__auto____0 = (function (){var statearr_10822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10822[0] = state_machine__5910__auto__);
(statearr_10822[1] = 1);
return statearr_10822;
});
var state_machine__5910__auto____1 = (function (state_10796){while(true){
var ret_value__5911__auto__ = (function (){try{while(true){
var result__5912__auto__ = switch__5909__auto__.call(null,state_10796);if(cljs.core.keyword_identical_QMARK_.call(null,result__5912__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5912__auto__;
}
break;
}
}catch (e10823){if((e10823 instanceof Object))
{var ex__5913__auto__ = e10823;var statearr_10824_10841 = state_10796;(statearr_10824_10841[5] = ex__5913__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5911__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10842 = state_10796;
state_10796 = G__10842;
continue;
}
} else
{return ret_value__5911__auto__;
}
break;
}
});
state_machine__5910__auto__ = function(state_10796){
switch(arguments.length){
case 0:
return state_machine__5910__auto____0.call(this);
case 1:
return state_machine__5910__auto____1.call(this,state_10796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5910__auto____0;
state_machine__5910__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5910__auto____1;
return state_machine__5910__auto__;
})()
;})(switch__5909__auto__))
})();var state__5926__auto__ = (function (){var statearr_10825 = f__5925__auto__.call(null);(statearr_10825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5924__auto___10826);
return statearr_10825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5926__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map