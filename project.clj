(defproject cljs "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]
  :plugins [[lein-cljsbuild "1.0.2"]]
  :source-paths ["src/clj"]
  :cljsbuild
  {:builds [{:id "cljs"
             :source-paths ["src/cljs"]
             :compiler
             {:output-to "public/cljs/app.js"
              :output-dir "public/cljs"
              :optimizations :none
              :source-map true}}]})
