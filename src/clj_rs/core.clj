(ns clj-rs.core)

(defn get-neighbouring-indecies
  [row-size col-size [row col]]
  (for [[row-delta col-delta] [[-1 -1] [-1 0] [-1 1]
                               [ 0 -1]        [ 0 1]
                               [ 1 -1] [ 1 0] [ 1 1]]]
    [(+ row row-delta) (+ col col-delta)]))



(defn next-generation
  "Determine the next generation in the game of life"
  [game-board]
  [[0 0 0 0 0]
   [1 0 1 1 1]
   [1 1 1 1 1]
   [0 1 0 0 0]
   [0 0 0 0 0]])
