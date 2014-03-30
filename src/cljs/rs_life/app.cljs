(ns rs-life.app
  (:require [cljs.core.async :as async :refer [<! >! chan put!]]
            [rs-life.core :refer [next-generation]])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop alt!]]))

(.text (js/$ "h1") "Game of Life")

(defn render [board]
  (let [rows
        (->  js/d3
             (.select ".game-of-life")
             (.selectAll "g")
             (.data (clj->js board)))]
    (-> rows
        (.enter)
        (.append "g")
        (.attr "transform"
               (fn [d i] (str "translate(0, " (* i 15) ")"))))

    (let [circles
          (-> rows
              (.selectAll "circle")
              (.data identity))]
      (-> circles
          (.enter)
          (.append "circle"))

      (-> circles
          (.attr "r" 5)
          (.attr "cx" (fn [d i] (+ 5 (* i 15))))
          (.attr "cy" 5)
          (.attr "class" (fn [d] ({0 "dead" 1 "live"} d)))))))

(def game-state (atom nil))

(add-watch game-state :render
           (fn [_ _ _ new-state]
             (render new-state)))

(reset! game-state [[0 1 0 0 0]
                    [1 0 0 1 1]
                    [1 1 0 0 1]
                    [0 1 0 0 0]
                    [1 0 0 0 1]])

(go (while true
      (<! (async/timeout 1000))
      (swap! game-state next-generation)))
