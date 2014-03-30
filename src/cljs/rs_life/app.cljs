(ns rs-life.app
  (:require [rs-life.core :refer [next-generation]]))

(.text (js/$ "h1") "It's alive!!")


(def game-state (atom [[0 1 0 0 0]
                       [1 0 0 1 1]
                       [1 1 0 0 1]
                       [0 1 0 0 0]
                       [1 0 0 0 1]]))


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


(render @game-state)
(render (next-generation @game-state))
